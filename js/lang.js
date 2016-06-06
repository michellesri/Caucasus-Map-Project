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
var kurd = document.getElementById('Kurd');
var kurdBlurb = document.getElementById('kurdBlurb');
var legend = document.getElementById('legend');
var audio = document.getElementById('audio');

var array = [[russian, russiaBlurb, ['hello_russian.mp3', 'goodbye_russian.mp3']], [turkish, turkeyBlurb, ['hello_turkish.mp3', 'goodbye_turkish1.mp3', 'bonvoyage2_turkish.mp3']], [persian, iranBlurb, ['hello_farsi.mp3', 'goodbye_farsi.mp3']], [azeri, azerBlurb, ['hello_azer.mp3', 'goodbye_azer.mp3']], [georgian, georgiaBlurb, ['hello_georgian.mp3', 'goodbye_georgian.mp3']], [armenian, armeniaBlurb, []], [chechen, chechnyaBlurb, []], [ossetian, ossetiaBlurb, []], [laz, lazBlurb, []], [avar, avarBlurb, []], [abkhaz, abkhaziaBlurb, []], [kurd, kurdBlurb, ['hello_kurdish.mp3']]];

//extracts i to put into event listener; replaces legend with blurb
function iOn(i) {
  return function() {
    array[i][1].style.display = 'block';
    legend.style.display = 'none';
  };
}

//extracts i to put into event listener; replaces blurb with legend
function iOff(i) {
  return function() {
    array[i][1].style.display = 'none';
    legend.style.display = 'block';
  };
}

var country;
var audioIndex;

//extracts i for event listener; attaches audio to correct map element; plays first audio
function audioOn(i) {
  return function() {
    var audioArray = array[i][2];
    if (audioArray.length < 1) {
      return;
    }
    country = i;
    audioIndex = 0;
    audio.src = 'audio/' + audioArray[0];
    audio.play();
  };
};

//plays next audio
audio.addEventListener('ended', playNext);

function playNext() {
  audioIndex++;
  var audioArray = array[country][2];
  if (audioIndex < audioArray.length) {
    audio.src = 'audio/' + audioArray[audioIndex];
    audio.play();
  } else {
    audio.pause();
  }
}

//controls map interactions
function eventListeners() {

  for (var i = 0; i < array.length; i++) {
    var mouseOn = iOn(i);
    array[i][0].addEventListener('mouseover', mouseOn);
    var mouseOff = iOff(i);
    array[i][0].addEventListener('mouseout', mouseOff);
    var audioSound = audioOn(i);
    array[i][0].addEventListener('click', audioSound);
  }
}

eventListeners();

// Local Storage for User Language/Country information
// ––––––––––––––––––––––––––––––––––––––––––––––––––
//Connect lang.js to the DOM
var uCountry = document.getElementById('uCountry');
var uLanguage = document.getElementById('uLanguage');
var uVisited = document.getElementsByName('uVisited');
var uSpeaks = document.getElementsByName('uSpeaks');
var langSubmit = document.getElementById('langSubmit');

//Check to see if local storage exists
var checkLocalStorage = localStorage.userLang;
if (!checkLocalStorage) {
  //If local storage doesn't exist
  console.log('No local storage');
}
else{
  //If local storage does exist, pull data out of local storage and reassign to form
  console.log('Local storage found');
  var userLangBack = JSON.parse(localStorage.userLang);
  uCountry.value = userLangBack.uCountry;
  uLanguage.value = userLangBack.uLanguage;
  //RADIO BUTTONS
  //Check to see which value of the uVisited array matches with that stored in local storage
  for (var xx = 0; xx < uVisited.length; xx++){
    if(uVisited[xx].value === userLangBack.uVisited){
      uVisited[xx].checked = true;
    }
  }
  //Check to see which value of the uSpeaks array matches with that stored in local storagE
  for (var yy = 0; yy < uSpeaks.length; yy++){
    if(uSpeaks[yy].value === userLangBack.uSpeaks){
      uSpeaks[yy].checked = true;
    }
  }
}

//Create event listener
langSubmit.addEventListener('click', writeLangInput);

//Gather radio button responses, call object constructor, write object with user data to local storage
function writeLangInput(event){
  event.preventDefault();
  var visit = '';
  var speaks = '';
  for(var ii = 0; ii < uVisited.length; ii++){
    if(uVisited[ii].checked === true){
      visit = uVisited[ii].value;
      vIndex = ii;
    }
  }
  for(var ii = 0; ii < uSpeaks.length; ii++){
    if(uSpeaks[ii].checked === true){
      speaks = uSpeaks[ii].value;
      uIndex = ii;
    }
  }
  var user = new userLang(uCountry.value, uLanguage.value, visit, speaks);
  console.log(user);
  localStorage.userLang = JSON.stringify(user);
}

//Create an object constructor to store lang/country information
function userLang (uCountry, uLanguage, visit, speaks){
  this.uCountry = uCountry;
  this.uLanguage = uLanguage;
  this.uVisited = visit;
  this.uSpeaks = speaks;
}

// Write Language chart
// ––––––––––––––––––––––––––––––––––––––––––––––––––

var canvas = document.getElementById('canvas');

var langNames = ['Russian', 'Turkish', 'Persian', 'Georgian', 'Armenian', 'Azerbaijani'];

 // the number of speakers in the world is in the millions and corresponds to the order of the country names
 // notes about the data (found on wikipedia.com):
 // I used the total number of speakers for the data (L1 + L2)
 // Russia: 150mil L1 speakers. 110mil L2 speakers
 // Turkey: 71mil L1. 3mil L2
 // Iran: 60mil L1. 50mil L2
 // Georgia: 4.3mil total
 // Armenia: 812mil total
 // azerbaijan: 26mil total

var speakersInWorld = ['260', '71', '110', '4.3', '12', '26'];

function draw(langNames, speakersInWorld) {

  canvas.style.display = 'block';
  var myChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: langNames,
      datasets: [{
        label: 'Speakers in the World (millions)',
        // backgroundColor: 'rgba(255,99,132,0.2)',
        backgroundColor: 'rgba(87,70,88,0.4)',
        borderColor: 'rgba(87,70,88,0.7)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(87,70,88,0.7)',
        hoverBorderColor: 'rgba(87,70,88,1)',
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

draw(langNames, speakersInWorld);
