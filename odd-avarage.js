function oddNumber(numbers) {
    const findOdd =[];
    for(const number of numbers){
        if(number%2===1){
            findOdd.push(number);
        }
    }
    console.log(findOdd);
    let sum =0;
    for(const number of findOdd){
        sum = sum+number;
    }
    const count = findOdd.length;
    console.log('total odd:',sum,'total length:', count);
    const avg = sum/count;
    return avg;
   
}
const odd = [23, 24, 25, 27, 28, 29, 30];
const x = oddNumber(odd);
console.log('Avarage of the total odd number:' ,x);