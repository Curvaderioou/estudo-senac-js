var valor;

valor = parseInt(prompt("Digite o Valor: "));

if (valor >= 100){
  console.log (`Notas de 100: ${Math.floor(valor/100)}`)
  valor = valor%100
}
if (valor >= 50) {
  console.log (`Notas de 50: ${Math.floor(valor/50)}`)
  valor = valor%50
}
if (valor >= 20) {
  console.log (`Notas de 20: ${Math.floor(valor/20)}`)
  valor = valor%20
}
if (valor >= 10) {
  console.log (`Notas de 10: ${Math.floor(valor/10)}`)
  valor = valor%10
}
if (valor >= 5) {
  console.log (`Notas de 5: ${Math.floor(valor/5)}`)
  valor = valor%5
}
if (valor >= 2) {
  console.log (`Notas de 2: ${Math.floor(valor/2)}`)
  valor = valor%2
}
else {
  console.log(`Moeda de 1: ${Math.floor(valor)}`)
}
