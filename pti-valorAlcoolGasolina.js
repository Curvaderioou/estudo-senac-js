var vantagem, resp, continuar;
var valido = 0;

while(resp != false){
  
   var valorAlcool = (prompt(`Digite o valor da Álcool: `));
   var valorGasolina = (prompt(`Digite o valor da Gasolina: `)); 

  vantagem = parseFloat(valorAlcool) / parseFloat(valorGasolina)


  if (vantagem > 0.7){
    console.log(`A Gasolina é mais vantajosa!`)
  }
  else if (vantagem < 0.7){
    console.log(`O Álcool é mais vantajoso!`)
  }
  else {
    console.log("Tanto faz Álcool ou Gasolina!")
  }
  valido = 1

  while (valido == 1){
    continuar = prompt("Deseja fazer uma nova consulta? Responda com S ou N: ")

    if (continuar == "S" || continuar == "s"){
      resp = true
      valido = 2
    } else if(continuar == "N" || continuar == "n") {
      resp = false;
      valido = 2
      console.log("Boa viagem!")
    } else {
      valido = 1
      console.log("Resposta inválida")
    }
  } 
}