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
setPhoto(1, "Al Alam Palace", "Oman", [23.2159086,58.59469]);
setPhoto(2, "Kalbuh Park, Muscat, Oman", "Oman", [23.6234795,58.5856329]);
setPhoto(3, "Sultan Qaboos Grand Mosque", "Oman", [23.5838801,58.3885621]);
setPhoto(4, "Muscat, Oman", "Oman", [23.61000,58.54000]);
setPhoto(5, "Suwadi Al Batha, Oman", "Oman", [23.7745163,57.7828305]);
setPhoto(6, "Ibra", "Oman", [22.72719,58.524040]);
setPhoto(7, "Wahiba Sands, Oman", "Oman", [21.4377736,58.5543821]);
setPhoto(8, "Jebel Shams, Oman", "Oman", [23.2369444,57.2638888]);
setPhoto(9, "Bimma, Oman", "Oman", [22.9887905,59.1371861]);
setPhoto(10, "Jebel Shams, Oman", "Oman", [23.2369444,57.2638888]);
setPhoto(11, "Auckland, New Zealand", "New Zealand", [-36.842042,174.76515]);
setPhoto(12, "Sky Tower, Auckland", "New Zealand", [-36.848684,174.761967]);
setPhoto(13, "Waitemata Harbour", "New Zealand", [-36.836889,174.775340]);
setPhoto(14, "Auckland Harbour Bridge", "New Zealand", [-36.8308764,174.7454829]);
setPhoto(15, "Westhaven Marina", "New Zealand", [-36.838057,174.753785]);
setPhoto(16, "Kauaeranga Valley, Coromandel", "New Zealand", [-37.0929171,175.64280987]);
setPhoto(17, "Coromandel", "New Zealand", [-36.722689,175.728734]);
setPhoto(18, "Cathedral Cove", "New Zealand", [-36.827728,175.7900487]);
setPhoto(19, "Rotarua Museum", "New Zealand", [-38.135589,176.258200]);
setPhoto(20, "Government Gardens, Rotarua", "New Zealand", [-38.135589,176.258200]);
setPhoto(21, "Kaituna River", "New Zealand", [-38.007584,176.342153]);
setPhoto(22, "Torrent Bay", "New Zealand", [-40.949268,173.049603]);
setPhoto(23, "Pancake Rocks", "New Zealand", [-42.114158,171.326802]);
setPhoto(24, "Franz Josef Glacier", "New Zealand", [-43.453686,170.180403]);
setPhoto(25, "Roys Peak, Wanaka", "New Zealand", [-44.697795,169.050401]);