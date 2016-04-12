angular.module("miniRouting")
  .controller("productsCtrl", function($scope, $stateParams, productsService){

  if($stateParams.id === "shoes") {
    $scope.productData = productsService.shoeData;
  } else if ($stateParams.id === "socks") {
    $scope.productData = productsService.sockData;
    }

  })
