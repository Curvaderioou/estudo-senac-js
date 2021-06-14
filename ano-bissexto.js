function ano(ano){
  var anoDigitado = ano
  var anoBissexto = anoDigitado % 4;
  if (anoBissexto === 0){
    console.log(`O ano ${anoDigitado} é bissexto`)
  } else {
    console.log(`O ano ${anoDigitado} não é bissexto`)
  }
}