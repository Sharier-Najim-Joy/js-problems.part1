const today = new Date();
console.log(today);
const date = new Date('2050-10-20')
console.log(date);
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getDate());

const specificDate = new Date(2080,0,13);
// specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleString('en-GB'));


// unix epoc