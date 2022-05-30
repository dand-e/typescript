//13
let x: [string, number];

x = ["10", 10]; //array:1
//x = [10, "10"]; //array:2
//x = ["10", "10"]; //array:3

//16
function print(){
  enum Fruta { MACA = 1, BANANA, PERA,
  }
  let fruta: string = Fruta[2]; 
  console.log(fruta);
}
  
print();

let text:string = "1234";
console.log(text.substring(2));

//18
/*function sum(one:number, two?:number) { 
  let result = one + two;
  if(two==0) result = one+one;
  return result ;
}

let result = sum(2); 
console.log(result);*/