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
