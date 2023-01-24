class Passenger {
    firstName: string;
    lastName: string;
    frequentFlyerNo: number;

    constructor(firstName:string, lastName:string, frequentFlyerNo: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }

    display() {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
    }
}

var passenger = new Passenger("Gary", "Ma", 123456);
passenger.display();

// Do not show display function
for (let item in passenger) {
    if(item !== "display") {
        console.log(item);
        console.log(passenger[item]);
    }
}

//Alternatively, you may do this as well
for(let item in passenger) {
    if(passenger[item] instanceof Function) {
        continue;
    }
    console.log(item);
    console.log(passenger[item]);
}