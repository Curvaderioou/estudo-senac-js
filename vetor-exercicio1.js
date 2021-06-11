var numberArray = [];
var numberArray2 = [];
var soma = 0;
var soma2 = 0;
var somaIndice = 0;
var media;

for (var i=0 ; i<=9 ; i++ ){
  numberArray[i] = parseInt(prompt(`Digite o número ${i}`))
}
console.log(numberArray);

for (var i=0 ; i < numberArray.length ; i++ ){
soma += numberArray[i]; 
}
console.log(`A soma de todos elementos é ${soma}`);
console.log(`A média da soma de todos os elementos é ${soma / i}`);


for (var i=0 ; i<=9 ; i++ ){
  numberArray2[i] = parseInt(prompt(`Digite o número ${i}`))
}
console.log(numberArray2);

for ( i=0 ; i < numberArray2.length ; i++ ){
  soma2 += numberArray2[i];
}
console.log(`A soma de todos elementos é ${soma2}`);
console.log(`A média da soma de todos elementos é ${soma2 / i}`);


for (var i=0 ; i < numberArray.length ; i++ ){
somaIndice = numberArray[i] + numberArray2[i];
console.log(`A soma dos índices da array 1 com a 2, referente ao índice ${i} é: ${somaIndice}`); 
}
