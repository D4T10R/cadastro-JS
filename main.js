

async function buscaEndereco (cep) {
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPconvertida = await consultaCep.json()
        if (consultaCEPconvertida.erro) {
            throw Error("CEP não encontrado!!!")
        }

        console.log(consultaCEPconvertida)
        return consultaCEPconvertida;
    } catch (erro) {
        console.log(erro)
    }
}
/*
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error("CEP não encontrado!")
        } else 
        console.log(r)
    })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log("Bloco  finalizado!!!"))
*/








/* FORMA DE FAZER VARIAS REQUISIÇÔES

let ceps = ['01001000', '01001001']
let conjuntosCeps = ceps.map(valores => buscaEndereco(valores))
console.log(conjuntosCeps)
Promise.all(conjuntosCeps).then(resposta => console.log(resposta))
*/