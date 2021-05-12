"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Ruslan';
if (typeof userInput === 'string') {
    userName = userInput;
}
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError('Error accurred!', 500);
