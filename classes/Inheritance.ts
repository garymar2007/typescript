class BMW {
    make:string;
    model: string;
    year: number;

    constructor(make:string, model:string, year:number) {
        this.make = make;
        this.model =  model;
        this.year = year;
    }

    commonEngineFunc() {
        console.log("Common Func");
    }

    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }
}

class ThreeSeries extends BMW {
    cruiserControlEnabled: boolean;

    constructor(make:string, model: string, year: number, cruiserControlEnabled: boolean) {
        super(make, model, year);
        this.cruiserControlEnabled = cruiserControlEnabled;
    }

    cruiseControl(){
        this.cruiserControlEnabled = true;
        console.log("Crusing");
    }

    start(){
        console.log("Started with keyless");
    }

    stop(){
        console.log("Stopped with keyless");
    }
}

class FiveSeries extends BMW {
    parkingAssistEnabled: boolean;

    constructor(make:string, model:string, year:number, parkingAssistEnabled:boolean) {
        super(make, model, year);
        this.parkingAssistEnabled = parkingAssistEnabled;
    }
}

var threeSeries = new ThreeSeries("BMW", "328i", 2018, false);
console.log(threeSeries.cruiserControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
threeSeries.commonEngineFunc();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl();