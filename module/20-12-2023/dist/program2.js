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
            if (product > maxProduct) {
                maxProduct = product;
                maxProductIds = [this.products[i].id, this.products[i + 1].id];
                maxProductNames = [this.products[i].name, this.products[i + 1].name];
            }
        }
        return { maxProduct, productIds: maxProductIds, productNames: maxProductNames };
    }
    calculatingLongestSequence() {
        let currentLength = 1;
        let maxLength = 1;
        let currentStartIndex = 0;
        let longestSequence = {
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
            }
            else {
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
