let horas = window.document.querySelector('#h')
let datadia = new Date()
let relogio = datadia.getHours()
let imag = window.document.getElementById('imagem')
let cor = document.querySelector('#back') 
horas.innerHTML = `<p>Agora são <strong>${relogio} horas</strong></p>`

if (relogio >= 0 && relogio <= 12) {
    imag.innerHTML = `<img src="amanhecer.jpg" alt="amanhecer">` //img.src = 
    cor.style.background = 'lightyellow'
}
else if (relogio > 12 && relogio <= 18){
    imag.innerHTML = `<img src="tardecer.jpg" alt="tardecer">` // img.src = 
    cor.style.background = 'lightblue'
}
else {
    imag.innerHTML = `<img src="anoitecer.jpg" alt="anoitecer">` // img.src = 
    cor.style.background = 'lightpink'
}