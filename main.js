let nextButton = document.getElementById('next');
let mainDiv = document.getElementById('container');
let userRoll = document.getElementById('user-roll');

nextButton.addEventListener('click', function(){
    nextButton.parentElement.classList.add('passive');
    container.children[1].classList.add('active');
})

