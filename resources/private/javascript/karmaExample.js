(function(){
  const module = angular.module('karmaExample', []);

  function KarmaExampleService () {
    this.name = 'Karma Example Service';
    this.getServiceName = function(){
      return this.name;
    }
  }

  module.service('karmaExampleService', KarmaExampleService);
})();