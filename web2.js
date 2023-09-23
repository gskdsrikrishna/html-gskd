let text=document.getElementById('text');
let logo=document.getElementById('logo');
let gskd1=document.getElementById('gskd1');

window.addEventListener('scroll',() => {
    let value=window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    logo.style.top = value * -1.5 + 'px';
    gskd1.style.left = value * 1.5 + 'px';
})
