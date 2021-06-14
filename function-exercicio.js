function lados(a, b){
  var ladoA = a
  var ladoB = b
  var diametro = ladoA * ladoB
  console.log(diametro)
  if (ladoA === ladoB){
  console.log(`Se trata de um quadrado com o diametro ${diametro}`)
} else {
  console.log(`É um retângulo que tem o seu diametro ${diametro}`)
 }
}

