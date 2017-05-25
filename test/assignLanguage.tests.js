describe('assignLanguage function', function(){
  it('should return "Bonjour, Sandro"', function(){
    assert.equal(assignLanguage('fr', 'Sandro'), "Bonjour, Sandro");
  });
});
