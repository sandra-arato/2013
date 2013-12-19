function renderImg(currentPhoto, i, man) {
	var main = $("#container");
	var photoDiv = document.createElement("div");
	$(photoDiv).html("<img src='" + currentPhoto.url + "'/>");
	$(photoDiv).appendTo(main);
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
	
}
	

$(document).ready(initialize);
