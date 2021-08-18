function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    } else{
        console.log('You have got a 3 digit number ', pin);
        return getPin()
    }
}

function generatePin(){
    const pin = getPin()
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    const prevNumber = calcInput.value;
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = ''
        } else if(number == '<'){
            calcInput.value = prevNumber.substr(0, prevNumber.length - 1)
        }
    } else{
        
        const newNumber = prevNumber + number;
        calcInput.value = newNumber;
    }
})
//
const fail = document.getElementById('n-fail')
const success = document.getElementById('n-success')

document.getElementById('verify').addEventListener('click', function(){
    const pin = document.getElementById('display-pin');
    const typed = document.getElementById('typed-numbers');
    const pinValue = pin.value;
    const typedValue = typed.value
    console.log(pin, typed, fail, success);
    if(pinValue == typedValue){
        console.log('Pin matched')
        success.style.display = 'block';
        fail.style.display = 'none';
        typed.value = '';
    } else{
        console.log('Oops')
        fail.style.display = 'block'
        success.style.display = 'none'
        typed.value = ''
    }
})




