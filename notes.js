// Create the document
const doc = document.implementation.createHTMLDocument('Notes App');

// Create the head element
const head = doc.createElement('head');
doc.documentElement.appendChild(head);

// Create the meta elements
const metaCharset = doc.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
head.appendChild(metaCharset);

// Create the title element
const title = doc.createElement('title');
title.textContent = 'Notes App';
head.appendChild(title);

// Create the body element
const body = doc.createElement('body');
doc.documentElement.appendChild(body);

// Create the container div
const containerDiv = doc.createElement('div');
containerDiv.className = 'container';
body.appendChild(containerDiv);

// Create the h1 element
const h1 = doc.createElement('h1');
h1.textContent = 'Notes App';
containerDiv.appendChild(h1);

// Create the note title input
const noteTitleInput = doc.createElement('input');
noteTitleInput.type = 'text';
noteTitleInput.id = 'note-title-input';
noteTitleInput.placeholder = 'Note Title';
containerDiv.appendChild(noteTitleInput);

// Create the note body input
const noteBodyInput = doc.createElement('textarea');
noteBodyInput.id = 'note-body-input';
noteBodyInput.placeholder = 'Note Body';
containerDiv.appendChild(noteBodyInput);

// Create the add note button
const addNoteButton = doc.createElement('button');
addNoteButton.id = 'add-note';
addNoteButton.textContent = 'Add Note';
containerDiv.appendChild(addNoteButton);

// Create the note list ul
const noteListUl = doc.createElement('ul');
noteListUl.id = 'note-list';
containerDiv.appendChild(noteListUl);


