function initMap(){

   //**** Setting Map's Options:
   var options = {
      zoom: 10,
      center: {lat: 40.1, lng:116.5}
   }

   //**** Setting Map Initialization and needed varibles:
   var map = new google.maps.Map(document.getElementById('map'),options);
   var bounds = new google.maps.LatLngBounds();

   var visibleMrkers = [];   // To hold visible places ideal case
   var searchedMarkers = []; // To hold visible places in case of search conditions
   var userInput;            // To hold user input

   //**** Setting Places array that holds all markers properties:
   places = [
      { title: 'The Great Wall',           location: {lat: 40.4319, lng:116.5704} , setVisible: true},
      { title: 'The Forbidden City',       location: {lat: 39.9163, lng:116.3972} , setVisible: true},
      { title: 'Silk Market',              location: {lat: 39.9094, lng:116.4496} , setVisible: true},
      { title: 'The Summar Palace',        location: {lat: 40.0000, lng:116.2755} , setVisible: true},
      { title: 'Beijing National Stadium', location: {lat: 39.9929, lng:116.3965} , setVisible: true},
   ];

   //**** Adding Places to the map:
   addPlacesToMap(places);


   //**** Adding Places to the map by creating their markers:
   function addPlacesToMap(places){
      places.forEach(function(place, index) {
         if (place.setVisible){
            // Passing locations information to be attached with each marker as well as timeout for the animation
            createMarker(place,index*250);
         }
      });
   }/* End of addPlacesToMap function */

   // places.forEach(function(place, index) {
   //    // Push markers to visibleMrkers array
   //    visibleMrkers.push(place);
   //    alert(visibleMrkers[index]);
   // });


   // // Set-up Knockout observables
   // var viewModle = {
   //
   //    userInput: ko.observable(),
   //    searchedMarkers: ko.observableArray(),
   //
   //
   //
   //    // Fill searchedMarkers by each visibleMrkers
   //    fillSearchedMarkers: function() {
   //      visibleMrkers.forEach(function(marker) {
   //         alert(marker);
   //          this.searchedMarkers.push(marker);
   //          alert(searchedMarkers);
   //      });
   //    },
   // //
   // //    // Filter user input
   // //    filterMarkers: function() {
   // //       var searchInput = viewModle.userInput().toLowerCase();
   // //       listView.visiblePlaces.removeAll();
   // //
   // //       visibleMarkers.forEach(function(place) {
   // //          place.marker.setVisible(false);
   // //
   // //          if (place.title.toLowerCase().indexOf(searchInput) !== -1) {
   // //              viewModle.searchedMarkers.push(place);
   // //          }
   // //       });
   // //       viewModle.searchedMarkers().forEach(function(place) {
   // //          place.marker.setVisible(true);
   // //       });
   // //    },
   // };
   // viewModle.fillSearchedMarkers();
   // ko.applyBindings(viewModle);


   //****  Function to create markers to the map **//
   function createMarker(properties,timeout){
      // Set timeout for addinr markers with their animation
      window.setTimeout(function() {
         // Initiate the Marker
         var marker = new google.maps.Marker({
            map: map,
            title:properties.title,
            position:properties.location,
            animation: google.maps.Animation.DROP,
         });
         // Extend the boundaries of the marker
         bounds.extend(marker.position);
         map.fitBounds(bounds);
         // Create InfoWindow for the marker with an event listener if it has a title
         if (marker.title){
             createInfoWindow (marker);
         }
     },timeout);
 }/* End of addMarker function */


   //****  Function to create infowindow to markers **//
   function createInfoWindow (marker){
      // Create the InfoWindow
      var infoWindow = new google.maps.InfoWindow;
      // Create StreetViewService to show a street view window for marker location or nearest places within 50 meter
      var StreetViewService = new google.maps.StreetViewService();
      var radius = 50;
      //Create an onclick event listener to open
      marker.addListener('click', function(){
         infoWindow.marker = marker;
         infoWindow.setContent('<div Id="infoWindowDiv"><h5>' + marker.title +'</h5></div>');

         //** One options to be displayed in InfoWindow **//
         /* 1) Displaying Wikipedia articals: */
         var wikiURL = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.title + '&format=json&callback=wikiCallback';
         var wikiRequestTimeout = setTimeout(function() {
               alert("failed to load wikipedia resources");
           }, 8000);
         $.ajax({
               url: wikiURL,
               dataType: "jsonp",
               success: function(response) {
                   var articalsList = response[1];
                   var atricalTitle ;
                   $('#infoWindowDiv').append('<div Id="wikiDiv"><ul id="wikiListItem"></ul></div>');
                   for (var i = 0 , length = articalsList.length; i < length && i < 4 ; i++ ){
                      atricalTitle = articalsList[i];
                      $('#wikiListItem').append('<li><a href="http://en.wikipedia.org/wiki/'+atricalTitle+'">'+atricalTitle+'</a></li>');
                   }
                   clearTimeout(wikiRequestTimeout);
               },
          });
          infoWindow.open(map, marker);
      });


      //** Other options to be displayed in InfoWindow **//
      /* 2) Displaying an Image usign URL parameters:  (Note: Not working well for some reasons)
      -------> Should be placed before infoWindow.Open()

      $('#pano').append('<img src= https://maps.googleapis.com/maps/api/streetview?'+
      'size=200x150&location='+marker.position+'&heading=151.78&pitch=-0.76'+
      '&key=AIzaSyBpcOjPqBYX5nfyfSKIUp3NXwUIiQHP0lQ></img>'); */

      /* 3) Displaying an Street view object:  (Note: Not working well for some reasons)
      -------> Should be placed before infoWindow.Open()
      StreetViewService.getPanoramaByLocation(marker.position, radius, getViewStreet);
      function getViewStreet(data, status){
         if (status === 'Ok'){
            infoWindow.setContent('<div><h5>' + marker.title +'</h5><div Id="pano"></div></div>');
            var nearViewStreetLocation = data.location.latLng;
            var heading = google.map.geometry.spherical.computeHeading(nearViewStreetLocation, marker.position);
            var panoramaOptions = {
               position : nearViewStreetLocation,
               pov :{ heading: heading, pitch: 30 }
            };
            var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'),panoramaOptions);
            map.setStreetView(panorama);
         }
         else{
            infoWindow.setContent('<div><h5>' + marker.title +'</h5><div>No Street View Found</div></div>');
         }
      }*/

   }/* End of createInfoWindow function */

}/* End of initMap function */
