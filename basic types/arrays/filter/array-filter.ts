const isBigEnough = (element: number): boolean => {
    return element >= 10;
};

const passed: number[] = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log("Test Value: " + passed);

const scores: (string | number)[] = ['Programming', 5, 'Software Design', 4];

output
[LOG]: "Test Value : 12,130,44" 
