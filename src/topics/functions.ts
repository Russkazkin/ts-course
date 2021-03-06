const addNumbers = (n1: number, n2: number): number => {
  return n1 + n2;
}
console.log(addNumbers(5, 10));

const printResult = (result: number): void => {
  console.log(result);
}
printResult(addNumbers(5, 98));

const addAndHandle = (n1: number, n2: number, cb: (a: number) => void) => {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(30, 20, printResult);

let addValues: (a: number, b: number) => number;
addValues = addNumbers;
console.log(addValues(67, 45));
console.log('updated');
