let load = document.querySelector('#load');
let more = document.getElementById ('loadmore');
let more2 = document.getElementById ('loadmore1');
let less = document.querySelector ('.less');
let range = document.getElementsByTagName('input')[1];
let value = document.getElementsByClassName ('left-range');


less.addEventListener ('click', function () {
   load.style.display = 'flex';
     this.style.display = 'none';
  more.style.display = 'none';
    more2.style.display = 'none';
});

load.addEventListener ('click' , function () {
    less.style.display = 'flex';
    this.style.display = 'none';
    more.style.display = 'flex';
    more2.style.display = 'flex';
});


var h6 = document.getElementsByTagName ('h6'); 


range.oninput = (function () {
    let value = range.value;
       for ( let i = 0; i < h6.length; i++) {
            h6[12].textContent = value;
        };
    
})

// var ho = function () {
     
//     }; 
