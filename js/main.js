import { map, tileLayer } from "leaflet"
import "leaflet/dist/leaflet.css"
// Selectors
const searchLoupe = document.querySelector(".loupe")
const searchBarContainer = document.querySelector(".search__bar__container")
const sliders = document.querySelectorAll(".sliders")
const faders = document.querySelectorAll(".faders")
const trouverUneAgence = document.querySelector(".appear__map")
// To show the search bar one the navbar
searchLoupe.addEventListener("click", (e) => {
  searchBarContainer.classList.toggle("appear")
})
//Intersection Observers
//Sliders section [Devenir client]
const sliderOptions = { threshold: 0, rootMargin: "0px 0px -300px 0px" }
const sliderObserver = new IntersectionObserver((entries, sliderObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add("appear")
      sliderObserver.unobserve(entry.target)
    }
  })
}, sliderOptions)

sliders.forEach((slider) => {
  sliderObserver.observe(slider)
})

//Selection section [Selection]
const faderOptions = {
  threshold: 1,
}
const faderObserver = new IntersectionObserver((entries, faderObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add("appear")
      faderObserver.unobserve(entry.target)
    }
  })
}, faderOptions)
faders.forEach((fader) => {
  faderObserver.observe(fader)
})

//Creating the map
const mymap = map("map").setView([36.7762, 3.05997], 13)
tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(mymap)

trouverUneAgence.addEventListener("click", () => {
  document.querySelector("#map").classList.toggle("appear")
  document.querySelector(".appear__map").classList.toggle("appear")
})
