
$('#pinterest').hover(function() {
  $(this).attr('src', 'images/pinterestcolor.png');
}, function() {
  $(this).attr('src', 'images/pinterest.png');
});

$('#email').hover(function() {
  $(this).attr('src', 'images/emailcolor.png');
}, function() {
  $(this).attr('src', 'images/email.png');
});

$('#linkedin').hover(function() {
  $(this).attr('src', 'images/linkedincolor.png');
}, function() {
  $(this).attr('src', 'images/linkedin.png');
});

$('#github').hover(function() {
  $(this).attr('src', 'images/githubcolor.png');
}, function() {
  $(this).attr('src', 'images/github.png');
});

$('#breakred').hover(function() {
  $(this).attr('src', 'images/breakred.png');
}, function() {
  $(this).attr('src', 'images/break.png');
});

$('#breakpurple').hover(function() {
  $(this).attr('src', 'images/breakpurple.png');
}, function() {
  $(this).attr('src', 'images/break.png');
});

$('#resume').hover(function() {
  $(this).attr('src', 'images/resumecolor.png');
}, function() {
  $(this).attr('src', 'images/resume.png');
});

let grad1 = document.getElementById("grad1");
let grad6 = document.getElementById("grad6");

grad1.addEventListener("mouseover", function( event ) {
  event.target.style.color = "#c70039";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

grad6.addEventListener("mouseover", function( event ) {
  event.target.style.color = "#581845";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
