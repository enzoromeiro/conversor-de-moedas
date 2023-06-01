function botao() {
    let valor = Number(document.getElementById ('valor').value)
    let moedas = document.getElementById ('moedas').value
    let resultado = 0
    let total = document.getElementById ('total')

    if (moedas === 'Dolar') {
        resultado = valor * 5
        total.innerHTML = `$ ${resultado}`
    } else if (moedas === 'Euro') {
        resultado = valor * 5.50
        total.innerHTML = `€ ${resultado}`
    }
}

