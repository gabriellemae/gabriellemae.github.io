console.log('Hello');

//set up the element that triggers my function
let box = document.querySelector('.box');
let glyphs = document.querySelector('.glyph');

//set up the event listener for clicking on the box
glyphs.addEventListener('click', function(){
	//what happens on click
	console.log('a note to yourself');

	box.classList.toggle('bookmark');
});