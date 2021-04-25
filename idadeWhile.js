let idade = prompt ("Insira a sua idade: ");
let cont = 1

while (idade<0 && cont<3){
idade = prompt ("Idade inválida. Insira novamente: ");
cont++
} if (cont<3){
alert ("Sua idade é " + idade)
} else {
  alert("Sua idade é inválida e você excedeu suas tentativas limites")
}