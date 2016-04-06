angular.module("quotebook")
  .controller("ctrlbook", function($scope, svenbook){
    $scope.getQuotes = function() {
      $scope.quotes = service.getData();
      console.log($scope.quotes);
    };

    $scope.getQuotes();

    $scope.addQuotes = function() {
      dataService.addData($scope.newQuote);
      $scope.newQuote = {};
      $scope.getQuotes();
    };

    $scope.removeQuote = function() {
      dataService.removeData($scope.newQuote);
      $scope.newQuote = {};
    }

  });
