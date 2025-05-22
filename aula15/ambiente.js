let num = [5, 8, 2, 9, 3]
num.push(1)

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O num na posição 0 é ${num[0]}`)

num.sort()
console.log(`Meu vetor organizado ficaria ${num}`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`) // O número 8 está nesta posição apos num.sort
let pos2 = num.indexOf(4)
console.log(`O valor 4 está na posição ${pos2}`) // O número 4 não existe