let amigo = {nome: 'patrick', peso: 110.2, idade: 22, 
    emagrecer(p=0){
        console.log(`emagreceu`)
        this.peso -= p
    }
}

amigo.emagrecer(20)
console.log(`O ${amigo.nome} de ${amigo.idade} pesava 110.2 mas agora esta com ${amigo.peso}`)