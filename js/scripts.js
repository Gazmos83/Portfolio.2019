// Twitter

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// GET Map

 function GetMap(){
    var map = new Microsoft.Maps.Map('#map1', {
            center: new Microsoft.Maps.Location(52.511588, 13.417004),
            mapTypeId: Microsoft.Maps.MapTypeId.road,
            zoom: 14,
        });
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
    var layer = new Microsoft.Maps.Layer();
    layer.add(pushpin);
    map.layers.insert(layer);
    var center = map.getCenter();
    var infobox = new Microsoft.Maps.Infobox(center, { title: 'Kevin Louis Dath',
    description: 'Brückenstraße 1b, 10179 Berlin' });
    infobox.setMap(map);

    //listen to clicks
    Microsoft.Maps.Events.addHandler(map, 'click', function () { alert('mapClick');
    });

};



$(document).ready(function(){

  // Smooth scrolling

 var $root = $('html, body');
 $('.navbar a').click(function() {
   var href = $.attr(this, 'href');
   $root.animate({
     scrollTop: $(href).offset().top
   }, 500, function () {
     window.location.hash = href;
   });
   return false;
 });

 // Tooltips

 $(function () {
   $('[data-toggle="tooltip"]').tooltip();
 });

// textarea background

  $(".message-box").css("background", "#F7FAD8");

  $(".message-box").on("keyup", function() {
    console.log("keyup happened");
    var charCount = $(".message-box").val().length;
    console.log(charCount);
    $("#char-count").html(charCount);

    if(charCount < 20) {
    $("#char-count").css("color", "red");
    } else {
    $("#char-count").css("color", "black");
    };
  });

  $('#button').on('click', function() {
    var comment = $('.message-box').val();
    $('#visible-comment').html(comment);
    $('.message-box').hide();
    alert("Your message has been sent");
    return false;
  });

  // work section

  for(var i = 0; i < works.length; ++i ) {
  $("#work").append("\
    <div class='col-sm-12 col-md-12 col-lg-4'>\
      <a href='" + works[i].url + "' class='work-img'>\
        <img class='img-fluid' src='" + works[i].pic + "'>\
        <span class='info'><p class='proj-title'> Project:</p>" + works[i].title +"</span>\
      </a>\
    </div>\
  ");

  var images = $("#work img");

  if(i%2 === 0){
   $(images[i]).css("border", "2px solid DodgerBlue");
   }
   else {
   $(images[i]).css("border", "2px solid salmon");
   };
  };

  $(".work-img").mouseenter( function() {
     $(".info", this).show();
  }).mouseleave(function(){
  $(".info", this).hide();
  });

});
