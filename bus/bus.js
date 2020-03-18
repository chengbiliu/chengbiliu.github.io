var map = L.map('map', {
    center: [38.8929, -77.0357],
    zoom: 11,
    zoomControl: false,
    attributionControl: true
	});

var basemap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
});
basemap.addTo(map);

function onEachFeature(feature, layer) {
    var popupContent;
    if (feature.properties) {
	popupContent = "Route：" + feature.properties.RouteID + "<br/>";
	popupContent += "Destination：" + feature.properties.TripHeadsign + "<br/>";
	popupContent += "General Direction: " + feature.properties.DirectionText + "<br/>";
	popupContent += "Deviation from schedule：" + feature.properties.Deviation + " " + "minutes";
    }
    layer.bindPopup(popupContent);
}

var geojsonlayer; 
var url;

function loadLayer() {
	var busposition = [];	
	url = "https://api.wmata.com/Bus.svc/json/jBusPositions?RouteID=" + document.getElementById("Route").value +"&Lat&Lon&Radius&api_key=769a049bc7294f918c6eaa87852ed551";
	$.getJSON(url, function(data){
	$.each(data, function(i){
		busposition.push(data[i]);
	})

	var bus = GeoJSON.parse(busposition[0], {Point: ['Lat', 'Lon']});
  
	geojsonlayer = L.geoJson(bus, {
		pointToLayer: function (feature, latlng) {
		return L.marker(latlng);
		},
		onEachFeature: onEachFeature
		}).addTo(map)
	});
};

function myFunction() {
	if (geojsonlayer){
		map.removeLayer(geojsonlayer);
	}
	loadLayer();
	setTimeout("myFunction()", document.getElementById("time").value * 1000);
};
	 