//Side Navbar
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

const navLinks = document.querySelectorAll('.nav-links li')

function navSlide() {


  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active')
      burger.classList.toggle('toggle')
  })

  navLinks.forEach((link, index) =>{
    link.style.animation = `navLinkFade 0.5 ease fowards ${index / 7 + 1.5}s`;
  });


  function closeOnClick() {
      nav.addEventListener('click', () => {
          nav.classList.remove('nav-active')
          burger.classList.toggle('toggle')
      })
  }
  closeOnClick()

}
navSlide()

//Smooth Scroll em links
const menuItems = document.querySelectorAll('.wrap a');

const scrollToIdOnClick = (event) =>{
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;

  //offsetTop informa a distancia da section emm relação ao topo
  console.log(to.offsetTop);

  //primeiro atributo de scroll é o eixo X, segundo eixo Y
  window.scroll({
    top: to - 50,
  }
  )
}

menuItems.forEach(link =>{
  link.addEventListener('click', scrollToIdOnClick)
})

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};