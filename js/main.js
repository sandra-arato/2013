// function checkVisibility (element) {
// 	var top = element.offsetTop;
// 	var left = element.offsetLeft;
// 	var width = element.offsetWidth;
// 	var height = element.offsetHeight;

// 	while(element.offsetParent) {
// 		el = element.offsetParent;
// 		top += element.offsetTop;
// 		left += element.offsetLeft;
// 	}

// 	return (
// 		top >= window.pageYOffset &&
// 		left >= window.pageXOffset &&
// 		(top + height) <= (window.pageYOffset + window.innerHeight) &&
// 		(left + width) <= (window.pageXOffset + window.innerWidth)
// 	);


// }

function scrollHandler (e) {
	// console.log("scrolling....")
	// console.log(e);
	var scrollUp = e.currentTarget.window.scrollY;
	var scrollDown = $(window).height() + scrollUp;
	// console.log("scroll top is " + scrollUp + " and bottom is " + scrollDown);

	$("section").each(function(index) {
		var currentPos = $(this).position();
		// console.log("current photo is " + (index + 1) + " and scrollTop value is ", currentPos.top);
		var currentBottom = currentPos.top + $(this).height();
		if (scrollUp < currentPos.top && scrollDown > currentBottom) {
			console.log (index + " is visible");
		}

		
	})


}

function placeMarkers(map) {

	for (var i = 0, len = photos.length; i < len; i++) {
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(photos[i].latlong[0],photos[i].latlong[1]),
			map: map,
			title: photos[i].title
		});
	};
}

function firstMapLoad (map,currentplace) {
	
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
		zoom: 8,
		center: new google.maps.LatLng(currentplace[0],currentplace[1]),
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
	placeMarkers(map);
}

function renderPhotos() {

	for (var i = 0, len = photos.length; i < len; i++) {
		var photoSec = document.createElement("section");
		$(photoSec).html("<img src='" + photos[i].url + "'/>").attr("id", "sec"+i);
		$(photoSec).appendTo($("#container"));
	};
}


function initialize() {
	renderPhotos();
	var map;
	var placeInit = [-33.887054,151.198329];
	firstMapLoad(map, placeInit);
	$(window).resize(function() { 
		$("nav").height($(window).height()); 
		$("#map-canvas").css({"height":"100%", "width":"100%"});
	});

	$(window).scroll(scrollHandler);

	// var visi = checkVisibility($("#sec1"));
	// console.log(visi);


}
	
$(document).ready(initialize);
