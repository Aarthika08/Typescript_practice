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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync")); //to get user input
class ProductManager {
    constructor(id, name, price, model, version) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.model = model;
        this.version = version;
    }
    calculateDiscount() {
        let discountPercent = 0.5;
        //   return this.price * discountPercent;
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
    }
}
//   const id = Number(prompt("Enter your id:"))?? 0;
// const Name = prompt("Enter your Name:") ?? "";
// const price = Number(prompt("Enter your price:"))?? 0;
// const model = prompt("Enter your model:")!;
// const version = Number(prompt("Enter your version:"))?? 0;
const id = (_a = Number(readlineSync.question("Enter your id: "))) !== null && _a !== void 0 ? _a : 0;
const Name = (_b = readlineSync.question("Enter your Name: ")) !== null && _b !== void 0 ? _b : "";
const price = (_c = Number(readlineSync.question("Enter your price: "))) !== null && _c !== void 0 ? _c : 0;
const model = readlineSync.question("Enter your model: "); //telling typescript it never be null
const version = (_d = Number(readlineSync.question("Enter your version: "))) !== null && _d !== void 0 ? _d : 0;
const laptop = new ProductManager(id, Name, price, model, version);
const discountAmount = laptop.calculateDiscount();
console.log(`Product: ${laptop.name}, Original Price: ${laptop.price}`);
console.log(`Product: ${laptop.name}, Price: ${laptop.price}, Discount: ${discountAmount}`);
