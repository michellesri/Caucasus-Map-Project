// Local Storage for User Feedback
// ––––––––––––––––––––––––––––––––––––––––––––––––––
var checkLocalStorage = localStorage.userData;
if (!checkLocalStorage) {
  //If local storage doesnt exist, console log to let user know
  console.log ('No local storage found');
} else {
  //If local storage exists, write from local storage to form
  console.log ('Local storage found');
  //Get user data object from local storage
  var userDataBack = JSON.parse(localStorage.userData);
  //Write local storage data back to DOM
  firstName.value = userDataBack.firstName;
  lastName.value = userDataBack.lastName;
  email.value = userDataBack.email;
  howFound.value = userDataBack.howFound;
  feedback.value = userDataBack.feedback;
}

//Connect submit button to the DOM
var brgdSubmit = document.getElementById('bgrdSubmit');
//Add event listener to submit button
brgdSubmit.addEventListener('click', writeBgrdInput);

//Gather user data from form and store in javascript object
function writeBgrdInput(event) {
  console.log('called writeBgrdInput function');
  event.preventDefault();
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var howFound = document.getElementById('howFound').value;
  var feedback = document.getElementById('feedback').value;
  //Call object constructor function with inputs from form
  var user = new userData(firstName, lastName, email, howFound, feedback);
  console.log(user);
  //Write input to local storage
  localStorage.userData = JSON.stringify(user);
}

//Object constructor that stores user data
function userData(firstName, lastName, email, howFound, feedback) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.howFound = howFound;
  this.feedback = feedback;
}
