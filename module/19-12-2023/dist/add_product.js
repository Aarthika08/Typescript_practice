"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync")); //to get user input
class ProductManager {
    constructor(id, name, price, model, version, discount, already_customer) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.model = model;
        this.version = version;
        this.discount = discount;
        this.already_customer = already_customer;
        this.products = [];
    }
    customer_calculation(already_customer) {
        if (this.already_customer) {
            this.price = this.price - 1000;
        }
        else {
            this.price = this.price - 500;
        }
        return this.price;
    }
    calculateDiscount() {
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
    addProduct(id, name, price, model, version, discount, already_customer) {
        const newProduct = new ProductManager(id, name, price, model, version, discount, already_customer);
        // Additional logic: Store the new product in the products array
        this.products.push(newProduct);
        // Additional logic: Print a message about the added product
        console.log(`Product added: ${newProduct.name}`);
        // Additional logic can be added based on your requirements
        return newProduct;
    }
    getAllProducts() {
        return this.products;
    }
}
let continueAdding = true;
const productManagerInstance = new ProductManager(0, '', 0, '', 0, 0, false);
while (continueAdding) {
    const id = Number(readlineSync.question("Enter your id: "));
    const Name = readlineSync.question("Enter your Name: ");
    const price = Number(readlineSync.question("Enter your price: "));
    const model = readlineSync.question("Enter your model: ");
    const version = Number(readlineSync.question("Enter your version: "));
    const discount = 0.1;
    const already_customer = Boolean(readlineSync.question("Enter yes if your are already our customer: "));
    const updatedPrice = productManagerInstance.customer_calculation(already_customer);
    const discountAmount = productManagerInstance.calculateDiscount();
    const pay = updatedPrice - discountAmount;
    productManagerInstance.addProduct(id, Name, price, model, version, discount, already_customer);
    // Ask if the customer wants to continue
    const response = readlineSync.question("Do you want to continue? (yes/no): ");
    continueAdding = response.toLowerCase() === 'yes';
}
// Display all products after the loop
const allProducts = productManagerInstance.getAllProducts();
console.log('All Products:', allProducts);
// console.log(`Product: ${laptop.name},\nUpdated Price for every customer: ${updatedPrice}\n`);
// console.log(`Product: ${laptop.name}, MRP : ${laptop.price}, Discount: ${discountAmount}`);
// console.log(`Pay :${pay} for the Product ${laptop.name}`);
