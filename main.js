let nextButton = document.getElementById('button-next'),
    mainDiv = document.getElementById('container'),
    userRoll = document.getElementById('user-roll'),
    userResult = document.getElementById('user-result'),
    appRoll = document.getElementById('app-roll'),
    backBtn = document.getElementById('result-back');

let allDiv = document.querySelectorAll('.block');

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
    userResult.parentElement.classList.remove('active');
    userResult.parentElement.classList.add('passive');
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
    /*for(let i=0;i<allDiv.length;i++){
        allDiv[i].classList.add('passive')
    }*/

    container.children[0].classList.add('active');
})




