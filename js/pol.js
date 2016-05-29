//this file is meant to go with politics.html
// michellesri adding js here for the chart

var canvas = document.getElementById('canvas');

var countryNames = ['russia', 'turkey', 'iran', 'georgia', 'armenia', 'azerbaijan'];

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

function draw(countryNames, countryPop) {

  canvas.style.display = 'block';
  var myChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: countryNames,
      datasets: [{
        label: 'Speakers in the world',
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
