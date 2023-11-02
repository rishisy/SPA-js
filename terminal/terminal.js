
function createAppWindow(title) {
    
    const appWindow = document.createElement('div');
    appWindow.className = 'app-window';
    document.body.appendChild(appWindow);

    const titleBar = document.createElement('div');
    titleBar.className = 'title-bar';
    appWindow.appendChild(titleBar);

    const titleSpan = document.createElement('span');
    titleSpan.className = 'title';
    titleSpan.textContent = title;
    titleBar.appendChild(titleSpan);

    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '<img height="18px" src="https://img.icons8.com/ios-filled/50/FA5252/cancel.png" alt="cancel"/>';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(appWindow);
    });
    titleBar.appendChild(closeButton);

    const content = document.createElement('div');
    content.className = 'content';
    appWindow.appendChild(content);

    const input = document.createElement('input');
    input.type = 'text';
    input.size = "40";
    input.placeholder = "$ Command ";

    input.className = 'input';
    content.appendChild(input);

    const output = document.createElement('div');
    output.className = 'output';
    content.appendChild(output);

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value;
            const commandarr = command.split(" ");
            const parentCommand = commandarr[0];

            switch(parentCommand){

                case "clear":
                    document.getElementsByClassName("output")[0].innerHTML = "";
                    output.textContent += "Screen Cleared \n";
                    break;
                
                case "touch":
                    output.textContent += ` ${commandarr} created \n`;


                default:
                    output.textContent += `$ ${command}\n`;
                    output.textContent += `Response: ${command}\n`;
                    

            }
            // resetting the input value to default 

            input.value = '';
        }
    });

    let isDragging = false;
    let offsetX, offsetY;

    titleBar.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - appWindow.getBoundingClientRect().left;
        offsetY = e.clientY - appWindow.getBoundingClientRect().top;
        appWindow.style.zIndex = 1;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            appWindow.style.left = e.clientX - offsetX + 'px';
            appWindow.style.top = e.clientY - offsetY + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        appWindow.style.zIndex = 0;
    });

    return appWindow;
}

// Create the document




d22ce59423e943ad83ec911781193e8c