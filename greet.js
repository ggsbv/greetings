/* Capture necessary variables */
var inputName = document.querySelector("#iName");
var outputName = document.querySelector("#oName");
var button = document.querySelector("#button");
var mouseover = document.querySelector("#mouseover");
var greetingCounter = document.querySelector("#greetingCounter");
var radioButtons = document.getElementsByName("languageSelect");
const greetReset = document.querySelector("#greetReset");

function isOneChecked(){
  for (var i = 0; i < radioButtons.length; i++){
    var currentButton = radioButtons[i];
    if (currentButton.checked) {
      return true;
    }
  }
  return false;
}

/* create object to store names that have already been greeted */
var namesGreeted = {};

greetingCounter.value = localStorage.getItem('greetCounter');
console.log(greetingCounter.value);
greetingCounter.innerHTML = localStorage.getItem('greetCounter');
/* add event listener for a user submission */
button.addEventListener("click", function(event){
  var isChecked = isOneChecked();
  var outputLanguage = "";
  /* only increment counter if user submits a valid string */
  if(inputName.value !== "" && isChecked === true){
    console.log("one is checked");
    /* if name has been greeted before, do not increment counter */
    if(namesGreeted[inputName.value] === undefined){
      namesGreeted[inputName.value] = 1;
      greetingCounter.value++;
      localStorage.setItem('greetCounter', greetingCounter.value);
    };
    for(var i = 0; i < radioButtons.length; i++){
      if(radioButtons[i].checked){
        outputLanguage = radioButtons[i].value;
      };
    /* translate to appropriate language and display the greeting */
    switch (outputLanguage) {
      case 'fr':
        outputName.innerHTML = 'Bonjour, ' + inputName.value;
        break;
      case 'es':
        outputName.innerHTML = 'Hola, ' + inputName.value;
        break;
      case 'en':
        outputName.innerHTML = 'Hello, ' + inputName.value;
    };
  };
  /* loop through radio buttons to see which button is checked */
  };
  /* display current number of legitimate greetings */
  greetingCounter.innerHTML = localStorage.getItem('greetCounter');
  /* clear name from the input text field */
  inputName.value = "";
});
/* when greet reset button is clicked, reset the localStorage greet counter to 0 */
greetReset.addEventListener("click", function(event){
  localStorage.setItem('greetCounter', 0);
  greetingCounter.value = localStorage.getItem('greetCounter');
  /* display the 0, indicating reset success */
  greetingCounter.innerHTML = localStorage.getItem('greetCounter');
});
/* add event listener to hide and display hidden message */
/* when moused over, display hidden message in h2 */
mouseover.addEventListener("mouseover", function(event){
  event.target.innerHTML = "...it prints out your name!";
});
/* when not moused over, display public message */
mouseover.addEventListener("mouseout", function(event){
  event.target.innerHTML = "...but its top secret...";
});
