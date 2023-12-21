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
function manageBakeryOrders(bigCount, smallCount, orderAmount) {
    if (canPack(bigCount, smallCount, orderAmount)) {
        console.log(`Order successfully packed for ${orderAmount} kilos.`);
        let shopmore = readlineSync.question(` would like to shop more ? Y or N`);
        return shopmore;
        // Now, you might proceed with fulfilling the order, updating inventory, etc.
    }
    else {
        console.log(`Unable to fulfill order for ${orderAmount} kilos.`);
        return ' ';
        // You may need to inform the customer or take other actions based on your business rules.
    }
}
// Example usage:
//   manageBakeryOrders(5, 3, 18); // This will log "Order successfully packed for 18 kilos."
//   manageBakeryOrders(2, 0, 12); // This will log "Unable to fulfill order for 12 kilos."
function canPack(bigCount, smallCount, goal) {
    // Check if any parameter is negative
    if (bigCount < 0 || smallCount < 0 || goal < 0) {
        return false;
    }
    // Calculate the total kilos using available big and small bags
    const totalKilos = bigCount * 5 + smallCount;
    // Check if the total kilos are at least equal to the goal
    // and if there are enough small bags to satisfy the remaining kilos
    return totalKilos >= goal && goal % 5 <= smallCount;
}
// Examples
//   console.log(manageBakeryOrders(1, 0, 4)); // false because bigCount is 1 (5 kilos) and goal is 4 kilos
//   console.log(manageBakeryOrders(1, 0, 5)); // true because bigCount is 1 (5 kilos) and goal is 5 kilos
//   console.log(manageBakeryOrders(0, 5, 4)); // true because smallCount is 5 (1 kilo each) and goal is 4 kilos
//   console.log(manageBakeryOrders(2, 2, 11)); // true because bigCount is 2 (10 kilos) + smallCount is 2 (1 kilo each) = 12 kilos and goal is 11 kilos
//   console.log(manageBakeryOrders(-3, 2, 12)); // false because bigCount is negative
// let continueAdding;
// const productManagerInstance = new manageBakeryOrders(0,0,0);
// while(continueAdding)
// {
//     const firstitem=Number(readlineSync.question("enter your first item"));
// const seconditem=Number(readlineSync.question("enter your second item"));
// const thirditem=Number(readlineSync.question("enter your third item"));
// continueAdding=manageBakeryOrders(firstitem, seconditem, thirditem);
// const response = readlineSync.question("Do you want to continue? (yes/no): ");
//  continueAdding = response.toLowerCase() === 'yes';
// }
let continueShopping = 'Y';
while (continueShopping === 'Y') {
    const firstitem = Number(readlineSync.question("Enter your first item: "));
    const seconditem = Number(readlineSync.question("Enter your second item: "));
    const thirditem = Number(readlineSync.question("Enter your third item: "));
    continueShopping = manageBakeryOrders(firstitem, seconditem, thirditem);
}
