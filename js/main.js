function firstMapLoad (map) {
	var mapOptions = {
          zoom: 8,
          center: new google.maps.LatLng(-33.857373,151.214949)
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
}

function renderPhotos() {
	var mainContent = $("#container");
	for (var i = 0, len = photos.length; i < len; i++) {
		var photoDiv = document.createElement("div");
		$(photoDiv).html("<img src='" + photos[i].url + "'/>");
		$(photoDiv).appendTo(mainContent);
	};
}


function initialize() {
	renderPhotos();
	var map;
    firstMapLoad(map);

    // infinitescroll() is called on the element that surrounds 
	// the items you will be loading more of
	$('.scroll').jscroll({
    debug:true
	});

}
	

$(document).ready(initialize);
