var temperature = parseFloat(prompt("Digite a Temperatura em Celsius: "));

var conversion = parseFloat(((temperature * 9) / 5) + 32).toFixed(2);
console.log(`A temperatura em Fahrenheit é ${conversion}`)