console.log('Hi');
// Get the text element and all columns
const dynamicText = document.getElementById('dynamic-text');
const columns = document.querySelectorAll('.textchange');

// Add hover events to each column
textchange.forEach((textchange) => {
    // Store the text to display on hover
    const hoverText = textchange.getAttribute('data-text');

    // On mouse enter: change text and reduce size
    textchange.addEventListener('mouseenter', () => {
        dynamicText.textContent = hoverText;
        dynamicText.style.fontSize = '160px'; // Reduced size
    });

    // On mouse leave: reset text and size
    textchange.addEventListener('mouseleave', () => {
        dynamicText.textContent = 'Welcome';
        dynamicText.style.fontSize = '160px'; // Original size
    });
});
