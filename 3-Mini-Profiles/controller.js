angular.module("userProfiles")
  .controller("theManager", function($scope, softserve){

      $scope.users = softserve.getUsers();


  });
