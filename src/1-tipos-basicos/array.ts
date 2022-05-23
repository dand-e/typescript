let gatos: string[] = [
  'Rudolphina',
  'Will',
  'Cookies',
  'Dendê'
]

gatos.push('11');

function exibeGatos(gatos: string[]){
  return `Os gatos são: ${gatos.join(', ')}`
}

console.log(exibeGatos(gatos));