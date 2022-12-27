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
//Skills
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

//Projects
$(document).on('click', '.project-filter li', function(){
  $(this) .addClass('project-filter-active').siblings ().removeClass('project-filter-active')
});

$(document).ready(function(){
  $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if(value == 'all'){
          $('.project-box').show('1000');
      }
      else{
          $('.project-box').not('.'+value).hide('1000');
          $('.project-box').filter('.'+value).show('1000');
      }
  });
});





