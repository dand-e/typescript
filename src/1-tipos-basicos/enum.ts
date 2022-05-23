enum permissoes {
  admin = 'ADMIN',
  editor = 'EDITOR',
  comum = 'COMUM'
}

enum cores {
  red,
  black
}

const usuario = {
  nivel: permissoes.admin
}

const cor = {
  cor: cores.red
}

console.log(usuario)
console.log(cor)