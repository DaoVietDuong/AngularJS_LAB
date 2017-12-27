webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var mainApp = angular.module('mainApp', ["ui.router"]);
/* eslint-enable */

/* eslint-disable */
mainApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        template: __webpack_require__(3),
        controller: "homeController"
    }).state('login', {
        url: '/login',
        template: __webpack_require__(4),
        controller: "loginController"
    });

    $urlRouterProvider.otherwise('/');
}]);

__webpack_require__(5)(mainApp);
__webpack_require__(6)(mainApp);
__webpack_require__(7)(mainApp);

module.exports = mainApp;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    HeLLOOO\r\n    <h1>\r\n        {{title}}\r\n    </h1>\r\n</div>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <div class=\"imgcontainer\">\r\n      <img src=\"img_avatar2.png\" alt=\"Avatar\" class=\"avatar\">\r\n    </div>\r\n  \r\n    <div class=\"container\">\r\n      <label><b>Username</b></label>\r\n      <input type=\"text\" placeholder=\"Enter Username\" name=\"uname\" required>\r\n  \r\n      <label><b>Password</b></label>\r\n      <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\r\n  \r\n      <button type=\"submit\">Login</button>\r\n      <input type=\"checkbox\" checked=\"checked\"> Remember me\r\n    </div>\r\n\r\n    <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n      <button type=\"button\" class=\"cancelbtn\">Cancel</button>\r\n      <span class=\"psw\">Forgot <a href=\"#\">password?</a></span>\r\n    </div>\r\n  </form>"

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (mainApp) {
    mainApp.controller('loginController', ['$scope', 'loginService', function ($scope, loginService) {
        $scope.hello = loginService.caculate(1, 2);
    }]);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (mainApp) {
    mainApp.controller('homeController', ['$scope', function ($scope) {
        $scope.title = 'Hello';
    }]);
};

/***/ })
],[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC9zdHlsZXMvc3R5bGVDdXN0b20uY3NzIiwid2VicGFjazovLy8uL2FwcC92aWV3cy9ob21lLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXdzL2xvZ2luLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9zZXJ2aWNlcy9sb2dpblNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZHVsZXMvbG9naW5Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9tb2R1bGVzL2hvbWVDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIm1haW5BcHAiLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlIiwicmVxdWlyZSIsImNvbnRyb2xsZXIiLCJvdGhlcndpc2UiLCJleHBvcnRzIiwibG9naW5TZXJ2aWNlIiwiZmFjdG9yeSIsInNlcnZpY2UiLCJjb25nIiwiYSIsImIiLCJjYWN1bGF0ZSIsIiRzY29wZSIsImhlbGxvIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0EsSUFBSUEsVUFBVUMsUUFBUUMsTUFBUixDQUFlLFNBQWYsRUFBMEIsQ0FBQyxXQUFELENBQTFCLENBQWQ7QUFDQTs7QUFIQTtBQUtBRixRQUFRRyxNQUFSLENBQWUsQ0FBQyxnQkFBRCxFQUFtQixvQkFBbkIsRUFBd0MsVUFBVUMsY0FBVixFQUEwQkMsa0JBQTFCLEVBQThDO0FBQ2pHRCxtQkFDS0UsS0FETCxDQUNXLE1BRFgsRUFDbUI7QUFDWEMsYUFBSyxHQURNO0FBRVhDLGtCQUFVLG1CQUFBQyxDQUFRLENBQVIsQ0FGQztBQUdYQyxvQkFBWTtBQUhELEtBRG5CLEVBTUtKLEtBTkwsQ0FNVyxPQU5YLEVBTW9CO0FBQ1pDLGFBQUssUUFETztBQUVaQyxrQkFBVSxtQkFBQUMsQ0FBUSxDQUFSLENBRkU7QUFHWkMsb0JBQVk7QUFIQSxLQU5wQjs7QUFZQUwsdUJBQW1CTSxTQUFuQixDQUE2QixHQUE3QjtBQUNILENBZGMsQ0FBZjs7QUFnQkEsbUJBQUFGLENBQVEsQ0FBUixFQUEwQ1QsT0FBMUM7QUFDQSxtQkFBQVMsQ0FBUSxDQUFSLEVBQXFDVCxPQUFyQztBQUNBLG1CQUFBUyxDQUFRLENBQVIsRUFBb0NULE9BQXBDOztBQUVBRSxPQUFPVSxPQUFQLEdBQWlCWixPQUFqQixDOzs7Ozs7QUN6QkEseUM7Ozs7OztBQ0FBLGdFQUFnRSxPQUFPLHdCOzs7Ozs7QUNBdkUsbXpCOzs7Ozs7Ozs7QUNDQUUsT0FBT1UsT0FBUCxHQUFpQixTQUFTQyxZQUFULENBQXNCYixPQUF0QixFQUErQjtBQUM1Q0EsWUFBUWMsT0FBUixDQUFnQixjQUFoQixFQUNJLFlBQVk7QUFDUixZQUFJQyxVQUFVLEVBQWQ7QUFDQSxpQkFBU0MsSUFBVCxDQUFjQyxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQjtBQUNoQixtQkFBT0QsSUFBSUMsQ0FBWDtBQUNIO0FBQ0RILGdCQUFRSSxRQUFSLEdBQW1CSCxJQUFuQjtBQUNBLGVBQU9ELE9BQVA7QUFDSCxLQVJMO0FBU0gsQ0FWRCxDOzs7Ozs7Ozs7QUNBQWIsT0FBT1UsT0FBUCxHQUFpQixVQUFTWixPQUFULEVBQWtCO0FBQy9CQSxZQUFRVSxVQUFSLENBQW1CLGlCQUFuQixFQUFzQyxDQUFDLFFBQUQsRUFBVyxjQUFYLEVBQ2xDLFVBQVVVLE1BQVYsRUFBa0JQLFlBQWxCLEVBQWdDO0FBQzVCTyxlQUFPQyxLQUFQLEdBQWVSLGFBQWFNLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsQ0FBZjtBQUNILEtBSGlDLENBQXRDO0FBS0gsQ0FORCxDOzs7Ozs7Ozs7QUNEQWpCLE9BQU9VLE9BQVAsR0FBaUIsVUFBU1osT0FBVCxFQUFrQjtBQUMvQkEsWUFBUVUsVUFBUixDQUFtQixnQkFBbkIsRUFBcUMsQ0FBQyxRQUFELEVBQ2pDLFVBQVVVLE1BQVYsRUFBa0I7QUFDZEEsZUFBT0UsS0FBUCxHQUFlLE9BQWY7QUFDSCxLQUhnQyxDQUFyQztBQUtILENBTkQsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCAnLi9zdHlsZXMvc3R5bGVDdXN0b20nO1xudmFyIG1haW5BcHAgPSBhbmd1bGFyLm1vZHVsZSgnbWFpbkFwcCcsIFtcInVpLnJvdXRlclwiXSk7XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbm1haW5BcHAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJyxmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdmlld3MvaG9tZS5odG1sJyksXG4gICAgICAgICAgICBjb250cm9sbGVyOiBcImhvbWVDb250cm9sbGVyXCJcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKCdsb2dpbicsIHtcbiAgICAgICAgICAgIHVybDogJy9sb2dpbicsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi92aWV3cy9sb2dpbi5odG1sJyksXG4gICAgICAgICAgICBjb250cm9sbGVyOiBcImxvZ2luQ29udHJvbGxlclwiXG4gICAgICAgIH0pO1xuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufV0pO1xuXG5yZXF1aXJlKCcuL3NoYXJlZC9zZXJ2aWNlcy9sb2dpblNlcnZpY2UnKShtYWluQXBwKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9sb2dpbkNvbnRyb2xsZXInKShtYWluQXBwKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9ob21lQ29udHJvbGxlcicpKG1haW5BcHApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1haW5BcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9zdHlsZXMvc3R5bGVDdXN0b20uY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcbiAgICBIZUxMT09PXFxyXFxuICAgIDxoMT5cXHJcXG4gICAgICAgIHt7dGl0bGV9fVxcclxcbiAgICA8L2gxPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvdmlld3MvaG9tZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiaW1nY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICA8aW1nIHNyYz1cXFwiaW1nX2F2YXRhcjIucG5nXFxcIiBhbHQ9XFxcIkF2YXRhclxcXCIgY2xhc3M9XFxcImF2YXRhclxcXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgPGxhYmVsPjxiPlVzZXJuYW1lPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBVc2VybmFtZVxcXCIgbmFtZT1cXFwidW5hbWVcXFwiIHJlcXVpcmVkPlxcclxcbiAgXFxyXFxuICAgICAgPGxhYmVsPjxiPlBhc3N3b3JkPC9iPjwvbGFiZWw+XFxyXFxuICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgUGFzc3dvcmRcXFwiIG5hbWU9XFxcInBzd1xcXCIgcmVxdWlyZWQ+XFxyXFxuICBcXHJcXG4gICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCI+TG9naW48L2J1dHRvbj5cXHJcXG4gICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNoZWNrZWQ9XFxcImNoZWNrZWRcXFwiPiBSZW1lbWJlciBtZVxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxXFxcIj5cXHJcXG4gICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNhbmNlbGJ0blxcXCI+Q2FuY2VsPC9idXR0b24+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInBzd1xcXCI+Rm9yZ290IDxhIGhyZWY9XFxcIiNcXFwiPnBhc3N3b3JkPzwvYT48L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvdmlld3MvbG9naW4uaHRtbFxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbG9naW5TZXJ2aWNlKG1haW5BcHApIHtcbiAgICBtYWluQXBwLmZhY3RvcnkoJ2xvZ2luU2VydmljZScsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlID0ge307XG4gICAgICAgICAgICBmdW5jdGlvbiBjb25nKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAqIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXJ2aWNlLmNhY3VsYXRlID0gY29uZztcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlO1xuICAgICAgICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NoYXJlZC9zZXJ2aWNlcy9sb2dpblNlcnZpY2UuanMiLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obWFpbkFwcCkge1xuICAgIG1haW5BcHAuY29udHJvbGxlcignbG9naW5Db250cm9sbGVyJywgWyckc2NvcGUnLCAnbG9naW5TZXJ2aWNlJyxcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgbG9naW5TZXJ2aWNlKSB7XG4gICAgICAgICAgICAkc2NvcGUuaGVsbG8gPSBsb2dpblNlcnZpY2UuY2FjdWxhdGUoMSwgMik7XG4gICAgICAgIH1cbiAgICBdKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL21vZHVsZXMvbG9naW5Db250cm9sbGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtYWluQXBwKSB7XHJcbiAgICBtYWluQXBwLmNvbnRyb2xsZXIoJ2hvbWVDb250cm9sbGVyJywgWyckc2NvcGUnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRpdGxlID0gJ0hlbGxvJztcclxuICAgICAgICB9XHJcbiAgICBdKVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL21vZHVsZXMvaG9tZUNvbnRyb2xsZXIuanMiXSwic291cmNlUm9vdCI6IiJ9