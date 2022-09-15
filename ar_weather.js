var coordinates = {}
$(document).ready(function(){
    getcoordinates()
    get_weather()
})

function getcoordinates(){
  var searchParams = new URLSearchParams(windows.location.search)
  if(searchParams.has('source')&&searchParams.has('destination')){
      var source = searchParams.get('source')
      var destination = searchParams.get('destination')
      cooridnates.source_lat = source.split(';')[0]
      cooridnates.source_lon = source.split(';')[1]
      cooridnates.destination_lat = destination.split(';')[0]
      cooridnates.destination_lon = destination.split(';')[1]
   } else {
     alert('Co-ordinates are not selected properly')
     window.history.back()      
  }
}

function get_weather(){
  $.ajax({
    url: 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}',
    type: "get",
    success: function(response){
       let name = response.name
       let weather = response.weather[0].main
       $('#scene_container').append(
        <a-entity gps-entity-place='latitude: ${steps[i].maneuver.location[1]},longitude: ${steps[i].maneuver.location[0]}'>
          <a-entity>
            <a-text height='50'  value='Weather forecast is ${weather} in ${name}'></a-text>
          </a-entity>
        </a-entity>
       )
    }
  })
}