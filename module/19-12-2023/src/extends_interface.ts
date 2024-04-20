import * as readlineSync from 'readline-sync';//to get user input
interface customer{
    discount:number;
    already_customer:boolean;
}
interface Product extends customer{
    id: number;
    name: string;
    price: number;
    model: string;
    version: number;
    customer_calculation(already_customer: boolean):number
    calculateDiscount(): number;
  }
  
class ProductManager implements Product {
    constructor(
      public id: number,
      public name: string,
      public price: number,
      public model: string,
      public version: number,
      public discount:number,
      public already_customer:boolean
    ) {}

    customer_calculation(already_customer:boolean):number{
        if (this.already_customer)
        {
            this.price=price-1000;
        }
        else{
            this.price=price-500;
        }
        return this.price;
    }
    calculateDiscount() {
        let discountPercent = 0.5;
        if (price >= 100000) {
            console.log("Congratulations!!!,You gained 50% discount for your product.Happy shopping");
            return this.price * discountPercent;
        }
        else if (price < 100000 && price >= 50000) {
            console.log("Congratulations!!!,You gained 40% discount for your product.Happy shopping");
            discountPercent = 0.4;
            return this.price * discountPercent;
        }
        else if (price < 50000 && price >= 20000) {
            console.log("Congratulations!!!,You gained 30% discount for your product.Happy shopping");
            discountPercent = 0.3;
            return this.price * discountPercent;
        }
        else if (price < 20000 && price >= 10000) {
            console.log("Congratulations!!!,You gained 20% discount for your product.Happy shopping");
            discountPercent = 0.2;
            return this.price * discountPercent;
        }
        else if (price < 10000 && price >= 5000) {
            console.log("Congratulations!!!,You gained 10% discount for your product.Happy shopping");
            discountPercent = 0.1;
            return this.price * discountPercent;
        }
        else {
            console.log("Congratulations!!!,You gained 5% discount for your product.Happy shopping");
            discountPercent = 0.05;
            return this.price * discountPercent;
        }
        return 0; // Placeholder value, replace with actual discount calculation
    }
}
const id = Number(readlineSync.question("Enter your id: "));
const Name = readlineSync.question("Enter your Name: ");
const price = Number(readlineSync.question("Enter your price: "));
const model = readlineSync.question("Enter your model: ");
const version = Number(readlineSync.question("Enter your version: "));
const discount = 0.1;
const already_customer =Boolean(readlineSync.question("Enter yes if your are already our customer: "))!;

const laptop: Product = new ProductManager(id, Name, price, model, version,discount,already_customer);
const updatedPrice  = laptop.customer_calculation(already_customer);
const discountAmount = laptop.calculateDiscount();
const pay=updatedPrice-discountAmount;
console.log(`Product: ${laptop.name},\nUpdated Price for every customer: ${updatedPrice}\n`);
console.log(`Product: ${laptop.name}, MRP : ${laptop.price}, Discount: ${discountAmount}`);
console.log(`Pay :${pay} for the Product ${laptop.name}`);
