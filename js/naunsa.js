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
/*Skills*/
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('active');
  });

  item.addEventListener('mouseenter', function() {
    this.classList.add('active');
  });

  item.addEventListener('mouseleave', function() {
    this.classList.remove('active');
  });
});






