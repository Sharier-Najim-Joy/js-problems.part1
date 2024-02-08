// not 100% true
function leapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
// const isLeap = leapYear(2100);
// const isLeap1 = leapYear(1900);
// console.log(isLeap,isLeap1);

function isLeapYear(year){
    if(year%100!==0 && year%4===0){
        return true;
    }
    else if(year%100===0 && year%400===0){
        return true;
    }
    else{
        return false;
    }
}
const leap = isLeapYear(2100);
const leap1 = isLeapYear(1900);
const leap2 = isLeapYear(2400);
console.log(leap,leap1,leap2);