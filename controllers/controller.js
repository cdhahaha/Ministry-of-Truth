/**
 * Created by yumkai on 2017/2/9.
 */
app
    .controller('appCtr',['$scope',function ($scope) {
    $scope.name = '1';
}])
    .controller('showController',['$scope',function ($scope) {
    $scope.hi = 'test';
    $scope.say = function (t) {
        console.log(t);
    };
    $scope.obj = 'Jackc';
}])
    .controller('TestController', function($scope, $interpolate) {
    $scope.$watch('emailBody', function(newVal,oldVal) {
        if (newVal !== oldVal) {
            var template = $interpolate(newVal);
            $scope.previewText =
                template({hi: $scope.name,cd : '2'});
        }
});
    $scope.data = [1,2,2,1,3,22,3,3,3,5,6];
    $scope.sayName = '[a-z]+';
    $scope.say = {};
})
    .controller('userCenterController',['$scope','$ionicSideMenuDelegate',function ($scope,$ionicSideMenuDelegate) {
        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
        $scope.psMsg = [
            {
                msgTitle : 'test',
                imgSrc : './style/img/test.gif',
                msg : '测试消息',
                msgSendTime : '12:10'
            },
            {
                msgTitle : 'test1',
                imgSrc : './style/img/切图.png',
                msg : '测试消息2',
                msgSendTime : '12:11'
            },
            {
                msgTitle : 'test2',
                imgSrc : './style/img/cat.jpg',
                msg : '测试消息3',
                msgSendTime : '12:12'
            }
        ]
}]);