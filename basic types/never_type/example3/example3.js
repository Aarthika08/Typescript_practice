function isString(a) {
    if (typeof a === "string") {
        return true;
    }
    else if (typeof a === "number") {
        return false;
    }
    // Make the function valid
    return neverOccur();
}
var neverOccur = function () {
    throw new Error('Never!');
};
var result = isString('example'); // Example usage
