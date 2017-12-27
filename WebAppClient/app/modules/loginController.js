
module.exports = function loginCtrl(mainApp) {
    var loginCtrl = mainApp.controller('loginController', ['$scope', 'loginService',
        function ($scope, loginService) {
            $scope.hello = loginService.caculate(1, 2);
        }
    ])
}