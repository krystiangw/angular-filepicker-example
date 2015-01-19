'use strict';

angular.module('angularFilepicker', [])
.service('angularFilepicker', function($window){
	return $window.filepicker;
});