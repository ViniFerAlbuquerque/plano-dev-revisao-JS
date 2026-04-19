class Personagem {
  constructor(nome, forca) {
    this.nome = nome;
    this.vida = 100;     // Vida começa em 100
    this.forca = forca;
  }

  atacar(alvo) {
    if (!(alvo instanceof Personagem)) {
      console.log('Erro: alvo deve ser um Personagem');
      return;
    }
    alvo.vida -= this.forca;

    // Garantir que a vida não fique negativa
    if (alvo.vida < 0) alvo.vida = 0;

    console.log(`${this.nome} atacou ${alvo.nome} causando ${this.forca} de dano!`);
  }

  status() {
    return `${this.nome} - Vida: ${this.vida}`;
  }
}

// Criando personagens
const heroi = new Personagem('Herói', 20);
const vilao = new Personagem('Vilão', 15);

// Simulando batalha
console.log('Início da batalha:');
console.log(heroi.status());
console.log(vilao.status());

heroi.atacar(vilao);
console.log(vilao.status());

vilao.atacar(heroi);
console.log(heroi.status());

heroi.atacar(vilao);
console.log(vilao.status());

vilao.atacar(heroi);
console.log(heroi.status());