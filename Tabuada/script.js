function calcular() {
    let numero = document.getElementById('numero')
    let resposta = document.getElementById('resposta')

    if(numero.value.length == 0) {
        window.alert("Por favor, digite um numero!")
    } else {
        resposta.innerHTML = '' //Limpando tabuada
        let num = Number(numero.value)

        for(let c = 1; c <= 10; c++){
            resultado = c * num
            resposta.innerHTML += `${num} x ${c} = ${resultado} <br>` //adicionando cada linha na resposta
        }

        numero.value = '' //Limpa o input
        numero.focus() //coloca cursor no input
    }
}
