const navBtn = document.querySelector(".btn-mobile-nav");
const mobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

navBtn.addEventListener("click", () => {
  //   mobileNav.classList.toggle("display");
  header.classList.toggle("nav-open");
});

window.addEventListener("scroll", () => {
  const t = window.innerHeight * 0.7;
  console.log(t);

  const featuredTop = document
    .querySelector(".section-hero")
    .getBoundingClientRect().bottom;
  console.log(featuredTop);

  if (featuredTop < t) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
});
