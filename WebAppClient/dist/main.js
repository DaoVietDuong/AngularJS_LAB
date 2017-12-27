webpackJsonp([0],{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(54);

var mainApp = angular.module('mainApp', ["ui.router"]);
/* eslint-enable */

/* eslint-disable */
mainApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        template: __webpack_require__(55),
        controller: "homeController"
    }).state('login', {
        url: '/login',
        template: __webpack_require__(56),
        controller: "loginController"
    });

    $urlRouterProvider.otherwise('/');
}]);

__webpack_require__(57)(mainApp);
__webpack_require__(58)(mainApp);
__webpack_require__(59)(mainApp);

module.exports = mainApp;

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    HeLLOOO\r\n    <h1>\r\n        {{title}}\r\n    </h1>\r\n</div>"

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <div class=\"imgcontainer\">\r\n      <img src=\"img_avatar2.png\" alt=\"Avatar\" class=\"avatar\">\r\n    </div>\r\n  \r\n    <div class=\"container\">\r\n      <label><b>Username</b></label>\r\n      <input type=\"text\" placeholder=\"Enter Username\" name=\"uname\" required>\r\n  \r\n      <label><b>Password</b></label>\r\n      <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\r\n  \r\n      <button type=\"submit\">Login</button>\r\n      <input type=\"checkbox\" checked=\"checked\"> Remember me\r\n    </div>\r\n\r\n    <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n      <button type=\"button\" class=\"cancelbtn\">Cancel</button>\r\n      <span class=\"psw\">Forgot <a href=\"#\">password?</a></span>\r\n    </div>\r\n  </form>"

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function loginService(mainApp) {
    mainApp.factory('loginService', function () {
        var service = {};
        function cong(a, b) {
            return a * b;
        }
        service.caculate = cong;
        return service;
    });
};

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (mainApp) {
    mainApp.controller('loginController', ['$scope', 'loginService', function ($scope, loginService) {
        $scope.hello = loginService.caculate(1, 2);
    }]);
};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (mainApp) {
    mainApp.controller('homeController', ['$scope', function ($scope) {
        $scope.title = 'Hello';
    }]);
};

