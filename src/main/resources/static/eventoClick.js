document.getElementById("bt-fabricantes").addEventListener("click", async function(event) {
    setShowHide(true, ".section");
     const secaoFabricantes = document.querySelector("#fabricantes");
     secaoFabricantes.style.display = "block";

     // Limpa o conteúdo anterior da seção (exceto o título e parágrafo)
     setRemoverElementos(".tabela-dados");

     const dadosFabricantes = await getData("http://localhost:8080/api/fabricantes");
     if (dadosFabricantes.ok === false) {
      document.querySelector("#fabricantes").innerHTML = "<p>Erro ao carregar os dados do fabricante!!!</p>";
      document.querySelector("#fabricantes").style.color = "red";
      return;

    }

     secaoFabricantes.appendChild(criarTabela(dadosFabricantes, "Fabricante", "tabela-dados"));
 });  


document.getElementById("bt-modelos").addEventListener("click", async function(event) {
    setShowHide(true, ".section");
    setRemoverElementos(".tabela-dados");
    document.querySelector('#modelos').style.display = "block";
    const dadosModelo = await getData("http://localhost:8080/api/modelos");
    if (dadosModelo.ok === false) {
      document.querySelector("#modelos").innerHTML = "<p>Erro ao carregar os dados do modelo!!!</p>";
      document.querySelector("#modelos").style.color = "red";
      return;

    }
   
      document.querySelector("#modelos").appendChild(criarTabelaModelo(dadosModelo));


});

document.getElementById('bt-veiculos').addEventListener('click',async function(event) {
    setShowHide(true, ".section");
    setRemoverElementos(".tabela-dados");
    document.querySelector('#veiculos').style.display = 'block';
    const dadosVeiculos = await getData("http://localhost:8080/api/veiculos");

    if (dadosVeiculos.ok === false) {
      document.querySelector("#veiculos").innerHTML = "<p>Erro ao carregar os dados do veículo!!!</p>";
      document.querySelector("#veiculos").style.color = "red";
      return;

    }


      document.querySelector('#veiculos').appendChild(criarTabelaVeiculo(dadosVeiculos));



});