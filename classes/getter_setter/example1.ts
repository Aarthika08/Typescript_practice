class Person {
    private ageValue: number;
    private firstNameValue: string;
    private lastNameValue: string;

    public get age(): number {
        return this.ageValue;
    }

    public set age(newAge: number) {
        this.validateAge(newAge);
        this.ageValue = newAge;
    }

    public get fullName(): string {
        return `${this.firstNameValue} ${this.lastNameValue}`;
    }

    public set firstName(newFirstName: string) {
        this.validateName(newFirstName, "first");
        this.firstNameValue = newFirstName;
    }

    public set lastName(newLastName: string) {
        this.validateName(newLastName, "last");
        this.lastNameValue = newLastName;
    }

    private validateAge(newAge: number): void {
        if (newAge <= 0 || newAge > 100) {
            throw new Error("Invalid age. Age must be between 1 and 100.");
        }
    }

    private validateName(name: string, type: string): void {
        if (!name) {
            throw new Error(`Invalid ${type} name. ${type} name cannot be empty.`);
        }
    }
}

const person = new Person();
person.age = 10;
person.firstName = 'aaa';
person.lastName = 'bbb';

console.log(person.age); // Output: 10
console.log(person.fullName); // Output: aaa bbb
