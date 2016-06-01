// this file goes with languages.html
// michellesri adding js here for the chart
//
// var canvas = document.getElementById('canvas');
//
// var countryNames = ['russia', 'turkey', 'iran', 'georgia', 'armenia', 'azerbaijan'];
//
// // the population of the countries is in the millions and corresponds to the order of the country names
// var countryPop = ['143500000', '74930000', '74450000', '4477000', '2977000', '9417000'];
//
// function draw(countryNames, countryPop) {
//
//   canvas.style.display = 'block';
//   var myChart = new Chart(canvas, {
//     type: 'bar',
//     data: {
//       labels: countryNames,
//       datasets: [{
//         label: 'population of countries',
//         data: countryPop,
//       }]
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: { beginAtZero:true}
//         }]
//       }
//     }
//   });
// }
//
// draw(countryNames, countryPop);
//
// code for the map
var russian = document.getElementById('Russian');
var russiaBlurb = document.getElementById("russiaBlurb");
var turkish = document.getElementById("Turkish");
var turkeyBlurb = document.getElementById("turkeyBlurb");
var persian = document.getElementById("Persian");
var iranBlurb = document.getElementById("iranBlurb");
var azeri = document.getElementById("Azeri");
var azerBlurb = document.getElementById("azerBlurb");
var georgian = document.getElementById("Georgian");
var georgiaBlurb = document.getElementById("georgiaBlurb");
var armenian = document.getElementById("Armenian");
var armeniaBlurb = document.getElementById("armeniaBlurb");
var chechen = document.getElementById("Chechen");
var chechnyaBlurb = document.getElementById("chechnyaBlurb");
var ossetian = document.getElementById("Ossetian");
var ossetiaBlurb = document.getElementById("ossetiaBlurb");
var laz = document.getElementById("Laz");
var lazBlurb = document.getElementById("lazBlurb");
var avar = document.getElementById("Avar");
var avarBlurb = document.getElementById("avarBlurb");
var abkhaz = document.getElementById("Abkhaz");
var abkhaziaBlurb = document.getElementById("abkhaziaBlurb");

var array = [[russian, russiaBlurb], [turkish, turkeyBlurb], [persian, iranBlurb], [azeri, azerBlurb], [georgian, georgiaBlurb], [armenian, armeniaBlurb], [chechen, chechnyaBlurb], [ossetian, ossetiaBlurb], [laz, lazBlurb], [avar, avarBlurb], [abkhaz, abkhaziaBlurb]]

function iOn(i) {
  return function() {
    array[i][1].style.display = "block";
  }
}

function iOff(i) {
  return function() {
    array[i][1].style.display = "none";
  }
}

function mouseMovt() {

for (var i = 0; i < array.length; i++) {
  var mouseOn = iOn(i);
  array[i][0].addEventListener('mouseover', mouseOn);
  var mouseOff = iOff(i);
  array[i][0].addEventListener('mouseout', mouseOff);
  }
}

mouseMovt();
