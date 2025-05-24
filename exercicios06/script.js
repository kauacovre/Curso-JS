let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n.value) >= 1 && Number(n.value) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n.value)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    res.innerHTML = ''
    if(isNumero(num) && !inlista(num, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        window.alert('[ERROR] Verifique os dados e tente novamente')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert(`Adicione números a lista`)
    } else {
        let tot = valores. length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            } else {
                (valores[0] < menor)
                menor = valores[pos]
            }

        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao total, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<br><p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<br><p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<br><p>Ao final da soma teremos ${soma}.</p>`
        res.innerHTML += `<br><p>A média dos valores digitados é ${media}.</p>`
    }
}


/* function finalizador() {
    let total = valores.length
    res.innerHTML = `Ao todo temos ${total} número(s) cadastrado(s)`
    res.innerHTML += `<br>O maior número informado foi ${maior}`
    res.innerHTML += `<br>O menor número informado foi ${menor}`
    res.innerHTML += `<br>Somando todos os valores temos ${soma}`
    res.innerHTML += `<br>A média dos valores digitados é ${soma/5}`
}

let maior = 0
let menor = 100
let soma = 0

function adicionar() {
    res.innerHTML = ''
    if(isNumero(num) && !inlista(num, valores)) {
        let n = Number(num.value)
        let item = document.createElement(`option`)
        item.text = `Valor ${n} adicionado`
        item.value = `lista${n}`
        lista.appendChild(item)
        valores.push(n)
        if (maior < n){
            maior = n
        } else if (menor > n ){
            menor = n
        }
        soma = soma + n
    } else {
        window.alert('[ERROR] Verifique os dados e tente novamente')
    }
} 
*/