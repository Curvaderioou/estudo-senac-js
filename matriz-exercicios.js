
/*
matriz
var matriz = [[],[],[]]

for (var linha = 0; linha < 3 ; linha++){
  for (var coluna = 0 ; coluna < 3 ; coluna ++){
    matriz[linha][coluna] = linha * coluna
  }
}

console.log(matriz)
*/

/*
crie uma matriz 3x3, preencha com numeros inteiros e mostre o resultado e tambam a transposta desta matriz (trocando linha por coluna)]

var lista = [[],[],[]]

for (i = 0 ; i < 3 ; i++ ){
  for (j = 0 ; j < 3 ; j++){
    lista[i][j] = parseInt(Math.random()*50)
    console.log(lista[i][j])
  }
}
*/


//crie duas matrizes 3x3 (a e b) com numeros inteiros e apresenta a soma das matrizes //a subtração das matrizes

console.log(" LISTA 1 \n")

var lista2 = [[],[],[]]

for (i = 0 ; i < 3 ; i++ ){
  for (j = 0 ; j < 3 ; j++){
    lista2[i][j] = parseInt(Math.random()*50)
  }
}

for (i = 0 ; i < 3 ; i++ ){
  alert(lista2[i])
}

console.log("\n LISTA 2 \n")

var lista3 = [[],[],[]]

for (i = 0 ; i < 3 ; i++ ){
  for (j = 0 ; j < 3 ; j++){
    lista3[i][j] = parseInt(Math.random()*50)
  }
}

for (i = 0 ; i < 3 ; i++ ){
  alert(lista3[i])
}

console.log("\n LISTA SOMA \n")

var soma = [[],[],[]]

for (i = 0 ; i < 3 ; i++ ){
  for (j = 0 ; j < 3 ; j++){
  soma[i][j] = lista2[i][j] + lista3[i][j]
  }
}

for (i = 0 ; i < 3 ; i++ ){
  alert(soma[i])
}

console.log("\n LISTA SUBTRAÇÃO \n")

var subtracao = [[],[],[]]

for (i = 0 ; i < 3 ; i++ ){
  for (j = 0 ; j < 3 ; j++){
   subtracao[i][j] = lista2[i][j] - lista3[i][j]
  }
}

for (i = 0 ; i < 3 ; i++ ){
  alert(subtracao[i])
}

//transposta lista2 e lista 3

console.log("\n TRANSPOSTA DA LISTA 1 \n")


var transposta = [[],[],[]], transposta2 = [[],[],[]]

for (i=0 ; i < 3 ; i++){
  for (j=0 ; j < 3 ; j++){
    transposta[i][j] = lista2[j][i]
  }
}

for (i = 0 ; i < 3 ; i++ ){
  alert(transposta[i])
}


console.log("\n TRANSPOSTA DA LISTA 2 \n")

for (i=0 ; i < 3 ; i++){
  for (j=0 ; j < 3 ; j++){
    transposta2[i][j] = lista3[j][i]
  }
}

for (i = 0 ; i < 3 ; i++ ){
  alert(transposta2[i])
}
