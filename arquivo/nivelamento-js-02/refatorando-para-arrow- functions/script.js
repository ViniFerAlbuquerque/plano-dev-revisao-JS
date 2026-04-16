        // Código antigo
        // const numeros = [1, 2, 3, 4, 5];

        // const pares = numeros.filter(function(num) {
        // return num % 2 === 0;
        // });

        // const dobrados = numeros.map(function(num) {
        // return num * 2;
        // });

        // Código moderno
        const numeros = [1, 2, 3, 4, 5];

        const pares = numeros.filter(num => num % 2 === 0);

        const dobrados = numeros.map(num => num * 2);

        console.log(`Pares: é ${pares}`)
        console.log(`Dobrando os números: ${dobrados}`)