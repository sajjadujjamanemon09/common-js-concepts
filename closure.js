function kitchen(){
    let roast = 0
    return function(){
        roast++
        return roast
    }
}

const firstServer = kitchen()
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

const firstServer2 = kitchen()
console.log(firstServer2());
console.log(firstServer2());
console.log(firstServer2());
console.log(firstServer2());


const firstServer3 = kitchen()
console.log(firstServer3());
console.log(firstServer3());
console.log(firstServer3());
console.log(firstServer3());


const firstServer4 = kitchen()
console.log(firstServer4());
console.log(firstServer4());
console.log(firstServer4());
console.log(firstServer4());