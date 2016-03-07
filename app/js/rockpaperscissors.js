
var gameRules = confirm("Let's play Rock, Paper or Scissors! Best out of 5.");
if (gameRules === false) {
  console.log("Okay no hard feeling. Goodbye friend.");
  playerWins += 5;
  computerWins += 5;
} else {
  console.log("Awesome, let's play Rock Paper Scissors");
  console.log("***NOTE*** If you ever want to stop playing, Just enter \"Stop\" and this game will stop.");
}
var userName = prompt("What is your name?");
var compare = function (computer1, player1) {


   if(computer1 === player1) {
   return "tie";
   }

   else if( computer1 === "paper" && player1 === "rock") {
   return "computer";
   }


   else if( computer1 === "rock" && player1 === "scissors") {
   return "computer";
   }


   else if ( computer1 === "scissors" && player1 === "paper") {
   return "computer";
   }


   else if ( computer1 === "rock" && player1 === "paper") {
   return "player";
   }


   else if (computer1 ==="scissors" && player1 === "rock") {
   return "player";
   }


   else if ( computer1 === "paper" && player1 === "scissors") {
   return "player";
   } else if (player1 === "stop") {
  return "stop";
}else if (player1 === "null") {
return "null";

} else if (player1 === "rock paper and scissors" || "rock paper scissors" ) {

  return "cheater";
}

 };


function getComputerChoice() {
  var computerChoice = Math.random();


    if (computerChoice <= 0.33) {
    computerChoice = "paper"
    }


    else if(computerChoice <= 0.66) {
    computerChoice = "rock"
    }


    else {
    computerChoice = "scissors"
    };

  return computerChoice;

}





var playToFive = function() {
  var playerWins = 0;
  var computerWins = 0;
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */

  while (playerWins < 5 && computerWins < 5) {
    var userChoice = prompt(userName + ", Do you pick rock, paper, scissors?").toLowerCase();
    var computerChoice = getComputerChoice();
    var winner = compare(computerChoice, userChoice);



var randomPick = Math.random();
var picks = userChoice;
switch (picks) {
    case "rock" :
    if ( randomPick <= 0.33 ) {
        console.log("***FUN FACT: Rocks have been used by humans for millions of years, from early tools and weapons through to various construction materials.***")
      } else if (randomPick <= 0.66) {
          console.log("***Fact 2 about rock.***")
      }else {
        console.log("***Fact 3 about rock.***")
      };
        break;

    case "paper":
    if ( randomPick <= 0.33 ) {
        console.log("***FUN FACT: Paper was invented by the Chinese about 105 A.D. and was kept a secret for quite a number of years.***")
        } else if (randomPick <= 0.66) {
          console.log("***Fact 2 about paper.***")
      }else {
        console.log("***Fact 3 about paper.***")
      };
        break;
    case "scissors" :
    if ( randomPick <= 0.33 ) {
        console.log("***FUN FACT: The term ‘scissors’ comes from the Latin word ‘cisoria’, meaning ‘cutting instrument’.***")
        } else if (randomPick <= 0.66) {
          console.log("***Fact 2 about scissors.***")
      }else {
        console.log("***Fact 3 about scissors.***")
      };
        break;
        default:
        console.log("i dont think i understand your answer " + userName + "?")
        }


 if (winner == "computer") {
  computerWins += 1;
  console.log("(" + computerChoice + " beats -> " + userChoice + ")" + "Computer wins: " + "Computer now has " + computerWins + " points. " + userName + " has: " + playerWins + " points.");
 } else if (winner == "player") {
playerWins += 1;
 console.log("(" + userChoice + " beats -> " + computerChoice + ")" + " " + userName + " wins!" + " You now have " + playerWins + " points." + " Computer has: " + computerWins + " points.");
 } else if (winner == "tie") {
console.log(userName + ", it seem like you and the computer both choose " + userChoice +" so it's a Tie.")

 }else if (winner == "null") {
  playerWins -= 1;
console.log('For not putting any answer at all ' + userName + ' i will be taking 1 point away. You now have ' + playerWins + ' points. And Computer still have: ' + computerWins + ' points.');
 }else if (winner == "stop") {
console.log("Thank you " + userName + ", for playing. Goodbye.");
playerWins += 5;
ComputerWins += 5;
 }else if (winner == "cheater") {
playerWins -= 5000;
console.log("Since you wanted to cheat a simple game of \"Rock, Paper and Scissors\" i have taken away 5,000 points. You now have " + playerWins + " points. And Computer has " + computerWins + " points. GOOD LUCK!");
 }else {
console.log("Please pick Rock, Paper or Scissors.");

 }
  }
if (playerWins >= 5 && computerWins < 5) {
  alert(userName + " you won!");
}else if (playerWins < 5 && computerWins >= 5) {
  alert(userName + " sorry you lost. ");
};
  return [playerWins, computerWins];
}

playToFive();