/***/ })

},[52]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC9zdHlsZXMvc3R5bGVDdXN0b20uY3NzIiwid2VicGFjazovLy8uL2FwcC92aWV3cy9ob21lLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXdzL2xvZ2luLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9zZXJ2aWNlcy9sb2dpblNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZHVsZXMvbG9naW5Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9tb2R1bGVzL2hvbWVDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIm1haW5BcHAiLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlIiwicmVxdWlyZSIsImNvbnRyb2xsZXIiLCJvdGhlcndpc2UiLCJleHBvcnRzIiwibG9naW5TZXJ2aWNlIiwiZmFjdG9yeSIsInNlcnZpY2UiLCJjb25nIiwiYSIsImIiLCJjYWN1bGF0ZSIsIiRzY29wZSIsImhlbGxvIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQSxJQUFJQSxVQUFVQyxRQUFRQyxNQUFSLENBQWUsU0FBZixFQUEwQixDQUFDLFdBQUQsQ0FBMUIsQ0FBZDtBQUNBOztBQUhBO0FBS0FGLFFBQVFHLE1BQVIsQ0FBZSxDQUFDLGdCQUFELEVBQW1CLG9CQUFuQixFQUF3QyxVQUFVQyxjQUFWLEVBQTBCQyxrQkFBMUIsRUFBOEM7QUFDakdELG1CQUNLRSxLQURMLENBQ1csTUFEWCxFQUNtQjtBQUNYQyxhQUFLLEdBRE07QUFFWEMsa0JBQVUsbUJBQUFDLENBQVEsRUFBUixDQUZDO0FBR1hDLG9CQUFZO0FBSEQsS0FEbkIsRUFNS0osS0FOTCxDQU1XLE9BTlgsRUFNb0I7QUFDWkMsYUFBSyxRQURPO0FBRVpDLGtCQUFVLG1CQUFBQyxDQUFRLEVBQVIsQ0FGRTtBQUdaQyxvQkFBWTtBQUhBLEtBTnBCOztBQVlBTCx1QkFBbUJNLFNBQW5CLENBQTZCLEdBQTdCO0FBQ0gsQ0FkYyxDQUFmOztBQWdCQSxtQkFBQUYsQ0FBUSxFQUFSLEVBQTBDVCxPQUExQztBQUNBLG1CQUFBUyxDQUFRLEVBQVIsRUFBcUNULE9BQXJDO0FBQ0EsbUJBQUFTLENBQVEsRUFBUixFQUFvQ1QsT0FBcEM7O0FBRUFFLE9BQU9VLE9BQVAsR0FBaUJaLE9BQWpCLEM7Ozs7Ozs7QUN6QkEseUM7Ozs7Ozs7QUNBQSxnRUFBZ0UsT0FBTyx3Qjs7Ozs7OztBQ0F2RSxtekI7Ozs7Ozs7Ozs7QUNDQUUsT0FBT1UsT0FBUCxHQUFpQixTQUFTQyxZQUFULENBQXNCYixPQUF0QixFQUErQjtBQUM1Q0EsWUFBUWMsT0FBUixDQUFnQixjQUFoQixFQUNJLFlBQVk7QUFDUixZQUFJQyxVQUFVLEVBQWQ7QUFDQSxpQkFBU0MsSUFBVCxDQUFjQyxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQjtBQUNoQixtQkFBT0QsSUFBSUMsQ0FBWDtBQUNIO0FBQ0RILGdCQUFRSSxRQUFSLEdBQW1CSCxJQUFuQjtBQUNBLGVBQU9ELE9BQVA7QUFDSCxLQVJMO0FBU0gsQ0FWRCxDOzs7Ozs7Ozs7O0FDQUFiLE9BQU9VLE9BQVAsR0FBaUIsVUFBU1osT0FBVCxFQUFrQjtBQUMvQkEsWUFBUVUsVUFBUixDQUFtQixpQkFBbkIsRUFBc0MsQ0FBQyxRQUFELEVBQVcsY0FBWCxFQUNsQyxVQUFVVSxNQUFWLEVBQWtCUCxZQUFsQixFQUFnQztBQUM1Qk8sZUFBT0MsS0FBUCxHQUFlUixhQUFhTSxRQUFiLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLENBQWY7QUFDSCxLQUhpQyxDQUF0QztBQUtILENBTkQsQzs7Ozs7Ozs7OztBQ0RBakIsT0FBT1UsT0FBUCxHQUFpQixVQUFTWixPQUFULEVBQWtCO0FBQy9CQSxZQUFRVSxVQUFSLENBQW1CLGdCQUFuQixFQUFxQyxDQUFDLFFBQUQsRUFDakMsVUFBVVUsTUFBVixFQUFrQjtBQUNkQSxlQUFPRSxLQUFQLEdBQWUsT0FBZjtBQUNILEtBSGdDLENBQXJDO0FBS0gsQ0FORCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZUN1c3RvbSc7XG52YXIgbWFpbkFwcCA9IGFuZ3VsYXIubW9kdWxlKCdtYWluQXBwJywgW1widWkucm91dGVyXCJdKTtcbi8qIGVzbGludC1lbmFibGUgKi9cblxubWFpbkFwcC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdob21lJywge1xuICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi92aWV3cy9ob21lLmh0bWwnKSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwiaG9tZUNvbnRyb2xsZXJcIlxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2xvZ2luJywge1xuICAgICAgICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3ZpZXdzL2xvZ2luLmh0bWwnKSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwibG9naW5Db250cm9sbGVyXCJcbiAgICAgICAgfSk7XG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XSk7XG5cbnJlcXVpcmUoJy4vc2hhcmVkL3NlcnZpY2VzL2xvZ2luU2VydmljZScpKG1haW5BcHApO1xucmVxdWlyZSgnLi9tb2R1bGVzL2xvZ2luQ29udHJvbGxlcicpKG1haW5BcHApO1xucmVxdWlyZSgnLi9tb2R1bGVzL2hvbWVDb250cm9sbGVyJykobWFpbkFwcCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbWFpbkFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3N0eWxlcy9zdHlsZUN1c3RvbS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICBIZUxMT09PXFxyXFxuICAgIDxoMT5cXHJcXG4gICAgICAgIHt7dGl0bGV9fVxcclxcbiAgICA8L2gxPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvdmlld3MvaG9tZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImltZ2NvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgPGltZyBzcmM9XFxcImltZ19hdmF0YXIyLnBuZ1xcXCIgYWx0PVxcXCJBdmF0YXJcXFwiIGNsYXNzPVxcXCJhdmF0YXJcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIFxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgIDxsYWJlbD48Yj5Vc2VybmFtZTwvYj48L2xhYmVsPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgVXNlcm5hbWVcXFwiIG5hbWU9XFxcInVuYW1lXFxcIiByZXF1aXJlZD5cXHJcXG4gIFxcclxcbiAgICAgIDxsYWJlbD48Yj5QYXNzd29yZDwvYj48L2xhYmVsPlxcclxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIFBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwc3dcXFwiIHJlcXVpcmVkPlxcclxcbiAgXFxyXFxuICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiPkxvZ2luPC9idXR0b24+XFxyXFxuICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjaGVja2VkPVxcXCJjaGVja2VkXFxcIj4gUmVtZW1iZXIgbWVcXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6I2YxZjFmMVxcXCI+XFxyXFxuICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjYW5jZWxidG5cXFwiPkNhbmNlbDwvYnV0dG9uPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJwc3dcXFwiPkZvcmdvdCA8YSBocmVmPVxcXCIjXFxcIj5wYXNzd29yZD88L2E+PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3ZpZXdzL2xvZ2luLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsb2dpblNlcnZpY2UobWFpbkFwcCkge1xuICAgIG1haW5BcHAuZmFjdG9yeSgnbG9naW5TZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNlcnZpY2UgPSB7fTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvbmcoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICogYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlcnZpY2UuY2FjdWxhdGUgPSBjb25nO1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgICAgIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2hhcmVkL3NlcnZpY2VzL2xvZ2luU2VydmljZS5qcyIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtYWluQXBwKSB7XG4gICAgbWFpbkFwcC5jb250cm9sbGVyKCdsb2dpbkNvbnRyb2xsZXInLCBbJyRzY29wZScsICdsb2dpblNlcnZpY2UnLFxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCBsb2dpblNlcnZpY2UpIHtcbiAgICAgICAgICAgICRzY29wZS5oZWxsbyA9IGxvZ2luU2VydmljZS5jYWN1bGF0ZSgxLCAyKTtcbiAgICAgICAgfVxuICAgIF0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvbW9kdWxlcy9sb2dpbkNvbnRyb2xsZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1haW5BcHApIHtcclxuICAgIG1haW5BcHAuY29udHJvbGxlcignaG9tZUNvbnRyb2xsZXInLCBbJyRzY29wZScsXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICAgICAgICAgICAkc2NvcGUudGl0bGUgPSAnSGVsbG8nO1xyXG4gICAgICAgIH1cclxuICAgIF0pXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvbW9kdWxlcy9ob21lQ29udHJvbGxlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=