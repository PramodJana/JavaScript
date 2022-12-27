import { renderNotes } from "./app.js";


let note = document.querySelector(".note");
let title = document.querySelector(".title");
let addNoteButton = document.querySelector(".add-btn");
let notesDisplay = document.querySelector(".notes-display");
let showOtherNotes = document.querySelector(".notes-container");
let showPinnedNotes = document.querySelector(".pinned-notes-container");
let pinTitle = document.querySelector(".pin-title");
let otherTitle = document.querySelector(".other-title");
let arrayOfNotes = JSON.parse(localStorage.getItem("notes")) || [];
//console.log(arrayOfNotes);

if (arrayOfNotes.length > 0) {
    pinTitle.classList.toggle("d-none");
    otherTitle.classList.toggle("d-none");
}

notesDisplay.addEventListener("click", (event) => {
    //console.log(event.target);
    console.log(arrayOfNotes);
    let type = event.target.dataset.type;
    let noteId = event.target.dataset.id;
    switch (type) {
        case "del":
            arrayOfNotes = arrayOfNotes.filter(({ id }) => id != noteId);
            showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ isPinned, isArchived }) => !isPinned && !isArchived));
            showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ isPinned }) => isPinned));
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
            break;
        case "pinned":
            arrayOfNotes = arrayOfNotes.map((note) =>
                note.id == noteId ? { ...note, isPinned: !note.isPinned } : note
            );
            showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ isPinned, isArchived }) => !isPinned && !isArchived));
            showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ isPinned }) => isPinned));
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
            break;
        case "archived":
            arrayOfNotes = arrayOfNotes.map(note => note.id == noteId ? { ...note, isArchived: !note.isArchived } : note);
            showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({
                isPinned, isArchived
            }) => !isPinned && !isArchived));
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
    }
});

addNoteButton.addEventListener("click", () => {
    // console.log(note.value);
    // console.log(title.value);
    if (note.value.trim().length > 0 || title.value.trim().length > 0) {
        arrayOfNotes = [...arrayOfNotes, {
            id: Date.now(), title: title.value.trim(),
            note: note.value.trim(), isPinned: false, isArchived: false
        }];
        showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({
            isPinned, isArchived
        }) => !isPinned && !isArchived));
        localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
        note.value = title.value = "";
    }
    //console.log(arrayOfNotes);
});

showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ isPinned, isArchived }) =>
    !isPinned && !isArchived
));

//console.log(showOtherNotes.innerHTML);
showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ isPinned }) =>
    isPinned
));
//console.log(showPinnedNotes.innerHTML);