const searchBarContainer = document.querySelector('.search__bar__container')
const searchLoupe = document.querySelector(".loupe")
searchLoupe.addEventListener("click", (e) => {
  searchBarContainer.classList.toggle("appear")
})