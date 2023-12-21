
// Input a string which contains some palindrome substrings. 
// Find out the position of palindrome substrings if exist and replace it by *. 
// (For example if input string is “bob has a radar plane” then it should convert in “*** has a ***** plane”.
import * as readlineSync from 'readline-sync';//to get user input

let a=readlineSync.question("Enter your gross salary: ")
// let a="bob has a radar"
let words=a.split(" ");
let  replacedPalindromesCount =0;


// for (const value of g)
for(let i=0 ;i<words.length;i++)
{
    let value=words[i];

     if(value === value.split('').reverse().join(''))
     {
        // console.log(value.split('').reverse().join(''));
        //  let r=a.replace(value,'*'.repeat(value.length));
        words[i]='*'.repeat(value.length);
        replacedPalindromesCount++;


     }

}
        //  console.log(a)
let result = words.join(' ');
console.log(result);
// Additional business logic
if (replacedPalindromesCount > 0) {
    console.log(`Replaced ${replacedPalindromesCount} palindrome(s) in the sentence.They are winners of the game`);
} else {
    console.log("No palindromes found in the sentence.");
}

output
Enter your gross salary: bob has a radar flight
*** has * ***** flight
Replaced 3 palindrome(s) in the sentence.They are winners of the game
