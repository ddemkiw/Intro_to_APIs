describe('homepage', function(){

  var host = 'http://localhost:3000';

  before(function(){
    casper.start(host);
  });

  it('should return a greeting on the homepage', function(){
    casper.thenOpen(host, function(response){
      expect('body').to.have.text('Basic Node Server');
    });
  });

  it('should return JSON for a particular user', function(){
    casper.thenOpen(host + '/users/ddemkiw', function(response){
      expect('body').to.have.text('{"id":9589145,"login":"ddemkiw","public_repos":28,"location":"United Kingdom"}');
    });
  });
});