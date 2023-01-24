let password: string = "test12345";
let regEx: any = /(?=.*[A-Z])\w{4,10}/;

if(password.match(regEx)) {
    console.log("Valid password");
}else {
    console.log("Invalid password - " + password);
}
