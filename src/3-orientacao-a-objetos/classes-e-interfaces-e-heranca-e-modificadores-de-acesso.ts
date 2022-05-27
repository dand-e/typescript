// Classes e funções
class User1 {
  // Public torna a propriedade pública
  public name;
  public age; 
  constructor(name: string, age:number){ 
    this.name = name;
    this.age = age; 
  }
}

const pessoa1 = new User1('dan', 29)
console.log(pessoa1)

class Player extends User1{
  game: string;
  constructor(name: string, age:number , game:string){
    super(name, age);

    this.game = game;
  }
  dizerOJogoAtual(){
    return `Estou jogando, no momento ${this.game}`
  }
  // Static
  static queHorasSao(){
    return Date();
  }
}

const jogador = new Player ('Anna', 25, 'Red Dead Redemption 2');
console.log(jogador.dizerOJogoAtual())
console.log(Player.queHorasSao())

class Jogo{
  protected nome;
  constructor (nome: string){
    this.nome = nome;
  }

  dizerNome(){
    return `O nome do jogo é: ${this.nome}`;
  }
}

const ghost = new Jogo('Ghost od Tsushima');
// Private impede que ghost seja alterado fora da class Jogo
// ghost.nome = 'The Sim'
console.log(ghost);

class JogoComDescricao extends Jogo{
  private descricao;
  constructor (nome: string, descricao: string){
    super(nome);

    this.descricao = descricao;
  }
  dizerNomeComDescricao(){
    // Enquanto nome for private e uma parametro de class Jogo, 
    // não pode ser acessada fora da class, por isso existe o protected
    return `O nome do jogo é: ${this.nome}`
  }
}

// Public, protected, private
// public: acessível de forma geral, dentro e fora da classe
// private: é acessível apenas dentro da classe onde foi criado
// protected: é acessível apenas dentro da classe e subclasses onde o campo foi criado


// Interface
//Ao redeclarar haverá união com a primeira declaração, de forma implicita
interface IJogoComDescricao{
  // nome: string;
  descricao: string;
  dizerNomeComDescricao(): string;
}

//Implements
class JogoDescricao extends Jogo implements IJogoComDescricao{
  public descricao;
  constructor (nome: string, descricao: string){
    super(nome);

    this.descricao = descricao;
  }
  dizerNomeComDescricao(){
    return `O nome do jogo é: ${this.nome}`
  }
}
// Type alias
//Ao redeclarar haverá união com a primeira declaração, de forma explicita usando o type intersection &
type TJogoComDescricao = {
  descricao: string;
  dizerNomeComDescricao(): string;
}

//Declaração de objeto
const obj: IJogoComDescricao = {
  // nome: 'nome',
  descricao: 'descrição do jogo',
  dizerNomeComDescricao(){
    return 'Red Dead Redemption 2, western muito legal'
  }
}