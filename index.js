let wordBank = ["dog", "car", "sea", "bye", "now", "bike", "food", "love", "hate", "dude", "where", "is", "my", "car"];

const randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log('randomWord: ', randomWord);

alert("The word you are looking for is " + randomWord.length + " letters long.")

letterArray = randomWord.split("");
console.log('randomWordArray: ', letterArray);

for (i = 15; i <= 15; i--) {
    let userLetter = prompt("Guess a letter!") 
        
        for (j = 0; j <= letterArray.length; j++) {
            if (userLetter === letterArray[j]) {
                alert("Congrats motherfucker! You nailed letter number " + (j+1));
                break;
            } else {
                alert("That letter is not part of the word!");
                break;
            }
        }
        
}        

