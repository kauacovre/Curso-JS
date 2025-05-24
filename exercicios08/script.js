const { createElement } = require("react")

let num = document.getElementById('txtn')
let res = document.querySelector('div#resultado')
let lista = document.querySelector('select#lista')
let valores = []

function isNumero(n) {
    if (Number(n.value) >= 1 && Number(n.value <= 100)) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n.value)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    res.innerHTML = ''
    if (isNumero(num) && inlista(num, valores)) {
        valores.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `${num} adicionado`
        lista.appendChild(item)
    } else {
        window.alert(`[ERROR] Um ou mais valores estão incorretos`)
    }
    num.value = ''
    num.focus()
}