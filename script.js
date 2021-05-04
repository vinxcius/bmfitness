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
