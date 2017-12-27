module.exports = function(mainApp) {
    mainApp.controller('homeController', ['$scope',
        function ($scope) {
            $scope.title = 'Hello';
        }
    ])
}