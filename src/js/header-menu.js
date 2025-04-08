const burgerBtn = document.querySelector(".burgerBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn-js");

function modalToggle() {
    modal.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
}

burgerBtn.addEventListener("click", modalToggle);
closeBtn.addEventListener("click", modalToggle);

/* window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modalToggle();
    }
}); */