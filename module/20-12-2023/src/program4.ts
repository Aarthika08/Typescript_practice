// Input a string which contains some palindrome substrings. 
// Find out the position of palindrome substrings if exist and replace it by *. 
// (For example if input string is “bob has a radar plane” then it should convert in “*** has a ***** plane”.
// import * as readlineSync from 'readline-sync';//to get user input

    
// let a =readlineSync.question("Enter your sentence: ")
// //   let a="bob has a radar"
// let words=a.split(" ");
// let  replacedPalindromesCount =0;
// // for (const value of g)
// for(let i=0 ;i<words.length;i++)
// {
//     let value=words[i];

//      if(value === value.split('').reverse().join(''))
//      {
//         // console.log(value.split('').reverse().join(''));
//         //  let r=a.replace(value,'*'.repeat(value.length));
//         words[i]='*'.repeat(value.length);
//         replacedPalindromesCount++;
//      }

// }
// let result = words.join(' ');
// console.log(result);

// if (replacedPalindromesCount > 0) {
//  console.log(`Replaced ${replacedPalindromesCount} palindrome(s) in the sentence.They are winners of the game`);
// } else {
//      console.log("No palindromes found in the sentence.");
// }


import * as readlineSync from 'readline-sync';

interface PalindromeReplacer {
    replacePalindromes(sentence: string): string;
    occurrenceCount(inputString: string): Record<string, number>; // Corrected method name
}

class SimplePalindromeReplacer implements PalindromeReplacer {
    private replacedPalindromesCount: number = 0;

    constructor() {}

    replacePalindromes(sentence: string): string {
        let words = sentence.split(" ");
        for (let i = 0; i < words.length; i++) {
            let value = words[i];
            if (value === value.split('').reverse().join('')) {
                words[i] = '*'.repeat(value.length);
                this.replacedPalindromesCount++;
            }
        }
        return words.join(' ');
    }

    getReplacedPalindromesCount(): number {
        return this.replacedPalindromesCount;
    }

    occurrenceCount(inputString: string): Record<string, number> {
        const alphabetCount: Record<string, number> = {};
        const lowercaseInput = inputString.toLowerCase();
        for (const char of lowercaseInput) {
            if (/^[a-z]$/.test(char)) {
                alphabetCount[char] = (alphabetCount[char] || 0) + 1;
            }
        }
        return alphabetCount;
    }
}

let userSentence = readlineSync.question("Enter your sentence: ");
let replacer = new SimplePalindromeReplacer();
let replacedSentence = replacer.replacePalindromes(userSentence);

console.log(replacedSentence);

let count = replacer.getReplacedPalindromesCount();
if (count > 0) {
    console.log(`Replaced ${count} palindrome(s) in the sentence. They are winners of the game`);
} else {
    console.log("No palindromes found in the sentence.");
}

const inputString = 'apple';
const occurrences = replacer.occurrenceCount(userSentence);
console.log("Alphabet Occurrences:", occurrences);
