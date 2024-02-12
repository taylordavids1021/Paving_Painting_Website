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

// Read More function

// document.addEventListener('DOMContentLoaded', function() {
//   const moreContent = document.querySelector('.more-content');
//   const lessContent = document.querySelector('.less-content');
//   const shortDescription = document.querySelector('.short-description');
//   const longDescription = document.querySelector('.long-description');

//   // Hide "Read Less" button initially
//   lessContent.style.display = 'none';

//   // Show long description and "Read Less" button when "Read More" is clicked
//   moreContent.addEventListener('click', function() {
//     shortDescription.style.display = 'none';
//     longDescription.style.display = 'block';
//     lessContent.style.display = 'inline'; // Show "Read Less" button
//   });

//   // Hide long description and "Read Less" button when "Read Less" is clicked
//   lessContent.addEventListener('click', function() {
//     shortDescription.style.display = 'block';
//     longDescription.style.display = 'none';
//     lessContent.style.display = 'none'; // Hide "Read Less" button
//   });
// });
