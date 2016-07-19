define(['angular','./sample-module'], function(angular,controllers) {
    'use strict';
    
    controllers.controller('DemoCtrl',['$scope',function($scope){
        $scope.clicked = function(){
            window.location = '/hellodemo';
		};
	}]);
});
