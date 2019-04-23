// creo due variabili per il giocatore 1 e 2
var player1 = Math.floor(Math.random() *6)+1;
var player2 = Math.floor(Math.random() *6)+1;

// controllo se il lancio del giocatore 1 è maggiore, minore o uguale al lancio del giocatore 2

if (player1 > player2) {
  console.log ('player1:' + player1 + '  ' + 'player2:' + player2 + '  ' + 'hai vinto')
} else if (player1 == player2) {
  console.log ('player1:' + player1 + '  ' + 'player2:' + player2 + '  ' + 'pareggio')
} else {
  console.log ('player1:' + player1 + '  ' + 'player2:' + player2 + '  ' + 'hai perso')
}
