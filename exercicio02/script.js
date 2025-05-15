function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERROR] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        // var img = document.createElement('img')
        // img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 18) {
                // menor
                res.innerHTML += `Você é menor de idade`
            } else if (idade < 65) {
                // maior de idade
                res.innerHTML += `Você é maior de idade`
            } else {
                // idoso
                res.innerHTML += `Você é idoso`
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 18) {
                // menor
                res.innerHTML += `Você é menor de idade`
            } else if (idade < 65) {
                // maior de idade
                res.innerHTML += `Você é maior de idade`
            } else {
                // idoso
                res.innerHTML += `Você é idoso`
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        // res.appendChild(img)
    }
}