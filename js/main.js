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
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    		},
    	mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var MY_MAPTYPE_ID = 'custom_style';
    var featureOpts = [
    	{
      stylers: [
        { hue: '#890000' },
        { visibility: 'simplified' },
        { gamma: 0.5 },
        { weight: 0.5 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#890000' }
      ]
    }
    ]
    
    var styledMapOptions = {
       	name: 'Custom Style'
    };
		
	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
		
	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

    placeMarkers(map);

}

function renderPhotos() {

	for (var i = 0, len = photos.length; i < len; i++) {
		var photoDiv = document.createElement("div");
		$(photoDiv).html("<img src='" + photos[i].url + "'/>");
		$(photoDiv).appendTo($("#container"));
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
    
    
    
}
	

$(document).ready(initialize);
