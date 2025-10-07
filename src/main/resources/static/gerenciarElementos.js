const criarTabela = function(dados){

    document.querySelectorAll('table').forEach(function(tabela){
        tabela.remove();
    });


    const tabela = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');


    // Criar cabeçalho
    const cabecalho = Object.keys(dados[0]);
    const tr = document.createElement('tr');
    cabecalho.forEach(function(campo) {
        const th = document.createElement('th');
        th.textContent = campo;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    tabela.appendChild(thead);

    // Criar corpo da tabela
    dados.forEach(function(item) {
        const tr = document.createElement('tr');
        cabecalho.forEach(function(campo) {
            const td = document.createElement('td');
            td.textContent = item[campo];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    tabela.appendChild(tbody);

    return tabela;



}
/*
Função para mostrar ou ocultar elementos
Parâmetros:
esconder: booleano - true para ocultar, false para mostrar
elemento : string - classe ou id do elemento a ser manipulado
Exemplo de uso:
setShowHide(true, ".minha_section");
*/
const setShowHide = function(esconder, elemento) {
    document.querySelectorAll(elemento).forEach(function(section) {
        section.style.display =  esconder ? "none" : "block";
    });
}