const inputGif = document.getElementById('inputGif');
    const btnBuscarGif = document.getElementById('btnBuscarGif');
    const resultadoGif = document.getElementById('resultadoGif');
    const apiKey = ''; // Você vai precisar de uma chave de API gratuita do Giphy Developers. A URL de busca é `https://api.giphy.com/v1/gifs/search?api_key=SUA_CHAVE&q=TERMO_BUSCADO&limit=1`

    const buscarGif = async () => {
        const termo = inputGif.value;
        if (!termo) return;

        resultadoGif.innerHTML = 'Carregando...';

        try {
            const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${termo}&limit=1`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.data.length > 0) {
                const gifUrl = data.data[0].images.original.url;
                resultadoGif.innerHTML = `<img src="${gifUrl}" style="max-width: 100%;">`;
            } else {
                resultadoGif.innerHTML = 'Nenhum gif encontrado.';
            }
        } catch (error) {
            console.error('Erro na busca:', error);
            resultadoGif.innerHTML = 'Erro ao buscar.';
        }
    };

    btnBuscarGif.addEventListener('click', buscarGif);