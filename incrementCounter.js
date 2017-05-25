"use strict";

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
    counter++;
    localStorage.setItem('greetCounter', counter);
  };
};
