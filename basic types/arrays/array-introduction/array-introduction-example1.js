var skills = ['abc', 'def'];
console.log(skills[0]);
console.log(skills[1]);
skills.push("hi");
// Reassign new values
var skillset = ['abc', 'hi', 'def'];
// skillset.push(2 ?? null); // Use nullish coalescing operator
// Accessing the first element and checking its type
var firstSkill = skills[0];
console.log(typeof firstSkill); // "string"
// Array of numbers
var series = [1, 2, 3];
console.log(series.length); // 3
