
function botao() {
    let valor = Number(document.getElementById ('valor').value)
    let moedas = document.getElementById ('moedas').value
    let resultado = 0
    let total = document.getElementById ('total')

    if (!valor === true) {
        alert ('Insira um Valor')
    } else if (moedas === 'Selecione') {
        alert ('Escolha uma moeda')
    }

    if (moedas === 'Dolar') {
        resultado = valor / 5
        total.innerHTML = `$ ${resultado}`
    } else if (moedas === 'Euro') {
        resultado = valor / 5.50
        total.innerHTML = `€ ${resultado.toFixed(2)}`
    }
}

