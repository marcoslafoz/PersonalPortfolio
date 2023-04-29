function scrollToID(id) {
    const idSection = document.querySelector('#' + id);
    idSection.scrollIntoView({ behavior: 'smooth' });
  }