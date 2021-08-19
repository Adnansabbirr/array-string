const numbers=[1,3,4,5,6,2,3,9];
const sortedNumber=numbers.sort();
// this sort function will be work for single digit numbers
console.log(sortedNumber);
const number2=[10,9,35,22,55,26,33,90];
const number2Sorted=number2.sort(/* we need to declare a function inside sort when we need to sort an two numbers array */function(a,b){
    return a-b;
})

console.log(number2Sorted);
/* we can reverse an array via .reverse() function */
numberReverse=numbers.reverse();
console.log(numberReverse);
/* and we can use both condition in an array .sort() and .reverse() function */
numberReverseAndSort=numbers.sort().reverse();
console.log(numberReverseAndSort);