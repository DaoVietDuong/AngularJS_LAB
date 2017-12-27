
module.exports = function(mainApp) {
    mainApp.controller('loginController', ['$scope', 'loginService',
        function ($scope, loginService) {
            $scope.hello = loginService.caculate(1, 2);
        }
    ])
}
