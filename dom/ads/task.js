const slogans = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

function nextSlogan() {
  slogans.forEach((slogan, index) => {
    if (index === currentIndex) {
      slogan.classList.remove('rotator__case_active');
    }
  });
  currentIndex = (currentIndex + 1) % slogans.length;
  slogans[currentIndex].classList.add('rotator__case_active');

  let color = slogans[currentIndex].getAttribute('data-color');
  slogans[currentIndex].style.color = color;

  let speed = slogans[currentIndex].getAttribute('data-speed');

  setTimeout(nextSlogan, speed);
}

nextSlogan();
