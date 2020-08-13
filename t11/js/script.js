let notesArchive = document.querySelector("#notesArchive");
let arr = document.cookie.split(/,/).slice(1);

for (let log in arr) {
  addCookieToNoteArchive(arr[log]);
}

function addToCookie() {
  let textarea = document.querySelector("#texatareaCookie");
  if (!textarea.value == '') {
    setCookie(textarea.value);
    addCookieToNoteArchive(textarea.value);
    textarea.value = '';
  } else {
    alert('"It\'s empty. Tryto input something in "Text input".');
  }
}

function clearCookie() {
  if (confirm("Are you sure?")) {
    document.cookie = "cookie=; expires=Thu, 18 Dec 2005 12:00:00 UTC";
    location.reload();
  }
}

function setCookie(newValue) {
  newValue = document.cookie.slice(7)
  + ", " + newValue;
  var d = new Date();
  d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = "cookie=" + newValue + ";"
  + expires;
}

function addCookieToNoteArchive(cookie) {
  let newNote = document.createElement("div");

  newNote.append(`--> ${cookie}`);
  notesArchive.append(newNote);
}
