// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

var show_map =document.getElementById("btn-show-map");
var map1 =document.getElementById("map");
const iframe1= document.querySelector("iframe");


show_map.addEventListener("click", ()=>{

  
  var options = {
    enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
        };
       
        function success(pos) {
          var crd = pos.coords;
       
          console.log('Your current position is:');
          console.log(`Latitude : ${crd.latitude}`);
          console.log(`Longitude: ${crd.longitude}`);
          console.log(`More or less ${crd.accuracy} meters.`);
          iframe1.src= `https://www.google.com/maps/embed/v1/place?key=AIzaSyCt04CU8CbU6xUlrJVqdRLM2Ra6mFHtVL8&q=${crd.latitude},${crd.longitude}`;


 
          window.sessionStorage.setItem("latitude",crd.latitude);
          window.sessionStorage.setItem("longtitude",crd.longitude);
     var h =document.createElement("h2");
          var url ="http://api.positionstack.com/v1/reverse?access_key=5a4415063f1f7549303202b530a60c9c&query=${crd.latitude},${crd.longitude}"
          fetch(`https://api.positionstack.com/v1/reverse?access_key=5a4415063f1f7549303202b530a60c9c&query=${crd.latitude},${crd.longitude}`)
          .then(response => response.json())
          .then(data => {
              console.log(data)
              console.log(data.data[0].name)
              h.innerHTML =`name:${data.data[0].name} <br>
              region:${data.data[0].region}<br>
              latitude:${data.data[0].latitude}<br>
              latitude:${data.data[0].longitude}`
              map.appendChild(h);
          });
      map1.appendChild(h);
 
         
        }
       
        function error(err) {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        }
       
     navigator.geolocation.getCurrentPosition(success, error, options);





    let map;

      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          zoom: 2,
          center: new google.maps.LatLng(2.8, -187.3),
          mapTypeId: "terrain",
        });
        // Create a <script> tag and set the USGS URL as the source.
        const script = document.createElement("script");
        // This example uses a local copy of the GeoJSON stored at
        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
        script.src ="https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
        document.getElementsByTagName("head")[0].appendChild(script);
      }

      // Loop through the results array and place a marker for each
      // set of coordinates.
      const eqfeed_callback = function (results) {
        for (let i = 0; i < results.features.length; i++) {
          const coords = results.features[i].geometry.coordinates;
          const latLng = new google.maps.LatLng(coords[1], coords[0]);
          new google.maps.Marker({
            position: latLng,
            map: map,
          });
        }
      };


    
 
});



var options = {
  enableHighAccuracy: true,
timeout: 5000,
maximumAge: 0
      };
     
      function success(pos) {
        var crd = pos.coords;
     
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        window.sessionStorage.setItem("latitude",crd.latitude);
        window.sessionStorage.setItem("longtitude",crd.longitude);
   var h =document.createElement("h2");
        var url ="http://api.positionstack.com/v1/reverse?access_key=5a4415063f1f7549303202b530a60c9c&query=${crd.latitude},${crd.longitude}"
        fetch(`https://api.positionstack.com/v1/reverse?access_key=5a4415063f1f7549303202b530a60c9c&query=${crd.latitude},${crd.longitude}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.data[0].name)
            h.innerHTML =`name:${data.data[0].name} <br>
            region:${data.data[0].region}<br>
            latitude:${data.data[0].latitude}<br>
            latitude:${data.data[0].longitude}`
            map.appendChild(h);
        });
    map.appendChild(h);

       
      }
     
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
     
   navigator.geolocation.getCurrentPosition(success, error, options);




