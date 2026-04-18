const produtos = [
    { nome: 'Notebook', preco: 2500, categoria: 'Eletrônicos' },
    { nome: 'Livro', preco: 50, categoria: 'Livraria' },
    { nome: 'Smartphone', preco: 1500, categoria: 'Eletrônicos' },
    { nome: 'Cadeira Gamer', preco: 950, categoria: 'Móveis' }
];

const produtosCaros = produtos
  .filter(({ preco }) => preco > 1000)   // filtra produtos com preço > 1000
  .map(({ nome }) => nome);               // pega só o nome desses produtos

console.log(produtosCaros); // Output: ['Notebook', 'Smartphone']