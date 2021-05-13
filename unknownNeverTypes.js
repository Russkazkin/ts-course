"use strict";
var userInput;
var userName;
userInput = 'Ruslan';
if (typeof userInput === 'string') {
    userName = userInput;
}
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError('Error accurred!', 500);
//# sourceMappingURL=unknownNeverTypes.js.map