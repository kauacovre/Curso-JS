function contador() {
    var inicio = Number(document.getElementById('txtinicio').value)
    var fim = Number(document.querySelector('input#txtfim').value)
    var passo = Number(document.querySelector('input.txtpasso').value)
    const res = document.getElementById('res')
    res.innerHTML = ''

    
    if (inicio == '' || inicio == String) {
        res.innerHTML = `[ERROR] Você digitou um ou mais valores inválidos, tente novamente`
        return
    }
    if (fim == '' || fim == String) {
        res.innerHTML = `[ERROR] Você digitou um ou mais valores inválidos, tente novamente`
        return
    }
    if (passo == 0) {
        window.alert('Passo invalido, considerando PASSO = 1')
        passo = 1
    }
    while (inicio <= fim) {
        res.innerHTML += `${inicio}  `
    if (passo = passo) {
        inicio = inicio + passo
    } else {
        inicio ++
        }
    }
}     
