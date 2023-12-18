function raiseError(errorMessage) {
    throw new Error(errorMessage);
}
var reject = function () { return raiseError('Rejected'); };
reject();
