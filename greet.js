"use strict";

/* Capture necessary variables */
const inputName = document.querySelector("#iName");
const outputName = document.querySelector("#oName");
const button = document.querySelector("#button");
const mouseover = document.querySelector("#mouseover");
const greetingCounter = document.querySelector("#greetingCounter");
const radioButtons = document.getElementsByName("languageSelect");
const greetReset = document.querySelector("#greetReset");

//FUNCTION    : chosenLanguage
//PARAMETERS  : [1] radioButtonElems => list of radio button elements
//                # Type : Array
//RETURN      : Type  => String           *If a radio button was checked
//                    => Boolean (false)  *If a radio button was not checked
//DESCRIPTION : Takes a list of radio button elements and returns its value if one
//              has been checked, and false if none have been checked
function chosenLanguage(radioButtonElems){
  for (let i = 0; i < radioButtonElems.length; i++){
    let currentButtonElem = radioButtonElems[i];
    if(currentButtonElem.checked){
      return currentButtonElem.value;
    };
  };
  return false;
};

//FUNCTION    : incrementCounter
//PARAMETERS  : [1] namesGreetedList  =>  list of names mapped to the number of times
//                                        each name has been greeted
//                # Type : Object list (map)
//              [2] name              =>  the user's name that was input
//                # Type : String
//RETURN      : N/A
//DESCRIPTION : Takes an object with names that have been greeted. If the name
//              does not exist in the object, the name is created and the counter
//              is incremented and stored in the localStorage
function incrementCounter(namesGreetedList, name){
  if(!namesGreetedList[name]){
    namesGreetedList[name] = 1;
    let counter = Number(localStorage.getItem('greetCounter'));
    localStorage.setItem('greetCounter', counter++);
  };
};

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
  if(inputName.value !== "" && chosenLanguage){
    incrementCounter(namesGreeted, inputName.value);
    // translate to appropriate language and display the greeting
    outputLanguage = chosenLanguage(radioButtons);
    outputName.innerHTML = assignLanguage(outputLanguage, inputName);
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
