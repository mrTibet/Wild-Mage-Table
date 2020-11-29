const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.controls').children[0];
const rightArrow = document.querySelector('.controls').children[2];

let sectionIndex = 0;

rightArrow.addEventListener('click', function(){
  sectionIndex = (sectionIndex<2)? sectionIndex+1: 2;
  slider.style.transform = 'translate('+(sectionIndex)*-33.3+'%)';
});

leftArrow.addEventListener('click', function () {
  sectionIndex = (sectionIndex > 0)? sectionIndex-1: 0;
  slider.style.transform = 'translate('+(sectionIndex)*-33.3+'%)';
});