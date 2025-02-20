let img = document.querySelector('.imgs');
let lbtn = document.querySelector('.lbtn');
let rbtn = document.querySelector('.rbtn');

img.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    img.scrollLeft += evt.deltaY;
})

lbtn.addEventListener('click', ()=>{
    img.scrollLeft  += 100;
})

rbtn.addEventListener('click', ()=>{
    img.scrollLeft -= 100;
})