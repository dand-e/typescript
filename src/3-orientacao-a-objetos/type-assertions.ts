//Type assertions

interface Jogo{
  name: string;
  description: string;
}

// enquanto não for colocado 'as Jogo' será entendido como void pelo {} e não aceitará declarações
//ao invés de 'as Jogo' pode ser usado '<Jogo> {}'
let jogo = {} as Jogo;
//let jogo = <Jogo>{};
jogo.name = 'nome';
jogo.description = 'descrição do jogo'