import * as readlineSync from 'readline-sync';//to get user input
function getValidNumberInput(prompt:string):number
{    let input: string;
    let isValid: boolean;
    do{
    input=readlineSync.question(prompt);
    isValid=  /^\d+$/.test(input);
    if (!isValid){
        console.log('Invalid input. Please enter a valid number.');
      }
    } while (!isValid);
  
    return Number(input);
}

function manageBakeryOrders(bigCount: number, smallCount: number, orderAmount: number): string {
    if (canPack(bigCount, smallCount, orderAmount)) {
      console.log(`Order successfully packed for ${orderAmount} kilos.`);
      let shopmore:string=readlineSync.question(` would like to shop more ? Y or N`);
      return shopmore;
      // Now, you might proceed with fulfilling the order, updating inventory, etc.
    } else {
      console.log(`Unable to fulfill order for ${orderAmount} kilos.`);
      return ' '
      // You may need to inform the customer or take other actions based on your business rules.
    }
  }
  
// Example usage:
//   manageBakeryOrders(5, 3, 18); // This will log "Order successfully packed for 18 kilos."
//   manageBakeryOrders(2, 0, 12); // This will log "Unable to fulfill order for 12 kilos."
function canPack(bigCount: number, smallCount: number, goal: number): boolean {
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
  

let continueShopping: string = 'Y';

while (continueShopping === 'Y') {
    const firstitem = getValidNumberInput("Enter your first item: ");
  const seconditem = getValidNumberInput("Enter your second item: ");
  const thirditem = getValidNumberInput("Enter your third item: ");
  continueShopping = manageBakeryOrders(firstitem, seconditem, thirditem);
}

output
Enter your first item: 1
Enter your second item: 0
Enter your third item: 5
Order successfully packed for 5 kilos.
 would like to shop more ? Y or NY
Enter your first item: 2
Enter your second item: 0
Enter your third item: 12
Unable to fulfill order for 12 kilos.
