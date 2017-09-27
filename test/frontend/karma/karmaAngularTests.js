// this is a frontend test
describe("An angular test", function() {

  beforeEach(angular.mock.module('karmaExample'));

  beforeEach(function(){
    const context = this;
    inject(function(karmaExampleService) {
      context.service = karmaExampleService;
    });
  });

  it('should load the angular module', function() {
    expect(this.service).to.be.defined;
  });
});