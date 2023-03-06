var consultaCep = fetch('https://viacep.com.br/ws/01001230/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error("CEP não encontrado!")
        } else 
        console.log(r)
    })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log("Bloco  finalizado!!!"))



console.log(consultaCep)