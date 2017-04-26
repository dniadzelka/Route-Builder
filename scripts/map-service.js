 'use strict';

 var mapService = (function() {
     var map;
     var minskZoom = 12;
     var minskLatitude = 53.904540;
     var minskLongitude = 27.561524;

     function getInitializedMap() {
         return new google.maps.Map(document.getElementById('mapContainer'), {
             center: {
                 lat: minskLatitude,
                 lng: minskLongitude
             },
             zoom: minskZoom
         });
     }

     function addPoint() {
         markerService.addPoint(map);
     }

     return {
         addPoint: addPoint,
         getInitializedMap: getInitializedMap
     }

 })();