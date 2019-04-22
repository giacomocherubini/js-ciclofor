var richiesta_email = prompt('scrivi la tua email');

var nostre_email = ['giacomo@gmail.com', 'riccardo@gmail.com', 'francesco@gmail.com'];

var messaggio = 'la tua email non è stata trovata';

for (var i = 0; messaggio !== 'Ho trovato la tua mail, benvenuto' && i < nostre_email.length; i++) {


  if (nostre_email[i] === richiesta_email){

  messaggio = 'Ho trovato la tua mail, benvenuto';
  } else {

  }

}

alert(messaggio)
