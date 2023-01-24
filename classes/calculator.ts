class Calculator{
    static sum(num1:number, numb2:number): number{
        return num1 + numb2;
    }

    static sub(num1:number, numb2:number): number{
        return num1 - numb2;
    }
}

console.log(Calculator.sum(10, 20));
console.log(Calculator.sub(20, 90));