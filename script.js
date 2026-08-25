const botao = document.querySelector("button")
const inputPreco = document.getElementById("preco")
const inputQuantidade = document.getElementById("quantidade")
const inputDinheiro = document.getElementById("dinheiro")
const paragrafoResultado = document.getElementById("resultado")

botao.addEventListener("click", calcularTroco)

function calcularTroco() {

    const preco = inputPreco.valueAsNumber
    const quantidade = inputQuantidade.valueAsNumber
    const dinheiro = inputDinheiro.valueAsNumber

    const total = preco * quantidade

    if (dinheiro >= total) {

        const troco = dinheiro - total

        paragrafoResultado.textContent =
            `TROCO = ${troco.toFixed(2)}`

    } else {

        const falta = total - dinheiro

        paragrafoResultado.textContent =
            `DINHEIRO INSUFICIENTE. FALTAM ${falta.toFixed(2)} REAIS`
    }
}