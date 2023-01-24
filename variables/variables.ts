var n1:number = 10;

console.log(n1);

var s1:string = "you are the creator of your destiny";
var s2:string = `all the power is within you, you can do anything and everything`;

console.log(s1);
console.log(s2);

var b1:boolean = true;
var b2:boolean = false;

console.log(b1);
console.log(b2);

var a1:any = "test";
var a2:any = {
    productId: 1,
    productName: "IPhone",
    productPrice: 1000
};
console.log(a1);
console.log(a2);

//Homogeneous Arrays
var array1:Array<string> = ["AngularJS","ReactJS","NodeJS"];
console.log(array1);
console.log(array1[2]);

//Heterogeneous Arrays
var array2:Array<any> = [true, 2,"NodeJS"];
console.log(array2);
console.log(array2[1]);