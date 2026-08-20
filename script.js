const button = document.querySelector("button")
const inputUni = document.getElementById("unitario")
const inputDi = document.querySelector("dinheiro")
const inputQua = document.getElementById("quantidade")
const paragrafoTROCO = document.getElementById("TROCO")

button.addEventListener("click", calcularTroco)

function calcularTroco() {
    const preçoUni = input.valueAsNumber


    if (preçoUni > dinheiro) {
        const valorTroco = (minutosUtilizados - 100) * 2 + 50
        const valorFaturaEditado = valorFatura.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `Valor da fatura: ${valorFaturaEditado}`
    } else {
        paragrafoResultado.textContent = "Valor da fatura: R$ 50,00"
    }
}