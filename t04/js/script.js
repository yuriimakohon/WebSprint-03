function concat(string1, string2) {
  if (string2) {
    return string1.concat(' ', string2);
  }

  getString2.count = 0;

  function getString2() {
    let string2 = prompt("Enter the second string");

    getString2.count++;
    return string1.concat(' ', string2);
  }
  return getString2;
}
