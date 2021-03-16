var numbers = [];

function genRandomNum( max, min ) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

for (var i = 0; i < 5; i++) {
  numbers.push(genRandomNum( 100, 1 ));
}

alert('Memorizza questi 5 numeri: ' + numbers);

var k = 5;
console.log(k);
countdown = setInterval(function () {
  --k;
  if ( k > 0 ) {
    console.log(k);
  } else {
    console.log('tempo scaduto');
    clearInterval(countdown);
  }
}, 1000);

setTimeout( function () {

  var guessCount = 0,
      guessedNums = [],
      userNum;

  for (var i = 0; i < 5; i++) {
    userNum = ('NaN');
    while ( isNaN(userNum) ) {
      userNum = parseInt( prompt('Inserisci un ' + (i + 1) + '° numero') );
      if ( isNaN(userNum) ) {
        alert( userNum + ' non è un valore numerico');
      }
    }
    for (var j = 0; j < 5; j++) {
      if ( userNum == numbers[j] ) {
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
