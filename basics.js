"use strict";
function add(n1, n2, showResult) {
    var result = n1 + n2;
    if (showResult) {
        console.log(result);
    }
    return result;
}
var num1 = 5.5;
var num2 = 10;
var result = add(num1, num2, true);
