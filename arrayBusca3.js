var nome = [], email = [], tel = [];
var resp ="s";

for(i=0; resp=="s"; i++){
  nome[i] = prompt ("Digite o nome da " + (i + 1) + "ª pessoa");
  email[i] = prompt ("Digite o email da " + (i + 1) + "ª pessoa");
  tel[i] = prompt ("Digite o telefone da " + (i + 1) + "ª pessoa");
  console.log("\n");
  resp = prompt ("Deseja continuar - s ou n: ");
  console.log("\n");
}

alert ("Essas são as pessoas cadastradas no nosso sistema \n");
for (i=0; nome.length > i; i++){
alert ("O(A) sr(a) " + nome [i]+ " possui o telefone: " + tel [i] + " e email: " + email[i] + "\n")
}