var idade = [], aux;

for (var i = 0; i < 5 ; i++){
  idade[i] = prompt ("Digite uma idade: ");
}

for (var fixa = 0; fixa < 4; fixa++){
  for (var resto = (fixa + 1); resto < 5; resto++){
    if (idade[fixa] > idade[resto]){
      aux = idade[fixa];
      idade[fixa] = idade [resto];
      idade[resto] = aux;
    }
  }
}

for (var i = 0; i < 5; i++){
  console.log(idade[i]);
}