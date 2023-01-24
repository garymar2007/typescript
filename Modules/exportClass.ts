import Calculator, { Calculator1 as Calc} from "./classModules";

var calculator = new Calc();
console.log(calculator.add(2,3));
console.log(calculator.sub(2,3));

var calculator1 = new Calculator();
console.log(calculator1.add(2,3));
console.log(calculator1.sub(2,3));
