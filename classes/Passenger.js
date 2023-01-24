var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentFlyerNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
    };
    return Passenger;
}());
var passenger = new Passenger("Gary", "Ma", 123456);
passenger.display();
// Do not show display function
for (var item in passenger) {
    if (item !== "display") {
        console.log(item);
        console.log(passenger[item]);
    }
}
//Alternatively, you may do this as well
for (var item in passenger) {
    if (passenger[item] instanceof Function) {
        continue;
    }
    console.log(item);
    console.log(passenger[item]);
}
