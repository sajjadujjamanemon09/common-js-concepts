// array like objects 
function sum(a, b, c){
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c
    return result
}

// console.log(arguments);
const total = sum(45, 43, 42, 56, 67, 78)
// console.log(total);
console.log((sum.length));