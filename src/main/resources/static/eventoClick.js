document.getElementById("bt-fabricantes").addEventListener("click", async function(event) {
    setShowHide(true, ".section");
     const secaoFabricantes = document.querySelector("#fabricantes");
     secaoFabricantes.style.display = "block";

     // Limpa o conteúdo anterior da seção (exceto o título e parágrafo)
     setRemoverElementos(".tabela-dados");

     const dadosFabricantes = await getData("http://localhost:8080/api/fabricantes");
     secaoFabricantes.appendChild(criarTabela(dadosFabricantes, "Fabricante", "tabela-dados"));
 });  


document.getElementById('bt-modelos').addEventListener('click', async function(event) {
    setShowHide(true, ".section");
    document.querySelector('#modelos').style.display = 'block';
    setRemoverElementos(".tabela-dados");


    const dadosModelos = [
        { ID: 1, Modelo: 'Corolla', Id_Fabricante: 1 },
        { ID: 2, Modelo: 'Mustang', Id_Fabricante: 2 },
        { ID: 3, Modelo: 'X5', Id_Fabricante: 3 },
        { ID: 4, Modelo: 'Elantra', Id_Fabricante: 4 },
        { ID: 5, Modelo: 'Punto', Id_Fabricante: 5 }
    ];

      document.querySelector('#modelos').appendChild(criarTabela(dadosModelos, "Fabricante", "tabela-dados"));


});

document.getElementById('bt-veiculos').addEventListener('click', function(event) {
    setShowHide(true, ".section");
    document.querySelector('#veiculos').style.display = 'block';
    setRemoverElementos(".tabela-dados");


    const dadosVeiculos = [
        { ID: 1, Modelo_id: 1, Ano:2020, valor:30000, placa:'ABC-1234', data_cadastro: '30/09/2025', cor: 'Branco', Descricao: '0km, espaçoso, confortável' },
        { ID: 2, Modelo_id: 2, Ano:2019, valor:55000, placa:'DEF-5678', data_cadastro: '15/08/2025', cor: 'Vermelho', Descricao: 'Esportivo, potente, design moderno' },
        { ID: 3, Modelo_id: 3, Ano:2021, valor:80000, placa:'GHI-9012', data_cadastro: '20/07/2025', cor: 'Preto', Descricao: 'Luxuoso, tecnologia avançada, seguro' },
        { ID: 4, Modelo_id: 4, Ano:2018, valor:25000, placa:'JKL-3456', data_cadastro: '10/06/2025', cor: 'Azul', Descricao: 'Econômico, prático, fácil de dirigir' },
        { ID: 5, Modelo_id: 5, Ano:2017, valor:20000, placa:'MNO-7890', data_cadastro: '05/05/2025', cor: 'Cinza', Descricao: 'Compacto, ágil, ideal para cidade' }
        
    ];

      document.querySelector('#veiculos').appendChild(criarTabela(dadosVeiculos, "Fabricante", "tabela-dados"));



});