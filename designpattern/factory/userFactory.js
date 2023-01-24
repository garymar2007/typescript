var Employee = require('./Employee');
var Shopper = require('./Shopper');

var userFactory = (name, money=0, type, employee) => {
    if (type === 'employee') {
        return new Employee(name, money, employee);
    } else {
        return new Shopper(name, money);
    }
}

module.exports = userFactory;
