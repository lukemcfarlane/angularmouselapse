Angular Mouse Lapse
===================

AngularJS module that enables the user to cycle through a sequence of images simply by moving the mouse horizontally within the browser window.

Usage
-----

### Controller ###

    var myCtrl = angular.controller('myCtrl', function($scope) {
        $scope.imageArr = [
            'images/img1.jpg',
            'images/img2.jpg',
            'images/img3.jpg',
            'images/img4.jpg',
            'images/img5.jpg',
            'images/img6.jpg'
        ];
    });

### Page ###

    <mouse-lapse images="imageArr"></mouse-lapse>
