var idade = [];
var achou = "n";
var resp = "s";
var idade_procurar;

for (i = 0; resp == "s"; i++){
  idade [i] = prompt ("Digite a sua idade: ");
  resp = prompt ("Deseja continuar s / n? ");
}

idade_procurar = parseInt(prompt("Qual idade você quer procurar: "));

for (i=0 ; achou == "n" && idade.length > i; i++){
  if (idade [i] == idade_procurar){
    achou = "s"
  }
}

if (achou == "n") {
  alert ("Não consta o cadastro dessa idade");
} else {
  alert ("A idade " + idade_procurar + " está cadastrada na posição " +i)
}