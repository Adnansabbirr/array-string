const products=[
    'my bossom laptop',
    'my dream laptop',
    'dell core i20 laptop',
    'hp 420 9th genaration laptop',
    'dell core i5 Laptop',
    'dell second hand Laptop'
]
const searching='laptop';
const output=[];
// This is the technique to find an string with index of 

for (const product of products){
    
    if (product.toLowerCase().indexOf(searching)!=-1){
        output.push(product);
    }
}

console.log(output);

// this is also a technique to find the matching string

for (const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())!=-1){
        output.push(product);
    }
}

console.log(output);


// This is only compare with the first string


for (const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);

// This is only compare the last string

for (const product of products){
    if(product.toLowerCase().endsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);
