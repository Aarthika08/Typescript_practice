class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    public get age(): number {
        return this._age;
    }

    public set age(newAge: number) {
        if (newAge <= 0 || newAge > 100) {
            throw new Error("Invalid age");
        }
        this._age = newAge;
    }

    public get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    public set firstName(newFirstName: string) {
        if (!newFirstName) {
            throw new Error("Invalid first name");
        }
        this._firstName = newFirstName;
    }

    public set lastName(newLastName: string) {
        if (!newLastName) {
            throw new Error("Invalid last name");
        }
        this._lastName = newLastName;
    }
}

const person = new Person();
person.age = 10;
person.firstName = 'aaa';
person.lastName = 'bbb';

console.log(person.age); // Output: 10
console.log(person.fullName); // Output: aaa bbb
