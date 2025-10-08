async function getData(url){
   

    try {

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Erro na requisição:" + response.status);
        }

        const dadosFabricantes = await response.json();
        return dadosFabricantes;

        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
}