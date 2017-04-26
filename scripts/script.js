 'use strict';

 var map;

 function initMap() {
     map = mapService.getInitializedMap();
 }

 function addMark() {
     markerService.addMark(map);
 }

 function buildRoute() {
     builderService.buildRoute(map);
 }