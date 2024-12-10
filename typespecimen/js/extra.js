
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


