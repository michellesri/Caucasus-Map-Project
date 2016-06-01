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
var kurd = document.getElementById("Kurd");
var kurdBlurb = document.getElementById("kurdBlurb");

var array = [[russian, russiaBlurb], [turkish, turkeyBlurb], [persian, iranBlurb], [azeri, azerBlurb], [georgian, georgiaBlurb], [armenian, armeniaBlurb], [chechen, chechnyaBlurb], [ossetian, ossetiaBlurb], [laz, lazBlurb], [avar, avarBlurb], [abkhaz, abkhaziaBlurb], [kurd, kurdBlurb]]

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
