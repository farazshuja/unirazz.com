$(function(){
  
  /*map*/
  function init_map(){
  
  var myOptions = {
    zoom: 15,
    center: new google.maps.LatLng(31.46743903680515,74.30309900622102),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
  marker = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(31.46743903680515,74.30309900622102)
  });
  
  infowindow = new google.maps.InfoWindow({
    content: '<strong>Unirazz Services</strong><br>Rana Rashid Rd, Block B1, Johar Town, Lahore, Punjab, Pakistan<br>'
  });
  
  google.maps.event.addListener(marker, 'click', function(){
    infowindow.open(map,marker);
  });
  
    infowindow.open(map,marker);
  }

  google.maps.event.addDomListener(window, 'load', init_map);
  
});