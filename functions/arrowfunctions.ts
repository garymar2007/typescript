var helloFun = ():string =>{
    return "Hello";
}

console.log(helloFun());

var helloFun1 = (name: string):string =>{
    return "Hello " + name;
}

console.log(helloFun1("Gary"));

var multiply = (num1:number, num2:number):number => {
    return num1 * num2;
}

console.log(multiply(5, 7));

var myArray: Array<any> = [];

for(var i = 0; i < 10; i++) {
    myArray.push(():number => {
        return i;
    });
}

for(var i = 0; i < 10; i++) {
    console.log(myArray[i]());  //without the (), it only prints out the function.
}