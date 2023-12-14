class Personagem {
    constructor(nome, classe) {
        this.nome = nome;
        this.classe = classe;
        this.atributos = {
            vida: '',
            mana: '',
            ataque: '',
            magia: ''

        };
        this.habilidades = {
            passiva: '',
            ativas: []
        };
    }

    atacar(alvo) {
        // Implemente a lógica de ataque
        console.log(`${this.nome} atacou ${alvo.nome}`);
    }

    usarHabilidade(habilidade, alvo) {
        // Implemente a lógica para usar habilidades ativas
        console.log(`${this.nome} usou ${habilidade} em ${alvo.nome}`);
    }
}

// Exemplo de uma subclasse para o Guerreiro HTML
class GuerreiroHTML extends Personagem {
    constructor(nome) {
        super(nome, 'Guerreiro HTML');
        this.habilidades.passiva = 'Passiva';
        this.habilidades.ativas = ['Hab1', 'Hab2', 'Hab3', 'Ult'];
    }
}


// Inicialize os personagens do jogador
var jogador = {
    guerreiroHTML: new GuerreiroHTML('Jogador'),
    guerreiroHTML2: new GuerreiroHTML('Jogador2')
    // Adicione outros personagens à medida que são desbloqueados
};


// Função para atualizar a interface do usuário com os ícones das habilidades
function atualizarInterfaceUsuario() {
    const heroContainer = document.getElementById('hero-container');
    heroContainer.innerHTML = '';

    for (const habilidade of jogador.guerreiroHTML.habilidades.ativas) {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.title = habilidade;
        heroContainer.appendChild(skillElement);
        //Ao clickar
        skillElement.onclick= function(){
            console.log("Usou "+habilidade)
        }  
    }

    for (let i = 0; i< Object.keys(jogador).length; i++){
        const personagemElement = document.createElement('div')
        personagemElement.className = 'htmlHero'
        heroContainer.appendChild(personagemElement)
    }
}

function realizarTurno() {
    // Lógica do turno, como atacar inimigo, verificar condições de vitória/derrota, etc.
    console.log('Turno realizado!');
}



// Inicializa a interface do usuário no carregamento da página
window.onload = function () {
    atualizarInterfaceUsuario();
};



