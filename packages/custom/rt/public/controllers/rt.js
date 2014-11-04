'use strict';

angular.module('mean.rt').controller('RtController', ['$scope', 'Global', 'Rt',
  function($scope, Global, Rt) {
    $scope.global = Global;
    $scope.package = {
      name: 'rt'
    };
  }
]);
