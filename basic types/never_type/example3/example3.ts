function isString(a: string | number): boolean {
    if (typeof a === "string") {
        return true;
    } else if (typeof a === "number") {
        return false;
    }

    // Make the function valid
    return neverOccur();
}

const neverOccur = (): never => {
    throw new Error('Never!');
};

const result: boolean = isString('example'); // Example usage


output
Never!
