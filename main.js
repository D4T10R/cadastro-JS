
async function buscaEndereco (cep) {

    var menssagemErro = document.getElementById('erro')

    try {

        menssagemErro.innerHTML = ('')
      
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPconvertida = await consultaCep.json()

        if (consultaCEPconvertida.erro) {
            throw Error("CEP não encontrado!!!")
        }

        var cidade = document.getElementById('cidade')
        var rua = document.getElementById('endereco')
        var estado = document.getElementById('estado')
        
        cidade.value = consultaCEPconvertida.localidade;
        rua.value = consultaCEPconvertida.logradouro;
        estado.value = consultaCEPconvertida.uf;
    


        console.log(consultaCEPconvertida)
        return consultaCEPconvertida;
    } catch (erro) {
    

        menssagemErro.innerHTML = ('<p> CEP inválido </p>')
        console.log(erro)
    }


}

const campoDigitacaoCEP = document.getElementById('cep')
campoDigitacaoCEP.addEventListener("focusout", () => buscaEndereco(campoDigitacaoCEP.value))




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