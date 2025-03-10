// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hambureger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// kellik di bawah sidebar  untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.targer) && !navbarNav.contains(e.targer)) {
    navbarNav.classList.remove("active");
  }
});
