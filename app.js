function initMap() {
    var pointA = new google.maps.LatLng(53.3163803, -6.2676661),
        pointB = new google.maps.LatLng(54.6346071, -5.9392891),
        pointC = new google.maps.LatLng(54.9501499, -7.7157642),
        pointD = new google.maps.LatLng(54.27115,   -8.4652054),
        pointE = new google.maps.LatLng(53.2710449, -9.0563711),
        pointF = new google.maps.LatLng(51.7500401, -9.5609772),
        pointG = new google.maps.LatLng(52.6591599, -7.2587127),
        pointH = new google.maps.LatLng(53.3569955, -6.258424),
        myOptions = {
            zoom: 3,
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
        });

    // get route from A to B
    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);
    // calculateAndDisplayRoute(directionsService, directionsDisplay, pointB, pointC);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
    directionsService.route({
        origin: pointA,
        destination: pointB,
        avoidTolls: false,
        avoidHighways: false,
        travelMode: google.maps.TravelMode.DRIVING
    }, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            console.error('Directions request failed due to ' + status);
        }
    });
}

initMap();
