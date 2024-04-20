import * as readlineSync from 'readline-sync';//to get user input

interface Product {
    id: number;
    name: string;
    price: number;
    model: string;
    version: number;
    calculateDiscount(): number;
  }
  
  class ProductManager implements Product {
    constructor(
      public id: number,
      public name: string,
      public price: number,
      public model: string,
      public version: number
    ) {}
  
    calculateDiscount(): number {
      let discountPercent = 0.5;
 if(price>=100000)
 {
    console.log("Congratulations!!!,You gained 50% discount for your product.Happy shopping");
    return this.price * discountPercent;
 }
 else if(price<100000 && price >=50000)
 {  
    console.log("Congratulations!!!,You gained 40% discount for your product.Happy shopping");
    discountPercent = 0.4;
    return this.price * discountPercent;
 }
 else if(price<50000 && price >=20000)
 {
    console.log("Congratulations!!!,You gained 30% discount for your product.Happy shopping");
    discountPercent = 0.3;
    return this.price * discountPercent;
 }
 else if(price<20000 && price >=10000)
 {
    console.log("Congratulations!!!,You gained 20% discount for your product.Happy shopping");
    discountPercent = 0.2;
    return this.price * discountPercent;
 }
 else if(price<10000 && price >=5000)
 {
    console.log("Congratulations!!!,You gained 10% discount for your product.Happy shopping");
    discountPercent = 0.1;
    return this.price * discountPercent;
 }
 else{
    console.log("Congratulations!!!,You gained 5% discount for your product.Happy shopping");

    discountPercent = 0.05;
    return this.price * discountPercent;
 }
    }
  }
  
//   const id = Number(prompt("Enter your id:"))?? 0;
// const Name = prompt("Enter your Name:") ?? "";
// const price = Number(prompt("Enter your price:"))?? 0;
// const model = prompt("Enter your model:")!;
// const version = Number(prompt("Enter your version:"))?? 0;
console.log("Get Exciting Offers !!!,For your products.Happy shopping");

const id = Number(readlineSync.question("Enter your id: "))?? 0;
const Name = readlineSync.question("Enter your Name: ")?? "";
const price = Number(readlineSync.question("Enter your price: "))?? 0;
const model = readlineSync.question("Enter your model: ")!;//telling typescript it never be null
const version = Number(readlineSync.question("Enter your version: "))?? 0;

const laptop: Product = new ProductManager(id, Name, price, model, version);
const discountAmount = laptop.calculateDiscount();

console.log(`Product: ${laptop.name}, Original Price: ${laptop.price}`);
console.log(`Product: ${laptop.name}, Price: ${laptop.price}, Discount: ${discountAmount}`);
