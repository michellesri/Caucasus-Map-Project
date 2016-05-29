//this file goes with languages.html
// michellesri adding js here for the chart

var canvas = document.getElementById('canvas');

var countryNames = ['russia', 'turkey', 'iran', 'georgia', 'armenia', 'azerbaijan'];

// the population of the countries is in the millions and corresponds to the order of the country names
var countryPop = ['143500000', '74930000', '74450000', '4477000', '2977000', '9417000'];

function draw(countryNames, countryPop) {

  canvas.style.display = 'block';
  var myChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: countryNames,
      datasets: [{
        label: 'population of countries',
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
