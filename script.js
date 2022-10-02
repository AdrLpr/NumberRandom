let form = document.querySelector('form')
let ul = document.querySelector('ul')
let dicesNumberIn = document.getElementById('numberOfDices');
let diceTypeIn = document.getElementById('diceType');
let button = document.querySelector('button');
let image = document.getElementsByTagName('img');
let select =document.querySelector('select');

let dicesNumber;
let diceType;

function diceChange(img){
    switch (diceTypeIn.value) {
        case '4' : 
            img.src="images/4.png"
            break;
        case '6' :
            img.src="images/6.png"
            break;
        case '8' :
            img.src="images/8.png"
            break;
        case '10' :
            img.src="images/10.png"
            break;
        case '12' :
            img.src="images/12.png"
            break;
        case '20' :
            img.src="images/20.png"
            break;
        case '100' :
            img.src="images/100.png"
            break;
    }  
}

select.addEventListener('change',function(){
    diceChange(image[0]);
})
    
button.addEventListener('click',function(){
    ul.innerHTML="";

    diceType = parseInt (diceTypeIn.value);
    dicesNumber = parseInt (dicesNumberIn.value);

    for(let i = 0; i < dicesNumber; i++) {

        let roll = Math.ceil(Math.random() * diceType);

        let li = document.createElement('li');
        let imageLi = document.createElement('img');
        diceChange(imageLi);
        imageLi.style='height:35px';
        
        li.innerText =  roll;
        li.appendChild(imageLi);
        ul.appendChild(li);
    }
})
