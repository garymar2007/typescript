var UserFactory = require('./userFactory');

var alex = UserFactory('Alex Banks', 100);
var eve = UserFactory('Eve Porcello', 100, 'employee', 'CSG');

eve.payDay(1000);

console.log( alex.toString() )
console.log( eve.toString() )
