var TheCounter = function(params){
  //initialise private variables
  var counter       = 0;
  var namesGreeted  = {};

  if(params){
    counter = Object.keys(params).length;
    namesGreeted = params;
  };

  //counter increment if user does not exist
  const greetUser = function(name){
    if(namesGreeted[name]){
      namesGreeted[name]++;
    } else {
      counter++;
      namesGreeted[name] = 1;
    };
  };

  const currentCount = function(){
    return counter;
  };

  const timesGreeted = function(name){
    return namesGreeted[name];
  };

  return {
    greetUser,
    currentCount,
    timesGreeted
  }
};
