import * as readlineSync from 'readline-sync';//to get user input

class Product {
    constructor(public id: number, public name: string, public price: number) {}
}

class ProductCalculator {
    private products: Product[] = [];

    addProduct(id: number, name: string, price: number): void {
        const product = new Product(id, name, price);
        this.products.push(product);
    }

    calculateMaximumProduct(): { maxProduct: number, productIds: number[], productNames: string[] } {
        let maxProduct = 0;
        let maxProductIds: number[] = [];
        let maxProductNames: string[] = [];

        for (let i = 0; i <= this.products.length - 2; i++) {
            const product = this.products[i].price * this.products[i + 1].price;

            if (product > maxProduct) {
                maxProduct = product;
                maxProductIds = [this.products[i].id, this.products[i + 1].id];
                maxProductNames = [this.products[i].name, this.products[i + 1].name];
            }
        }

        return { maxProduct, productIds: maxProductIds, productNames: maxProductNames };
    }



    calculatingLongestSequence(): { maxLength: number } {
        let currentLength = 1;
        let maxLength = 1;
        let currentStartIndex = 0;
    
        let longestSequence: { productIds: number[], productNames: string[], productPrice: number[] } = {
            productIds: [this.products[0].id],
            productNames: [this.products[0].name],
            productPrice: [this.products[0].price],
        };
    
        for (let i = 1; i < this.products.length; i++) {
            if (this.products[i].price > this.products[i - 1].price) {
                currentLength++;
                longestSequence.productIds.push(this.products[i].id);
                longestSequence.productNames.push(this.products[i].name);
                longestSequence.productPrice.push(this.products[i].price);
            } else {
                currentLength = 1;
                longestSequence = {
                    productIds: [this.products[i].id],
                    productNames: [this.products[i].name],
                    productPrice: [this.products[i].price],
                };
            }
    
            if (currentLength > maxLength) {
                maxLength = currentLength;
                currentStartIndex = i - currentLength + 1;
            }
        }
    
        console.log("Products in the longest ascending sequence:");
        for (let i = currentStartIndex; i < currentStartIndex + maxLength; i++) {
            console.log(`ID: ${this.products[i].id}, Name: ${this.products[i].name}, Price: ${this.products[i].price}`);
        }
    
        return {
            // productIds: longestSequence.productIds,
            // productNames: longestSequence.productNames,
            // productPrice: longestSequence.productPrice,
            maxLength
        };
    }
    
}
let productcalculator = new ProductCalculator();
const Numberofproduct = Number(readlineSync.question("Enter Number of product:"));
for (let i = 0; i < Numberofproduct; i++) {
    const id = Number(readlineSync.question("Enter your id: "));
    const Name = readlineSync.question("Enter your Name: ");
    const price = Number(readlineSync.question("Enter your price: "));
    // Validate that id and price are valid numbers
    if (isNaN(id) || isNaN(price)) {
        console.log('Invalid input. Please enter valid numeric values for ID and Price.');
        break;
    }
    productcalculator.addProduct(id, Name, price);
}

const result = productcalculator.calculateMaximumProduct();
console.log(`The maximum product of adjacent prices: ${result.maxProduct}`);
console.log(`Product IDs contributing to the maximum product: ${result.productIds.join(', ')}`);
console.log(`Product Names contributing to the maximum product: ${result.productNames.join(', ')}`);

const result2 = productcalculator.calculatingLongestSequence();
console.log(`Length of the longest ascending sequence: ${result2.maxLength}`);
// console.log("Products in the longest ascending sequence:");
// for (let i = 0; i < result2.productIds.length; i++) {
//     console.log(`ID: ${result2.productIds[i]}, Name: ${result2.productNames[i]}, Price: ${result2.productPrice[i]}`);
// }

