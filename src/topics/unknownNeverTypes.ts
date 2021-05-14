let userInput: unknown;
let userName: string;

//userInput = 5;

userInput = 'Ruslan';
if (typeof userInput === 'string') {
  userName = userInput;
}

const generateError = (message: string, code: number): never => {
  throw {message, errorCode: code};
}
generateError('Error accurred!', 500);
