var photos = [];

for (var i = 1; i <75; i++) {
	var currentPhoto = {
		url: "img/" + i + ".jpeg",
		where: "TBC",
		latlong: [-35.290328,149.117965],
		title: "Undefined title"
	}
	photos.push(currentPhoto);
};

function namePhoto (num, title) {
	var i = num - 1;
	photos[i].title = title;
}

function placePhoto (num, place, latlng) {
	var i = num - 1;
	photos[i].where = place;
	photos[i].latlong = latlng;
}

// this is how you give a new title to 3.jpeg
namePhoto(3, "test");

// this is how you place it on the map - google location first
placePhoto(3, "Oman", [23.61000,58.54000]);
