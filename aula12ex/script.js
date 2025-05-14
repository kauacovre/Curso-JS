var horas = window.document.querySelector('#h')
var datadia = new Date()
var relogio = datadia.getHours()
var imag = window.document.getElementById('imagem')
var cor = document.querySelector('#back') 
horas.innerHTML = `<p>Agora são <strong>${relogio} horas</strong></p>`

if (relogio >= 0 && relogio <= 12) {
    imag.innerHTML = `<img src="amanhecer.jpg" alt="amanhecer">`
    cor.style.background = 'lightyellow'
}
else if (relogio > 12 && relogio <= 18){
    imag.innerHTML = `<img src="tardecer.jpg" alt="tardecer">`
    cor.style.background = 'lightblue'
}
else {
    imag.innerHTML = `<img src="anoitecer.jpg" alt="anoitecer">`
    cor.style.background = 'lightpink'
}