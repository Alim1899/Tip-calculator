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

const customInput = document.querySelector('.customInput');


let percent ;

    opts.addEventListener('click',function(e){
        e.preventDefault()
       if(e.target.value){
         if (e.target.value=='tip') {
            
            customInput.style.display = 'none';
            opt6.style.display = 'block';
         options.forEach(el=>el.style.backgroundColor = '');
       e.target.style.backgroundColor = 'darkCyan';
       percent = parseInt(e.target.textContent);
    }
     if(e.target.value!='tip'){
        options.forEach(el=>el.style.backgroundColor = '');

        options.forEach(el=>el.style.backgroundColor = '')
        opt6.style.display = 'none';
        customInput.style.display = 'block';
        customInput.addEventListener('input',function(t){
            e.preventDefault();
            console.log(t.target.value, "shiitt");
            percent = t.target.value;
            
        })
    }
    
}
       }     
   )



 

   
reset.addEventListener('click',function(){
   location.reload();
})

const calculate = function(){
    const bill = parseInt();
    const people = parseInt(document.querySelector('.people').value);
    const tip = bill/100*percent;
    const amount = (bill +tip)/people;
    console.log(bill +tip);
    console.log(amount);
    document.querySelector('.amountSplit').textContent=tip/people;
    document.querySelector('.totalSplit').textContent=amount
}
