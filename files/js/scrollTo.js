function scrollToID(id) {
  const idSection = document.querySelector('#' + id);
  idSection.scrollIntoView({ behavior: 'smooth' });
}

function test() {
  console.log("WORKING!")
}