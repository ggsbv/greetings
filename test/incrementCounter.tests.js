const listOfNames = {
  Sandro  : 1,
  Fred    : 1,
  Brother : 1
}

var counter = Number(localStorage.getItem("greetCounter"));

var expectedResult = counter + 1;

describe('assignLanguage function', function(){
  it('should return counter + 1', function(){
    assert.equal(incrementCounter(listOfNames, "Zikisa"), expectedResult);
  });
});
