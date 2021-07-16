let title = document.getElementById('title');
let btn = document.getElementById('btn');
let left = document.getElementById('left');
let mid = document.getElementById('mid');
let right = document.getElementById('right');
let kotak1 = document.getElementById('kotak1');
let kotak2 = document.getElementById('kotak2');
let kotak3 = document.getElementById('kotak3');
let kotak4 = document.getElementById('kotak4');
let ikan1 = document.getElementById('ikan1');
let ikan2 = document.getElementById('ikan2');
let ikan3 = document.getElementById('ikan3');
let kelompok = document.getElementById('kelompok');
let btnsubmit = document.getElementById('btnsubmit');
let alert = document.getElementById('alert');
let closebtn = document.getElementById('closebtn');


window.addEventListener('scroll', function () {
    let value = window.scrollY

    title.style.marginTop = value * 0.5 + 'px';
    btn.style.marginTop = value * 2.4 + 'px';
    mid.style.top = 450 - (value * 0.4) + 'px';
    left.style.top = 200 - (value * 0.2) + 'px';
    right.style.top = 100 - (value * 0.5) + 'px';
    right.style.right = 150 + (value * 0.5) + 'px';

    mid.style.borderRadius = value * 0.5 + 'px';

    kotak1.style.left = -10 + (value * 0.1) + 'px';
    kotak1.style.transform = 'rotate(' + value * 0.1 + 'deg)';

    kotak2.style.top = 400 - (value * 0.5) + 'px';
    kotak3.style.top = 420 - (value * 0.3) + 'px';
    kotak4.style.top = 390 - (value * 0.2) + 'px';

    kelompok.style.marginLeft = -1200 + value + 'px';
    console.log(value)
    if(value >= 1840){
        kelompok.style.marginLeft = -600 + (value - 1840) + 'px';
    }
});

btnsubmit.addEventListener('click', function(){
    alert.style.display = 'block';
})

closebtn.addEventListener('click', function(){
    alert.style.display = 'none';
})