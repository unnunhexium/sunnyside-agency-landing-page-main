const hamburger = document.querySelector(".top__hamburger");
const nav = document.querySelector(".mobile-nav");
const heading = document.querySelector(".heading");
const handleClick = () => {
  hamburger.classList.toggle("top__hamburger--active");
  nav.classList.toggle("mobile-nav--active");
  heading.classList.toggle("heading--active");
};

hamburger.addEventListener("click", handleClick);
