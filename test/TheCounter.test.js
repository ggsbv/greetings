describe("TheCounter factory function", function(){
  const namesGreeted = {
    Andre : 4,
    Sandro : 2,
    Zikisa : 3
  };

  localStorage["namesGreeted"] = JSON.stringify(namesGreeted);

  var theCounter = TheCounter(JSON.parse(localStorage["namesGreeted"]));

  it("Should increment the counter if the user does not exist", function(){
    theCounter.greetUser("Nelson");
    assert.equal(4, theCounter.currentCount());
  });

  it("Should not increment the counter if the user does exist", function(){
    theCounter.greetUser("Nelson");
    assert.equal(4, theCounter.currentCount());
  });

  it("Should return how many times a specific user has been greeted", function(){
    assert.equal(2, theCounter.timesGreeted("Sandro"));
  });
  
});
