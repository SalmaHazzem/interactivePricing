let myinput =document.querySelector('input');
let pageview=document.querySelector('.pageview');
let mony=document.querySelector('.mony');
let mycheck =document.querySelector('.slider');
myinput.addEventListener('change', function(){
  pageview.innerHTML=`${(myinput.value)}k pageview`;
  mony.innerHTML=`$${(myinput.value*1000)/1000}<span>/month</span>`
  
})
mycheck.addEventListener('click', function(){
    myinput.addEventListener('change', function(){
        pageview.innerHTML=`${(myinput.value)}k pageview`;
        mony.innerHTML=`$${(((myinput.value*1000)/1000)*(15/100)).toFixed(3)}<span>/month</span>`
        
      })
})

