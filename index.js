// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 0) {
    window.requestAnimationFrame(topFunction); // Request the next frame
    window.scrollTo(0, scrollTop - scrollTop / 8); // Scroll a fraction of the distance
  }
}