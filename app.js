var blade1 = document.getElementById('web-animation1');
var blade2 = document.getElementById('web-animation2');
var blade3 = document.getElementById('web-animation3');
var blade4 = document.getElementById('web-animation4');
var blade5 = document.getElementById('web-animation5');

blade1.addEventListener('click', animation1 );
blade2.addEventListener('click', animation2 );
blade3.addEventListener('click', animation3 );
blade4.addEventListener('click', animation4 );
blade5.addEventListener('click', animation5 );

function animation1(){
   
    blade1.animate([
    {opacity: 1.0, transform: 'rotate(0deg)'},
    {opacity: 0.3},
    {opacity: 1.0, transform: 'rotate(1440deg)'}
],
    { duration: 5000,
      iterations : 1, 
      easing : 'ease-in-out'
    },
)
}
function animation2(){
   
    blade2.animate([
    {opacity: 1.0, transform: 'rotate(0deg)'},
    {opacity: 0.3},
    {opacity: 1.0, transform: 'rotate(-2880deg)'}
],
    { duration: 5000,
      iterations : 1,  
      easing : 'ease-in-out' 
    },
)
}
function animation3(){
   
    blade3.animate([
    {opacity: 1.0, transform: 'rotate(0deg)'},
    {opacity: 0.3},
    {opacity: 1.0, transform: 'rotate(4320deg)'}
],
    { duration: 5000,
      iterations : 1,  
      easing : 'ease-in-out'  
    },
)
}
function animation4(){
   
    blade4.animate([
    {opacity: 1.0, transform: 'rotate(0deg)'},
    {opacity: 0.3},
    {opacity: 1.0, transform: 'rotate(-5760deg)'}
],
    { duration: 4000,
      iterations : 1 ,  
      easing : 'ease-in-out' 
    },
)
}
function animation5(){
   
    blade5.animate([
    {opacity: 1.0, transform: 'rotate(0deg)'},
    {opacity: 0.3},
    {opacity: 1.0, transform: 'rotate(7200deg)'}
],
    { duration: 5000,
      iterations : 1,  
      easing : 'ease-in-out'  
    },
)
}
