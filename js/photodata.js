var photos = [];

for (var i = 1; i <75; i++) {
	var currentPhoto = {
		url: "img/" + i + ".jpeg",
		where: "TBC",
		latlong: [-35.290328,149.117965],
		title: "photo " + i
	}
	photos.push(currentPhoto);
};

function setPhoto (num, label, place, geolocation) {
	var i = num - 1;
	photos[i].title = label;
	photos[i].where = place;
	photos[i].latlong = geolocation;
}

// this is how you label and place a photo:
// number, label, place, geolocation
setPhoto(1, "Kupola", "Oman", [23.61000,58.54000]);
setPhoto(2, "Kupola", "Oman", [23.61000,58.54000]);
setPhoto(3, "Kupola", "Oman", [23.61000,58.54000]);
setPhoto(4, "Kupola", "Oman", [23.61000,58.54000]);
setPhoto(5, "Kupola", "Oman", [23.61000,58.54000]);
setPhoto(6, "Kupola", "Oman", [23.61000,58.54000]);
setPhoto(7, "Kupola", "Oman", [23.61000,58.54000]);
setPhoto(8, "Kupola", "Oman", [23.61000,58.54000]);
setPhoto(9, "Kupola", "Oman", [23.61000,58.54000]);
setPhoto(10, "Kupola", "Oman", [23.61000,58.54000]);

