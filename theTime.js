var HOUR = 8;
var MINUTE = 5;
var PERIOD = "AM";


if (MINUTE == 15) {
  console.log("It's a quarter after " + HOUR);
}
else if (MINUTE == 30) {
  console.log("It's half past " + HOUR);
}
else if (MINUTE == 5) {
  console.log("It's 5 after " + HOUR);
}
else if (MINUTE < 30) {
  console.log("It's just after " + HOUR);
}
else {
  console.log("It's almost " + (HOUR+1));
}


if (PERIOD = "AM"){
  console.log(" in the morning.");
}
else {
  console.log(" in the evening.");
}
