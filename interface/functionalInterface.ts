interface Add {
    (x:number, y:number);
}

interface Sub {
    (x:number, y:number):number;
}

var add:Add;
var sub:Sub;

add=function(x:number, y:number):number{
    return x + y;
}

sub = function(x:number, y:number):number{
    return Math.abs(x-y);
}

console.log(add(5,7));
console.log(sub(10, 30));