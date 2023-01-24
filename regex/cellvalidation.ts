let cell:string = "1234567-890";
let re: any = /[0-9]{10}/;

if(cell.match(re)) {
    console.log("Valid cellphone number");
}else {
    console.log("Invalid cellphone number - " + cell);
}