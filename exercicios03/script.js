function contador() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.querySelector('input#txtfim')
    let passo = document.querySelector('input.txtpasso')
    let res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // window.alert('[ERROR] Verifique todos os dados e tente novamente.')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }       
        } else {
            // Contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F423}`
    }
}     
