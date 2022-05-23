import getPersonType from "./function";
import AllPersons from "./object";

console.log(AllPersons);
console.log('Retorna genero feminino', getPersonType(AllPersons, 'Female'));
console.log('Retorna genero masculino', getPersonType(AllPersons, 'Male'));