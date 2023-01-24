var cell = "1234567-890";
var re = /[0-9]{10}/;
if (cell.match(re)) {
    console.log("Valid cellphone number");
}
else {
    console.log("Invalid cellphone number - " + cell);
}
