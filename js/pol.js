//this file is meant to go with politics.html
// michellesri adding js here for the chartvar canvas = document.getElementById('canvas');

var countryNames = ['Russia', 'Turkey', 'Iran', 'Georgia', 'Armenia', 'Azerbaijan'];

// the population of the countries is in the millions and corresponds to the order of the country names
var countryPop = ['143500000', '74930000', '74450000', '4477000', '2977000', '9417000'];

function draw(countryNames, countryPop) {

  canvas.style.display = 'block';
  var myChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: countryNames,
      datasets: [{
        label: 'Population of Countries',
        data: countryPop,
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

draw(countryNames, countryPop);
