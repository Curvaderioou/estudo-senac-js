var media = [[], [], [], [], []]
var situacao = [[], [], [], [], []]

media [0][0] = "Média";
media [1][0] = "Português";
media [2][0] = "Matemática";
media [3][0] = "Física";
media [4][0] = "Biologia";

situacao [0][0] = "Média";
situacao [1][0] = "Português";
situacao [2][0] = "Matemática";
situacao [3][0] = "Física";
situacao [4][0] = "Biologia";

 for (var linha=0 ; linha < media.length  ; linha++ ) {
  for (var coluna=1 ; coluna < 11 ; coluna++){
   if (linha==0){
     media [linha][coluna] = prompt("Insira seu nome: ");
     situacao [linha][coluna] = media [linha][coluna];
   } else {
     media [linha][coluna] = prompt (`Insira a média de ${media[linha][0]} do aluno  ${ media [0] [coluna]}`)};
    if (media [linha][coluna] < 6) {
      situacao [linha][coluna] = "Reprovado"
    } else {
      situacao [linha] [coluna] = "Aprovado"
    }
   }
  }

   
for (linha = 0 ; linha < situacao.length; linha ++) { 
  for  (coluna = 0 ; coluna < 11 ; coluna ++){
    alert (situacao [linha] [coluna]);}  {alert ( "\n" )}; 
  }


var nome = prompt ("Informa qual o aluno deseja pesquisar");
var controle = 0;

for (coluna = 0 ; coluna < 11 ; coluna++){
  if (nome == media[0][coluna]){
    alert (`O aluno ${media[0][coluna]} encontra-se na base de dados na posição ${coluna}`);
    controle = 1;
  }
}
if (controle ==0){
 alert (`O aluno ${nome} não está na base de dados`)
}