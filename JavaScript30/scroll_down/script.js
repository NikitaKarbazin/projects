function debounce(func, wait = 40, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;


    console.log(window.scrollY + 'window.scrollY');
    console.log(window.innerHeight + 'window.innerHeight');
    console.log(slideInAt + 'slideInAt')
    console.log('------------------')

    const imageButtom = sliderImage.offsetTop + sliderImage.height;


    console.log(sliderImage.offsetTop + 'sliderImage.offsetTop');
    console.log(sliderImage.height + 'sliderImage.height');
    console.log(imageButtom + 'imageButtom');
    console.log('------------------')
    console.log('<===========>')


    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageButtom;
    if(isHalfShown && isNotScrolledPast){
      sliderImage.classList.add('active');
    }
    else{
      sliderImage.classList.remove('active');
    } 
  })
}

window.addEventListener('scroll', debounce(checkSlide));