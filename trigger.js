const animationTrigger = document.querySelector('.animation-trigger');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function addAnimationClass() {
  if (isElementInViewport(animationTrigger)) {
    animationTrigger.classList.add('animate__fadeInLeft');
  }
}

window.addEventListener('scroll', addAnimationClass);

$(document).ready(function () {
    $(".navbar-toggler").click(function () {
      $(".navbar-collapse").slideToggle(200);
    });
  });
  