function setTopGenres(scoreTally, musicData) {
  const entries = Object.entries(scoreTally);
  entries.sort((a, b) => b[1] - a[1]);
  const topEntries = entries.slice(0, 5);
  const topGenres = topEntries.map(([key]) => key);
  var genres = Object.keys(musicData);

  for (let i = 0; i < 5; i++) {
    console.log(`Top Genre ${i + 1}: ${topGenres[i]}`);
  }

  // check for match between the top genres and the genre names in musicData
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < genres.length; j++) {
      console.log("Music Data: " + musicData[genres[j]][4]);
      console.log("Top Genres: " + topGenres[i]);
      if (musicData[genres[j]][4] === topGenres[i]) {
        console.log("BINGO");
        // replaced text of these divs with the top genres
        const genreDiv = document.querySelector(`.num:nth-child(${i + 1})`);
        const capitalizedGenre = capitalizeFirstLetter(musicData[genres[j]][4]);
        const numberedGenre = `${i + 1}. ${capitalizedGenre}`;
        genreDiv.textContent = numberedGenre;
      }
    }
  }

  return topGenres;
}

// function to capitalize the first letter of the strings
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
