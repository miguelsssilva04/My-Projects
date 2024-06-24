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