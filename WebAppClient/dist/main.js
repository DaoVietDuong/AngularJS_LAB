webpackJsonp([0],{

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(59);


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(60);

var mainApp = angular.module('mainApp', ["ui.router"]);

mainApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        template: __webpack_require__(61),
        controller: "homeController"
    }).state('login', {
        url: '/login',
        template: __webpack_require__(62),
        controller: "loginController"
    });

    $urlRouterProvider.otherwise('/');
}]);

__webpack_require__(63)(mainApp);
__webpack_require__(64)(mainApp);
__webpack_require__(65)(mainApp);

module.exports = mainApp;

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    HeLLOOO\r\n    <h1>\r\n        {{title}}\r\n    </h1>\r\n</div>"

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <div class=\"imgcontainer\">\r\n      <img src=\"img_avatar2.png\" alt=\"Avatar\" class=\"avatar\">\r\n    </div>\r\n  \r\n    <div class=\"container\">\r\n      <label><b>Username</b></label>\r\n      <input type=\"text\" placeholder=\"Enter Username\" name=\"uname\" required>\r\n  \r\n      <label><b>Password</b></label>\r\n      <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\r\n  \r\n      <button type=\"submit\">Login</button>\r\n      <input type=\"checkbox\" checked=\"checked\"> Remember me\r\n    </div>\r\n\r\n    <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n      <button type=\"button\" class=\"cancelbtn\">Cancel</button>\r\n      <span class=\"psw\">Forgot <a href=\"#\">password?</a></span>\r\n    </div>\r\n  </form>"

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function loginService(mainApp) {
    var loginService = mainApp.factory('loginService', function () {
        var service = {};
        function cong(a, b) {
            return a * b;
        }
        service.caculate = cong;
        return service;
    });
};

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function loginCtrl(mainApp) {
    var loginCtrl = mainApp.controller('loginController', ['$scope', 'loginService', function ($scope, loginService) {
        $scope.hello = loginService.caculate(1, 2);
    }]);
};

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (mainApp) {
    mainApp.controller('homeController', ['$scope', function ($scope) {
        $scope.title = 'Hello';
    }]);
};

