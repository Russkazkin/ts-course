function add(n1: number, n2: number, showResult: boolean) {
  const result = n1 + n2;
  if (showResult) {
    console.log(result)
  }
  return result;
}

const num1 = 5.5;
const num2 = 10;

const result = add(num1, num2, true);
