"use strict";

/* Capture necessary variables */
const inputName = document.querySelector("#iName");
const outputName = document.querySelector("#oName");
const button = document.querySelector("#button");
const mouseover = document.querySelector("#mouseover");
const greetingCounter = document.querySelector("#greetingCounter");
const radioButtons = document.getElementsByName("languageSelect");
const greetReset = document.querySelector("#greetReset");

// create object to store names that have already been greeted
var namesGreeted = {};

//initialise counter
if(!localStorage.getItem('greetCounter')){
  localStorage.setItem('greetCounter', 0);
};

greetingCounter.innerHTML = localStorage.getItem('greetCounter');

// add event listener for a user submission
button.addEventListener("click", function(event){
  var outputLanguage = "";

  // only increment counter if user submits a valid string
  if(inputName.value !== "" && chosenLanguage(radioButtons)){
    incrementCounter(namesGreeted, inputName.value);
    // translate to appropriate language and display the greeting
    outputLanguage = chosenLanguage(radioButtons);
    outputName.innerHTML = assignLanguage(outputLanguage, inputName.value);
  };
  // display current number of legitimate greetings
  greetingCounter.innerHTML = localStorage.getItem('greetCounter');
  // clear name from the input text field
  inputName.value = "";
});

// when greet reset button is clicked, reset the localStorage greet counter to 0
greetReset.addEventListener("click", function(event){
  localStorage.setItem('greetCounter', 0);
  greetingCounter.value = localStorage.getItem('greetCounter');
  greetingCounter.innerHTML = localStorage.getItem('greetCounter');
});

// add event listener to hide and display hidden message
// when moused over, display hidden message in h2
mouseover.addEventListener("mouseover", function(event){
  event.target.innerHTML = "...it prints out your name!";
});

/* when not moused over, display public message */
mouseover.addEventListener("mouseout", function(event){
  event.target.innerHTML = "...but its top secret...";
});
