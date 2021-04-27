var add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(5, 10));
var printResult = function (result) {
    console.log(result);
};
printResult(add(5, 98));
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
addAndHandle(30, 20, printResult);
var addValues;
addValues = add;
console.log(addValues(67, 45));
