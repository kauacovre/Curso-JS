// RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
let res = fatorial(5)
console.log(`O fatorial de 5 é ${res}`)

/*

5! = 5 x 4 x 3 x 2 x 1 == 120 || 5! = 5! x 4!
n! = n x (n-1)!
1! = 1

*/