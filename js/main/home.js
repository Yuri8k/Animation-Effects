VanillaTilt.init(document.querySelectorAll(".midle-banner"), {
    max: 25,
    speed: 400
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    loop: true
});

const cubeLight = document.querySelectorAll('.cube');
if(cubeLight) {
  cubeLight.forEach((item) => {
    var light = item.querySelector('.cube__top');
    light.addEventListener('click', () => {
      light.classList.toggle('active');
    })
  })
}

