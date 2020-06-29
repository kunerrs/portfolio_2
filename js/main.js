AOS.init();
// jQuery

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({
      scrollOffset: 0,
    });
    $('.tooltipped').tooltip();
    $('.materialboxed').materialbox();
    $('.slider').slider({
        height: 800,
    });
  });



// Vanilla

const fab = document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'top',
    hoverEnabled: false
  });
});



window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;
      if (window.innerWidth > 1280){
          if(docScrollTop > 980){
              this.document.querySelector('nav').classList.add('fixed');          
          }
          else{
              this.document.querySelector('nav').classList.remove('fixed')
          }
      }
}



