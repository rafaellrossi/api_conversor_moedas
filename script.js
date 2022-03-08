function converter() {
    let valor = parseFloat(document.getElementById('valor').value)
    let moedaA = document.getElementById('moedaA').value
    let moedaB = document.getElementById('moedaB').value
    let soma = 0
    let url = `https://economia.awesomeapi.com.br/json/last/${moedaA}-${moedaB}`
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            soma = (valor * json[moedaA + moedaB].bid)
            soma = soma.toFixed(2)
            let res = soma.replace(".", ",")
            document.getElementById('res1').innerHTML = "Resultado"
            document.getElementById('res2').innerHTML = res + " " + moedaB
        });
}




