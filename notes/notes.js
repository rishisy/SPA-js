function createNoteWindow(title) {




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
    content.className = 'content text-center';
    appWindow.appendChild(content);
    
    const notetitle = document.createElement('input');
    notetitle.type = 'text';
    notetitle.size = "40";
    notetitle.placeholder = "Note Title";
    notetitle.className = 'input';
    content.appendChild(notetitle);
    
    
    const notebody = document.createElement("textarea")
    notebody.type = 'text';
    notebody.style.width = '429px';
    notebody.style.marginTop = '10px';
    notebody.placeholder = "Body Goes Here" ; 
    notebody.className = 'input';
    content.appendChild(notebody);
    
    
    const addNoteButton = document.createElement('button');
    addNoteButton.id = 'add-note';
    addNoteButton.className = 'text-center';
    addNoteButton.textContent = 'Add Note';
    content.appendChild(addNoteButton);
    
    const noteList = document.createElement('div');
    noteList.className = 'output';
    content.appendChild(noteList);
    
    
    
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    
    
    // Display existing notes on page load
    savedNotes.forEach((note, index) => {
        addNoteToDOM(note.title, note.body, index);
    });
    
    
    
    
    
    function addNoteToDOM(title, body, index) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="note-item input">
                <div class="note-title">Title : ${title}</div>
                <p class="input">Body : ${body}</p>
                <button class="note-delete  " id="append-note">Delete</button>
            </div>
                `;
    
        const deleteButton = li.querySelector('.note-delete');
        deleteButton.addEventListener('click', () => {
    
            // Function to delete a note
        savedNotes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(savedNotes));
        while (noteList.firstChild) {
            noteList.removeChild(noteList.firstChild);
        }
        savedNotes.forEach((note, i) => {
            addNoteToDOM(note.title, note.body, i);
        });
    
    
    
        });
        noteList.appendChild(li);
    }
    
    // Event listener for adding a new note
    addNoteButton.addEventListener('click', function() {
        console.log("Hey")
        const title = notetitle.value.trim();
        const body = notebody.value.trim();
        if (title && body) {
            const newNote = { title, body };
            savedNotes.push(newNote);
            localStorage.setItem('notes', JSON.stringify(savedNotes));
            addNoteToDOM(title, body, savedNotes.length - 1);
            notetitle.value = '';
            notebody.value = '';
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
    
    
    
    
        return appWindow
    
    }