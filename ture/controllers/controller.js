/**
 * Created by yumkai on 2017/2/9.
 */
app.controller('appCtr',['$scope',function ($scope) {
    $scope.name = '1';
}]);
app.controller('showCtr',['$scope',function ($scope) {
    $scope.hi = 'test';
    $scope.say = function (t) {
        console.log(t);
    };
    $scope.obj = 'Jackc';
}]);
app.filter('testCd',function () {
    return function (input) {
        var obj = {}, result = [];
        if(input) {
            for (var i = 0, l = input.length; i < l; i++) {
                if (!obj[input[i]]) {
                    obj[input[i]] = true;
                    result.push(input[i]);
                }
            }
            return result;
        }
    }
});
app.controller('TestController', function($scope, $interpolate) {
    $scope.$watch('emailBody', function(newVal,oldVal) {
        if (newVal !== oldVal) {
            var template = $interpolate(newVal);
            $scope.previewText =
                template({hi: $scope.name,cd : '2'});
        }
})
    $scope.data = [1,2,2,1,3,22,3,3,3,5,6];
    $scope.sayName = '[a-z]+';
    $scope.say = {};
});