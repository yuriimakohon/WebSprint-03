function transformation() {
  if (document.getElementById("hero").innerHTML == "Hulk") {
    document.getElementById("hero").innerHTML = "Bruce Benner";
    document.getElementById("hero").style.fontSize = "60px";
    document.getElementById("hero").style.letterSpacing = "2";
    document.getElementById("lab").style.background = "#ffb300";
  }
  else {
    document.getElementById("hero").innerHTML = "Hulk";
    document.getElementById("hero").style.fontSize = "130px";
    document.getElementById("hero").style.letterSpacing = "6";
    document.getElementById("lab").style.background = "#70964b";
  }
}
