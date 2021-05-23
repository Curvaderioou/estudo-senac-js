var weight = parseInt(prompt("Digite o seu Peso: "));
var height = parseFloat(prompt("Digite a sua altura: "));
var gender = prompt("Digite o seu genero (M ou F): ");
var heightImc = height * height

var imc = parseFloat(weight / heightImc)

console.log(imc)

if (imc > 18.50 && imc < 24.99){
  console.log("Seu peso é Normal")
}
else if (imc > 25 && imc < 29.99){
  console.log("Você está acima do peso")
}
else if (imc > 30 && imc < 34.99){
  console.log ("Você é obeso nível 1")
}
else if (imc > 35 && imc < 39.99){
  console.log ("Você é obeso nível 2")
} 
else {
  console.log("Seu peso está anormal, procure um médico")
}