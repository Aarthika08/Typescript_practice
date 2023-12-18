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

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(newFirstName: string) {
        if (!newFirstName) {
            throw new Error("Invalid first name");
        }
        this._firstName = newFirstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(newLastName: string) {
        if (!newLastName) {
            throw new Error("Invalid last name");
        }
        this._lastName = newLastName;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

const person = new Person();
person.age = 10;
person.firstName = 'aaa';
person.lastName = 'bbb';

console.log(person.age); // Output: 10
console.log(person.firstName); // Output: aaa
console.log(person.lastName); // Output: bbb

console.log(person.getFullName()); // Output: aaa bbb
