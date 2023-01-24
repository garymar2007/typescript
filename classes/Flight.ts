interface IFlight {
    flightNo:number;
    from: string;
    to: string;

    display(): void;
}

class Flight implements IFlight {
    flightNo:number;
    from: string;
    to: string;

    constructor(flightNo: number, from:string, to:string) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }

    display(): void {
        console.log(this.flightNo + ": From " + this.from + " - to " + this.to);
    }
}

var flight = new Flight(123, "Austin", "Denver");
flight.display();