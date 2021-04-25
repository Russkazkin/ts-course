type Typeable = 'as-number' | 'as-text';

function combine(input1: (number | string), input2: (number | string), resultType: Typeable) {
  if ((typeof input1 === 'number' && typeof input2 === 'number') || resultType === "as-number") {
    return +input1 + +input2;
  }
  return input1.toString() + input2.toString();
}

const sum = combine(1, 5, "as-number");
const stringSum = combine('56', '57', "as-number");
const combinedNames = combine('Ruslan', 'Skazkin', "as-text");
console.log(combinedNames, sum, stringSum);
