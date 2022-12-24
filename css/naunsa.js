var typed = new Typed(".styling", {
    strings: [ "STUDENT.", "BEGINNER."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});var typed = new Typed(".typing", {
    strings: [ "WEBSITE!", "PORTFOLIO!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var footerPosition = footer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    if (footerPosition < windowHeight) {
      footer.classList.add('show');
    }
  });
  