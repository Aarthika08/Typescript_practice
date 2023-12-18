function raiseError(errorMessage: string): never {
    throw new Error(errorMessage);
}

const reject = (): never => raiseError('Rejected');

reject();
