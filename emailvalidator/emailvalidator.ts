var email:any = prompt('Please input your email address:');

var atPosition:number = email.indexOf('@');

var dotPosition:number = email.indexOf('.');

if (atPosition == -1 || dotPosition == -1) {
    alert(`Invalid email id ${email}`);
}else {
    confirm(`Are you sure the email is yours: ${email}`);
}