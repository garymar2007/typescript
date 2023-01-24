interface Exterior {
    color:string;
    numOfDoors:number;
}

interface Interior {
    seats:number;
    auto:boolean;
}

interface Car extends Exterior, Interior{
    make:string;
    model:string;
    year:number;
}

var myCar: Car = {
    make: "Toyata",
    model: "Rav 4",
    year: 2009,
    color: "white",
    numOfDoors: 4,
    seats: 5,
    auto: true
}