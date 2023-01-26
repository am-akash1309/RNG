const rng_generator = angular.module("rng_generator",[])
rng_generator.controller('bot1',function($scope){
    $scope.num = 0

    $scope.rng = () => {
        $scope.num = Math.trunc ((Math.random()*64)+1)
    }

    $scope.generate = () => {
        $scope.rng()
        
        if ($scope.num == 56 || $scope.num == 3 || $scope.num == 4 || $scope.num == 5 || $scope.num == 11 || $scope.num == 18) {
            $scope.generate()
        }
    }
})