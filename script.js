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