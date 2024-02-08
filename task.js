// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
// 0 = 32
function temperature(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
// console.log(temperature(32));

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

function findDoubleNumber(numbers, targetNumber) {
    const sameNumber = [];
    for (const number of numbers) {
        if (number === targetNumber) {
            sameNumber.push(number);
        }

    }
    const count = sameNumber.length;
    console.log('total traget number length:', count);
    return sameNumber;
}
const sampleInput = [5, 6, 11, 12, 98, 5];
// console.log(findDoubleNumber(sampleInput,5));
// console.log(findDoubleNumber(sampleInput,25));

// Task - 3
// Write a function to count the number of vowels in a string.
function vowelsNumber(str) {
    const count = str.match(/[aeiou]/gi).length;
    return count;
}
// const inVowels = 'Write a function to count the number of vowels in a string.'
// console.log(vowelsNumber(inVowels));

// const sentence = 'sharier najim joy';
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));
// Task -4
// Write a function to find the longest word in a given string.

function findLongest (strs){
    let strsSplit = strs.split(' ');
    let longest = '';
    for (let i = 0; i<strsSplit.length;i++){
        if (strsSplit[i].length > longest.length) {
            longest = strsSplit[i]; 
          }
    }
    return longest;
}
const longestOutput = findLongest('I am learning Programming to become a programmer');
// console.log(longestOutput);

// Task-5:
// Generate a random number between 10 to 20.

const randomNumber = Math.floor(Math.random() * (21 - 10) + 10);

// console.log(randomNumber);

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = randomIntFromInterval(10, 20)
//   console.log(rndInt)

// 04
function longestWord (words){
const findSplits = words.split(' ')
let comparison ='';
for (const findSplit of findSplits){
    if(findSplit.length > comparison.length){
        comparison = findSplit;
    }
}
return comparison;
}
const longestOutput2 = longestWord('I am learning Programming to become a programmer');
console.log(longestOutput2);