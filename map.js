let latitude= 22.7868542,longitude= 88.3643296

$(document).ready(function(){
    alert('Allow the device to access your location')
    initGeoLocation()
})

$(function(){
    $('#navigation-button').click(function(){
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
    })
})

function initGeoLocation(){
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(success);
    } else {
      alert('Sorry your browser does not support geolocate services')
    }
}

function success(){
 longitude = poistion.coords.longitude;
 latitude = position.coords.latitude;

 mapboxgl.accessToken = "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA";

 var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [longitude,latitude],
  zoom: 16
 })

var img1 = document.querySelector('#gateway');
var img2 = document.querySelector('#gate');
var img3 = document.querySelector('#amber');
var img4 = document.querySelector('#lotus');
var img5 = document.querySelector('#taj')

var marker1 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([72.834641,18.922064])
.addTo(map);

var marker2 = new mapboxgl.Marker({
    element: img2
})
.setLngLat([77.229446,28.612894])
.addTo(map)

var marker3 = new mapboxgl.Marker({
   element: img3
})
.setLngLat([75.850700,26.985901])
.addTo(map)

var marker4 = new mapboxgl.Marker({
    element: img4
 })
 .setLngLat([77.259132,28.553558])
 .addTo(map)

 var marker5 = new mapboxgl.Marker({
    element: img5
 })
 .setLngLat([78.042068,27.173891])
 .addTo(map)

map.addControl(
    new MapBoxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)

map.addControl(
    new MapBoxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }).on('result', function(e){
        destination = e.result.center
    })
)
}
