var map;
var currentZoom = 12;

function mapRelocate (i) {
	var lat = photos[i].latlong[0];
	var lng = photos[i].latlong[1];
	var newLatLng = new google.maps.LatLng(lat,lng);
	map.panTo(newLatLng);
}

function scrollHandler (e) {
	scrollHasStopped = false;
	
	var scrollUp = e.currentTarget.window.scrollY; // top of the visible area in the browser
	var scrollDown = $(window).height() + scrollUp; // bottom of the visible area in the browser

	currentZoom = map.getZoom();

	var mapRelocated = false;
	
	console.log('---------==========-------');
	$("section").each(function(index) {
	
		if (mapRelocated) return;
		var currentPos = $(this).position(); // image position on the rendered page
	
/* 		var ratio = (scrollDown - currentPos.top)/$(this).height(); // the ratio of visibility that triggers the map */
		var currentTop = currentPos.top - scrollUp;
		var currentBottom = currentTop + $(this).height();
		
		var isFullyVisible = ( currentTop >= 0 && currentBottom <= $(window).height() );
		if (isFullyVisible) {
			mapRelocate(index);
			mapRelocated = true;
			
		}
		
		console.log('top, bottom', currentTop, currentBottom, isFullyVisible );
/*
		return;
		
		
		
				
		
		//console.log('ratio', $(window).height() , scrollUp, currentPos.top, $(this).height(), ratio);
		return;
		if (scrollUp <= currentPos.top && scrollDown >= currentBottom) { // this is the option when only one image is fully visible
			console.log('zooming out');
			// zoomOut();
			var timer = window.setTimeout(zoomOut, 2000);
			
			console.log('panTo');
			// clearInterval(timer);
			mapRelocate(index);
			// zoomIn();
			
			console.log('zooming in');
			var timer2 = window.setInterval(zoomIn, 2000);
			// clearInterval(timer2);
		}
		else if (scrollUp <= currentPos.top && scrollDown < currentBottom && ratio > 0.7) { // this is the option when an image is not compeletly visible, some parts get hidden
			console.log('zooming out');
			// zoomOut();
			var timer = window.setInterval(zoomOut, 2000);
			
			console.log('panTo');
			// clearInterval(timer);
			mapRelocate(index);
			// zoomIn();
			
			console.log('zooming in');
			var timer2 = window.setInterval(zoomIn, 2000);
		}
		
*/
	})


}

function placeMarkers() {

	for (var i = 0, len = photos.length; i < len; i++) {
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(photos[i].latlong[0],photos[i].latlong[1]),
			map: map,
			icon: "img/marker-32.ico",
			title: photos[i].title
		});
	};
}

function firstMapLoad (currentPlace) {
	
	$("nav").height($(window).height());

	var MY_MAPTYPE_ID = 'custom_style';
	var featureOpts = [
		{
			"featureType": "water",
			"stylers": [
				{ "hue": "#00ffcc" },
				{ "saturation": -47 },
				{ "lightness": -24}
			]
		},{
			"featureType": "landscape",
			"stylers": [
				{ "hue": "#4cff00" },
				{ "lightness": -33},
				{ "gamma": 1.04 }
			]
		},{
			"featureType": "road",
			"stylers": [
				{ "hue": "#ffa200" },
				{ "weight": 0.4 }
			]
		},{
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [
				{ "hue": "#00ff6f" },
				{ "lightness": -28 }
			]
		},{
			"featureType": "administrative",
			"stylers": [
				{ "hue": "#0077ff" },
				{ "lightness": -20 },
				{ "gamma": 1.33 }
			]
		}
	]
	
	var styledMapOptions = {
		name: 'Custom Style'
	};

	var mapOptions = {
		zoom: currentZoom,
		center: new google.maps.LatLng(currentPlace[0],currentPlace[1]),
		panControl: false,
		zoomControl: false,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false,
		disableDoubleClickZoom: true,
		draggable: false,
		scrollwheel: false,
		mapTypeControlOptions: {
			mapTypeIds: [
				google.maps.MapTypeId.ROADMAP,
				MY_MAPTYPE_ID
			]
		},
		mapTypeId: MY_MAPTYPE_ID
	};

	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	placeMarkers();
}

function renderPhotos() {

	for (var i = 0, len = photos.length; i < len; i++) {
		var photoSec = document.createElement("section");
		$(photoSec).html("<img src='" + photos[i].url + "' alt= '" + photos[i].description + "'>")
		.attr("id", "sec"+i);
		var desc = document.createElement("div");
		$(desc).html(photos[i].title).addClass("photo-description");	
		$(desc).appendTo($(photoSec));			
		$(photoSec).appendTo($("#container"));
	};
}


function initialize() {
	renderPhotos();
	var placeInit = [-33.887054,151.198329];
	firstMapLoad(placeInit);
	$(window).resize(function() { 
		$("nav").height($(window).height()); 
		$("#map-canvas").css({"height":"100%", "width":"100%"});
	});
	$(window).scroll(scrollHandler);

	// var visi = checkVisibility($("#sec1"));
	// console.log(visi);


}
	
$(document).ready(initialize);
