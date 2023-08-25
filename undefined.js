/*
 -----> 8 ways to get undefine
1. variable that is not initialized will give undefined
2. function with no return
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exist on an object will give you undefined
6. accessing array elements outside of the index range
7. deleting an element inside an array
8. set a value directly to undefined
 */

// 1.
let first ; //  <---- check
// console.log(first);

// 2.
function second (a, b){
    const total = a + b 
}
const result = second() // <---- check
// console.log(result);

// 3.
function third (a, b, c, d){
    const total = a + b + c + d
    // console.log(a, b, c, d);
}
third(2, 5)  // <----- check

// 4.
function noNegative(a, b){
    if(a < 0 || b < 0){
        return  // <----- check
    }
    return a + b
}
const total = noNegative(2, -5)
// console.log(total);

// 5.
const fifth = {id: 2, name: 'korim', age: 50}
// console.log(fifth.age, fifth,salary);  // <---- check

// 6.
const sixth = [411, 511, 711, 811, 911, 1011]
// console.log(sixth[0], sixth[5], sixth[10]);

// 7.
const seventh = [411, 511, 711, 811, 911, 1011]
delete seventh[1]  // <-- you should not do id instead use splice
// console.log(seventh);

// 8.
const eighth = undefined

const ninth = null

const data = {results : [], update: null}
console.log(typeof undefined);
console.log(typeof null);
