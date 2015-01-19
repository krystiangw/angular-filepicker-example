'use strict';

angular.module('angularFilepickerExample')
.controller('GalleryCtrl', function ($scope, localStorageService, angularFilepicker) {
	$scope.files = localStorageService.get('files') || [];
	angularFilepicker.setKey('Av6PexkFtTuK4YXaE3T93z');

	$scope.pickFile = pickFile;

	function pickFile(){
		angularFilepicker.pick(
			{mimetype: 'image/*'},
			onSuccess
		);
	};

	function onSuccess(Blob){
		$scope.files.push(Blob);
		localStorageService.set('files', $scope.files);
		$scope.$apply();
	};

});
