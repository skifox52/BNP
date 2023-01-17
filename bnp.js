const h2 = document.querySelector('h2')

const textTitle = 'Notre offre pour particulier'

let i=0;
const interval = setInterval(()=>{
    h2.innerHTML += textTitle[i]
    i++
    if(i>=textTitle.length){
        clearInterval(interval)
    }

},150)