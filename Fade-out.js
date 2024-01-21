var fadeOutLinks = document.querySelectorAll('.fade-out-link');

fadeOutLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.fade-out').classList.add('is-fading');
    setTimeout(function() {
      window.location.href = link.href;
    }, 500);
  });
});
