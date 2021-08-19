const numbers=[1,2,4,5,6,7,8,9,21,45,40,49];
console.log(numbers);
const numberSlice=numbers.slice(4,15);
console.log(numberSlice);
// slice will remove 3 pcs from  no index 
const numberSpliced=numbers.splice(4,3);

console.log(numberSpliced);
const numberSpliced2=numbers.splice(4,3, /* ----this will added into array from index 4 no>>>>>> */12,14,16,17);
console.log(numberSpliced2);
console.log(numbers);
