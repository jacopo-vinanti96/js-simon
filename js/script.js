var numbers = [];

function genRandomNum( max, min ) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

for (var i = 0; i < 5; i++) {
  numbers.push(genRandomNum( 100, 1 ));
}

alert('Memorizza questi 5 numeri: ' + numbers);

$(){
  
}
