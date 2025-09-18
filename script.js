const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

var typed = new Typed("#typing-text", {
  strings: [
    "Aspiring Software Engineer",
    "Product Manager in the making",
    "Passionate about impactful digital experiences"
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1500,
  loop: true,
  showCursor: false
});
