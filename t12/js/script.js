let notesArchive = document.querySelector("#notesArchive");

if (localStorage.length == 0)
  notesArchive.append("[Empty]");

for (let i = 0; i < localStorage.length; i++) {
  addItemsToNoteArchive(localStorage.getItem(`item-${i}`));
}

function addToStorage() {
  let textarea = document.querySelector("#textareaStorage");

  if (!textarea.value == '') {
    localStorage.setItem(`item-${localStorage.length}`, textarea.value);
    addItemsToNoteArchive(textarea.value);
    textarea.value = '';
  } else {
    alert('"It\'s empty. Tryto input something in "Text input".');
  }
}

function clearStorage() {
  if (confirm("Are you sure?")) {
    localStorage.clear();
    location.reload();
  }
}

function addItemsToNoteArchive(content) {
  let newNote = document.createElement("div");

  newNote.append(`--> ${content}`);
  if (notesArchive.innerHTML == "[Empty]")
    notesArchive.innerHTML = "";
  notesArchive.append(newNote);
}
