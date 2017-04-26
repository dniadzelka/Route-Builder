 'use strict';

 var builderService = (function() {

     function buildRoute(map) {
         var infoWindow = new google.maps.InfoWindow();
         var directionsService = new google.maps.DirectionsService();
         var directionsDisplay = new google.maps.DirectionsRenderer();

         var locations = markerService.getMarkers();

         var request = {
             travelMode: google.maps.TravelMode.DRIVING
         };

         directionsDisplay.setMap(map);

         for (var i = 0; i < locations.length; i++) {
             if (i === 0) {
                 request.origin = locations[i].getPosition()
             } else if (i == locations.length - 1) {
                 request.destination = locations[i].getPosition();
             } else if (!request.waypoints) {
                 request.waypoints = [];
                 request.waypoints.push({
                     location: locations[i].getPosition(),
                     stopover: true
                 });
             }
         }

         directionsService.route(request, function(result, status) {
             if (status === google.maps.DirectionsStatus.OK) {
                 directionsDisplay.setDirections(result);
             }
         });
     }

     return {
         buildRoute: buildRoute
     }

 })();