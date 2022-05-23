type User = {
  name: string;
  lastName: string;
  birthday: string;
  age?: number; //? define um campo opcional
}

const gabriel: User = {
  name: 'gabriel',
  lastName: 'ramos',
  birthday: '29/01/1996'
}

//Union Types |
type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: LogLevel){
  console.log(`[${level}] - ${message}`)
}

logMessage('Uma mensagem info', 'error');
logMessage('Uma mensagem info', 'info');
logMessage('Uma mensagem info', 'debug');

//Intersection Types &
type About = {
  bio?: string;
  interests: string[];
}

type Profile = User & About;
const userWithProfile: Profile = {
  name: 'gabriel',
  lastName: 'ramos',
  birthday: '29/01/1996',
  // bio: 'Hello',
  interests: ['gatos', 'música', 'fotografia']
}
