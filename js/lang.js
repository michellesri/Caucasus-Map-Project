// this file goes with languages.html
// michellesri adding js here for the chart

var canvas = document.getElementById('canvas');

var countryNames = ['Russia', 'Turkey', 'Iran', 'Georgia', 'Armenia', 'Azerbaijan'];

// the number of speakers in the world is in the millions and corresponds to the order of the country names
// notes about the data (found on wikipedia.com):
// I used the total number of speakers for the data (L1 + L2)
// Russia: 150mil L1 speakers. 110mil L2 speakers
// Turkey: 71mil L1. 3mil L2
// Iran: 60mil L1. 50mil L2
// Georgia: 4.3mil total
// Armenia: 8-12mil total
// azerbaijan: 26mil total

var speakersInWorld = ['260000000', '71000000', '110000000', '4300000', '12000000', '26000000'];

function draw(countryNames, speakersInWorld) {

  canvas.style.display = 'block';
  var myChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: countryNames,
      datasets: [{
        label: 'Speakers in the World',
        data: speakersInWorld,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: { beginAtZero:true}
        }]
      }
    }
  });
}

draw(countryNames, speakersInWorld);

// code for the map
var russian = document.getElementById('Russian');
var russiaBlurb = document.getElementById('russiaBlurb');
var turkish = document.getElementById('Turkish');
var turkeyBlurb = document.getElementById('turkeyBlurb');
var persian = document.getElementById('Persian');
var iranBlurb = document.getElementById('iranBlurb');
var azeri = document.getElementById('Azeri');
var azerBlurb = document.getElementById('azerBlurb');
var georgian = document.getElementById('Georgian');
var georgiaBlurb = document.getElementById('georgiaBlurb');
var armenian = document.getElementById('Armenian');
var armeniaBlurb = document.getElementById('armeniaBlurb');
var chechen = document.getElementById('Chechen');
var chechnyaBlurb = document.getElementById('chechnyaBlurb');
var ossetian = document.getElementById('Ossetian');
var ossetiaBlurb = document.getElementById('ossetiaBlurb');
var laz = document.getElementById('Laz');
var lazBlurb = document.getElementById('lazBlurb');
var avar = document.getElementById('Avar');
var avarBlurb = document.getElementById('avarBlurb');
var abkhaz = document.getElementById('Abkhaz');
var abkhaziaBlurb = document.getElementById('abkhaziaBlurb');

var array = [[russian, russiaBlurb], [turkish, turkeyBlurb], [persian, iranBlurb], [azeri, azerBlurb], [georgian, georgiaBlurb], [armenian, armeniaBlurb], [chechen, chechnyaBlurb], [ossetian, ossetiaBlurb], [laz, lazBlurb], [avar, avarBlurb], [abkhaz, abkhaziaBlurb]];

function iOn(i) {
  return function() {
    array[i][1].style.display = 'block';
  };
}

function iOff(i) {
  return function() {
    array[i][1].style.display = 'none';
  };
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
