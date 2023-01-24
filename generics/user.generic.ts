export class User<T> {
    name: string;
    age: number;
    email: string;
    isMale: boolean;

    public classicUserData: T;

    public mergeClassicUser(params: T): void {
        const{name, age, email, isMale} = this;

        this.classicUserData = {name, age, email, isMale, ...params};
    }
}

interface ClassicUser {
    name: {first: string, last: string};
}

interface ClassicUser2 {
    name: {first: string, middle: string, last: string};
}

const user1 = new User<ClassicUser>();
user1.mergeClassicUser({name: {first: 'Gary', last: 'Ma'}});

const user2 = new User<ClassicUser2>();
user2.mergeClassicUser({name: {first: 'Gary', middle: 'Victory', last: 'Ma'}});
