let precoArrozT1, precoArrozT2, precoFeijaoBranco, precoFeijaoPreto, precoLinguica, precoLentilha, resposta, valorTotal;

precoArrozT1 = prompt ("Digite o preço do arroz tipo 1: ");
precoArrozT2 = prompt ("Digite o preço do arroz tipo 2: ");
precoFeijaoBranco = prompt ("Digite o preço do feijão branco: ");
precoFeijaoPreto = prompt ("Digite o preço do feijão preto: ");
precoLinguica = prompt ("Digite o preço da linguiça: ");
precoLentilha = prompt ("Digite o preço da lentilha: ");

resposta = prompt ("Tem arroz do tipo 1? ");

if (resposta == "Sim") {
  precoArrozT1 = parseInt (precoArrozT1);
  precoFeijaoPreto = parseInt (precoFeijaoPreto);
  valorTotal = precoArrozT1 + (precoFeijaoPreto * 2);
} else {
  resposta = prompt ("Tem arroz do tipo2?");
  if (resposta == "Sim") {
  precoArrozT2 = parseInt (precoArrozT2);
  precoFeijaoBranco = parseInt (precoFeijaoBranco);
  valorTotal = (precoArrozT2 * 3) + precoFeijaoBranco;
  } else {
    precoLentilha = parseInt (precoLentilha);
    precoLinguica = parseInt (precoLinguica);
    valorTotal = precoLinguica + (precoLentilha *2);
    }
}
alert ("O preço total de sua Compra foi " + valorTotal);