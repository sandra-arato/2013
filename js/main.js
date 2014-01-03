var map;
var currentZoom = 12;

function mapRelocate (i) {
	var lat = photos[i].latlong[0];
	var lng = photos[i].latlong[1];
	var newLatLng = new google.maps.LatLng(lat,lng);
	map.panTo(newLatLng);
}

function scrollHandler (e) {
	
	var scrollUp = e.currentTarget.window.scrollY; // top of the visible area in the browser
	var isScrolledToBottom = $("#container").height() == (scrollUp + $(window).height());
	var imageCount = $("section").length;
	$("section").each(function(index) {

		var currentPos = $(this).position(); // image position on the rendered page
		var currentTop = currentPos.top - scrollUp;
		var currentBottom = currentTop + $(this).height();
		
		var isFullyVisible = ( currentTop >= 0 && currentBottom <= $(window).height() );
		if (isFullyVisible) {
			var toIndex = index;
			if (isScrolledToBottom) {
				toIndex = imageCount - 1;
			}
			mapRelocate(toIndex);
			return false;
		}
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
	var placeInit = [-34.671529,150.861336];
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
