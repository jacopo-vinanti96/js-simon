// Dichiarzaione variabili globali
var numbers = [],
    waitingTime = 5;

// Dichiarazione funzione per generare un numero casuale
function genRandomNum( max, min ) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

//Dichiarazione funzione countdown
function countdownSeconds ( i ) {
  console.log(i);
  countdown = setInterval(function () {
    --i;
    if ( i > 0 ) {
      console.log(i);
    } else {
      console.log('tempo scaduto');
      clearInterval(countdown);
    }
  }, 1000);
}

// Creazione array di numeri da indovinare
for (var i = 0; i < 5; i++) {
  numbers.push(genRandomNum( 100, 1 ));
}

// Messaggio output
alert('Memorizza questi 5 numeri: ' + numbers);
//Console cowntdown
countdownSeconds(waitingTime);
//Si imposta un delay per la funzione
setTimeout( function () {
// Dichiarazione variabili locali
  var guessCount = 0,
      guessedNums = [],
      userNum,
      userArray = [];
// Ciclo per inserire il numero con controlli
  for (var i = 0; i < 5; i++) {
    userNum = 'NaN';
    while ( isNaN(userNum) ) {
      userNum = parseInt( prompt('Inserisci un ' + (i + 1) + '° numero') );
      if ( isNaN(userNum) ){
        alert('Il valore inserito non è un numero');
      }
      for (var j = 0; j < userArray.length; j++) {
        if ( userNum == userArray[j] ) {
          alert('Hai già inserito quel numero');
          userNum = 'NaN';
        }
      }
      userArray[i] = userNum;
    }
    // Ciclo per salvare i numeri indovinati
    for (var j = 0; j < 5; j++) {
      if ( userNum == numbers[j] ) {
        guessCount += 1;
        guessedNums.push(userNum);
      }
    }
  }
  // Messaggi ouput
  if ( guessCount == 0) {
    alert('Mi dispiace, non hai indovinato nessun numero');
  } else {
    alert('Hai indovinato ' + guessCount + ' numeri\nNumeri indovinati: ' + guessedNums )
  }
}, waitingTime*1000);
