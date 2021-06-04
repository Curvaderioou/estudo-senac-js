var anoNascimento;
var anoAtual = 2021;
var idade = anoAtual - anoNascimento;

do {
  anoNascimento = parseInt(prompt("Digite o seu ano de nascimento: "))
  var idade = anoAtual - anoNascimento;
} while (!isNaN(idade) == false);

if (idade < 65 && idade > 18){
console.log(`Você está apto a votar, você tem ${idade} anos`)
} else {
console.log(`Você não está apto a votar, você tem ${idade} anos`)
}


