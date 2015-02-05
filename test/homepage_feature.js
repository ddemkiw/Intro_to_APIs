describe('homepage', function(){

  var host = 'http://localhost:3000';

  before(function(){
    casper.start(host);
  });

  it('should say hello word', function(){
    casper.then(function(){
      expect("body").to.have.text("Hello world");
    });
  });

  it('should greet people individually', function(){
    casper.thenOpen(host + '?name=sam', function(){
      expect('body').to.have.text('Hello sam');

    });

  });

});