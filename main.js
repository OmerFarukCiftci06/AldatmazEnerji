document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.querySelector(".carousel-control-next");
  const intervalTime = 4000; // 1 saniye

  setInterval(() => {
    nextButton.click();
  }, intervalTime);
});
