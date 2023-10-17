const appWindow = document.getElementById('myWindow');
const titleBar = appWindow.querySelector('.title-bar');
let isDragging = false;
let offsetX, offsetY;

titleBar.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - appWindow.getBoundingClientRect().left;
    offsetY = e.clientY - appWindow.getBoundingClientRect().top;
    appWindow.style.zIndex = 1; // Bring the window to the front
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        appWindow.style.left = e.clientX - offsetX + 'px';
        appWindow.style.top = e.clientY - offsetY + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    appWindow.style.zIndex = 0; // Reset the z-index
});