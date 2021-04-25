var senha, repete, s;

do {
  senha = prompt("Digite sua senha de 6 dígitos: ");
} while (senha.length != 6);
repete = prompt("Redigite sua senha");
while (repete != senha) {
 repete = prompt("A senha não é a mesma. Insira novamente a senha: ");
}
s = prompt("Pronto! Acessar sua conta entre com a senha");
for (var i = 1; senha != s && i < 3; i++) {
  console.log("A senha informada não confere. Insira novamente. Você tem mais " +(3 - i) +" tentativas",);
  s = prompt("Para acessar sua conta entre com sua senha");
} if (i < 3){
    console.log("Sua senha está correta! Você pode acessar sua conta.");
  } else {
    senha = 99;
    alert("Sua senha foi bloqueada, procure por seu gerente");
  }
  