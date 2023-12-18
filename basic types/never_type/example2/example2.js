function isString(a) {
    if (typeof a === "string") {
        return true;
    }
    else if (typeof a === "number") {
        return false;
    }
}
var result = isString('example'); // Example usage
