document.addEventListener('DOMContentLoaded', function () {
  // get references to the HTML elements from updated-p.html
  var leftImage = document.getElementById('image-left');
  var rightImage = document.getElementById('image-right');
  var middleImage = document.getElementById('image-middle');
  var leftText = document.getElementById('text-left');
  var rightText = document.getElementById('text-right');
  var middleText = document.getElementById('text-middle');
  var button = document.getElementById('submit')
  var leftAudio = new Audio();
  var rightAudio = new Audio();
  var middleAudio = new Audio();


  // MOST IMPORTANT FUNCTION: main one to update content
  function updateContent() {
    // array of genres from the musicData object
    var genres = Object.keys(musicData);

    // choose random index for the genres array
    var randomIndexLeft = Math.floor(Math.random() * genres.length);
    var randomIndexRight = Math.floor(Math.random() * genres.length);
    var randomIndexMiddle = Math.floor(Math.random() * genres.length);
    var randL = Math.floor(Math.random() * 4);
    var randR = Math.floor(Math.random() * 4);
    var randM = Math.floor(Math.random() * 4);

    // ensure that randomly chosen genres are different
    while (randomIndexLeft === randomIndexRight || randomIndexLeft === randomIndexMiddle || randomIndexRight === randomIndexMiddle){
      if (randomIndexLeft === randomIndexRight) {
        randomIndexRight = Math.floor(Math.random() * genres.length);
      }
      else if (randomIndexLeft === randomIndexMiddle) {
        randomIndexMiddle = Math.floor(Math.random() * genres.length);
      }
      else if (randomIndexRight === randomIndexMiddle) {
        randomIndexRight = Math.floor(Math.random() * genres.length);

      while (randomSongLeft.score == 1) {
        randL = Math.floor(Math.random() * 4);
      }
      while (randomSongMiddle.score == 1) {
        randM = Math.floor(Math.random() * 4);
      }
      while (randomSongRight.score == 1) {
        randR = Math.floor(Math.random() * 4);
      }

      }
    }
  


    // get randomly chosen genres
    var randomGenreLeft = genres[randomIndexLeft];
    var randomGenreRight = genres[randomIndexRight];
    var randomGenreMiddle = genres[randomIndexMiddle];


    // get random song from the chosen genres
    randomSongLeft = musicData[randomGenreLeft][randL];
    randomSongRight = musicData[randomGenreRight][randR];
    randomSongMiddle = musicData[randomGenreMiddle][randM];

    // Set the src attributes of images
    leftImage.src = randomSongLeft.art;
    rightImage.src = randomSongRight.art;
    middleImage.src = randomSongMiddle.art;

    // set text content
    leftText.textContent = randomSongLeft.name;
    rightText.textContent = randomSongRight.name;
    middleText.textContent = randomSongMiddle.name;

    //set audio content of songs
    leftAudio.src = randomSongLeft.sample;
    rightAudio.src = randomSongRight.sample;
    middleAudio.src = randomSongMiddle.sample;
  }



  function playAudio(position) {
      position.play();
  }


  function pauseAudio(position) {
      position.pause();
      position.currentTime = 0; // reset the audio to the beginning
  }

  
  function progress() {
    var progressBar = document.getElementById('bar');
    // get current width as a number and increment by 15 each submut
    let currentWidth = parseFloat(progressBar.style.width) || 0; 
    currentWidth += 15;
  
    // set the updated width
    progressBar.style.width = currentWidth + 'px';
  }

  function tallyScore(choice) { // add score tally to each genre based on the top 3 songs
    scoreTally.pop += choice.pop;
    scoreTally.jazz += choice.jazz;
    scoreTally.classicRock += choice.classicRock;
    scoreTally.rap += choice.rap;
    scoreTally.indie += choice.indie;
    scoreTally.rnb += choice.rnb;
    scoreTally.metal += choice.metal;
    scoreTally.blues += choice.blues;
    scoreTally.folk += choice.folk;
    scoreTally.soul += choice.soul;
    scoreTally.country += choice.country;
    scoreTally.classical += choice.classical;
    scoreTally.latin += choice.latin;
    scoreTally.reggae += choice.reggae;
    scoreTally.funk += choice.funk;
    scoreTally.altRock += choice.altRock;
    scoreTally.trap += choice.trap;
    scoreTally.house += choice.house;
    scoreTally.neoSoul += choice.neoSoul;
  }


  button.addEventListener('click',function() {
    if (checkDivsForImages() && checkDivsForDifferentImages()) {
      const image1 = document.getElementById('1').querySelector('img');
      const image2 = document.getElementById('2').querySelector('img');
      console.log(image1);
      console.log(image2);
  
      const baseUrl = 'http://127.0.0.1:5500/'
      const leftUrl = baseUrl + randomSongLeft.art;
      const midUrl = baseUrl + randomSongMiddle.art;
      const rightUrl = baseUrl + randomSongRight.art;
  
     // console.log(leftUrl);
    //  console.log(midUrl);
    //  console.log(rightUrl);
  
      progress();
  
      if (image1.src == leftUrl) { // check for which songs have been placed first and second
        tallyScore(randomSongLeft);
        tallyScore(randomSongLeft);
        console.log(scoreTally);
        //console.log("HElP!");
        if (image2.src == rightUrl) {
          tallyScore(randomSongRight);
        }
        else {
          tallyScore(randomSongMiddle);
        }
      }
  
      else if (image1.src == midUrl) {
        tallyScore(randomSongMiddle);
        tallyScore(randomSongMiddle);
        console.log(scoreTally);
        //console.log("HElP!");
        if (image2.src == rightUrl) {
          tallyScore(randomSongRight);
        }
        else {
          tallyScore(randomSongLeft);
        }
      }
  
      else if (image1.src == rightUrl) {
        tallyScore(randomSongRight);
        tallyScore(randomSongRight);
        console.log(scoreTally);
        //console.log("HElP!");
        if (image2.src == midUrl) {
          tallyScore(randomSongMiddle);
        }
        else {
          tallyScore(randomSongLeft);
        }
  
      }
  
      randomSongRight.score += 1;
      randomSongLeft.score += 1;
      randomSongMiddle.score += 1;
      clearImages();
      updateContent();
    }
    else {
      console.log("ERROR")
    }
  })


  // add event listener for hover
  leftImage.addEventListener('mouseover', () => { 
    playAudio(leftAudio); 
  });
  
  // add event listener for mouse leave 
  leftImage.addEventListener('mouseleave', () => {
      pauseAudio(leftAudio);
   });


  rightImage.addEventListener('mouseover', () => { 
    playAudio(rightAudio); 
  });
  

  rightImage.addEventListener('mouseleave', () => {
      pauseAudio(rightAudio);
   });


  middleImage.addEventListener('mouseover', () => { 
    playAudio(middleAudio); 
  });
  

  middleImage.addEventListener('mouseleave', () => {
      pauseAudio(middleAudio);
   });


  // initial setup when page loaded
  updateContent();
});


