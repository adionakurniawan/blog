(function() {
  'use strict';

  // Menu Toggle Function
  var menuToggle = document.querySelector('.menu-toggle');
  var body = document.querySelector('body');

  function toggleMenu() {
    body.classList.toggle('menu-open');
  }

  menuToggle.addEventListener('click', toggleMenu);

  // Unwrap p tag from img element
  var images = document.querySelectorAll('p img');
  images.forEach(function(img) {
    img.parentElement.setAttribute('class', 'img');
  });

  // Modify youtube link to responsive embed element
  var youtubeLinks = document.querySelectorAll('a[href*="youtube.com/watch"]');

  youtubeLinks.forEach(function(link) {
    link.parentElement.setAttribute('class', 'youtube');
    link.parentElement.innerHTML =
      '<iframe src="https://www.youtube.com/embed/' +
      link.href.split('v=')[1].split('&')[0] +
      '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  });
})();
