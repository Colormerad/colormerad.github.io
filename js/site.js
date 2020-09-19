let grad1 = document.getElementById("grad1");
let grad2 = document.getElementById("grad2");
let grad3 = document.getElementById("grad3");
let grad4 = document.getElementById("grad4");
let grad5 = document.getElementById("grad5");
let grad6 = document.getElementById("grad6");

grad1.addEventListener("mouseover", function( event ) {
  event.target.style.color = "#581845";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

grad2.addEventListener("mouseover", function( event ) {
  event.target.style.color = "#900c3f";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

grad3.addEventListener("mouseover", function( event ) {
  event.target.style.color = "#c70039";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

grad4.addEventListener("mouseover", function( event ) {
  event.target.style.color = "#ff5733";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

grad5.addEventListener("mouseover", function( event ) {
  event.target.style.color = "#ffc305";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

grad6.addEventListener("mouseover", function( event ) {
  event.target.style.color = "#ffc305";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

$('#selfie').hover(function() {
  $(this).attr('src', 'images/selfiecolor.jpg');
}, function() {
  $(this).attr('src', 'images/selfie.jpg');
});

$('#breakmagenta').hover(function() {
  $(this).attr('src', 'images/breakmagenta.png');
}, function() {
  $(this).attr('src', 'images/break.png');
});

$('#breakyellow').hover(function() {
  $(this).attr('src', 'images/breakyellow.png');
}, function() {
  $(this).attr('src', 'images/break.png');
});

$('#breakpurple').hover(function() {
  $(this).attr('src', 'images/breakpurple.png');
}, function() {
  $(this).attr('src', 'images/break.png');
});

$('#breakorange').hover(function() {
  $(this).attr('src', 'images/breakorange.png');
}, function() {
  $(this).attr('src', 'images/break.png');
});
