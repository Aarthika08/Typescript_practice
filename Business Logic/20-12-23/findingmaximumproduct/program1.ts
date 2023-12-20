// Write a program that reads an array of int and outputs the maximum product
// of two adjacent elements in the given array of numbers.
// Sample O/P:
// Enter number of number to find the product..
// 4
// Enter 4 numbers
// 9
// 9
// 4
// 5
// The maximum product: 81
import * as readlineSync from 'readline-sync';//to get user input
class Product{
    constructor(public id: number, public name: string, public price: number) {}
}
class ProductCalculator{
    private products: Product[] = [];

    addProduct(id: number, name: string, price: number): void{
        const product=new Product(id,name,price);
        this.products.push(product);
    }

    calculateMaximumProduct():{maxProduct: number, productIds: number[], productNames: string[]}{
       let maxProduct =0;
       let maxProductIds: number[] = [];
       let maxProductNames: string[] = [];

        for(let i=0;i<=this.products.length-2;i++){
                const product=this.products[i].price*this.products[i+1].price;
                // max_product = Math.max(max_product, product)
                if (product > maxProduct) {
                    maxProduct = product;
                    maxProductIds = [this.products[i].id, this.products[i + 1].id];
                    maxProductNames = [this.products[i].name, this.products[i + 1].name];

        }
        // return max_product;

    }
    return { maxProduct, productIds: maxProductIds, productNames: maxProductNames };

}
}


let productcalculator=new ProductCalculator();
const Numberofproduct=Number(readlineSync.question("Enter Number of product:"));
for(let i=0;i<Numberofproduct;i++)
{
    const id = Number(readlineSync.question("Enter your id: "));
    const Name = readlineSync.question("Enter your Name: ");
    const price = Number(readlineSync.question("Enter your price: "));
    // inputvalue.push(Number(readlineSync.question("Enter your value: ")))
    // Validate that id and price are valid numbers
    if (isNaN(id) || isNaN(price)) {
        console.log('Invalid input. Please enter valid numeric values for ID and Price.');break;
    }
    productcalculator.addProduct(id,Name,price);
}

// const { maxProduct, productIds, productNames } = productcalculator.calculateMaximumProduct();

// console.log(`The maximum product of adjacent prices: ${maxProduct}`);

const result = productcalculator.calculateMaximumProduct();
console.log(`The maximum product of adjacent prices: ${result.maxProduct}`);
console.log(`Product IDs contributing to the maximum product: ${result.productIds.join(', ')}`);
console.log(`Product Names contributing to the maximum product: ${result.productNames.join(', ')}`);

output 1
Enter Number of product:4
Enter your id: 1
Enter your Name: laptop
Enter your price: 9
Enter your id: 2
Enter your Name: phone
Enter your price: 9
Enter your id: 3
Enter your Name: watch
Enter your price: 4
Enter your id: 4
Enter your Name: ipad
Enter your price: 5
The maximum product of adjacent prices: 81
Product IDs contributing to the maximum product: 1, 2
Product Names contributing to the maximum product: laptop, phone

output 2
Enter Number of product:5
Enter your id: w
Enter your Name: 6
Enter your price: 1
Invalid input. Please enter valid numeric values for ID and Price.
The maximum product of adjacent prices: 0
Product IDs contributing to the maximum product:
Product Names contributing to the maximum product:
