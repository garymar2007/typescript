var email = prompt('Please input your email address:');
var atPosition = email.indexOf('@');
var dotPosition = email.indexOf('.');
if (atPosition == -1 || dotPosition == -1) {
    alert("Invalid email id ".concat(email));
}
else {
    confirm("Are you sure the email is yours: ".concat(email));
}
