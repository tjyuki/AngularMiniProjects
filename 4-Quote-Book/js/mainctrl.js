angular.module("quotebook")
  .controller("ctrlbook", function($scope, svenbook){
<<<<<<< HEAD
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

=======
    $scope.quotes = svenbook.showQuotes();
>>>>>>> 5b41121db291a3d56bd33a95573fa5e5043b86e6
  });
