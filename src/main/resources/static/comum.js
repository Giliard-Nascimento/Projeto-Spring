async function getData(url){
   

    try {

        const response = await fetch(url);
        if (!response.ok) {
            //throw new Error("Erro na requisição:" + response.status);
            return response;
        }

        const dadosFabricantes = await response.json();
        return dadosFabricantes;

        } catch (error) {
           // console.error('Erro ao buscar dados:', error);
           return error;
        }
}

async function setDeletar(url){
   

    try {

        const response = await fetch(url, { method: 'DELETE'});
        if (!response.ok) {
            throw new Error("Erro na requisição:" + response.status);
        }

        const dadosResposta = await response.json();
        return dadosResposta;

        }catch (error) {
          return error;
        }
}