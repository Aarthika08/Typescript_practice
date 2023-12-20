import * as readlineSync from 'readline-sync';//to get user input

interface Product{
    productNumber:Number;
    isFascinating(): boolean;

}

class FascinatingProduct  implements Product{
    constructor(public productNumber:number)
    {}

   isFascinating(): boolean{
const concatenatedResult: string = `${this.productNumber}${this.productNumber * 2}${this.productNumber * 3}`;
const digitSet: Set<string> = new Set(concatenatedResult)

return digitSet.size === 9 && !digitSet.has('0');
}}

class OnlineShopping{
    purchaseProduct(product:Product):void{
        if(product.isFascinating()){
            console.log(`You have purchased a fascinating product: ${product.productNumber}`);
        } else {
            console.log(`Sorry, the product with number ${product.productNumber} is not fascinating.`);
        }
    }
}

// Example Usage
const Numberofproduct = Number(readlineSync.question("Enter lucky draw Number :"));
const fascinatingProduct = new FascinatingProduct(327);
const onlineShopping = new OnlineShopping();
onlineShopping.purchaseProduct(fascinatingProduct);
Enter lucky draw Number :327
You have purchased a fascinating product: 327
