function rollDice() {
     var diceImages = [
         'kuvat/inverted-dice-1.png',
         'kuvat/inverted-dice-2.png',
         'kuvat/inverted-dice-3.png',
         'kuvat/inverted-dice-4.png',
         'kuvat/inverted-dice-5.png',
         'kuvat/inverted-dice-6.png'
     ];

   var randomNumber = Math.floor(Math.random() * 6);

   var diceImage = document.getElementById('diceImage');
   diceImage.src = diceImages[randomNumber];
   diceImage.alt = 'Dice ' + (randomNumber + 1);
 }
