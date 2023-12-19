class Person {
    private ageValue: number; 
    private firstNameValue: string;
    private lastNameValue: string;

    public get age(): number {
        return this.ageValue;
    }

    public set age(newAge: number) {
        if (newAge <= 0 || newAge > 100) {
            throw new Error("Invalid age");
        }
        this.ageValue = newAge;
    }

    public get firstName(): string {
        return this.firstNameValue;
    }

    public set firstName(newFirstName: string) {
        if (!newFirstName) {
            throw new Error("Invalid first name");
        }
        this.firstNameValue = newFirstName;
    }

    public get lastName(): string {
        return this.lastNameValue;
    }

    public set lastName(newLastName: string) {
        if (!newLastName) {
            throw new Error("Invalid last name");
        }
        this.lastNameValue = newLastName;
    }

    public getFullName(): string {
        return `${this.firstNameValue} ${this.lastNameValue}`;
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



output
10
aaa
bbb
aaa bbb
