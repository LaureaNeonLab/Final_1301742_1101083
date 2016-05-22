// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('GalleryCtrl', function($scope, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {

  $scope.allImages = [{
    src: 'img/pic1.jpg'
  }, {
    src: 'img/pic2.jpg'
  }, {
    src: 'img/pic3.jpg'
   }, {
    src: 'img/pic4.png'
      }, {
    src: 'img/pic5.jpg'
  }];

  $scope.zoomMin = 1;

  $scope.showImages = function(index) {
    $scope.activeSlide = index;
    $scope.showModal('templates/gallery-zoomview.html');
  };

  $scope.showModal = function(templateUrl) {
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove()
  };

  $scope.updateSlideStatus = function(slide) {
    var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
    if (zoomFactor == $scope.zoomMin) {
      $ionicSlideBoxDelegate.enableSlide(true);
    } else {
      $ionicSlideBoxDelegate.enableSlide(false);
    }
  };
});

$ionicPlatform.ready(function() {
   $cordovaNativeAudio
   .preloadSimple('click', 'js/click.mp3')
	
   .then(function (msg) {
      console.log(msg);
   }, function (error) {
      console.log(error);
   });

   $cordovaNativeAudio.preloadComplex('click', 'js/click.mp3', 1, 1)
	
   .then(function (msg) {
      console.log(msg);
   }, function (error) {
      console.error(error);
   });
	
    $scope.playAudio = function () {
   $cordovaNativeAudio.play('click');
};

$scope.loopAudio = function () {
   $cordovaNativeAudio.loop('click');

   $timeout(function () {
      $cordovaNativeAudio.stop('click');
      $cordovaNativeAudio.unload('click');
   }, 5000);
}

$( "#toggleform" ).on( "click", function() {
  $('#hideform').toggle();
});
});