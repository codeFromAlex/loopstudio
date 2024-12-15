const openMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const navBar = document.querySelector(".nav-menu");

openMenu.addEventListener('click', () => {
    navBar.classList.add("active");
    closeMenu.classList.add("active");
})

closeMenu.addEventListener('click', () => {
    navBar.classList.remove("active");
    closeMenu.classList.remove("active");
});


let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


