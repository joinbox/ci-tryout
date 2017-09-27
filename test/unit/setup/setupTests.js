const {expect} = require('chai');

describe('The setup:', function(){
  it('sets up chai as promised: note how mocha supports promises as return values of tests', function(){
    const test = Promise.resolve(true);
    return expect(test).to.eventually.be.true;
  });

  it('can pass values in global before hooks to the context, therefore don\'t use arrow functions here', function(){
    return expect(this).to.have.property('isAValuePropagated', 'to the test contexts');
  });
});
