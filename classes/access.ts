class Student{
    private _id: number;
    private _name: string;

    get id():number{
        return this._id;
    }

    set id(id:number) {
        this._id = id;
    }

    get name():string{
        return this._name;
    }

    set name(name:string) {
        this._name = name;
    }

    display(){
        console.log(this._id + ":" + this._name);
    }
}

var student = new Student();
student.id = 1234;
student.name = "Gary";
student.display();
console.log(student.id);
console.log(student.name);