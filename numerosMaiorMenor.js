var major;
var minor;
var number;

 number = parseInt(prompt(`Digite um número: `)) 

 major = number
 minor = number

for (var i = 0; i < 9; i++){
  number = parseInt(prompt(`Digite um número: `)) 
  if (number > major){
    major = number
  }  else if( number < minor) {
    minor = number
  }
} 

console.log(`O maior número é o ${major}`);
console.log(`O menor número é o ${minor}`)
