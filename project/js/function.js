// haburger button access
const hamburger = document.querySelector('.hamburger-menu');
const gnb = document.querySelector('.gnb');

hamburger.addEventListener('click', function(){
  gnb.classList.toggle('active');
});

// tab  menu
const tabMenu = document.querySelectorAll('.tab-menu-item');
const group = document.querySelectorAll('.section2 .group');
let activeIndex = 0;

for(let i=0;i<tabMenu.length;i++){
  tabMenu[i].addEventListener('click', function(){

    for(let j=0;j<tabMenu.length;j++){
      tabMenu[j].classList.remove('active');
      group[j].classList.remove('active');
    }

    this.classList.add('active');

    for(let j=0;j<tabMenu.length;j++){
      if(tabMenu[j] === this){
        activeIndex = j;
      }
    }

    group[activeIndex].classList.add('active');
  });
}

// carousel
const play = document.querySelector('.play');
const slide = document.querySelectorAll('.slide');

let current = 0;
let next = 1;
let prev = 2;

play.addEventListener('click', function(){

  if(next >= slide.length){
    next = 0;
  }

  slide[current].classList.remove('current', 'next');
  slide[current].classList.add('prev');

  slide[next].classList.remove('prev', 'next');
  slide[next].classList.add('current');
  
  slide[prev].classList.remove('current', 'prev');
  slide[prev].classList.add('next');

  prev = current;
  current = next;
  next++;

});