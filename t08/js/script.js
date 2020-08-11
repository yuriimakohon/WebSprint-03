let order = "ASC";

function sortTable(sortType) {
  let rows = Array.from(tbody.rows);
  
  if (sortType == "name") sortType = 0;
  if (sortType == "strength") sortType = 1;
  if (sortType == "age") sortType = 2;
  rows.sort((row1, row2) => {
    return sortType == 0 ?
      sortByName(row1, row2)
      : sortByNumbers(row1, row2, sortType);
  });
  rows = setOrder(rows, sortType);
  rows.forEach((row) => tbody.append(row));
}

function setOrder(rows, sortType) {
  let notification = document.querySelector("#notification");

  if (order == "ASC") {
    order = "DESC";
    rows = rows.reverse();
  } else {
    order = "ASC";
  }
  if (sortType == 0) sortType = "Name";
  if (sortType == 1) sortType = "Strength";
  if (sortType == 2) sortType = "Age";
  notification.innerHTML = `Sorting by ${sortType}, order: ${order}`;
  return rows;
}

function sortByName(row1, row2) {
  return row1.cells[0].innerHTML > row2.cells[0].innerHTML ? 1 : -1;
}

function sortByNumbers(row1, row2, sortType) {
  return row1.cells[sortType].innerHTML - row2.cells[sortType].innerHTML;
}

function addTr(parent, content) {
  let tr = document.createElement("tr");

  for (let cellNum in content) {
    let td = document.createElement("td");

    td.innerHTML = content[cellNum];
    tr.appendChild(td);
  }
  parent.appendChild(tr);
}

let placeholder = document.getElementById("placeholder");
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

placeholder.innerHTML = '';
placeholder.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);
addTr(thead, ["<div id='nameCell'>Name</div>", "<div id='strengthCell'>Strength</div>", "<div id='ageCell'>Age</div>"]);
addTr(tbody, ["Black<br>Panhter", 66, 53]);
addTr(tbody, ["Captain<br>America", 79, 137]);
addTr(tbody, ["Captain<br>Marvel", 97, 26]);
addTr(tbody, ["Hulk", 80, 49]);
addTr(tbody, ["Iron<br>Man", 88, 48]);
addTr(tbody, ["Spider-<br>Man", 78, 16]);
addTr(tbody, ["Thanos", 99, 1000]);
addTr(tbody, ["Thor", 95, 1000]);
addTr(tbody, ["Yon-<br>Rogg", 73, 52]);

document.getElementById("nameCell").onclick = () => sortTable("name");
document.getElementById("strengthCell").onclick = () => sortTable("strength");
document.getElementById("ageCell").onclick = () => sortTable("age");
