mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbGFsYW4iLCJhIjoiY2xoM3FrN3d4MXEyeTNtbXB6bnM1cW5rMyJ9.s55ctrsdKyQzDCEWzq0tQw';
var map
function mapinit(){
    map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/alalalan/clh3qlu20019801pa8esb4ph3',
      center: [-79.41531716819321, 43.6545918714024], // starting center in [lng, lat]
      zoom: 10 // starting zoom
    });
    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
      })
      );
      map.addControl(new mapboxgl.NavigationControl());
      var mq = window.matchMedia( "(min-width: 420px)" );

      if (mq.matches){
          map.setZoom(10); //set map zoom level for desktop size
      } else {
          map.setZoom(7); //set map zoom level for mobile size
      };

    feedData()
}

function feedData(){
  fetch('https://photobucket-a055b-default-rtdb.firebaseio.com/null.json')
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    var ids = Object.keys(data)
    for (i=0;i<ids.length;i++){
      // create the popup
  var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
  '<p> Status: ' + data[ids[i]].status + '<p> <img src='+data[ids[i]].image + '> <p> Email:' + data[ids[i]].email+'</p>'
  );
   
  // create DOM element for the marker
  const el = document.createElement('div');
  el.id = 'marker';
   
  // create the marker
  new mapboxgl.Marker()
  .setLngLat([data[ids[i]].location.longitude,data[ids[i]].location.latitude])
  .setPopup(popup) // sets a popup on this marker
  .addTo(map);
    }
  })
}