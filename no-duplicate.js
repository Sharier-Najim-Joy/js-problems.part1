const name = ['khalid', 'joy', 'ridoy', 'khalid', 'nahid', 'ridoy', 'joy'];
const num = [1, 2, 3, 2, 4, 5, 3, 6, 7, 8, 6, 7];

function noDuplicate(array) {
    const duplicate = [];
    for (const item of array) {
        if (duplicate.includes(item) === false) {
            duplicate.push(item);
        }
    }
    return duplicate;
}
const nameOutput = noDuplicate(name);
console.log(nameOutput);