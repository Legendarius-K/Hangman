
window.addEventListener("load", function () { //I still don't know what this does, but it made the page load properly, so it stays =D

const wordBank = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto", "comet", "moon", "eclipse", "supernova", "star", "sun",];
const randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
const letterArray = randomWord.split("");
let wordUnderscore = Array(randomWord.length).fill("_");
let userLetter;
let lives;
let letterCounter = 0;
let reload = false;

const reloadPage = () => location.reload();

randomWord.length < 5 ? lives = 13 
    : randomWord.length < 7 ? lives = 15
    : lives = 17;

    
alert(`Welcome to SPACEMAN! \n \nThe spaceman is lost in outer space. Help him plot his course back to his solar system by finding a landmark to follow.`)
alert(`The word you are looking for is ${randomWord.length} letters long. \n ${wordUnderscore.join("  ")}`);

while (lives > 0) {

    let correct = false;
    
    do {
        userLetter = prompt(`Guess a letter! \n\n ${wordUnderscore.join("  ")} \n\n You have ${lives} lives left`);
        
        if (userLetter === null) {
            let cancelButton = prompt(`Do you really want to abandon the Spaceman?\n"OK" or "Cancel"?`)
            
            if (cancelButton === null) {
                continue;
            } else {
                alert(`Okay then, but you'll have to live with that, you monster.`)
                lives = 0;
                break;            
            }
        }
    } while (!/^[a-zA-Z]$/.test(userLetter)); 

    

    for (i = 0; i <= randomWord.length; i++) {
        
        if (userLetter.toLowerCase() === randomWord[i]) {
            wordUnderscore[i] = userLetter.toUpperCase();
            letterCounter++;
            correct = true;
        }    
    }

    if (correct) {
        alert(`CONGRATULATIONS! You guessed correctly! \n\n ${wordUnderscore.join("  ")}`);   
    } else {
        alert(`That was WRONG! You lose 1 life`);
        lives -= 1;
    }

    if (letterCounter === randomWord.length) {
        let goAgain = prompt(`GOOD JOOB! The spaceman found earth!\n\nDo you want to play again?\n"OK" or "Cancel"?`);
        
        if (goAgain === null) {
            alert(`Okay! Thanks for playing!`);
            break;
        } else {
            reload = true;
            break;
        } 
    } 

    if (lives === 0) {
        let tryAgain = prompt(`GAME OVER!\n\nDo you want to try again?\n"OK" or "Cancel"?`);

        if (tryAgain === null) {
            alert(`Too bad! The spaceman will float around in the infinite void for eternity...`);
        } else {
            reload = true;
            break;
        }
    }
}

reload === false || reloadPage()

});