angular.module("quotebook")
  .controller("ctrlbook", function($scope, svenbook){
    $scope.quotes = svenbook.showQuotes();
  });
