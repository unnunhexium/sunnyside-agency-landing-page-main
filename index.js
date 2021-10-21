const hamburger = document.querySelector(".top__hamburger");
const nav = document.querySelector(".mobile-nav");
const handleClick = () => {
  hamburger.classList.toggle("top__hamburger--active");
  nav.classList.toggle("mobile-nav--active");
};

hamburger.addEventListener("click", handleClick);
