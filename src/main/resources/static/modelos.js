const criarTabelaModelo = function(dados) {

    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const trTitle = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = "Modelos";
    th.colSpan =  3;
    trTitle.appendChild(th);
    thead.appendChild(trTitle);

    const cabecalho = ["Modelo", "Fabricante", " Pais de Origem"];
    const tr = document.createElement("tr");
    cabecalho.forEach(function(campo){
        const th = document.createElement("th");
        th.textContent = campo;
        tr.appendChild(th);
    });


    tabela.classList.add("tabela-dados");


    thead.appendChild(tr);
    tabela.appendChild(thead);



    dados.forEach(function(item) {
        const tr = document.createElement("tr");

        const tdModelo = document.createElement("td");
        tdModelo.textContent = item.nome;
        tr.appendChild(tdModelo);


        const tdFabricante = document.createElement("td");
        tdFabricante.textContent = item.fabricante.nome;
        tr.appendChild(tdFabricante);


        const tdPaisOrigem = document.createElement("td");
        tdPaisOrigem.textContent = item.fabricante.paisOrigem;
        tr.appendChild(tdPaisOrigem);

        const Deletar = document.createElement("td");
        Deletar.innerHTML = '<button class= "btn delete">Deletar</button>';
        Deletar.addEventListener("click", async function() {
            setDeletar("http://localhost:8080/api/modelos/" + item.id);

        });

        tr.appendChild(Deletar);
        


        tbody.appendChild(tr);

    });

    tabela.appendChild(tbody);

    return tabela;


}