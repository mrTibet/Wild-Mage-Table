let nextButton = document.getElementById('button-next'),
    mainDiv = document.getElementById('container'),
    userRoll = document.getElementById('user-roll'),
    userResult = document.getElementById('user-result'),
    appRoll = document.getElementById('app-roll'),
    backBtn = document.getElementById('result-back');

let allDiv = document.querySelectorAll('.block'),
    inputDiv = document.getElementsByTagName('form');

nextButton.addEventListener('click', function(){
    nextButton.parentElement.classList.remove('active');
    nextButton.parentElement.classList.add('passive');
    container.children[1].classList.add('active');
})

userRoll.addEventListener('click', function () {
    userRoll.parentElement.classList.remove('active');
    userRoll.parentElement.classList.add('passive');
    container.children[2].classList.add('active');
})

userResult.addEventListener('click', function () {
    inputDiv[0].parentElement.classList.remove('active');
    inputDiv[0].parentElement.classList.add('passive');
    container.children[3].classList.add('active');
})

appRoll.addEventListener('click', function () {
    appRoll.parentElement.classList.remove('active');
    appRoll.parentElement.classList.add('passive');
    container.children[3].classList.add('active');
})

backBtn.addEventListener('click', function () {
    backBtn.parentElement.classList.remove('active');
    backBtn.parentElement.classList.add('passive');
    container.children[0].classList.add('active');
})




