class Check{
    static bankName: string = "Bank of America";
    customerName: string;
    accNo: number;
    routingNo:number;

    display(){
        Check.bankName = "BOA";
        console.log(Check.bankName);
    }
}

var check = new Check();
check.display();

console.log(Check.bankName);
//static property of a class could be modified.
Check.bankName=  "BOA";
console.log(Check.bankName);