 'use strict';

 var markerService = (function() {
     var markers = [];

     function placeMarker(map, location) {
         var marker = new google.maps.Marker({
             position: location,
             map: map
         });

         addMarkClickListener(map, marker);
         markers.push(marker);
     }

     function addMarkClickListener(map, marker) {
         var infoWindow = new google.maps.InfoWindow();

         google.maps.event.addListener(marker, 'click', (function(marker) {
             return function() {
                 infoWindow.setContent('hello!');
                 infoWindow.open(map, marker);
             }
         })(marker));
     }

     function addMark(map) {
         google.maps.event.addListenerOnce(map, 'click', function(event) {
             placeMarker(map, event.latLng);
         });
     }

     function getMarkers() {
         console.log(markers);
         return markers;
     }

     return {
         addMark: addMark,
         getMarkers: getMarkers,
     }

 })();