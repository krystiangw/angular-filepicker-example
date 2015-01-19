'use strict';

angular.module('angularFilepickerExample', ['LocalStorageModule', 'ngSanitize', 'ngRoute', 'angularFilepicker'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/welcome/welcome.html',
      })
      .when('/gallery', {
        templateUrl: 'app/gallery/gallery.html',
        controller: 'GalleryCtrl'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'GalleryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
