var map;
var currentZoom = 12;
var isScreenSmallPortrait;
var ie8;

function windowResponsiveResize () {
	
	isScreenSmallPortrait = window.matchMedia("(orientation: portrait) and (max-width: 769px)").matches;
	
	if (!isScreenSmallPortrait) {
		$("nav").height($(window).height());
		$("section:last-child").css("margin-bottom", 0);
	}
	else {
		$("nav").height($(window).height()*0.263); 
		$("section:last-child").css("margin-bottom", $(window).height()*0.263);
	};

	$("#map-canvas").css({"height":"100%", "width":"100%"});
}

function mapRelocate (i) {
	var lat = (photos[i].latlong[0]);
	var lng = (photos[i].latlong[1]);
	var newLatLng = new google.maps.LatLng(lat,lng);
	map.panTo(newLatLng);
	map.setZoom(photos[i].zoom);
}

function scrollHandler (e) {
	
	var scrollUp = e.currentTarget.window.pageYOffset; // works for Chrome, Firefox, IE9+, 

	if (ie8) {
		var scrollUp = document.documentElement.scrollTop;
	};

	
	var isScrolledToBottom = $("#container").height() <= (scrollUp + $(window).height());
	
	if (scrollUp > 0) {
		$('body > label').css('top', '-1000px');		
	}
	else {
		$('body > label').css('top', '50%');
	}
	var imageCount = $("section").length;
	var visibleImagesArray = [];

	// search for visible items based on rendered position:

	for (var i = 0; i < imageCount; i++) {
		var currentPos = $("#sec"+i).position();
		var currentTop = currentPos.top;
		var currentHeight = $("#sec" + i).height();
		var currentBottom = currentTop + currentHeight;

		var visible = ( !(currentBottom-scrollUp < 0 && currentTop-scrollUp < 0) &&
			!( currentBottom > (scrollUp + $(window).height()) && currentTop > (scrollUp + $(window).height()) ) );

		if (visible) {
			var currentImg = {
				"index": i, 
				"top": currentTop, 
				"bottom": currentBottom, 
				"scrollTop": scrollUp, 
				"scrollBottom": (scrollUp + $(window).height())
			};

			visibleImagesArray.push(currentImg);
		}

	}

	// search for maximum visibility amongst visible items only:

	var maxPercentage = 0;
	var maxIndex = -1;
	for (var j = 0, len = visibleImagesArray.length; j < len; j++) {
		var height = $("#sec" + visibleImagesArray[j].index).height();
		var percentagePos = (visibleImagesArray[j].scrollBottom - visibleImagesArray[j].top) / height;
		var percentageNeg = (visibleImagesArray[j].bottom - visibleImagesArray[j].scrollTop) / height;

		var percentage = 0;

		if (percentageNeg < percentagePos) {
			percentage = percentageNeg;
		} 
		else {
			percentage = percentagePos;
		};

		if (percentage > maxPercentage) {
			maxPercentage = percentage;
			maxIndex = visibleImagesArray[j].index;
		};
	};

	mapRelocate(maxIndex);
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
	
	if (!isScreenSmallPortrait) {
		$("nav").height($(window).height());
	};
	

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
		$(desc).html(photos[i].title + ', ' + photos[i].where).addClass("photo-description");	
		$(desc).appendTo($(photoSec));	
		
		var month = document.createElement("div");
		$(month).html(photos[i].when).addClass("photo-description").addClass("photo-month");	
		$(month).appendTo($(photoSec));	
		$(photoSec).appendTo($("#container"));
	};

	if (isScreenSmallPortrait) {
		$("section:last-child").css("margin-bottom", $(window).height()*0.263);
	};
}


function initialize() {

	isScreenSmallPortrait = window.matchMedia("(orientation: portrait) and (max-width: 769px)").matches;

	// polyfill for IE9+ browsers - check this if I need it for prod
	if (matchMedia('(max-width: 769px)').matches) {
		isScreenSmallPortrait=true;
	}
	// check if the browser is old IE
	if ($('html').is('.ie8')) {
		ie8 = true;
	}

	renderPhotos();

	(function() {
		var bLazy = new Blazy({
			selector: "section img",
			offset: 1600
		});
	})();
	
	if (ie8) {
		$(".photo-description").addClass("solid-background");
	};
	
	var placeInit = [23.612550, 58.593232];
	firstMapLoad(placeInit);
	$(window)
		.resize(windowResponsiveResize)
		.scroll(scrollHandler);

}
	
$(document).ready(initialize);
