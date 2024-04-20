import * as readlineSync from 'readline-sync';//to get user input

interface Product {
    productNumber: number;
    isFascinating(): boolean;
}

class FascinatingProduct implements Product {
    constructor(public productNumber: number) {}

    isFascinating(): boolean {
        const concatenatedResult: string = `${this.productNumber}${this.productNumber * 2}${this.productNumber * 3}`;
        const digitsSet: Set<string> = new Set(concatenatedResult);

        // Check if the set contains all digits from 1 to 9 exactly once
        return digitsSet.size === 9 && !digitsSet.has('0');
    }
}

class OnlineShopping {
    purchaseProduct(productNumber: number): void {
        if (!this.isValidProductNumber(productNumber)) {
            console.log("Invalid product number. Please enter a valid positive integer.");
            return;
        }

        const product = new FascinatingProduct(productNumber);

        if (product.isFascinating()) {
            console.log(`You have purchased a fascinating product: ${product.productNumber}`);
        } else {
            console.log(`Sorry, the product with number ${product.productNumber} is not fascinating.`);
        }
    }

    private isValidProductNumber(productNumber: number): boolean {
        return Number.isInteger(productNumber) && productNumber > 0;
    }
}

// Example Usage
const Numberofproduct = Number(readlineSync.question("Enter lucky draw Number :"));
const fascinatingProduct = new FascinatingProduct(Numberofproduct);
const onlineShopping = new OnlineShopping();
// const productNumberToPurchase: number = 327;
onlineShopping.purchaseProduct(Numberofproduct);
