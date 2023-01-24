class Person {

    constructor(builder) {
        //name, isEmployee=false, isManager=false, hours=40, money=0, shoppingList=[] ) {
        this.name = builder.name
        this.isEmployee = builder.isEmployee;
        this.isManager = builder.isManager;
        this.hours = builder.hours || 40;
        this.money = builder.money || 0;
        this.shoppingList = builder.shoppingList || [];
    }

    toString() {
        return JSON.stringify(this);
    }

}

module.exports = Person;
