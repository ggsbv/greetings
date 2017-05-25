"use strict";

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
