define(['angular','./sample-module'], function(angular,controllers) {
    'use strict';
    
    controllers.controller('FormCtrl',['$scope',function($scope){
        $scope.forminfo= {};
        $scope.clicked = function(){
            window.location = '/Success';
		};
	}]);
});
