"use strict";
// Input a string which contains some palindrome substrings. 
// Find out the position of palindrome substrings if exist and replace it by *. 
// (For example if input string is “bob has a radar plane” then it should convert in “*** has a ***** plane”.
// import * as readlineSync from 'readline-sync';//to get user input
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
const readlineSync = __importStar(require("readline-sync"));
class SimplePalindromeReplacer {
    constructor() {
        this.replacedPalindromesCount = 0;
    }
    replacePalindromes(sentence) {
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
    getReplacedPalindromesCount() {
        return this.replacedPalindromesCount;
    }
    occurrenceCount(inputString) {
        const alphabetCount = {};
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
}
else {
    console.log("No palindromes found in the sentence.");
}
const inputString = 'apple';
const occurrences = replacer.occurrenceCount(userSentence);
console.log("Alphabet Occurrences:", occurrences);
