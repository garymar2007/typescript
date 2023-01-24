export class User{
    firstName;
    lastName;
    email;

    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    get fullName() {
        return `${(this.firstName)} ${(this.lastName)}`;
    }

    get(): string{
        return this.firstName + ' ' + this.lastName;
    }

    checkEmail(e: string): boolean {
        // if(this.email === e) {
        //     return true;
        // } else {
        //     return false;
        // }

        return e === this.email;
    }
}

const user = new User('Gary', 'Ma', 'gary.ma@csgi.com');
console.log(user.get());
console.log(user.fullName);
console.log(user.checkEmail('gary.ma@csgi.com'));
console.log(user.checkEmail('teagan.ma@csgi.com'));
