let next = document.getElementById('next');
let mainDiv = document.getElementById('container');
let userRoll = document.getElementById('user-roll');

next.addEventListener('click', function(){
    next.parentElement.classList.add('passive');
    container.children[1].classList.add('active');
})

