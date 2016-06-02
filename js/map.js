//Access Mapbox API
L.mapbox.accessToken = 'pk.eyJ1IjoibGl6emllZ29vZGluZyIsImEiOiJjaW92cmc1NHYwMWJsdW9tOHowdTA2cnFsIn0.lFq-Wju99kZ_dR_2TMBYCQ';

//Create new map object, set its initial center and zoom level
var map = L.mapbox.map('map', 'lizziegooding.03nghnkf', {
  attributionControl: false,
  infoControl: true,
  minZoom: 6,
  maxZoom: 10
});

//Add movetips
map.gridControl.options.follow = true;

//Create a tile and grid layers
var gridLayer = L.mapbox.gridLayer('lizziegooding.03nghnkf');

//Add basemap layer on top
L.mapbox.tileLayer('lizziegooding.03nghnkf').addTo(map);
L.tileLayer(
    'https://api.mapbox.com/styles/v1/lizziegooding/ciow0rloz002uasnhjvd4actj/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
    }).addTo(map);
