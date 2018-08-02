window.onscroll = function() {myFunction()};
window.onreize = function() {updateSticky()};
window.onclick = function(event) {
	if (event.target == navlist) {
    	navlist.classList.remove("active")
	}
}

var navbar = document.getElementById("navbar");
var navlist = document.getElementById("navlist");
var intro = document.getElementById("intro");
var sticky = intro.offsetHeight;

function updateSticky() {
  var sticky = intro.offsetHeight;
}

function myFunction() {
  var sticky = intro.offsetHeight;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function openNav() {
	navlist.classList.add("active")
}
function closeNav() {
	navlist.classList.remove("active")
}
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){window.location.hash = hash;});
    } // End if
  });
});