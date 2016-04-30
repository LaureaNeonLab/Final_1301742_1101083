var ionicApp = angular.module('starter', ['ionic']);
 
ionicApp.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
 
ionicApp.controller("ExampleController", function($scope) {
 
    $scope.images = [];
 
    $scope.loadImages = function() {
        for(var i = 0; i < 100; i++) {
            $scope.images.push({id: i, src:"https://www.xiaohongshu.com/discovery/recommend"});
        }
    }
 
});