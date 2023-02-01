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


let percent = 0 ;
    opts.addEventListener('click',function(e){
        e.preventDefault()
        
       if(e.target.value){

        if(parseInt(e.target.textContent)===percent){
        options.forEach(el=>el.style.backgroundColor = '');
        percent=0;
        e.target.backgroundColor = 'red';
       }else
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
            if(t.target.value>0){
                percent = parseInt(t.target.value);
            }else percent = 0; 
        })
    }
};
       }     
   )



 

   
reset.addEventListener('click',function(){
   location.reload();
})


const calculate = function(){
   
    const tip = bill/100*percent;
    const amount = (bill +tip)/people;
    console.log(bill +tip);
    console.log(amount);
    document.querySelector('.amountSplit').textContent=tip/people;
    document.querySelector('.totalSplit').textContent=amount
}

document.querySelector('.people').addEventListener('input',function(){
    const person = document.querySelector('.amountSplit');
    const total = document.querySelector('.totalSplit');
    let bill = parseInt(document.querySelector('.bill').value);
    let people = parseInt(document.querySelector('.people').value);
    if(!bill) bill=0;
    if(!people) people=0;

    const tip = parseInt(bill>0?(bill/100*percent).toFixed(2):0);
    person.textContent=people>0?`$${(tip/people).toFixed(2)}`:`$0.00`;
    total.textContent=people>0?`$${((bill+tip)/people).toFixed(2)}`:`$0.00`;
    console.log(bill,tip,people);



   if(percent>0) console.log('percent');

    
})
