let MyController = function ($scope) {
  
  $scope.count= 0;
  $scope.message = 'LIKES';

  $scope.incrementByOne = function () {
  
    $scope.count = $scope.count + 1;

    $scope.message = ($scope.count === 1) ? 'LIKE' : 'LIKES';

  };

};

MyController.$inject = ['$scope'];

export default MyController;