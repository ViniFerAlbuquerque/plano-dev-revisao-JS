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

        if (!this.estaVivo()) {
            console.log(`${this.nome} não pode atacar porque está morto.`);
            return;
        }
        if (!alvo.estaVivo()) {
            console.log(`${alvo.nome} já está morto. Ataque não é possível.`);
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

    estaVivo() {
        return this.vida > 0;
    }
}

// Criando personagens
const heroi = new Personagem('Herói', 20);
const vilao = new Personagem('Vilão', 15);

// Simulando batalha
console.log('Início da batalha:');
console.log(heroi.status());
console.log(vilao.status());

while (heroi.estaVivo() && vilao.estaVivo()) {
    heroi.atacar(vilao);
    console.log(vilao.status());

    // Verifica se o vilão morreu para parar a batalha
    if (!vilao.estaVivo()) {
        console.log(`${vilao.nome} foi derrotado!`);
        break;
    }

    vilao.atacar(heroi);
    console.log(heroi.status());

    // Verifica se o herói morreu para parar a batalha
    if (!heroi.estaVivo()) {
        console.log(`${heroi.nome} foi derrotado!`);
        break;
    }
}