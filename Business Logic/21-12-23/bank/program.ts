import * as readlineSync from 'readline-sync';

class Bank {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    getBalance(): number {
        return this.balance;
    }
}

class Employee {
    private age: number | string;
    private gender: string;
    private maritalStatus: string;

    constructor() {
        this.age = this.getValidInput("Enter your age: ", true);
        this.gender = this.getValidInput("Enter your GENDER (M or F): ", ['M', 'F']) as string;
        this.maritalStatus = this.getValidInput("Enter your MARITAL STATUS (Y or N): ", ['Y', 'N']) as string;
    }

    private getValidInput(prompt: string, validOptions?: string[] | boolean): number | string {
        let userInput: string | number;
        do {
            userInput = readlineSync.question(prompt);
            if (validOptions && Array.isArray(validOptions) && validOptions.includes(userInput.toUpperCase())) {
                return userInput.toUpperCase();
            } else if (!isNaN(Number(userInput))) {
                return Number(userInput);
            }
            console.log("Invalid input. Please enter valid values.");
        } while (true);
    }

    getPlaceOfService(): string {
        if (this.gender === 'F') {
            return 'Urban areas';
        } else if (this.gender === 'M' && typeof this.age === 'number' && this.age >= 20 && this.age <= 40) {
            return 'Anywhere';
        } else if (this.gender === 'M' && typeof this.age === 'number' && this.age > 40 && this.age <= 60) {
            return 'Urban areas';
        } else {
            return 'ERROR';
        }
    }
}

function taxCalculator(grossSalary: number, totalSavings: number): number {
    const maxDeduction = 100000;
    const taxableIncome = Math.max(grossSalary - totalSavings, 0);

    let tax = 0;
    if (taxableIncome > 500000) {
        // Slab 0: No tax up to 100,000
        tax += 0;

        // Slab 1: 10% on the amount between 100,000 and 200,000
        tax += 0.1 * (200000 - 100000);

        // Slab 2: 20% on the amount between 200,000 and 500,000
        tax += 0.2 * (500000 - 200000);

        // Slab 3: 30% on the amount exceeding 500,000
        tax += 0.3 * (taxableIncome - 500000);
    } else if (taxableIncome > 200000) {
        // Slab 0: No tax up to 100,000
        tax += 0;

        // Slab 1: 10% on the amount between 100,000 and 200,000
        tax += 0.1 * (taxableIncome - 100000);
    } else if (taxableIncome > 100000) {
        // Slab 0: No tax up to 100,000
        tax += 0.1 * (taxableIncome - 100000);
    } else {
        // Slab 0: No tax up to 100,000
        tax += 0;
    }

    return tax;
}

console.log("Concept 1: Bank Balances");
const bankA = new Bank(1000);
const bankB = new Bank(1500);
const bankC = new Bank(2000);
console.log(`Balance in Bank A: $${bankA.getBalance()}`);
console.log(`Balance in Bank B: $${bankB.getBalance()}`);
console.log(`Balance in Bank C: $${bankC.getBalance()}`);

console.log("\nConcept 2: Employee Place of Service");
const employee = new Employee();
const placeOfService = employee.getPlaceOfService();
console.log(`Place of service: ${placeOfService}`);

console.log("\nConcept 3: Tax Calculation");
const grossSalary = parseFloat(readlineSync.question("Enter your gross salary: "));
const totalSavings = parseFloat(readlineSync.question("Enter your total savings: "));

if (isNaN(grossSalary) || isNaN(totalSavings)) {
    console.log("Invalid input. Please enter valid numeric values for gross salary and total savings.");
} else {
    const calculatedTax = taxCalculator(grossSalary, totalSavings);
    console.log(`Your calculated tax: Rs. ${calculatedTax.toFixed(2)}`);
}


output

Concept 1: Bank Balances
Balance in Bank A: $1000
Balance in Bank B: $1500
Balance in Bank C: $2000

Concept 2: Employee Place of Service
Enter your age: 23
Enter your GENDER (M or F): F
Enter your MARITAL STATUS (Y or N): N
Place of service: Urban areas

Concept 3: Tax Calculation
Enter your gross salary: 1500000
Enter your total savings: 30000 
Your calculated tax: Rs. 361000.00
