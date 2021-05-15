var n1 = parseInt(n1);
var n2 = parseInt(n2)

function soma (n1, n2){
  var n1 = parseInt(n1);
  var n2 = parseInt(n2);
  var res = n1 + n2;
  return res;
}
function sub (n1, n2){
  var n1 = parseInt(n1);
  var n2 = parseInt(n2);
  var res = n1 - n2;
  return res;
}
function multi (n1, n2){
  var n1 = parseInt(n1);
  var n2 = parseInt(n2);
  var res = n1 * n2;
  return res;
}
function div (n1, n2){
  var n1 = parseInt(n1);
  var n2 = parseInt(n2);
  var res = n1 / n2;
  return res;
}

function num (){
  var n = prompt ("Digite o número")
  return n
}

function print (total){
  console.log(total)
}

var menu = prompt ("Escolha umas das Opções \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n")

if (menu == 1){
  var resSoma = soma(num(),num());
  print(resSoma)
}
if (menu == 2){
 var resSub = sub(num(),num());
 print(resSub)
}
if (menu == 3){
 var resMulti = multi(num(),num());
 print(resMulti)
}
if (menu == 4){
 var resDiv = div(num(),num())
 print(resDiv)
}
else{
console.log("Digite um número de 1 a 4")
}