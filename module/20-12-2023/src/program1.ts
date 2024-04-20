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

calculating_longest_sequence():{productIds: number[], productNames: string[],productprice :number[],maxcount:number}{
    let maxProductIds:number[] = [];
    let maxProductNames:string[] = [];
    let maxProductprice:number[] = [];
    let productPairs: { id: number, name: string, price: number }[] = [];
let count:number=0;
let currcount:number=1;


     for(let i=0;i<=this.products.length-2;i++){          

             if (this.products[i].price > this.products[i+1].price) {               
                  maxProductIds.push(this.products[i].id,this.products[i+1].id);
                 maxProductNames.push(this.products[i].name,this.products[i+1].name);
                 maxProductprice.push(this.products[i].price,this.products[i+1].price);
                count+=1;
            }     
            else{
            if(count>currcount){
                currcount=count;
            }  
            count=0;
        }
             
    }           

            console.log("maximum count:",currcount)
            return { productIds: maxProductIds, productNames: maxProductNames ,productprice:maxProductprice,maxcount:count};
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
// -------

const result = productcalculator.calculateMaximumProduct();
console.log(`The maximum product of adjacent prices: ${result.maxProduct}`);
console.log(`Product IDs contributing to the maximum product: ${result.productIds.join(', ')}`);
console.log(`Product Names contributing to the maximum product: ${result.productNames.join(', ')}`);

const result2 = productcalculator.calculating_longest_sequence();
console.log(`Product count contributing to the maximum product: ${result2.maxcount}`);
console.log(`Product IDs contributing to the maximum product: ${result2.productIds.join(',')}`);
console.log(`Product Names contributing to the maximum product: ${result2.productNames.join(', ')}`);
console.log(`Product price contributing to the maximum product: ${result2.productprice.join(', ')}`);
