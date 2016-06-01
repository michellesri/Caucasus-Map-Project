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

// Local Storage for User Feedback
// ––––––––––––––––––––––––––––––––––––––––––––––––––
var checkLocalStorage = localStorage.userData;
if (!checkLocalStorage) {
  console.log ('No local storage found');
} else {
  console.log ('Local storage found');
  //if local storage exists, write from local storage to form
  var userDataBack = JSON.parse(localStorage.userData);
  firstName.value = userDataBack.firstName;
  lastName.value = userDataBack.lastName;
  email.value = userDataBack.email;
  howFound.value = userDataBack.howFound;
  feedback.value = userDataBack.feedback;
}

//get input from dom
var brgdSubmit = document.getElementById('bgrdSubmit');
brgdSubmit.addEventListener('click', writeBgrdInput);

function writeBgrdInput(event) {
  console.log('called writeBgrdInput function');
  event.preventDefault();
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var howFound = document.getElementById('howFound').value;
  var feedback = document.getElementById('feedback').value;
  var user = new userData(firstName, lastName, email, howFound, feedback);
  console.log(user);
  //write input to local storage
  localStorage.userData = JSON.stringify(user);
}

//push input into an object
function userData(firstName, lastName, email, howFound, feedback) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.howFound = howFound;
  this.feedback = feedback;
}
