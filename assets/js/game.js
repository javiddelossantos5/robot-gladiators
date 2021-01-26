var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Enemy Robot info//
var enemyNames = ["Roborto", "Amy Android", "Robo trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
    // Alert players that they are starting the round
    while(enemyHealth > 0 && playerHealth > 0) {
        
            var promptFight = window.prompt(`Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.`);

            if (promptFight === 'skip' || promptFight === 'SKIP') {
            // If player choses to skip
            var confirmSkip = window.confirm(`Are you sure you'd like to quit?`);
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(`${playerName} has chosen to skip the fight. Goodbye!`);
                //subtract money from playerMoney for the skipping
                playerMoney = playerMoney - 10;
                console.log(`${playerMoney} playerMoney`);
                break;
            } 
        }
    
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth -playerAttack;
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining`);
         
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert (`${enemyName} has died!`);


            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead
            break;
    
         } else {
            window.alert(`${enemyName} still has ${enemyHealth} health left`);
        } 

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining`);

        //check player's health
        if(playerHealth <= 0) {
            window.alert(`${playerName} has died!`);
            //leave while() loop since player is dead
            break;
        } else {
            window.alert(`${playerName} still has ${playerHealth} health left`);
        }
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    } else {
    window.alert('You have lost your robot in battle! Game Over!');
    }
};