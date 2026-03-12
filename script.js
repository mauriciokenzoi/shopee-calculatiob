function salvarConfig(){

    let taxa = document.getElementById("taxaImposto").value
    let fixa = document.getElementById("taxaFixa").value

    localStorage.setItem("taxaImposto", taxa)
    localStorage.setItem("taxaFixa", fixa)

    alert("Configuração salva")

    }

    function carregarConfig(){

    document.getElementById("taxaImposto").value =
    localStorage.getItem("taxaImposto") || 30

    document.getElementById("taxaFixa").value =
    localStorage.getItem("taxaFixa") || 4

    }

    function calcular(){

    let venda = parseFloat(document.getElementById("valorVenda").value)
    let custo = parseFloat(document.getElementById("custoProduto").value)

    let taxa = parseFloat(document.getElementById("taxaImposto").value)
    let fixa = parseFloat(document.getElementById("taxaFixa").value)

    let imposto = venda * (taxa/100)

    let lucro = venda - imposto - fixa - custo

    let percentual = (lucro / custo) * 100

    let resultado = document.getElementById("resultado")

    if(lucro >= 0){

    resultado.innerHTML =
    `<p class="lucro">Lucro: R$ ${lucro.toFixed(2)}</p>
    <p class="lucro">Margem: ${percentual.toFixed(2)}%</p>`

    }else{

    resultado.innerHTML =
    `<p class="prejuizo">Prejuízo: R$ ${lucro.toFixed(2)}</p>`

    }

    }

    carregarConfig() 
