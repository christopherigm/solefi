import '../scss/slides-horizontal.scss';

let slidesElement;
let descriptionElement;
let messageElement;
let slides = [];
let mySwiper;
let data = {
  current: {}
};

new Vue({ el: '#description', data: data });

const setCardHeight = function() {
  messageElement.style.opacity = '0';
  setTimeout(function() {
    descriptionElement.style.height = `${messageElement.offsetHeight}px`;
  }, 100);
  setTimeout(function() {
    messageElement.style.opacity = '1';
  }, 300);
};

const onHomePageSlideChange = function() {
  const item = slides[mySwiper.realIndex];
  data.current = item;
  setCardHeight();
};

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {

    slidesElement = document.getElementById( 'slides' );
    descriptionElement = document.getElementById('description');
    messageElement = document.getElementById('message_element');

    if ( !slidesElement || !descriptionElement || !messageElement ) {
      return;
    }

    slides = JSON.parse( slidesElement.innerHTML );
    data.current = slides[0];

    const swiperContainer = document.querySelector('.swiper-container');
    if ( swiperContainer ) {
      mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: { delay: 5000 }
      });
      mySwiper.on('slideChange', onHomePageSlideChange);
    }
    setCardHeight();
  }
};

window.addEventListener('resize', function(e) {
  if ( descriptionElement ) {
    return setCardHeight();
  }
});
