//this file goes with languages.html
// michellesri adding js here for the chart

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

var colors = [russian, turkish, persian, azeri, georgian, armenian, chechen, ossetian, laz, avar, abkhaz]

var blurbs = [russiaBlurb, turkeyBlurb, iranBlurb, azerBlurb, georgiaBlurb, armeniaBlurb, chechnyaBlurb, ossetiaBlurb, lazBlurb, avarBlurb, abkhaziaBlurb]

console.log(colors);
console.log(blurbs);


// for (var i = 0; i < colors.length; i++) {
// }
//
// function blurbGet() {
//   for (var i = 0; i < blurbs.length; i++) {;
//   }
// }
//
// function clickOver() {
//   colors[i].addEventListener('mouseover', blurbGet());
// };

// for (var i = 0; i < colors.length; i++) {
//   console.log(i);
//   var x = blurbs[i];
//   colors[i].addEventListener('mouseover', function(event) {
//     console.log(event);
//       x.style.display = 'block';
//       console.log(x);
//   });
// };


russian.addEventListener('mouseover', function() {
  russiaBlurb.style.display = "block";
});

russian.addEventListener('mouseout', function() {
  russiaBlurb.style.display = "none";
});

turkish.addEventListener('mouseover', function() {
  turkeyBlurb.style.display = "block";
});

turkish.addEventListener('mouseout', function() {
  turkeyBlurb.style.display = "none";
});

persian.addEventListener('mouseover', function() {
  iranBlurb.style.display = "block";
});

persian.addEventListener('mouseout', function() {
  iranBlurb.style.display = "none";
});

azeri.addEventListener('mouseover', function() {
  azerBlurb.style.display = "block";
});

azeri.addEventListener('mouseout', function() {
  azerBlurb.style.display = "none";
});

georgian.addEventListener('mouseover', function() {
  georgiaBlurb.style.display = "block";
});

georgian.addEventListener('mouseout', function() {
  georgiaBlurb.style.display = "none";
});

armenian.addEventListener('mouseover', function() {
  armeniaBlurb.style.display = "block";
});

armenian.addEventListener('mouseout', function() {
  armeniaBlurb.style.display = "none";
});

chechen.addEventListener('mouseover', function() {
  chechnyaBlurb.style.display = "block";
});

chechen.addEventListener('mouseout', function() {
  chechnyaBlurb.style.display = "none";
});

ossetian.addEventListener('mouseover', function() {
  ossetiaBlurb.style.display = "block";
});

ossetian.addEventListener('mouseout', function() {
  ossetiaBlurb.style.display = "none";
});

laz.addEventListener('mouseover', function() {
  lazBlurb.style.display = "block";
});

laz.addEventListener('mouseout', function() {
  lazBlurb.style.display = "none";
});

avar.addEventListener('mouseover', function() {
  avarBlurb.style.display = "block";
});

avar.addEventListener('mouseout', function() {
  avarBlurb.style.display = "none";
});

abkhaz.addEventListener('mouseover', function() {
  abkhaziaBlurb.style.display = "block";
});

abkhaz.addEventListener('mouseout', function() {
  abkhaziaBlurb.style.display = "none";
});
