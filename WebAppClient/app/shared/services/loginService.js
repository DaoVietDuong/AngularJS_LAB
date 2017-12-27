
module.exports = function loginService(mainApp) {
    var loginService = mainApp.factory('loginService',
        function () {
            var service = {};
            function cong(a, b) {
                return a * b;
            }
            service.caculate = cong;
            return service;
        })
}