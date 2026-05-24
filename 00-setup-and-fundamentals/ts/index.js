"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a1 = 24;
a1 = 98;
//Works here because we have defined its type here. So, a1 will only accept numbers as its value.
function add1(a, b) {
    return a + b; // Type checking
}
const answer = add1(3, 3);
console.log(answer);
//# sourceMappingURL=index.js.map