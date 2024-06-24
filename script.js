document.addEventListener('DOMContentLoaded', function () {
    const calcapp = document.getElementById('app1');

   
    // Open and close the window on click
    calcapp.addEventListener('dblclick', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Toggle the display of the calculator window
        if (windowCalculator.style.display === 'none' || windowCalculator.style.display === '') {
            windowCalculator.style.display = 'flex';
        } else {
            windowCalculator.style.display = 'none';
        }
    });

    // Close the window when clicking on the X button
    const closeButton = document.querySelector('.x-div');
    closeButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        windowCalculator.style.display = 'none';
    });

});

let newX = 0, newY = 0, startX = 0, startY = 0;

const windowCalculator = document.getElementById('calculatorWindow');
const windowHeader = document.getElementById('calculatorHeader');

windowHeader.addEventListener('mousedown', mouseDown)

function mouseDown(e){
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    newX = startX - e.clientX 
    newY = startY - e.clientY 
  
    startX = e.clientX
    startY = e.clientY

    windowCalculator.style.top = (windowCalculator.offsetTop - newY) + 'px'
    windowCalculator.style.left = (windowCalculator.offsetLeft - newX) + 'px'
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}