import { renderNotes } from "./app.js";

let arrayOfNotes = JSON.parse(localStorage.getItem("notes")) || [];
console.log(arrayOfNotes);

let showArchivedNotes = document.querySelector(".archive-notes-container");
//console.log(showArchivedNotes);
showArchivedNotes.addEventListener("click", (event) => {
    let type = event.target.dataset.type;
    let noteId = event.target.dataset.id;

    switch (type) {
        case "del":
            arrayOfNotes = arrayOfNotes.filter(({ id }) => id != noteId);
            showArchivedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ isArchived }) => isArchived));
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
            break;
        case "archived":
            arrayOfNotes = arrayOfNotes.map(note => note.id == noteId ?
                { ...note, isArchived: !isArchived } : note);
            showArchivedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ isArchived }) => isArchived));
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
            break;
    }
});
console.log(arrayOfNotes.filter(({ isArchived }) => isArchived));
showArchivedNotes.innerHTML = renderNotes(
    arrayOfNotes.filter(({ isArchived }) =>
        isArchived
    ));