/***/ })

},[58]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC9zdHlsZXMvc3R5bGVDdXN0b20uY3NzIiwid2VicGFjazovLy8uL2FwcC92aWV3cy9ob21lLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXdzL2xvZ2luLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9zZXJ2aWNlcy9sb2dpblNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZHVsZXMvbG9naW5Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9tb2R1bGVzL2hvbWVDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIm1haW5BcHAiLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlIiwicmVxdWlyZSIsImNvbnRyb2xsZXIiLCJvdGhlcndpc2UiLCJleHBvcnRzIiwibG9naW5TZXJ2aWNlIiwiZmFjdG9yeSIsInNlcnZpY2UiLCJjb25nIiwiYSIsImIiLCJjYWN1bGF0ZSIsImxvZ2luQ3RybCIsIiRzY29wZSIsImhlbGxvIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFJQSxVQUFVQyxRQUFRQyxNQUFSLENBQWUsU0FBZixFQUEwQixDQUFDLFdBQUQsQ0FBMUIsQ0FBZDs7QUFFQUYsUUFBUUcsTUFBUixDQUFlLENBQUMsZ0JBQUQsRUFBbUIsb0JBQW5CLEVBQXdDLFVBQVVDLGNBQVYsRUFBMEJDLGtCQUExQixFQUE4QztBQUNqR0QsbUJBQ0tFLEtBREwsQ0FDVyxNQURYLEVBQ21CO0FBQ1hDLGFBQUssR0FETTtBQUVYQyxrQkFBVSxtQkFBQUMsQ0FBUSxFQUFSLENBRkM7QUFHWEMsb0JBQVk7QUFIRCxLQURuQixFQU1LSixLQU5MLENBTVcsT0FOWCxFQU1vQjtBQUNaQyxhQUFLLFFBRE87QUFFWkMsa0JBQVUsbUJBQUFDLENBQVEsRUFBUixDQUZFO0FBR1pDLG9CQUFZO0FBSEEsS0FOcEI7O0FBWUFMLHVCQUFtQk0sU0FBbkIsQ0FBNkIsR0FBN0I7QUFDSCxDQWRjLENBQWY7O0FBZ0JBLG1CQUFBRixDQUFRLEVBQVIsRUFBMENULE9BQTFDO0FBQ0EsbUJBQUFTLENBQVEsRUFBUixFQUFxQ1QsT0FBckM7QUFDQSxtQkFBQVMsQ0FBUSxFQUFSLEVBQW9DVCxPQUFwQzs7QUFFQUUsT0FBT1UsT0FBUCxHQUFpQlosT0FBakIsQzs7Ozs7OztBQ3ZCQSx5Qzs7Ozs7OztBQ0FBLGdFQUFnRSxPQUFPLHdCOzs7Ozs7O0FDQXZFLG16Qjs7Ozs7Ozs7OztBQ0NBRSxPQUFPVSxPQUFQLEdBQWlCLFNBQVNDLFlBQVQsQ0FBc0JiLE9BQXRCLEVBQStCO0FBQzVDLFFBQUlhLGVBQWViLFFBQVFjLE9BQVIsQ0FBZ0IsY0FBaEIsRUFDZixZQUFZO0FBQ1IsWUFBSUMsVUFBVSxFQUFkO0FBQ0EsaUJBQVNDLElBQVQsQ0FBY0MsQ0FBZCxFQUFpQkMsQ0FBakIsRUFBb0I7QUFDaEIsbUJBQU9ELElBQUlDLENBQVg7QUFDSDtBQUNESCxnQkFBUUksUUFBUixHQUFtQkgsSUFBbkI7QUFDQSxlQUFPRCxPQUFQO0FBQ0gsS0FSYyxDQUFuQjtBQVNILENBVkQsQzs7Ozs7Ozs7OztBQ0FBYixPQUFPVSxPQUFQLEdBQWlCLFNBQVNRLFNBQVQsQ0FBbUJwQixPQUFuQixFQUE0QjtBQUN6QyxRQUFJb0IsWUFBWXBCLFFBQVFVLFVBQVIsQ0FBbUIsaUJBQW5CLEVBQXNDLENBQUMsUUFBRCxFQUFXLGNBQVgsRUFDbEQsVUFBVVcsTUFBVixFQUFrQlIsWUFBbEIsRUFBZ0M7QUFDNUJRLGVBQU9DLEtBQVAsR0FBZVQsYUFBYU0sUUFBYixDQUFzQixDQUF0QixFQUF5QixDQUF6QixDQUFmO0FBQ0gsS0FIaUQsQ0FBdEMsQ0FBaEI7QUFLSCxDQU5ELEM7Ozs7Ozs7Ozs7QUNEQWpCLE9BQU9VLE9BQVAsR0FBaUIsVUFBU1osT0FBVCxFQUFrQjtBQUMvQkEsWUFBUVUsVUFBUixDQUFtQixnQkFBbkIsRUFBcUMsQ0FBQyxRQUFELEVBQ2pDLFVBQVVXLE1BQVYsRUFBa0I7QUFDZEEsZUFBT0UsS0FBUCxHQUFlLE9BQWY7QUFDSCxLQUhnQyxDQUFyQztBQUtILENBTkQsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZUN1c3RvbSc7XHJcbnZhciBtYWluQXBwID0gYW5ndWxhci5tb2R1bGUoJ21haW5BcHAnLCBbXCJ1aS5yb3V0ZXJcIl0pO1xyXG5cclxubWFpbkFwcC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnaG9tZScsIHtcclxuICAgICAgICAgICAgdXJsOiAnLycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3ZpZXdzL2hvbWUuaHRtbCcpLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBcImhvbWVDb250cm9sbGVyXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgnbG9naW4nLCB7XHJcbiAgICAgICAgICAgIHVybDogJy9sb2dpbicsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3ZpZXdzL2xvZ2luLmh0bWwnKSxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogXCJsb2dpbkNvbnRyb2xsZXJcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxufV0pO1xyXG5cclxucmVxdWlyZSgnLi9zaGFyZWQvc2VydmljZXMvbG9naW5TZXJ2aWNlJykobWFpbkFwcCk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9sb2dpbkNvbnRyb2xsZXInKShtYWluQXBwKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2hvbWVDb250cm9sbGVyJykobWFpbkFwcCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1haW5BcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3N0eWxlcy9zdHlsZUN1c3RvbS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICBIZUxMT09PXFxyXFxuICAgIDxoMT5cXHJcXG4gICAgICAgIHt7dGl0bGV9fVxcclxcbiAgICA8L2gxPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvdmlld3MvaG9tZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImltZ2NvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgPGltZyBzcmM9XFxcImltZ19hdmF0YXIyLnBuZ1xcXCIgYWx0PVxcXCJBdmF0YXJcXFwiIGNsYXNzPVxcXCJhdmF0YXJcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIFxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgIDxsYWJlbD48Yj5Vc2VybmFtZTwvYj48L2xhYmVsPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgVXNlcm5hbWVcXFwiIG5hbWU9XFxcInVuYW1lXFxcIiByZXF1aXJlZD5cXHJcXG4gIFxcclxcbiAgICAgIDxsYWJlbD48Yj5QYXNzd29yZDwvYj48L2xhYmVsPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIFBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwc3dcXFwiIHJlcXVpcmVkPlxcclxcbiAgXFxyXFxuICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiPkxvZ2luPC9idXR0b24+XFxyXFxuICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjaGVja2VkPVxcXCJjaGVja2VkXFxcIj4gUmVtZW1iZXIgbWVcXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6I2YxZjFmMVxcXCI+XFxyXFxuICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjYW5jZWxidG5cXFwiPkNhbmNlbDwvYnV0dG9uPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJwc3dcXFwiPkZvcmdvdCA8YSBocmVmPVxcXCIjXFxcIj5wYXNzd29yZD88L2E+PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3ZpZXdzL2xvZ2luLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxvZ2luU2VydmljZShtYWluQXBwKSB7XHJcbiAgICB2YXIgbG9naW5TZXJ2aWNlID0gbWFpbkFwcC5mYWN0b3J5KCdsb2dpblNlcnZpY2UnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNlcnZpY2UgPSB7fTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY29uZyhhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAqIGI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VydmljZS5jYWN1bGF0ZSA9IGNvbmc7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlO1xyXG4gICAgICAgIH0pXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2hhcmVkL3NlcnZpY2VzL2xvZ2luU2VydmljZS5qcyIsIlxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxvZ2luQ3RybChtYWluQXBwKSB7XHJcbiAgICB2YXIgbG9naW5DdHJsID0gbWFpbkFwcC5jb250cm9sbGVyKCdsb2dpbkNvbnRyb2xsZXInLCBbJyRzY29wZScsICdsb2dpblNlcnZpY2UnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsIGxvZ2luU2VydmljZSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuaGVsbG8gPSBsb2dpblNlcnZpY2UuY2FjdWxhdGUoMSwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgXSlcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9tb2R1bGVzL2xvZ2luQ29udHJvbGxlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obWFpbkFwcCkge1xyXG4gICAgbWFpbkFwcC5jb250cm9sbGVyKCdob21lQ29udHJvbGxlcicsIFsnJHNjb3BlJyxcclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICAgICAgICAgICRzY29wZS50aXRsZSA9ICdIZWxsbyc7XHJcbiAgICAgICAgfVxyXG4gICAgXSlcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9tb2R1bGVzL2hvbWVDb250cm9sbGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==