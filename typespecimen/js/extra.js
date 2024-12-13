
console.log('Hello');

//set up the element that triggers my function
let box = document.querySelector('.box');
let glyphs = document.querySelector('.glyph');

//set up the event listener for clicking on the box
glyph.addEventListener('click', function(){
  //what happens on click
  console.log('a note to yourself');

  box.classList.toggle('bookmark');
});

const splitter = document.getElementById('splitter');
const leftPanel = document.querySelector('.left-panel');
let isResizing = false;

splitter.addEventListener('mousedown', (e) => {
  isResizing = true;
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', () => {
    isResizing = false;
    document.removeEventListener('mousemove', handleMouseMove);
  });
});


