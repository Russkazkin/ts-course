"use strict";
var map = new Map();
map.set('success', 'Successful Execution.');
map.set('error', 'An Error Occurred while Processing.');
var button = document.querySelector('button');
button.addEventListener('click', function () { return console.log(map.get('success')); });
console.log(map);
//# sourceMappingURL=app.js.map