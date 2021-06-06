let radios = document.getElementsByName('slide-btn');
let buttons = document.getElementsByName('nav-btn');
let currentSlide = 0;

let manualNav = (manual) => {
  buttons.forEach(btn => {
    btn.classList.remove('active');
  })
  
  buttons[manual].classList.add('active');
}

buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    manualNav(i);
    currentSlide = i;
  });
});

setInterval(function() {
    buttons[currentSlide].click();
    currentSlide++;

    if(currentSlide >= buttons.length) {
      currentSlide = 0;
    } 
}, 5000);

