describe('homepage', function(){

  var host = 'http://localhost:3000';

  before(function(){
    casper.start(host);
  });

  it('should say hello word', function(){
    casper.then(function(){
      expect("body").to.have.text("avatar_url");
    });
  });

  });

});