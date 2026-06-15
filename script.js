window.addEventListener('beforeprint', function() {
  document.querySelectorAll('.accordion').forEach(function(el) {
    el.setAttribute('open', '');
  });
});

