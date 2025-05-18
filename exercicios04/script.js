function calcular() {
    let num = document.querySelector('input#txtnum')
    let res = document.getElementById('res')
    if (num.value.length == 0) {
        res.innerHTML = '[ERROR] Digite um valor válido'
    } else {
        res.innerHTML = ''
        let n = Number(num.value)
        for (let t = 0; t <= 10; t++ )
            res.innerHTML += `${n} x ${t} = ${n*t} <br>`
    }
}