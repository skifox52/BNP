//Hamburger
document
  .querySelector(".hamburger__container")
  .addEventListener("click", (e) => {
    document.querySelector(".hamburger__container").classList.toggle("active")
    document.querySelector(".hamburger__content").classList.toggle("active")
  })
