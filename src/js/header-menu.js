const burgerBtn = document.querySelector(".burgerBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn-js");
const links = modal.querySelectorAll("a");
function modalToggle() {
    modal.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
}

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); 
        const targetId = link.getAttribute("href");

        modalToggle(); 

        setTimeout(() => {
            window.location.hash = targetId;
        }, 300); 
    });
});
burgerBtn.addEventListener("click", modalToggle);
closeBtn.addEventListener("click", modalToggle);

