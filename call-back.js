function greeting(greetingHandler, name){
    greetingHandler(name);
}

// const name = 'Halim maama'
// const numbers = [23, 45, 67, 89]
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'}

function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}

function greetNight(name){
    console.log('Good Night', name);
}

greeting(greetingHandler, 'Tom Holland')
greeting(greetingHandler, 'Vini JR.')
greeting(greetingHandler, 'Gavi')
greeting(greetEvening, 'Jamal Bhuiya')
greeting(greetEvening, 'Musa')
greeting(greetNight, 'Rasel Pathan')


function submitHandler(){
    console.log('Submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)