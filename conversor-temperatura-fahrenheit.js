var temperature = parseFloat(prompt("Digite a Temperatura em Fahrenheit: "));

var conversion = parseFloat(((temperature - 32) *5 /9)).toFixed(2);
console.log(`A temperatura em Celsiu é ${conversion}`)