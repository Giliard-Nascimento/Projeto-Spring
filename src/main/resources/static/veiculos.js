const criarTabelaVeiculo = function(dados){

    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");


    const trTitle = document.createElement("tr");
    const th = document.createElement("th");

    th.textContent = "Veiculos";
    th.colSpan = 7;
    trTitle.appendChild(th);
    thead.appendChild(trTitle);

    const cabecalho = ["Modelo", "Ano", "Valor", "placa", "Data cadatro", "Cor", "Descrição"];
     const tr = document.createElement("tr");
     cabecalho.forEach(function(campo){
        const th = document.createElement("th");
        th.textContent = campo;
        tr.appendChild(th);
    });


    tabela.classList.add("tabela-dados");

    thead.appendChild(tr);
    tabela.appendChild(thead);


    dados.forEach(function(item){
        const tr = document.createElement("tr");

        const tdModelo = document.createElement("td");
        tdModelo.textContent = item.modelo.nome;
        tr.appendChild(tdModelo);


        const tdAno = document.createElement("td");
        tdAno.textContent = item.ano;
        tr.appendChild(tdAno);


        const tdValor = document.createElement("td");
        tdValor.textContent = item.valor;
        tr.appendChild(tdValor);


        const tdPlaca = document.createElement("td");
        tdPlaca.textContent = item.placa;
        tr.appendChild(tdPlaca);

        const tdDataCadastro = document.createElement("td");
        tdDataCadastro.textContent = item.dataCadastro;
        tr.appendChild(tdDataCadastro);

        const tdCor = document.createElement("td");
        tdCor.textContent = item.cor;
        tr.appendChild(tdCor);


        const tdDescricao = document.createElement("td");
        tdDescricao.textContent = item.descricao;
        tr.appendChild(tdDescricao);

        tbody.appendChild(tr);


    });


    tabela.appendChild(tbody);

    return tabela;


}