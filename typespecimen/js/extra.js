
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

function handleMouseMove(e) {
  if (isResizing) {
    const leftPanelWidth = e.clientX; // Get the current X position
    leftPanel.style.width = leftPanelWidth + 'px';
  }
}