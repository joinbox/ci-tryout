/*
 * Do some test bootstrapping, i.e. like registering chai helpers http://chaijs.com/guide/helpers/
 *
 * We could e.g. require our testing package here and invoke a setup function.
 *
 * You could also add global before and after hooks within this file, but make sure it is documented
 * in a way everyone knows what's happening.
 */
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

// asynchronous before hook
before(function(){
  return Promise.resolve('Yay');
});

// synchronous before Each (to avoid side effects)
beforeEach(function(){
  this.isAValuePropagated = 'to the test contexts';
});