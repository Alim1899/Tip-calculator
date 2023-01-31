'use strict'


const opt1 = document.querySelector('.option-1');
const opt2 = document.querySelector('.option-2');
const opt3 = document.querySelector('.option-3');
const opt4 = document.querySelector('.option-4');
const opt5 = document.querySelector('.option-5');
const opt6 = document.querySelector('.option-6');
const options = [opt1,opt2,opt3,opt4,opt5,opt6];
const opts = document.querySelector('.optionsLabel');
const reset = document.querySelector('.reset');


let percent ;

    opts.addEventListener('click',function(e){
       
    
     if (e.target.value) {
         console.log(e.target.value);
        if(e.target.value==='custom'){
        document.querySelector('.customInput').style.display = 'block';
        }
       percent=e.target.value; 
       options.forEach(el=>el.style.backgroundColor='')
    e.target.style.backgroundColor = 'darkCyan';
    } 
    
})



 

   
reset.addEventListener('click',function(){
    const bill = parseInt(document.querySelector('.bill').value);
    const people = parseInt(document.querySelector('.people').value);
    const tip = bill/100*percent;
    const amount = (bill +tip)/people;
    console.log(bill +tip);
    console.log(amount);
    document.querySelector('.amountSplit').textContent=tip/people;
    document.querySelector('.totalSplit').textContent=amount
})

