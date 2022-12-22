
var typed = new Typed(".styling", {
    strings: [ "STUDENT.", "BEGINNER.", ""],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});var typed = new Typed(".typing", {
    strings: [ "WEBSITE!", "PORTFOLIO!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});


