"use strict";
var Status;
(function (Status) {
    Status[Status["ACTIVE"] = 0] = "ACTIVE";
})(Status || (Status = {}));
var person = {
    name: 'Ruslan',
    age: 45,
    hobbies: ['Games', 'Coding'],
    role: [2, 'author'],
    active: Status.ACTIVE,
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var newLine = 'test';
console.log(newLine);
//# sourceMappingURL=basic_types.js.map