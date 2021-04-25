var num, chute;

num = Math.floor (Math.random() * 10);

do {
  chute = prompt ("digite seu número de 0 a 9: ");
} while (chute < 0 || chute > 9);

for (var i = 1; chute != num ; i++){
  do {
chute = prompt ("digite outro número de 0 a 9: ");
} while (chute < 0 || chute > 9);
} 

alert ("Parabéns, você acertou na " + i + " tentativa");

