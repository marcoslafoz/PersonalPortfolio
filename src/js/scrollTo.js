let currentIndex = 0

window.addEventListener('scroll', detectarFinalPagina);
window.addEventListener("scroll", detectarInicioPagina);

function scrollToID(id) {
  const idSection = document.querySelector('#' + id);
  idSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollController() {

  currentIndex++

  switch (currentIndex) {
    case 0:
      idController = document.querySelector('#HEADER')
      break;
    case 1:
      idController = document.querySelector('#ABOUTME')
      break;
    case 2:
      idController = document.querySelector('#SKILLS')
      break;
    case 3:
      idController = document.querySelector('#PROJECTS')
      break;
    case 4:
      idController = document.querySelector('#FOOTER')
      rotateArrow(0)
      break;
    case 5:
      currentIndex = 0
      idController = document.querySelector('#HEADER')
      rotateArrow(180)
      break;
    default:
      break;
  }

  idController.scrollIntoView({ behavior: 'smooth' });
}

function rotateArrow(degree) {
  var arrow = document.getElementById("arrow");
  arrow.style.transition = "transform 1s ease";
  arrow.style.transform = "rotate(" + degree + "deg)";
}

function detectarInicioPagina() {
  if (window.pageYOffset === 0) {
    currentIndex = 0
    rotateArrow(180)
  }
}

function detectarFinalPagina() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    currentIndex = 4
    rotateArrow(0)
  }
}




