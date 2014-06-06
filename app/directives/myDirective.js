/**
 * Usage:
 *
 *  <!-- Note: imageArr should be an array of image src urls -->
 *  <mouse-lapse images="imageArr"></mouse-lapse>
 *
 * @author  https://github.com/lukemcfarlane
 * @date    June 2014
 */
app.directive('mouseLapse', function() {
	var makeActive = function(index, arr) {
		for (var i = 0; i < arr.length; i++) {
			arr[i].active = false;
		}
		arr[index].active = true;
	};
	return {
		restrict: 'E',
		replace: true,
		scope: {
			images: '='
		},
		controller: function($scope, $element, $window) {
			$scope.imageDataArr = [];
			for (var i = 0; i < $scope.images.length; i++) {
				$scope.imageDataArr.push({
					index: i,
					url: $scope.images[i],
					active: false
				});
			}

			makeActive(0, $scope.imageDataArr);

			var windowWidth = $window.innerWidth;
			var numCols = $scope.imageDataArr.length;

			$element.on('mousemove', function($e) {
				var mouseX = $e.clientX;
				var col = Math.floor((mouseX / windowWidth) * numCols);
				makeActive(col, $scope.imageDataArr);
				$scope.$apply();
			});
		},
		template: '<div class="ml-container" >' +
			'<div class="ml-image-container">' +
			'<img ng-repeat="img in imageDataArr" ng-src="{{ img.url }}" ng-show="img.active"></img>' +
			'</div>' +
			'</div>'
	};
});