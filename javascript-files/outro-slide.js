document.addEventListener('DOMContentLoaded', function () {
  var outroSlide = document.getElementById('outro-slide');
  var mainContent = document.getElementById('main-content');
  var loadingBar = document.getElementById('bar');
  var button = document.getElementById('submit');

  function showOutroSlide() {
    // width of the loading bar
    var loadingBarWidth = loadingBar.clientWidth;

    // check if width exceeds 290 pixels
    if (loadingBarWidth > 290) {
      // show outro slide
      outroSlide.style.display = 'grid';
      outroSlide.style.zIndex = 1;

      // hide the main content
      mainContent.style.display = 'none';
      mainContent.style.zIndex = 0;
      setTopGenres(scoreTally, musicData);
      console.log("It Works!");
    }
  }

  button.addEventListener('click', showOutroSlide);
});
