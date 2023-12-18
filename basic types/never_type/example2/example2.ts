function isString(a: string | number): boolean {
    if (typeof a === "string") {
        return true;
    } else if (typeof a === "number") {
        return false;
    }
}

const result: boolean = isString('example'); // Example usage

output
Function lacks ending return statement and return type does not include 'undefined'.
