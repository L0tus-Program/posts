const btn = document.querySelector("#send")

btn.addEventListener("click", function(e){ /* parametro e é um event */
    e.preventDefault(); /* evita o comportamento defalt do form, que seria de enviar o formulario recarregando a pagina */

    const range = document.querySelector("#number")
    const value = range.value /* value é o valor contido no id number, relacionado na const range acima */

    console.log(value)

    const rand = (value) => Math.floor(Math.random() * value)

    let valor_final = rand (value) +1 /* Por que o + 1 ? Assim o valor 0 não é incluso e o valor incluido em range é */

    console.log(valor_final) 

    const resultado = document.querySelector("#result")
    resultado.innerHTML = "<h2>O número sorteado foi " + valor_final + "</h2>"  /* escreve no html */

})
