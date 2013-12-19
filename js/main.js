function renderImg(currentPhoto, i) {
	console.log(currentPhoto);
	var main = $("#container");
	var photoDiv = document.createElement("div");
	$(photoDiv).html("<img src='" + currentPhoto.url + "'/>");
	$(photoDiv).appendTo(main);
	console.log("end of photo");
}

function renderPhotos() {
	console.log("in rendering");
	for (var i = 0, len = photos.length; i < len; i++) {
		console.log("try " + i);
		renderImg(photos[i],i);
	};
}


function initialize() {
	renderPhotos();
	
}
	

$(document).ready(initialize);
