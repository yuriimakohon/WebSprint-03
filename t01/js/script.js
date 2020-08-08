function getFormattedDate(dateObject) {
  let day = dateObject.getDay();
  let formattedDate = "";

  if (dateObject.getDate() < 10) {
    formattedDate += '0';
  }
  formattedDate += dateObject.getDate() + '.';
  if (dateObject.getMonth() < 9) {
    formattedDate += '0';
  }
  formattedDate += dateObject.getMonth() + 1 + '.';
  formattedDate += dateObject.getFullYear() + ' ';
  if (dateObject.getHours() < 10) {
    formattedDate += '0';
  }
  formattedDate += dateObject.getHours() + ":";
  if (dateObject.getMinutes() < 10) {
    formattedDate += '0';
  }
  formattedDate += dateObject.getMinutes() + ' ';
  if (day == 1) {
    formattedDate += "Monday";
  } else if (day == 2) {
    formattedDate += "Tuesday";
  } else if (day == 3) {
    formattedDate += "Wednesday";
  } else if (day == 4) {
    formattedDate += "Thursday";
  } else if (day == 5) {
    formattedDate += "Friday";
  } else if (day == 6) {
    formattedDate += "Saturday";
  } else {
    formattedDate += "Sunday";
  }
  return formattedDate;
}
