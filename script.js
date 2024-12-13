// Get the circle element
const circle = document.getElementById('draggable-circle');

// Variable to hold mouse position
let offsetX = 0, offsetY = 0;
let isDragging = false;

// Mouse down event to start dragging
circle.addEventListener('mousedown', (e) => {
    isDragging = true;
    
    // Calculate the offset between mouse and the circle's top-left corner
    offsetX = e.clientX - circle.offsetLeft;
    offsetY = e.clientY - circle.offsetTop;

    // Change cursor style
    circle.style.cursor = 'grabbing';
});

// Mouse move event to drag the circle
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        // Calculate new position of the circle
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        // Set the new position of the circle
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    }
});

// Mouse up event to stop dragging
document.addEventListener('mouseup', () => {
    isDragging = false;
    circle.style.cursor = 'pointer';
});
