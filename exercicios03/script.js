function contador() {
    var inicio = Number(document.getElementById('txtinicio').value)
    var fim = Number(document.querySelector('input#txtfim').value)
    var passo = Number(document.querySelector('input.txtpasso').value)
    const res = document.getElementById('res')
    res.innerHTML = ''

    if (inicio = '' || fim = '') {
        window.alert('Digite um valor válido')
    } while (inicio <= fim) {
        res.innerHTML += `${inicio}  `
        if (passo = passo) {
            inicio = inicio + passo
        } else {
            inicio ++
                }
        }
         
}