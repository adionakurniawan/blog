(function() {
  'use strict';

  var menuToggle = document.querySelector('.menu-toggle');
  var body = document.querySelector('body');

  function toggleMenu() {
    body.classList.toggle('menu-open');
  }

  menuToggle.addEventListener('click', toggleMenu);
})();
