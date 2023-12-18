abstract class Employee {
    abstract getSalary(): number;
}

 class Shape extends Employee {
    id: number;
    firstName: string;
    lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(): string {
        return `${this.id ** 2}  ${this.firstName} ${this.lastName}`;
    }
}

const employee = new Shape(8, 'john', 'gon');
console.log(employee.fullName);

[LOG]: "64  john gon" 
