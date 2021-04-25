function combine(input1, input2, resultType) {
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultType === "as-number") {
        return +input1 + +input2;
    }
    return input1.toString() + input2.toString();
}
var sum = combine(1, 5, "as-number");
var stringSum = combine('56', '57', "as-number");
var combinedNames = combine('Ruslan', 'Skazkin', "as-text");
console.log(combinedNames, sum, stringSum);
