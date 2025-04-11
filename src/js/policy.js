document.querySelectorAll('.policy-link').forEach(link => {
  link.addEventListener('click', () => {
    link.classList.add('visited-fake');
  });
});
