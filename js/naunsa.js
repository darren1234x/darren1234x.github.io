var typed = new Typed(".typing", {
    strings: [ "WEBSITE!", "PORTFOLIO!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
//accordion dropdown about
const accItems = document.querySelectorAll('.accordion-item');

accItems.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

//Skills box
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
//







