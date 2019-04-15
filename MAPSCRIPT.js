var map;
function initialize(){
 var mapOptions = {
     zoom:12,
     center: new google.maps.Map(document.getElemenyById('map_canvas'),mapOptions);
}
google.maps.event.addDomListener(window,'load',initialize);

}