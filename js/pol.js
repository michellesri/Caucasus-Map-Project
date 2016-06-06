//this file is meant to go with politics.html
// michellesri adding js here for the chartvar canvas = document.getElementById('canvas');

var countryNames = ['Russia', 'Turkey', 'Iran', 'Georgia', 'Armenia', 'Azerbaijan'];

// the population of the countries is in the millions and corresponds to the order of the country names
var countryPop = ['143.5', '74.93', '74.45', '4.477', '2.977', '9.417'];

function draw(countryNames, countryPop) {

  canvas.style.display = 'block';
  var myChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: countryNames,
      datasets: [{
        label: 'Population of Countries (millions)',
        backgroundColor: 'rgba(87,70,88,0.4)',
        borderColor: 'rgba(87,70,88,0.7)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(87,70,88,0.7)',
        hoverBorderColor: 'rgba(87,70,88,1)',
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
