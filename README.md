Angular Mouse Lapse
===================

AngularJS module that enables the user to cycle through a sequence of images simply by moving the mouse horizontally within the browser window.

The directive
-------------

The element directive 'mouse-lapse' takes a single parameter 'images' which can be either an array of image URL's, or array of objects that contain a 'url' property (at minimum) and a 'label' property (optional).

Usage
-----

### Controller ###

    var myCtrl = angular.controller('myCtrl', function($scope) {
        $scope.imageURLArr = [
            'images/img1.jpg',
            'images/img2.jpg',
            'images/img3.jpg',
            'images/img4.jpg',
        ];

        $scope.imageObjArr = [
            {
                url: 'images/img1.jpg',
                label: 'Image 1'
            },
            {
                url: 'images/img2.jpg',
                label: 'Image 2'
            },
            {
                url: 'images/img3.jpg',
                label: 'Image 3'
            },
            {
                url: 'images/img3.jpg',
                label: 'Image 3'
            }
        ];
    });

### Page ###

    <h1>Images from array of URL's</h1>
    <mouse-lapse images="imageURLArr"></mouse-lapse>

    <h1>Images with labels</h1>
    <mouse-lapse images="imageObjArr"></mouse-lapse>
