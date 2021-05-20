var nota = parseFloat(prompt("Insira a Nota que você tirou: "));


if (nota < 0 || nota > 10){
  console.log("Sua Nota é Invalida:");
}
else if (nota >= 6){
  console.log("Você está aprovado!")
} else {
  console.log ("Você foi reprovado!")
}

console.log(typeof nota)

/*

poderia ser 

if (nota>0){
  if (nota>=6){
    console.log("Você foi aprovado!")
  } else {
    console.log("Você foi reprovado")
  }
} else {
 console.log("Este número é inválido")
}

*/