let draggedElement;

function clearImages() {
  // clear all images from drop containers
  const dropContainers = document.querySelectorAll('.number');
  dropContainers.forEach(dropContainer => {
    dropContainer.innerHTML = ''; // remove all child elements
  });
}

function stopAllAudio() {
  // get all audio elements on the page
  const audioElements = document.querySelectorAll('audio');


  audioElements.forEach(audio => {
    audio.pause();
    audio.currentTime = 0; // rewind to beginning
  });
}

function dragStart(event) {
  draggedElement = event.target;
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {

  event.preventDefault();


  const dropContainer = event.target;

  // check if drop is allowed in the current container
  if (dropContainer.classList.contains('drag-container') || dropContainer.classList.contains('number')) {
    // append dragged element to the drop container
    dropContainer.appendChild(draggedElement.cloneNode(true));
    stopAllAudio();

  }
}
