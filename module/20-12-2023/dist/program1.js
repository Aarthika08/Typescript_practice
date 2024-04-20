"use strict";
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
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class ProductCalculator {
    constructor() {
        this.products = [];
    }
    addProduct(id, name, price) {
        const product = new Product(id, name, price);
        this.products.push(product);
    }
    calculateMaximumProduct() {
        let maxProduct = 0;
        let maxProductIds = [];
        let maxProductNames = [];
        for (let i = 0; i <= this.products.length - 2; i++) {
            const product = this.products[i].price * this.products[i + 1].price;
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
    calculating_longest_sequence() {
        let maxProductIds = [];
        let maxProductNames = [];
        let maxProductprice = [];
        let productPairs = [];
        let count = 0;
        let currcount = 1;
        for (let i = 0; i <= this.products.length - 2; i++) {
            if (this.products[i].price > this.products[i + 1].price) {
                maxProductIds.push(this.products[i].id, this.products[i + 1].id);
                maxProductNames.push(this.products[i].name, this.products[i + 1].name);
                maxProductprice.push(this.products[i].price, this.products[i + 1].price);
                count += 1;
            }
            else {
                if (count > currcount) {
                    currcount = count;
                }
                count = 0;
            }
        }
        console.log("maximum count:", currcount);
        return { productIds: maxProductIds, productNames: maxProductNames, productprice: maxProductprice, maxcount: count };
    }
}
let productcalculator = new ProductCalculator();
const Numberofproduct = Number(readlineSync.question("Enter Number of product:"));
for (let i = 0; i < Numberofproduct; i++) {
    const id = Number(readlineSync.question("Enter your id: "));
    const Name = readlineSync.question("Enter your Name: ");
    const price = Number(readlineSync.question("Enter your price: "));
    // inputvalue.push(Number(readlineSync.question("Enter your value: ")))
    // Validate that id and price are valid numbers
    if (isNaN(id) || isNaN(price)) {
        console.log('Invalid input. Please enter valid numeric values for ID and Price.');
        break;
    }
    productcalculator.addProduct(id, Name, price);
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
