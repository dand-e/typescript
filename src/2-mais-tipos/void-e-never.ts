// Void
function a() {

}

function b(): void{

}

function principal(){
  return 1234;
}

// Never para laços de repetiçao infinitos
// ou funções que disparam erros
function funcaoQueNuncaRetorna(): never{
  /* while(true){

  } */
  throw new Error('Olá')
}