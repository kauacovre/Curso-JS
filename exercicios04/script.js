function calcular() {
    var num = document.getElementById('txtnum')
    var res = document.querySelector('#res')
    var tabuada = 0
    calculo = 0
    res.innerHTML = ''

    var num = Number(num.value)
    while (tabuada <= 10) {
        res.innerHTML += `${num} x ${tabuada} = ${num*tabuada} <br>`
        tabuada++
    }
}