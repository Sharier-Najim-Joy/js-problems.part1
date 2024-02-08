// function inchToFeet(inch){
//     const feet = inch/12;
//     return feet;
// }
// console.log(inchToFeet(75));

// 
function inchToFeet(inch){
    const feet = inch/12;
    const convert = parseInt(feet);
    const inchRemaning = inch%12;
    const result = convert+ ' ft ' +inchRemaning + ' inch';
    return result;
}
// const x = inchToFeet(75);
// console.log(x);

// 1 mile = 1.60934 killometer
function mileToKilometer(mile){
    const killometer = mile*1.60934;
    // const extra = parseInt(killometer);
    return killometer;
}
// console.log(mileToKilometer(12));


// 1kg = 1000 gram
function kgToGram(kg){
    const gram = kg * 1000;
    return gram;
}
console.log(kgToGram(12));