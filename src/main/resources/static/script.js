async function getData(){
        const url = "http://localhost:8080/api/fabricantes";

        try {

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.status);
            }

            const dadosFabricantes = await response.json();
            return dadosFabricantes;

            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
   }

const limparSections = function() {
        document.querySelectorAll('.section').forEach(function(section) {
            section.style.display = 'none';
        });
   }



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


    document.getElementById('bt-fabricantes').addEventListener('click', function(event) {
          event.preventDefault();
          limparSections();
          document.querySelector('#fabricantes').style.display = 'block';


          const dadosFabricantes = [
              { ID: 1, Nome: 'Toyota', Pais: 'Japao' },
              { ID: 2, Nome: 'Ford', Pais: 'EUA' },
              { ID: 3, Nome: 'BMW', Pais: 'Alemanha' },
                { ID: 4, Nome: 'Hyundai', Pais: 'Coreia do Sul' },
                { ID: 5, Nome: 'Fiat', Pais: 'Italia' }

          ];

          document.querySelector('#fabricantes').appendChild(criarTabela(dadosFabricantes));
    });


    document.getElementById('bt-modelos').addEventListener('click', function(event) {
          limparSections();
          document.querySelector('#modelos').style.display = 'block';

            const dadosModelos = [
                { ID: 1, Modelo: 'Corolla', Id_Fabricante: 1 },
                { ID: 2, Modelo: 'Mustang', Id_Fabricante: 2 },
                { ID: 3, Modelo: 'X5', Id_Fabricante: 3 },
                { ID: 4, Modelo: 'Elantra', Id_Fabricante: 4 },
                { ID: 5, Modelo: 'Punto', Id_Fabricante: 5 }
            ];

            document.querySelector('#modelos').appendChild(criarTabela(dadosModelos));


    });

    document.getElementById('bt-veiculos').addEventListener('click', function(event) {
          limparSections();
          document.querySelector('#veiculos').style.display = 'block';

            const dadosVeiculos = [
                { ID: 1, Modelo_id: 1, Ano:2020, valor:30000, placa:'ABC-1234', data_cadastro: '30/09/2025', cor: 'Branco', Descricao: '0km, espaçoso, confortável' },
                { ID: 2, Modelo_id: 2, Ano:2019, valor:55000, placa:'DEF-5678', data_cadastro: '15/08/2025', cor: 'Vermelho', Descricao: 'Esportivo, potente, design moderno' },
                { ID: 3, Modelo_id: 3, Ano:2021, valor:80000, placa:'GHI-9012', data_cadastro: '20/07/2025', cor: 'Preto', Descricao: 'Luxuoso, tecnologia avançada, seguro' },
                { ID: 4, Modelo_id: 4, Ano:2018, valor:25000, placa:'JKL-3456', data_cadastro: '10/06/2025', cor: 'Azul', Descricao: 'Econômico, prático, fácil de dirigir' },
                { ID: 5, Modelo_id: 5, Ano:2017, valor:20000, placa:'MNO-7890', data_cadastro: '05/05/2025', cor: 'Cinza', Descricao: 'Compacto, ágil, ideal para cidade' }
                
            ];

            document.querySelector('#veiculos').appendChild(criarTabela(dadosVeiculos));



    });

    