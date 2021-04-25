let cont = 1;
let idade;

do {
  idade = prompt ("Insira sua idade ");
  cont ++;
  } while (idade<0 && cont<3);
  if (cont<3){
    console.log("Sua idade é: " + idade);
  }else {
    console.log("Idade inválida, tentativas excedidas");
  }