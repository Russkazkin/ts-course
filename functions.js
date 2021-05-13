"use strict";
var addNumbers = function (n1, n2) {
    return n1 + n2;
};
console.log(addNumbers(5, 10));
var printResult = function (result) {
    console.log(result);
};
printResult(addNumbers(5, 98));
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
addAndHandle(30, 20, printResult);
var addValues;
addValues = addNumbers;
console.log(addValues(67, 45));
console.log('updated');
//# sourceMappingURL=functions.js.map