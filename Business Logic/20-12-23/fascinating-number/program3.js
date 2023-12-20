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
class FascinatingProduct {
    constructor(productNumber) {
        this.productNumber = productNumber;
    }
    isFascinating() {
        const concatenatedResult = `${this.productNumber}${this.productNumber * 2}${this.productNumber * 3}`;
        const digitsSet = new Set(concatenatedResult);
        // Check if the set contains all digits from 1 to 9 exactly once
        return digitsSet.size === 9 && !digitsSet.has('0');
    }
}
class OnlineShopping {
    purchaseProduct(productNumber) {
        if (!this.isValidProductNumber(productNumber)) {
            console.log("Invalid product number. Please enter a valid positive integer.");
            return;
        }
        const product = new FascinatingProduct(productNumber);
        if (product.isFascinating()) {
            console.log(`You have purchased a fascinating product: ${product.productNumber}`);
        }
        else {
            console.log(`Sorry, the product with number ${product.productNumber} is not fascinating.`);
        }
    }
    isValidProductNumber(productNumber) {
        return Number.isInteger(productNumber) && productNumber > 0;
    }
}
// Example Usage
const Numberofproduct = Number(readlineSync.question("Enter lucky draw Number :"));
const fascinatingProduct = new FascinatingProduct(Numberofproduct);
const onlineShopping = new OnlineShopping();
// const productNumberToPurchase: number = 327;
onlineShopping.purchaseProduct(Numberofproduct);
