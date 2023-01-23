const nom = document.querySelector("#nom")
const prenom = document.querySelector("#prenom")
const dn = document.querySelector("#dn")
const tel = document.querySelector("#tel")
const tel__fix = document.querySelector("#tel__fix")
const mail = document.querySelector("#mail")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const steps = [...document.querySelectorAll(".step")]
const modal = document.querySelector("dialog")
const showModal = document.querySelector(".show__modal")
const connexion = document.querySelector(".connexion")
const connexionModal = document.querySelector(".connexion__modal")
const form = document.querySelector("form")
const text = document.querySelector("#text")

// Multi steps form

next.addEventListener("click", (e) => {
  if (
    nom.value == "" ||
    prenom.value == "" ||
    dn.value == "" ||
    tel.value == "" ||
    tel__fix.value == "" ||
    mail.value == ""
  ) {
    return alert("Remplissez vos champs")
  }
  steps[0].classList.remove("active")
  steps[1].classList.add("active")
})
form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (
    text.value == "" &&
    nom.value !== "" &&
    prenom.value !== "" &&
    dn.value !== "" &&
    tel.value !== "" &&
    tel__fix.value !== "" &&
    mail.value !== ""
  ) {
    return alert("Remplissez vos champs")
  } else if (
    text.value !== "" &&
    nom.value !== "" &&
    prenom.value !== "" &&
    dn.value !== "" &&
    tel.value !== "" &&
    tel__fix.value !== "" &&
    mail.value !== ""
  ) {
    alert("Rendez-vous pris!")
    modal.close()
  }
})
prev.addEventListener("click", (e) => {
  e.preventDefault()
  steps[1].classList.remove("active")
  steps[0].classList.add("active")
})
//Show modal
showModal.addEventListener("click", () => {
  modal.showModal()
})
connexion.addEventListener("click", () => {
  connexionModal.showModal()
})
