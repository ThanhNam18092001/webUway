window.onscroll = function() {stickyHeader()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var upButton = document.querySelector('.up');
  
  upButton.addEventListener('click', function() {
      // Scroll to the top of the page
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // Optional smooth scrolling
      });
  });
});