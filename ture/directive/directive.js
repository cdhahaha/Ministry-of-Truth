/**
 * Created by yumkai on 2017/2/9.
 */
app.directive('myLocation',function () {
    return {
        restrict : 'AE',
        scope : true,
        template : '<div>子作用域{{obj}}:<input type="text" ng-model="obj"></div>',
        replace : true
    }
});
app.directive('setList',function () {
    return {
        require : 'ngModel',
        link : function (scope,ele,attr,ctr) {
            scope.$watch(attr.ngModel,function (n) {
                if(!n) return;
                console.log(n);
                if (n == 'cd') {
                    ctr.$setValidity('unique',true)
                }
            });
        }
    }
});
app.directive('ngFocus', [function() {
    var FOCUS_CLASS = "ng-focused";
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            ctrl.$focused = false;
            element.bind('focus', function(evt) {
                element.addClass(FOCUS_CLASS);
                scope.$apply(function() {
                    ctrl.$focused = true;
                });
            }).bind('blur', function(evt) {
                element.removeClass(FOCUS_CLASS);
                scope.$apply(function() {
                    ctrl.$focused = false;
                });
            });
        }
    }; }]);