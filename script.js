let form = document.querySelector('form')
let ul = document.querySelector('ul')
let dicesNumberIn = document.getElementById('numberOfDices');
let diceTypeIn = document.getElementById('diceType');
let button = document.querySelector('button');
let image = document.querySelector('img');
let select =document.querySelector('select');

let dicesNumber;
let diceType;


select.addEventListener('change',function(){
    switch (diceTypeIn.value) {
        case '4' : 
            image.src="images/4.png"
            break;
        case '6' :
            image.src="images/6.png"
            break;
        case '8' :
            image.src="images/8.png"
            break;
        case '10' :
            image.src="images/10.png"
            break;
        case '12' :
            image.src="images/12.png"
            break;
        case '20' :
            image.src="images/20.png"
            break;
        case '100' :
            image.src="images/100.png"
            break;
    }  
})
    
button.addEventListener('click',function(){
    ul.innerHTML="";

    diceType = parseInt (diceTypeIn.value);
    dicesNumber = parseInt (dicesNumberIn.value);

    for(let i = 0; i < dicesNumber; i++) {

        let roll = Math.ceil(Math.random() * diceType);

        let li = document.createElement('li');
        li.innerText = roll;
        ul.appendChild(li);
    }
})
