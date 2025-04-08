document.addEventListener('DOMContentLoaded', () => {
  const cookiesModal = document.querySelector('.cookie-modal');
  const acceptBtn = document.querySelector('.accept');
  const declineBtn = document.querySelector('.decline');

  const cookiesModalClose = () => {
    cookiesModal.style.display = 'none';
    document.body.classList.remove('no-scroll');
  };

  const cookiesPreference = localStorage.getItem('cookiesAccepted');
  if (cookiesPreference !== null) {
    cookiesModalClose();
  } else {
    document.body.classList.add('no-scroll');
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookiesModalClose();
  });

  declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'false');
    cookiesModalClose();
  });
});
