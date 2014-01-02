var map;

var x = 12;	// zoom upper limit
var y = 8;	// zoom lower limit

function zoomOut () {
	while (x>7) {
		map.setZoom(x);
		// console.log(x);
		x--;
		setTimeout(zoomOut, x*1500);
	}
}

function zoomIn() {
	while (y<13) {
		map.setZoom(y);
		// console.log(y);
		y++;
		setTimeout(zoomIn, y*1500);
	}

}





function scrollHandler (e) {
	var scrollUp = e.currentTarget.window.scrollY;
	var scrollDown = $(window).height() + scrollUp;

	$("section").each(function(index) {
		var currentPos = $(this).position();
		var currentBottom = currentPos.top + $(this).height();
		
		if (scrollUp <= currentPos.top && scrollDown >= currentBottom) {
			// map.setZoom(8);
			zoomOut();
			var lat = photos[index].latlong[0];
			var lng = photos[index].latlong[1];
			var newLatLng = new google.maps.LatLng(lat,lng);
			map.panTo(newLatLng);
			zoomIn();
			// map.setZoom(12);
		}

		
	})


}

function placeMarkers() {

	for (var i = 0, len = photos.length; i < len; i++) {
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(photos[i].latlong[0],photos[i].latlong[1]),
			map: map,
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
		zoom: 12,
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
		$(photoSec).html("<img src='" + photos[i].url + "'/>").attr("id", "sec"+i);
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
