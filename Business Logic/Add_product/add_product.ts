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
    private products: Product[] = [];

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
        const discountAmount = alreadyCustomer ? 1000 : 500;
        return this.price - discountAmount;
    }
    calculateDiscount():number {
        let discountPercent = 0.5;
        if (this.price >= 100000) {
            console.log("Congratulations!!!,You gained 50% discount for your product.Happy shopping");
            return this.price * discountPercent;
        }
        else if (this.price < 100000 && this.price >= 50000) {
            console.log("Congratulations!!!,You gained 40% discount for your product.Happy shopping");
            discountPercent = 0.4;
            return this.price * discountPercent;
        }
        else if (this.price < 50000 && this.price >= 20000) {
            console.log("Congratulations!!!,You gained 30% discount for your product.Happy shopping");
            discountPercent = 0.3;
            return this.price * discountPercent;
        }
        else if (this.price < 20000 && this.price >= 10000) {
            console.log("Congratulations!!!,You gained 20% discount for your product.Happy shopping");
            discountPercent = 0.2;
            return this.price * discountPercent;
        }
        else if (this.price < 10000 && this.price >= 5000) {
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

    addProduct(id: number, name: string, price: number, model: string, version: number, discount: number, already_customer: boolean): Product {
        const newProduct: Product = new ProductManager(id, name, price, model, version,discount,already_customer);
         
    // Additional logic: Store the new product in the products array
            this.products.push(newProduct);

    // Additional logic: Print a message about the added product
             console.log(`Product added: ${newProduct.name}`);

    // Additional logic can be added based on your requirements

            return newProduct;
        }

    getAllProducts():Product[]
    {
        return this.products;
    }    
}

let continueAdding=true;
const productManagerInstance = new ProductManager(0, '', 0, '', 0,0,false);

while (continueAdding) {
const id = Number(readlineSync.question("Enter your id: "));
const Name = readlineSync.question("Enter your Name: ");
const price = Number(readlineSync.question("Enter your price: "));
const model = readlineSync.question("Enter your model: ");
const version = Number(readlineSync.question("Enter your version: "));
const discount = 0.1;
const already_customer =Boolean(readlineSync.question("Enter yes if your are already our customer: "))!;
const updatedPrice  = productManagerInstance.customer_calculation(already_customer);
const discountAmount = productManagerInstance.calculateDiscount();
const pay=updatedPrice-discountAmount;
productManagerInstance.addProduct(id,Name,price,model,version,discount,already_customer);
 // Ask if the customer wants to continue
 const response = readlineSync.question("Do you want to continue? (yes/no): ");
 continueAdding = response.toLowerCase() === 'yes';
}
// Display all products after the loop
const allProducts = productManagerInstance .getAllProducts();
console.log('All Products:', allProducts);


// console.log(`Product: ${laptop.name},\nUpdated Price for every customer: ${updatedPrice}\n`);
// console.log(`Product: ${laptop.name}, MRP : ${laptop.price}, Discount: ${discountAmount}`);
// console.log(`Pay :${pay} for the Product ${laptop.name}`);

output
Enter your id: 1
Enter your Name: apple
Enter your price: 25
Enter your model: kashmir
Enter your version: 23
Enter yes if your are already our customer: no
Congratulations!!!,You gained 5% discount for your product.Happy shopping
Product added: apple
Do you want to continue? (yes/no): yes
Enter your id: 2
Enter your Name: Fan
Enter your price: 5000
Enter your model: 23456
Enter your version: 2
Enter yes if your are already our customer: yes
Congratulations!!!,You gained 5% discount for your product.Happy shopping
Product added: Fan
Do you want to continue? (yes/no): no
All Products: [
  ProductManager {
    id: 1,
    name: 'apple',
    price: 25,
    model: 'kashmir',
    version: 23,
    discount: 0.1,
    already_customer: true,
    products: []
  },
  ProductManager {
    id: 2,
    name: 'Fan',
    price: 5000,
    model: '23456',
    version: 2,
    discount: 0.1,
    already_customer: true,
    products: []
  }
