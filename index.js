function receivesAFunction(fnc) {
    return fnc();
}

function returnsANamedFunction() {
    return add = (num1, num2) => { num1 + num2 };
}

function returnsAnAnonymousFunction() {
    return function () { }
}