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
  
  

let continueShopping: string = 'Y';

while (continueShopping === 'Y') {
    const firstitem = getValidNumberInput("Enter your first item: ");
  const seconditem = getValidNumberInput("Enter your second item: ");
  const thirditem = getValidNumberInput("Enter your third item: ");
  continueShopping = manageBakeryOrders(firstitem, seconditem, thirditem);
}