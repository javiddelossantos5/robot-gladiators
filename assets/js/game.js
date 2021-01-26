var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Enemy Robot info//
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt(`Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.`);
     //if player choses to fight, then fight
     if(promptFight === "fight" ||  promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);

        if (enemyHealth <= 0) {
            window.alert (`${enemyName} has died!`)
        } else {
            window.alert(`${enemyName} still has ${enemyHealth} health left`);
        } 

        playerHealth = playerHealth - enemyAttack  ;
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining`);

        if (playerHealth <= 0) {
            window.alert(`${playerName} has died!`)
        } else {
            window.alert(`${playerName} still has ${playerHealth} health left.`)
        }
        } else if (promptFight === 'skip' || promptFight === 'SKIP') {
        // If player choses to skip
            var confirmSkip = window.confirm(`Are you sure you'd like to quit?`);
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(`${playerName} has chosen to skip the fight. Goodbye!`);
                //subtract money from playerMoney for the skipping
                playerMoney = playerMoney - 2;
            }
            // if no (false), ask question again by running fight() again
            else {
                fight();
            }
        } else {
            window.alert(`You need to choose a valid option. Try again!`)
        }
}
    

fight();