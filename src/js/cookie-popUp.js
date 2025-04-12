const cookiesModal = document.querySelector('.cookie-modal');
const acceptBtn = document.querySelector('.accept');
const declineBtn = document.querySelector('.decline');

const cookiesPreference = localStorage.getItem('cookiesAccepted');

const cookiesModalClose = () => {
  cookiesModal.classList.remove('show');
  document.documentElement.classList.remove('no-scroll');
};

if (cookiesPreference === null) {
  cookiesModal.classList.add('show');
  document.documentElement.classList.add('no-scroll');
}

acceptBtn.addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted', 'true');
  cookiesModalClose();
  console.log('cookies accepted');
});

declineBtn.addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted', 'false');
  cookiesModalClose();
  console.log('cookies declined');
});
