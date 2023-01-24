interface Product {
    id: number;
    name: string;
    description: string;
    price?:number;
    display():void;
}

var product1:Product = {
    id: 123,
    name: "IPhone",
    description: "Mini 13",
    display():void {
        console.log(this.id + " " + this.name);
    }
} 

var product2:Product = {
    id: 123,
    name: "IPhone",
    description: "Mini 13",
    price: 5000,
    display():void {
        console.log(this.id + " " + this.name);
    }
} 