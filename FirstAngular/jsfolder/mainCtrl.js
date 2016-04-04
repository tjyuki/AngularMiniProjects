angular.module("friendsList")
 .controller("mainCtrl", function($scope){
  $scope.friends = [
    "Katie", "Kevin", "Dakota", "Morgan", "Kami"
  ];

    $scope.addFriend = function() {
      $scope.friends.push($scope.newFriend);
      $scope.newFriend = "";
    };
});
