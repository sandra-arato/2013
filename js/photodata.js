var photos = [];

for (var i = 1; i <75; i++) {
	var currentPhoto = {
		url: "img/" + i + ".jpeg",
		where: "TBC",
		when: "",
		latlong: [-35.290328,149.117965],
		title: "photo " + i,
		zoom: 12
	}
	photos.push(currentPhoto);
};

function setPhoto (num, label, place, month, geolocation, zoom) {
	var i = num - 1;
	photos[i].title = label;
	photos[i].where = place;
	photos[i].when = month;
	photos[i].latlong = geolocation;
	if (typeof zoom != 'undefined') {
		photos[i].zoom = zoom;
	}
}

// this is how you label and place a photo:
// number, label, place, geolocation
setPhoto(1, "Al Alam Palace, Muscat", "Oman", "January", [23.612550, 58.593232]);
setPhoto(2, "Kalbuh Park, Muscat", "Oman", "January", [23.6234795,58.5856329]);
setPhoto(3, "Sultan Qaboos Grand Mosque, Muscat", "Oman", "January", [23.5838801,58.3885621]);
setPhoto(4, "Muscat", "Oman", "January", [23.61000,58.54000]);
setPhoto(5, "Suwadi Al Batha", "Oman", "January", [23.7745163,57.7828305]);
setPhoto(6, "Ibra", "Oman", "January", [22.72719,58.524040], 9);
setPhoto(7, "Wahiba Sands", "Oman", "January", [21.4377736,58.5543821], 8);
setPhoto(8, "Jebel Shams", "Oman", "January", [23.2369444,57.2638888], 9);
setPhoto(9, "Bimma", "Oman", "January", [22.9887905,59.1371861], 9);
setPhoto(10, "Jebel Shams", "Oman", "January", [23.2369444,57.2638888], 9);
setPhoto(11, "Auckland", "New Zealand", "January", [-36.842042,174.76515], 14);
setPhoto(12, "Sky Tower, Auckland", "New Zealand", "January", [-36.848684,174.761967], 14);
setPhoto(13, "Waitemata Harbour", "New Zealand", "January", [-36.836889,174.775340], 13);
setPhoto(14, "Auckland Harbour Bridge", "New Zealand", "January", [-36.8308764,174.7454829], 14);
setPhoto(15, "Westhaven Marina", "New Zealand", "January", [-36.838057,174.753785], 14);
setPhoto(16, "Kauaeranga Valley, Coromandel", "New Zealand", "January", [-37.0929171,175.64280987], 10);
setPhoto(17, "Coromandel", "New Zealand", "January", [-36.722689,175.728734], 11);
setPhoto(18, "Cathedral Cove", "New Zealand", "January", [-36.827728,175.7900487], 11);
setPhoto(19, "Rotarua Museum", "New Zealand", "January", [-38.135589,176.258200], 11);
setPhoto(20, "Government Gardens, Rotarua", "New Zealand", "January", [-38.135589,176.258200], 11);
setPhoto(21, "Kaituna River", "New Zealand", "January", [-38.007584,176.342153], 12);
setPhoto(22, "Torrent Bay", "New Zealand", "February", [-40.949268,173.049603], 12);
setPhoto(23, "Pancake Rocks", "New Zealand", "February", [-42.114158,171.326802], 9);
setPhoto(24, "Franz Josef Glacier", "New Zealand", "February", [-43.453686,170.180403], 9);
setPhoto(25, "Roys Peak, Wanaka", "New Zealand", "February", [-44.697795,169.050401], 10);
setPhoto(26, "Coronet Peak, Queenstown", "New Zealand", "February", [-44.928582,168.735706], 10);
setPhoto(27, "Milford Sound", "New Zealand", "February", [-44.662266,167.915707], 10);
setPhoto(28, "Oamaru", "New Zealand", "February", [-45.109400,170.976821], 10);
setPhoto(29, "Kaikoura","New Zealand", "February", [-42.450027,173.665315], 10);
setPhoto(30, "Cape Reinga", "New Zealand", "March", [-34.426728,172.677549], 10);
setPhoto(31, "Sydney Opera House", "Australia", "March", [-33.858854, 151.216183], 15);
setPhoto(32, "Sydney Harbour Bridge", "Australia", "March", [-33.851543,151.211194], 14);
setPhoto(33, "Hyde Park", "Australia", "March", [-33.870993,151.212121], 14);
setPhoto(34, "Bundeena Bay", "Australia", "March", [-34.081015,151.156221], 11);
setPhoto(35, "Sydney Harbour", "Australia", "March", [-33.862186,151.253905], 12);
setPhoto(36, "Port Stephens, NSW", "Australia", "March", [-32.777777,152.109999], 12);
setPhoto(37, "Mount Tomaree Lookout", "Australia", "March", [-32.716859,152.186814], 12);
setPhoto(38, "Birubi Point", "Australia", "March", [-32.779544,152.062555], 12);
setPhoto(39, "Birubi Point", "Australia", "March", [-32.779544,152.062555], 12);
setPhoto(40, "Anzac War Memorial, Sydney", "Australia", "April", [-33.875722,151.210877], 15);
setPhoto(41, "Circular Quay - Vivid Sydney", "Australia", "June", [-33.861632, 151.210269], 15);
setPhoto(42, "Sydney CBD", "Australia", "June", [-33.856286, 151.212887], 15);
setPhoto(43, "Federation Square, Melbourne", "Australia", "June", [-37.817125, 144.969123]);
setPhoto(44, "Graffiti Lane, Melbourne", "Australia", "June", [-37.814900, 144.964879]);
setPhoto(45, "Melbourne CBD", "Australia", "June", [-37.814764, 144.963374]);
setPhoto(46, "Luna Park, Melbourne", "Australia", "June", [-37.867139, 144.976820]);
setPhoto(47, "Melbourne", "Australia", "June", [-37.863855, 144.971070]);
setPhoto(48, "Shine of Remembrance, Melbourne", "Australia", "June", [-37.830046, 144.973768]);
setPhoto(49, "Parliament, Canberra", "Australia", "July", [-35.307989, 149.124552]);
setPhoto(50, "Parliament, Canberra", "Australia", "July", [-35.307989, 149.124552]);
setPhoto(51, "Australian War Memorial", "Australia", "July", [-35.280878, 149.148510]);
setPhoto(52, "Royal National Park", "Australia", "July", [-34.137129, 151.114685]);
setPhoto(53, "Royal National Park", "Australia", "July", [-34.137249, 151.114822]);
setPhoto(54, "Royal National Park", "Australia", "July", [-34.137575, 151.115420]);
setPhoto(55, "Royal National Park", "Australia", "July", [-34.168876, 151.070204]);
setPhoto(56, "Featherdale Wildlife Park", "Australia", "August", [-33.766662, 150.884207]);
setPhoto(57, "Featherdale Wildlife Park", "Australia", "August", [-33.766662, 150.884207]);
setPhoto(58, "Featherdale Wildlife Park", "Australia", "August", [-33.766662, 150.884207]);
setPhoto(59, "Featherdale Wildlife Park", "Australia", "August", [-33.766662, 150.884207]);
setPhoto(60, "Auckland Airport", "New Zealand", "September", [-37.005780, 174.782378], 11);
setPhoto(61, "Monkey Forest, Ubud, Bali", "Indonesia", "September", [-8.518260, 115.258854], 11);
setPhoto(62, "Monkey Forest, Ubud, Bali", "Indonesia", "September", [-8.518260, 115.258854], 11);
setPhoto(63, "Monkey Forest, Ubud, Bali", "Indonesia", "September", [-8.518260, 115.258854], 11);
setPhoto(64, "Monkey Forest, Ubud, Bali", "Indonesia", "September", [-8.518260, 115.258854], 11);
setPhoto(65, "Ubud, Bali", "Indonesia", "September", [-8.515278, 115.260325], 11);
setPhoto(66, "Ubud, Bali", "Indonesia", "September", [-8.515278, 115.260325], 11);
setPhoto(67, "Sebatu, Bali", "Indonesia", "September", [-8.392334, 115.295561], 11);
setPhoto(68, "Sebatu, Bali", "Indonesia", "September", [-8.392334, 115.295561], 11);
setPhoto(69, "Tirta Gangga, Water Palace", "Indonesia", "September", [-8.424125, 115.593323], 11);
setPhoto(70, "Gili Air", "Indonesia", "October", [-8.354811, 116.087158], 14);
setPhoto(71, "Gili Air", "Indonesia", "October", [-8.361787, 116.087371], 14);
setPhoto(72, "Gili Air", "Indonesia", "October", [-8.354811, 116.087158], 14);
setPhoto(73, "Gili Air", "Indonesia", "October", [-8.361787, 116.087371], 14);
setPhoto(74, "Gili Air", "Indonesia", "October", [-8.363770, 116.083507], 14);