$('.slider-block__slider').slick({
  dots: true,
  customPaging: function(slider, i) {
    return '<div class="slider-block__dot"></div>';
  },
  prevArrow: '<button type="button" class="slider-block__arrow-left"><img src="./img/slider/arrow-left.svg" alt="arrow-left" class="slider-block__arrow-left-img"></button>',
  nextArrow: '<button type="button" class="slider-block__arrow-right"><img src="./img/slider/arrow-right.svg" alt="arrow-right" class="slider-block__arrow-right-img"></button>',
});

if ($(window).width() <= 1150) {
  $('.slider-of-prices__block').slick({
    dots: false,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slider-block__arrow-left"><img src="./img/slider/arrow-left.svg" alt="arrow-left" class="slider-block__arrow-left-img"></button>',
    nextArrow: '<button type="button" class="slider-block__arrow-right"><img src="./img/slider/arrow-right.svg" alt="arrow-right" class="slider-block__arrow-right-img"></button>',
    slidesToShow: 3,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }); 
}

const sidebarButtons = document.querySelectorAll('.sidebar-button')

const ourWorksButton = document.querySelector('.sidebar__our-works-button')
const pricesButton = document.querySelector('.sidebar__prices-button')
const mapButton = document.querySelector('.sidebar__map-button')
const startPageBlock = document.querySelector('.start-page-block')
const prices = document.querySelector('.prices')
const footer = document.querySelector('.foot')


function slowScroll (id) {
  var offset = 0;
  if (id === '.start-page-block') {
    $('html, body').animate ({
      scrollTop: 0
    }, 500);
  } else if (id === '.foot__map-block') {
    $('html, body').animate ({
      scrollTop: $(id).offset().top - offset
    }, 500);
  } else {
    $('html, body').animate ({
      scrollTop: $(id).offset().top - $(window).height() - offset
    }, 500);
  }
  return false;

}

ourWorksButton.style.color = '#F2BF14'
ourWorksButton.previousSibling.style.display = 'block'

window.addEventListener('scroll', () => {
  if (window.pageYOffset+window.innerHeight > footer.offsetTop) {
    mapButton.style.color = '#F2BF14'
    mapButton.previousSibling.style.display = 'block'
    pricesButton.style.color = '#CCCCCC'
    pricesButton.previousSibling.style.display = 'none'
    ourWorksButton.style.color = '#CCCCCC'
    ourWorksButton.previousSibling.style.display = 'none'
  } else if (window.pageYOffset > 0 && window.pageYOffset + window.innerHeight <= footer.offsetTop){
    pricesButton.style.color = '#F2BF14'
    pricesButton.previousSibling.style.display = 'block'
    mapButton.style.color = '#CCCCCC'
    mapButton.previousSibling.style.display = 'none'
    ourWorksButton.style.color = '#CCCCCC'
    ourWorksButton.previousSibling.style.display = 'none'
  } else if (window.pageYOffset === 0){
    ourWorksButton.style.color = '#F2BF14'
    ourWorksButton.previousSibling.style.display = 'block'
    mapButton.style.color = '#CCCCCC'
    mapButton.previousSibling.style.display = 'none'
    pricesButton.style.color = '#CCCCCC'
    pricesButton.previousSibling.style.display = 'none'
  }
})

const consultationButtons = document.querySelectorAll('.consultation-button')
const getHelpBlockBackground = document.querySelector('.get-help__block-background')
const getHelpCloseBackground = document.querySelector('.get-help__close-background')
const getHelpWindow = document.querySelector('.get-help__window')
const getHelpSendButton = document.querySelector('.get-help__send-button')
const getHelpCloseForm = document.querySelector('.get-help__close-form')

function openGetHelpWindow() {
  getHelpBlockBackground.style.backgroundColor = 'rgba(204, 204, 204, 0.376)'
  getHelpWindow.style.opacity = '1'  
  getHelpWindow.style.visibility = 'visible'  
  getHelpWindow.style.transform = 'translate(0px, 0px)'  
  getHelpBlockBackground.style.opacity = '1'  
  getHelpBlockBackground.style.visibility = 'visible'  
}

function closeGetHelpWindow() {
  getHelpBlockBackground.style.backgroundColor = 'rgba(204, 204, 204, 0)'
  getHelpWindow.style.opacity = '0'  
  getHelpWindow.style.visibility = 'hidden'  
  getHelpWindow.style.transform = 'translate(0px, -100%)'  
  getHelpBlockBackground.style.opacity = '0'  
  getHelpBlockBackground.style.visibility = 'hidden'  
}

consultationButtons.forEach(consultationButton => consultationButton.addEventListener('click', () => {
  if (getHelpBlockBackground.style.backgroundColor == 'rgba(204, 204, 204, 0.376)') {
    closeGetHelpWindow()
  } else{
    openGetHelpWindow()
  }
}))

getHelpSendButton.addEventListener('click', (event) => {
  event.preventDefault()
  closeGetHelpWindow()
})

getHelpCloseForm.addEventListener('click', () => {
  closeGetHelpWindow()
})
getHelpCloseBackground.addEventListener('click', () => {
  closeGetHelpWindow()
})