var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var mobileCloseButton = document.getElementById("close-mobile-nav");

toggleButton.addEventListener("click", () => {
  mobileNav.classList.add("flex-open");
});

mobileCloseButton.addEventListener("click", () => {
  mobileNav.classList.remove("flex-open");
});
