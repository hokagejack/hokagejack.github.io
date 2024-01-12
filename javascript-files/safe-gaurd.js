function checkDivsForImages() {
  const div1 = document.getElementById('1');
  const div2 = document.getElementById('2');
  const div3 = document.getElementById('3');

  // Check if all three divs have images
  const div1HasImage = div1.querySelector('img') !== null;
  const div2HasImage = div2.querySelector('img') !== null;
  const div3HasImage = div3.querySelector('img') !== null;

  return div1HasImage && div2HasImage && div3HasImage;
}

function checkDivsForDifferentImages() {
  const div1 = document.getElementById('1');
  const div2 = document.getElementById('2');
  const div3 = document.getElementById('3');

  // Get the image src attributes
  const src1 = div1.querySelector('img')?.src;
  const src2 = div2.querySelector('img')?.src;
  const src3 = div3.querySelector('img')?.src;

  // Check if all three divs have different images
  return src1 !== src2 && src1 !== src3 && src2 !== src3;
}