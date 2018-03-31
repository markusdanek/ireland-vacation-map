/* global google */
function initMap() {
    var pointA = new google.maps.LatLng(53.3163803, -6.2676661),
        pointB = new google.maps.LatLng(54.6346071, -5.9392891),
        pointC = new google.maps.LatLng(54.9501499, -7.7157642),
        pointD = new google.maps.LatLng(54.27115,   -8.4652054),
        pointE = new google.maps.LatLng(53.2710449, -9.0563711),
        pointF = new google.maps.LatLng(51.7500401, -9.5609772),
        pointG = new google.maps.LatLng(52.6591599, -7.2587127),
        pointH = new google.maps.LatLng(53.3569955, -6.258424),
        pointI = new google.maps.LatLng(52.9713331, -9.4322302),
        myOptions = {
            zoom: 7,
            center: pointA
        },
        map = new google.maps.Map(document.getElementById('map-canvas'), myOptions),
        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer({
            map: map
        }),
        markerA = new google.maps.Marker({
            position: pointA,
            title: "point A",
            label: "A",
            map: map
        }),
        markerB = new google.maps.Marker({
            position: pointB,
            title: "point B",
            label: "B",
            map: map
        }),
        markerC = new google.maps.Marker({
            position: pointC,
            title: "point C",
            label: "C",
            map: map
        }),
        markerD = new google.maps.Marker({
            position: pointD,
            title: "point D",
            label: "D",
            map: map
        }),
        markerE = new google.maps.Marker({
            position: pointE,
            title: "point E",
            label: "E",
            map: map
        }),
        markerF = new google.maps.Marker({
            position: pointF,
            title: "point F",
            label: "F",
            map: map
        }),
        markerG = new google.maps.Marker({
            position: pointG,
            title: "point G",
            label: "G",
            map: map
        }),
        markerH = new google.maps.Marker({
            position: pointH,
            title: "point H",
            label: "H",
            map: map
        }),
        markerI = new google.maps.Marker({
            position: pointI,
            title: "Cliffs of Moher",
            map: map
        }),
        infowindowI = new google.maps.InfoWindow({
            content: 'https://www.cliffsofmoher.ie/'
        });
        markerI.addListener('click', function() {
            infowindowI.open(map, markerI);
        });
        calculateAndDisplayRoute(directionsService, map, pointA, pointB);
        calculateAndDisplayRoute(directionsService, map, pointB, pointC);
        calculateAndDisplayRoute(directionsService, map, pointC, pointD);
        calculateAndDisplayRoute(directionsService, map, pointD, pointE);
        calculateAndDisplayRoute(directionsService, map, pointE, pointF);
        calculateAndDisplayRoute(directionsService, map, pointF, pointG);
        calculateAndDisplayRoute(directionsService, map, pointG, pointH);
      }

      function calculateAndDisplayRoute(directionsService, map, pointA, pointB) {
        directionsService.route({
          origin: pointA,
          destination: pointB,
          avoidTolls: false,
          avoidHighways: false,
          travelMode: google.maps.TravelMode.DRIVING
        }, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            var directionsDisplay = new google.maps.DirectionsRenderer({
              map: map,
              suppressMarkers: true,
              preserveViewport: true
            });
            directionsDisplay.setDirections(response);
          } else {
            console.error('Directions request failed due to ' + status);
          }
        });
      }

      initMap();
