/*

TRUTHY
2. true
3. any number positive or negative will be truthy expect = 0
5. any string will truth
7. empty (' ') string true   with space
8. '0' 'false' (0/false under the string that why it is true)
10. empty object {}  / object {John}  both are true
11. empty array {}  / array {John}  both are true

FALSY
1. false
4. if 0 then false
6. empty ('') string false   without space
9. null 
*/


// 1
const x= false
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}


// 2
const y= 5
if(y){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}


// 3
const z= 5
if(z){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// 4
const zero= 0
if(zero){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}


// 5.
const string= 'John'
if(string){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// 6
const emptyString= ''
if(emptyString){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}


// 7
const spaceString= ' '
if(spaceString){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// 9
let xNull = null
console.log(xNull);
if(xNull){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// 10
let object = { }
console.log(object);
if(object){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}



// optional
// check falsy 
const a = null
if (!a){
    console.log('value is falsy');
}

// optional
// check truthy 
const b = ' '
if (!!b){
    console.log('value is truthy');
}