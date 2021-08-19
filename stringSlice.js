const anthem='amr sonar bangla ami tomai valobashi';
/* 
this split devided the string into part by part,i will give an space into the null string thats why it will remove the white space,and show it without white space,if i use '' empty string only it will devider each and every letter part by part. 
*/
const split=anthem.split(' ');
console.log(split);
/* we can use split to devided an string without a alphaber,look a like we need to remove a in whole string.and it will devided string when it finds out a alphabet */
const withoutA=anthem.split('a');
console.log(withoutA);

/* now we will use Slice slice is remove from index to index destination it will show before the last index */
const sliceString=anthem.slice(4,11);
console.log(sliceString);
/* substring is used when i nedded star of index and after start of how many index we need after starting index Number,if we give (5,13),then it will be cut from index 5 and showing next 13 index string */
const subStrApply=anthem.substr(5,2);
console.log(subStrApply);
/* Substring is same to the slice it will be same as like as slice */
const subString=anthem.substring(4,11);
console.log(subString);

/* now we need to add two string via concat */
/* general process */
const firstName='sabbir';
const lastName='islam';
const fullName=firstName+lastName;
// now we using concat to join
const concatName=firstName.concat(lastName);
console.log(concatName);
// we can use concat to join a huge sentence
concatHuge=firstName.concat('jamuna').concat('khamuna').concat('ghurmuna').concat('cholmuna');
console.log(concatHuge);

// joinig some string together
const words=['a','b','c','d','e'];
const allJoined=words.join('');
const allJoined=words.join(',');
const allJoined=words.join(', '); /* it will added an space and comma between sting */
console.log(allJoined);
