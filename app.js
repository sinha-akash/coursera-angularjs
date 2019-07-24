(function () {
  'use strict'

  angular.module('nameCalculator', [])

  .controller('nameCalculatorController', function ($scope) {
    $scope.name = "";
    $scope.result = 0;

    $scope.calculate = function () {
      var output = calculateNumericString($scope.name);
      $scope.result = output;
    };

    function calculateNumericString(string) {
      var totalString = 0;
      for (var i = 0; i < string.length; i++) {
        totalString += string.charCodeAt(i);
      }
      return totalString;
    };
  });
})();
