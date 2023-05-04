function loadMain(){
    
    //XML Skills
    loadXML("skills.xml","skillsTemplate.xsl","skillsList") 
    
    //XML projects
    loadXML("projects.xml","projectsTemplate.xsl","swiper-wrapper") 
    
    //Initialize Swiper 
    let swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });
}