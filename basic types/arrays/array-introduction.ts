const skills: string[] = ['abc', 'def'];

console.log(skills[0]);
console.log(skills[1]);
skills.push("hi");

// Reassign new values
const skillset = ['abc', 'hi', 'def'];
// skillset.push(2 ?? null); // Use nullish coalescing operator

// Accessing the first element and checking its type
const firstSkill: string = skills[0];
console.log(typeof firstSkill); // "string"

// Array of numbers
const series: number[] = [1, 2, 3];
console.log(series.length); // 3

output
Errors in code
Argument of type 'number' is not assignable to parameter of type 'string'.
[LOG]: "abc" 
[LOG]: "def" 
[LOG]: "string" 
[LOG]: 3 
