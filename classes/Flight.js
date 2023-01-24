var Flight = /** @class */ (function () {
    function Flight(flightNo, from, to) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    Flight.prototype.display = function () {
        console.log(this.flightNo + ": From " + this.from + " - to " + this.to);
    };
    return Flight;
}());
var flight = new Flight(123, "Austin", "Denver");
flight.display();
