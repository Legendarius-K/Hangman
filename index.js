let wordBank = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto", "comet", "moon", "eclipse", "orbit", "supernova", "star", "sun",];

const randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log('randomWord: ', randomWord);



letterArray = randomWord.split("");
console.log('randomWordArray: ', letterArray);

let wordUnderscore = Array(randomWord.length).fill("_");
console.log('wordUnderscore: ', wordUnderscore);

alert(`The word you are looking for is ${randomWord.length} letters long. \n ${wordUnderscore.join("  ")}`);

let lives = 15;


while (lives > 0) {

    let correct = false;
    let userGuess = prompt(`Guess a letter! \n ${wordUnderscore.join("  ")} \n You have ${lives} lives left`)

    for (i = 0; i <= randomWord.length; i++) {
        

        if (userGuess === randomWord[i]) {
            wordUnderscore[i] = userGuess;
            correct = true;
            if (correct === true) {
                alert(`CONGRATUALTIONS! You guessed correctly! \n ${wordUnderscore.join("  ")}`);
                break;
            }

        // } else {
        //     alert(`That was WRONG! You lose 1 life`);
        //     lives -= 1;
        //     break;
        // }
    }
}

if (lives === 0) {
    alert(`GAME OVER`)
}











// let

// for (i = 15; i <= 15; i--) {
//     let userLetter = prompt("Guess a letter!") 
        
//         for (j = 0; j <= letterArray.length; j++) {
//             if (userLetter === letterArray[0] || userLetter === letterArray[1] || userLetter === letterArray[2] || userLetter === letterArray[3] || userLetter === letterArray[4] || userLetter === letterArray[5]) {
//                 alert("Congrats motherfucker! You nailed letter number " + (j+1));
//                 letterArray -+ userLetter;
//                 break;
//             } else {
//                 alert("That letter is not part of the word!");
//                 break;
//             }
//         }
        
// }        

// console.log(userLetter)














