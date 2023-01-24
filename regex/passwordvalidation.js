var password = "test12345";
var regEx = /(?=.*[A-Z])\w{4,10}/;
if (password.match(regEx)) {
    console.log("Valid password");
}
else {
    console.log("Invalid password - " + password);
}
