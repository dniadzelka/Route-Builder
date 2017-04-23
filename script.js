 var map;

 function initMap() {
     map = new google.maps.Map(document.getElementById('mapContainer'), {
         center: {
             lat: 53.904540,
             lng: 27.561524
         },
         zoom: 12
     });
 }

 function placeMarker(location) {
     var marker = new google.maps.Marker({
         position: location,
         map: map
     });
 }

 function addPoint() {
     google.maps.event.addListenerOnce(map, 'click', function(event) {
         placeMarker(event.latLng);
     });
 }