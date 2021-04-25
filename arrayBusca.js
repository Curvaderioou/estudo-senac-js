var idade = [10, 19, 9, 28, 25, 5, 2, 46, 36, 14];
var achou = "n";

for (i=0; achou=="n" || i==10; i++){
  if (idade[i] == 46){
  achou = "s";
  }
}
if (i==10) {
  alert ("Não consta o cadastro dessa idade");
} else {
  alert ("A idade 46 está cadastrada na posição " + i);
}