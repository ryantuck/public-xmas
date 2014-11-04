'use strict';

angular.module('mean.rt').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('rt example page', {
      url: '/rt/example',
      templateUrl: 'rt/views/index.html'
    });
  }
]);
