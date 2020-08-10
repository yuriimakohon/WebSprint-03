function transformation() {
  let hero = document.getElementById("hero");
  let lab = document.getElementById("lab");

  if (hero.innerHTML === "Hulk") {
    hero.innerHTML = "Bruce Banner";
    hero.style.fontSize = "60px";
    hero.style.letterSpacing = "2";
    document.getElementById("lab").style.background = "#ffb300";
  }
  else {
    hero.innerHTML = "Hulk";
    hero.style.fontSize = "130px";
    hero.style.letterSpacing = "6";
    lab.style.background = "#70964b";
  }
}
