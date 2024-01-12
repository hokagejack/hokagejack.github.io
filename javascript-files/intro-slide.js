document.addEventListener('DOMContentLoaded', function () 
{
  var introSlide = document.getElementById('intro-slide');
  var mainContent = document.getElementById('main-content');

  // intro click
  introSlide.addEventListener('click', function () {
      // hide the intro slide
      introSlide.style.display = 'none';
      introSlide.style.zIndex = 0;
      // show the main content
      mainContent.style.display = 'grid';
      
      mainContent.style.zIndex = 1;

      console.log("It Works!")
  });
});