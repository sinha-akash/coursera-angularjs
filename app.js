(function () {
  'use strict'

  angular.module('nameCalculator', [])

  .controller('nameCalculatorController', function ($scope) {
    $scope.name = "Akash";
    $scope.value = 0;

    $scope.calculate() = function () {
      var totalValue = calculateNumericString($scope.name);
      $scope.value = totalValue;
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
