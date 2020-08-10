function createElementCircle(element) {
  let circle = document.createElement("div");

  circle.className = "elem";
  circle.className += ' ' + element;
  if (element == "none") {
    let line = document.createElement("div");
    
    line.className = "line";
    circle.appendChild(line);
  }
  return circle;
}

function addElements(char, dataElement) {
  char.appendChild(document.createElement("br"));
  if (dataElement.match(/air/)) {
    char.appendChild(createElementCircle("air"));
  }
  if (dataElement.match(/water/)) {
    char.appendChild(createElementCircle("water"));
  }
  if (dataElement.match(/fire/)) {
    char.appendChild(createElementCircle("fire"));
  }
  if (dataElement.match(/earth/)) {
    char.appendChild(createElementCircle("earth"));
  }
  if (dataElement.match(/none/)) {
    char.appendChild(createElementCircle("none"));
  }
}

let characters = document.querySelectorAll("#characters li");

for (let char of characters) {
  let dataElement = String(char.getAttribute("data-element"));
  
  if (char.className != "good" && char.className != "evil") {
    char.className = "unknown";
  }
  if (!dataElement.match(/air/)
      && !dataElement.match(/water/)
      && !dataElement.match(/fire/)
      && !dataElement.match(/earth/)) {
    dataElement = "none";
  }
  addElements(char, dataElement);
}
