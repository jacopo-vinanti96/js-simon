var numbers = [];

function genRandomNum( max, min ) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

for (var i = 0; i < 5; i++) {
  numbers.push(genRandomNum( 100, 1 ));
}

alert('Memorizza questi 5 numeri: ' + numbers);

var j = 5;
countdown = setInterval(function () {
  if ( j > 0 ) {
    console.log(j);
  } else {
    console.log('tempo scaduto');
    clearInterval(countdown);
  }
  j--;
}, 1000);

setTimeout( function () {

  var guessCount = 0,
      guessedNums = [],
      userNum;

  for (var i = 0; i < 5; i++) {
    while ( isNaN(userNum) ) {
      userNum = parseInt( prompt('Inserisci un ' + i + '° numero') );
      if ( isNaN(userNum) ) {
        alert( userNum + ' non è un valore numerico');
      }
    }
    for (var i = 0; i < 5; i++) {
      if ( userNum == numbers[i] ) {
        guessCount += 1;
        guessedNums.push(userNum);
      }
    }
  }
  if ( guessCount == 0) {
    alert('Mi dispiace, non hai indovinato nessun numero');
  } else {
    alert('Hai indovinato ' + guessCount + ' numeri\nNumeri indovinati: ' + guessedNums )
  }
}, 5000);
