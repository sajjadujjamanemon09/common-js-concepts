function add(a, b){
    const total = a + b
    // console.log(a, b);
    if(b > 5){
        const sum = 25 + a + b
    }
    else{
        const sum = 5 + a + b
        var current = sum
    }
    // console.log(sum);       <------ console.log don't use outside {} bracket function. then you get error
    console.log(current);
    return total
    
}
// console.log(a, b);      <------ console.log don't use outside function. then you get error
// console.log(total);     <------ console.log don't use outside function. then you get error

add(5, 3)