let a = 10;
let b = 20;
console.log(a,b);
// a = b;
// b = a;
const temp = a;
a = b;
b = temp;
console.log(a,b);

// ----------------
// distructing system
let x = 40;
let y = 50;
console.log(x,y);
[x,y]=[y,x];
console.log(x,y);