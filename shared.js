var backdrop = document.querySelector(".backdrop")
var modal = document.querySelector(".modal")
var toggleButton = document.querySelector(".toggle-button")
var mobileNav = document.querySelector(".mobile-nav")

function closeModal() {
  if (modal) {
    modal.classList.remove("open")
  }
  backdrop.classList.remove("open")
}

backdrop.addEventListener("click", function () {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove("open")
  closeModal()
})

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal)
}

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open")
  }
  backdrop.classList.remove("open")
}

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open")
  backdrop.classList.add("open")
})
