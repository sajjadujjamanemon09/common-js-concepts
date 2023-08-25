// strongly typed language

/*
1. int a =5
2. string b = 'alim halim kalim'
3. bool c = True
4. object student = { name: 'noya dadman', id : 55 }
5. int[] numbers = [12, 45, 78]
6. string[] friends = ['abul', 'babul']
 */


// dynamic type language
// PRIMITIVE
const a = 5
const b = 'samsu kopai na ekhon ar'
const c = true

// NON PRIMITIVE
const age = [45, 65, 78]
const student = {id: 23, class: 7}

// console.log(typeof a, typeof b, typeof c, typeof age, typeof student);


let x =5
let y = 6
console.log(x, y);
y = 10
console.log(x, y);

let p = {job: 'web developer'}
let q = p
// q = {job: 'Backend End'}
q.job = 'Font end Developer'
console.log(p, q);