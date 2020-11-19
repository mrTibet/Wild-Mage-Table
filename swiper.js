let result = document.querySelector('.result'),
    resultList = document.querySelector('.result-list'),
    resultTrack = document.querySelector('.result-track'),
    resSlides = document.querySelectorAll('.res-slide');

let arrows = document.querySelector('.result-arrows');
let prev = arrows.children[0];
let next = arrows.children[1];

let slideWidth = resSlides[0].offsetWidth,
    slideIndex = 0,
    posInit = 0,
    posX = 0,
    posX1 = 0,
    posX2 = 0,
    posFinal = 0,
    posThreshold = slideWidth * .35,
    trfRegExp = /[-0-9.]+(?=px)/;

let slide = function () {
    resultTrack.style.transition = 'transform .5s';
    resultTrack.style.transform = `translate3d(-${slideIndex*slideWidth}px, 0px, 0px)`;
        // делаем стрелку prev недоступной на первом слайде
        // и доступной в остальных случаях
        // делаем стрелку next недоступной на последнем слайде
        // и доступной в остальных случаях
    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --resSlides.length);
};

let getEvent = function() {
    return event.type.search('touch') !== -1 ? event.touches[0] : event;
    // p.s. event - аргумент по умолчанию в функции
};

let swipeStart = function() {
    let evt = getEvent();

// берем начальную позицию курсора по оси Х
    posInit = posX1 = evt.clientX;

// убираем плавный переход, чтобы track двигался за курсором без задержки
// т.к. он будет включается в функции slide()
    resultTrack.style.transition = '';
// и сразу начинаем отслеживать другие события на документе
    document.addEventListener('touchmove', swipeAction);
    document.addEventListener('touchend', swipeEnd);
    document.addEventListener('mousemove', swipeAction);
    document.addEventListener('mouseup', swipeEnd);
};

let swipeAction = function() {
    let evt = getEvent(),
      // для более красивой записи возьмем в переменную текущее свойство transform
      style = resultTrack.style.transform,
      // считываем трансформацию с помощью регулярного выражения и сразу превращаем в число
      transform = +style.match(trfRegExp)[0];
  
    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;
  
    resultTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    // можно было бы использовать метод строк .replace():
    // resultTrack.style.transform = style.replace(trfRegExp, match => match - posX2);
    // но в дальнейшем нам нужна будет текущая трансформация в переменной
};

let swipeEnd = function() {
    // финальная позиция курсора
    posFinal = posInit - posX1;
  
    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);
  
    // убираем знак минус и сравниваем с порогом сдвига слайда
    if (Math.abs(posFinal) > posThreshold) {
      // если мы тянули вправо, то уменьшаем номер текущего слайда
      if (posInit < posX1) {
        slideIndex--;
      // если мы тянули влево, то увеличиваем номер текущего слайда
      } else if (posInit > posX1) {
        slideIndex++;
      }
    }
    // если курсор двигался, то запускаем функцию переключения слайдов
    if (posInit !== posX1) {
        slide();
      }
    
};

arrows.addEventListener('click', function() {
        let target = event.target;
      
        if (target.classList.contains('next')) {
          slideIndex++;
        } else if (target.classList.contains('prev')) {
          slideIndex--;
        } else {
          return;
        }
      
        slide();
});
      
resultTrack.style.transform = 'translate3d(0px, 0px, 0px)';
      
result.addEventListener('touchstart', swipeStart);
result.addEventListener('mousedown', swipeStart);
