/* Name: Andy Becker
   Date: 6/20/2013
   Assignment: Conditionals - Wacky
*/

//This program will prompt the user to enter the par and their score for a 9 hole game of golf.  It will diplay their score and how much they are +/- par

//Variables
var parForCourse = 0; //Holds the par for this course
var playerScore = 0; //Holds the players score
var holeNumber = 1; //Counter to hold the hole holeNumber
var plusOrMinus; //Variable to hold the + or - symbol
var scoreDifference;//Variable to hold the difference between the players score and par for the course
var parForHole; //Variable to hold the par for the hole, needed for input validation
var playerScoreForHole; //Variable to hold the player's score for the hole, needed for input validation

//Input and calculations
alert("Welcome to the Golf Score Calculator");//Tells the user what the program will do

//Hole 1
parForHole = prompt("What is par for hole " + holeNumber);//Prompts the user to enter the par for the hole
if (parForHole < 3 || parForHole > 6 || isNaN(parForHole) == true)//Checks to see if user input is valid.  Accepted input is 3, 4, 5 or 6.
{
	parForHole = prompt("Invalid input. Valid numbers are 3, 4, 5, or 6. \nPlease enter the par for hole " + holeNumber);
}
playerScoreForHole = prompt("What was your score for hole " + holeNumber);//Prompts the user to enter their score for the hole
if (playerScoreForHole < 1 || isNaN(playerScoreForHole) == true)//Checks to see if the input is less than one or if it is not a number
{
	playerScoreForHole = prompt("Invalid input.  Number must be 1 or higher. \nPlease enter your score for hole " + holeNumber);//Informs the user their input is invalid, explains what the program is looking for, and allows them to re-enter their input
}
if(playerScoreForHole == 1)//Checks to see if the players score was a 1
{
	alert("Congratulations on the HOLE IN ONE!");//Alert to tell them they got a hole in one
}
parForCourse += parseInt(parForHole);//Adds the par for the current hole to the total par
playerScore += parseInt(playerScoreForHole);//Adds the score for the hole to the total score
scoreDifference = playerScore - parForCourse;//Calculates the players difference in score
if(scoreDifference < 0)//Checks to see if the score difference is less than 0
{
	plusOrMinus = "";//sets plusOrMinus to nothing
}
else
{
	plusOrMinus = "+";//sets plus or minus to a plus sign
}
console.log("You are currently " + plusOrMinus + scoreDifference + " with a score of " + playerScore + ".\n");//Outputs the players current standing compared to par and their current score
holeNumber++;//Increments the hole number by 1

//Hole 2
parForHole = prompt("What is par for hole " + holeNumber);//Prompts the user to enter the par for the hole
if (parForHole < 3 || parForHole > 6 || isNaN(parForHole) == true)//Checks to see if user input is valid.  Accepted input is 3, 4, 5 or 6.
{
	parForHole = prompt("Invalid input. Valid numbers are 3, 4, 5, or 6. \nPlease enter the par for hole " + holeNumber);
}
playerScoreForHole = prompt("What was your score for hole " + holeNumber);//Prompts the user to enter their score for the hole
if (playerScoreForHole < 1 || isNaN(playerScoreForHole) == true)//Checks to see if the input is less than one or if it is not a number
{
	playerScoreForHole = prompt("Invalid input.  Number must be 1 or higher. \nPlease enter your score for hole " + holeNumber);//Informs the user their input is invalid, explains what the program is looking for, and allows them to re-enter their input
}
if(playerScoreForHole == 1)//Checks to see if the players score was a 1
{
	alert("Congratulations on the HOLE IN ONE!");//Alert to tell them they got a hole in one
}
parForCourse += parseInt(parForHole);//Adds the par for the current hole to the total par
playerScore += parseInt(playerScoreForHole);//Adds the score for the hole to the total score
scoreDifference = playerScore - parForCourse;//Calculates the players difference in score
if(scoreDifference < 0)//Checks to see if the score difference is less than 0
{
	plusOrMinus = "";//sets plusOrMinus to nothing
}
else
{
	plusOrMinus = "+";//sets plus or minus to a plus sign
}
console.log("You are currently " + plusOrMinus + scoreDifference + " with a score of " + playerScore + ".\n");//Outputs the players current standing compared to par and their current score
holeNumber++;//Increments the hole number by 1

//Hole 3
parForHole = prompt("What is par for hole " + holeNumber);//Prompts the user to enter the par for the hole
if (parForHole < 3 || parForHole > 6 || isNaN(parForHole) == true)//Checks to see if user input is valid.  Accepted input is 3, 4, 5 or 6.
{
	parForHole = prompt("Invalid input. Valid numbers are 3, 4, 5, or 6. \nPlease enter the par for hole " + holeNumber);
}
playerScoreForHole = prompt("What was your score for hole " + holeNumber);//Prompts the user to enter their score for the hole
if (playerScoreForHole < 1 || isNaN(playerScoreForHole) == true)//Checks to see if the input is less than one or if it is not a number
{
	playerScoreForHole = prompt("Invalid input.  Number must be 1 or higher. \nPlease enter your score for hole " + holeNumber);//Informs the user their input is invalid, explains what the program is looking for, and allows them to re-enter their input
}
if(playerScoreForHole == 1)//Checks to see if the players score was a 1
{
	alert("Congratulations on the HOLE IN ONE!");//Alert to tell them they got a hole in one
}
parForCourse += parseInt(parForHole);//Adds the par for the current hole to the total par
playerScore += parseInt(playerScoreForHole);//Adds the score for the hole to the total score
scoreDifference = playerScore - parForCourse;//Calculates the players difference in score
if(scoreDifference < 0)//Checks to see if the score difference is less than 0
{
	plusOrMinus = "";//sets plusOrMinus to nothing
}
else
{
	plusOrMinus = "+";//sets plus or minus to a plus sign
}
console.log("You are currently " + plusOrMinus + scoreDifference + " with a score of " + playerScore + ".\n");//Outputs the players current standing compared to par and their current score
holeNumber++;//Increments the hole number by 1

//Hole 4
parForHole = prompt("What is par for hole " + holeNumber);//Prompts the user to enter the par for the hole
if (parForHole < 3 || parForHole > 6 || isNaN(parForHole) == true)//Checks to see if user input is valid.  Accepted input is 3, 4, 5 or 6.
{
	parForHole = prompt("Invalid input. Valid numbers are 3, 4, 5, or 6. \nPlease enter the par for hole " + holeNumber);
}
playerScoreForHole = prompt("What was your score for hole " + holeNumber);//Prompts the user to enter their score for the hole
if (playerScoreForHole < 1 || isNaN(playerScoreForHole) == true)//Checks to see if the input is less than one or if it is not a number
{
	playerScoreForHole = prompt("Invalid input.  Number must be 1 or higher. \nPlease enter your score for hole " + holeNumber);//Informs the user their input is invalid, explains what the program is looking for, and allows them to re-enter their input
}
if(playerScoreForHole == 1)//Checks to see if the players score was a 1
{
	alert("Congratulations on the HOLE IN ONE!");//Alert to tell them they got a hole in one
}
parForCourse += parseInt(parForHole);//Adds the par for the current hole to the total par
playerScore += parseInt(playerScoreForHole);//Adds the score for the hole to the total score
scoreDifference = playerScore - parForCourse;//Calculates the players difference in score
if(scoreDifference < 0)//Checks to see if the score difference is less than 0
{
	plusOrMinus = "";//sets plusOrMinus to nothing
}
else
{
	plusOrMinus = "+";//sets plus or minus to a plus sign
}
console.log("You are currently " + plusOrMinus + scoreDifference + " with a score of " + playerScore + ".\n");//Outputs the players current standing compared to par and their current score
holeNumber++;//Increments the hole number by 1

//Hole 5
parForHole = prompt("What is par for hole " + holeNumber);//Prompts the user to enter the par for the hole
if (parForHole < 3 || parForHole > 6 || isNaN(parForHole) == true)//Checks to see if user input is valid.  Accepted input is 3, 4, 5 or 6.
{
	parForHole = prompt("Invalid input. Valid numbers are 3, 4, 5, or 6. \nPlease enter the par for hole " + holeNumber);
}
playerScoreForHole = prompt("What was your score for hole " + holeNumber);//Prompts the user to enter their score for the hole
if (playerScoreForHole < 1 || isNaN(playerScoreForHole) == true)//Checks to see if the input is less than one or if it is not a number
{
	playerScoreForHole = prompt("Invalid input.  Number must be 1 or higher. \nPlease enter your score for hole " + holeNumber);//Informs the user their input is invalid, explains what the program is looking for, and allows them to re-enter their input
}
if(playerScoreForHole == 1)//Checks to see if the players score was a 1
{
	alert("Congratulations on the HOLE IN ONE!");//Alert to tell them they got a hole in one
}
parForCourse += parseInt(parForHole);//Adds the par for the current hole to the total par
playerScore += parseInt(playerScoreForHole);//Adds the score for the hole to the total score
scoreDifference = playerScore - parForCourse;//Calculates the players difference in score
if(scoreDifference < 0)//Checks to see if the score difference is less than 0
{
	plusOrMinus = "";//sets plusOrMinus to nothing
}
else
{
	plusOrMinus = "+";//sets plus or minus to a plus sign
}
console.log("You are currently " + plusOrMinus + scoreDifference + " with a score of " + playerScore + ".\n");//Outputs the players current standing compared to par and their current score
holeNumber++;//Increments the hole number by 1

//Hole 6
parForHole = prompt("What is par for hole " + holeNumber);//Prompts the user to enter the par for the hole
if (parForHole < 3 || parForHole > 6 || isNaN(parForHole) == true)//Checks to see if user input is valid.  Accepted input is 3, 4, 5 or 6.
{
	parForHole = prompt("Invalid input. Valid numbers are 3, 4, 5, or 6. \nPlease enter the par for hole " + holeNumber);
}
playerScoreForHole = prompt("What was your score for hole " + holeNumber);//Prompts the user to enter their score for the hole
if (playerScoreForHole < 1 || isNaN(playerScoreForHole) == true)//Checks to see if the input is less than one or if it is not a number
{
	playerScoreForHole = prompt("Invalid input.  Number must be 1 or higher. \nPlease enter your score for hole " + holeNumber);//Informs the user their input is invalid, explains what the program is looking for, and allows them to re-enter their input
}
if(playerScoreForHole == 1)//Checks to see if the players score was a 1
{
	alert("Congratulations on the HOLE IN ONE!");//Alert to tell them they got a hole in one
}
parForCourse += parseInt(parForHole);//Adds the par for the current hole to the total par
playerScore += parseInt(playerScoreForHole);//Adds the score for the hole to the total score
scoreDifference = playerScore - parForCourse;//Calculates the players difference in score
if(scoreDifference < 0)//Checks to see if the score difference is less than 0
{
	plusOrMinus = "";//sets plusOrMinus to nothing
}
else
{
	plusOrMinus = "+";//sets plus or minus to a plus sign
}
console.log("You are currently " + plusOrMinus + scoreDifference + " with a score of " + playerScore + ".\n");//Outputs the players current standing compared to par and their current score
holeNumber++;//Increments the hole number by 1

//Hole 7
parForHole = prompt("What is par for hole " + holeNumber);//Prompts the user to enter the par for the hole
if (parForHole < 3 || parForHole > 6 || isNaN(parForHole) == true)//Checks to see if user input is valid.  Accepted input is 3, 4, 5 or 6.
{
	parForHole = prompt("Invalid input. Valid numbers are 3, 4, 5, or 6. \nPlease enter the par for hole " + holeNumber);
}
playerScoreForHole = prompt("What was your score for hole " + holeNumber);//Prompts the user to enter their score for the hole
if (playerScoreForHole < 1 || isNaN(playerScoreForHole) == true)//Checks to see if the input is less than one or if it is not a number
{
	playerScoreForHole = prompt("Invalid input.  Number must be 1 or higher. \nPlease enter your score for hole " + holeNumber);//Informs the user their input is invalid, explains what the program is looking for, and allows them to re-enter their input
}
if(playerScoreForHole == 1)//Checks to see if the players score was a 1
{
	alert("Congratulations on the HOLE IN ONE!");//Alert to tell them they got a hole in one
}
parForCourse += parseInt(parForHole);//Adds the par for the current hole to the total par
playerScore += parseInt(playerScoreForHole);//Adds the score for the hole to the total score
scoreDifference = playerScore - parForCourse;//Calculates the players difference in score
if(scoreDifference < 0)//Checks to see if the score difference is less than 0
{
	plusOrMinus = "";//sets plusOrMinus to nothing
}
else
{
	plusOrMinus = "+";//sets plus or minus to a plus sign
}
console.log("You are currently " + plusOrMinus + scoreDifference + " with a score of " + playerScore + ".\n");//Outputs the players current standing compared to par and their current score
holeNumber++;//Increments the hole number by 1

//Hole 8
parForHole = prompt("What is par for hole " + holeNumber);//Prompts the user to enter the par for the hole
if (parForHole < 3 || parForHole > 6 || isNaN(parForHole) == true)//Checks to see if user input is valid.  Accepted input is 3, 4, 5 or 6.
{
	parForHole = prompt("Invalid input. Valid numbers are 3, 4, 5, or 6. \nPlease enter the par for hole " + holeNumber);
}
playerScoreForHole = prompt("What was your score for hole " + holeNumber);//Prompts the user to enter their score for the hole
if (playerScoreForHole < 1 || isNaN(playerScoreForHole) == true)//Checks to see if the input is less than one or if it is not a number
{
	playerScoreForHole = prompt("Invalid input.  Number must be 1 or higher. \nPlease enter your score for hole " + holeNumber);//Informs the user their input is invalid, explains what the program is looking for, and allows them to re-enter their input
}
if(playerScoreForHole == 1)//Checks to see if the players score was a 1
{
	alert("Congratulations on the HOLE IN ONE!");//Alert to tell them they got a hole in one
}
parForCourse += parseInt(parForHole);//Adds the par for the current hole to the total par
playerScore += parseInt(playerScoreForHole);//Adds the score for the hole to the total score
scoreDifference = playerScore - parForCourse;//Calculates the players difference in score
if(scoreDifference < 0)//Checks to see if the score difference is less than 0
{
	plusOrMinus = "";//sets plusOrMinus to nothing
}
else
{
	plusOrMinus = "+";//sets plus or minus to a plus sign
}
console.log("You are currently " + plusOrMinus + scoreDifference + " with a score of " + playerScore + ".\n");//Outputs the players current standing compared to par and their current score
holeNumber++;//Increments the hole number by 1

//Hole 9
parForHole = prompt("What is par for hole " + holeNumber);//Prompts the user to enter the par for the hole
if (parForHole < 3 || parForHole > 6 || isNaN(parForHole) == true)//Checks to see if user input is valid.  Accepted input is 3, 4, 5 or 6.
{
	parForHole = prompt("Invalid input. Valid numbers are 3, 4, 5, or 6. \nPlease enter the par for hole " + holeNumber);
}
playerScoreForHole = prompt("What was your score for hole " + holeNumber);//Prompts the user to enter their score for the hole
if (playerScoreForHole < 1 || isNaN(playerScoreForHole) == true)//Checks to see if the input is less than one or if it is not a number
{
	playerScoreForHole = prompt("Invalid input.  Number must be 1 or higher. \nPlease enter your score for hole " + holeNumber);//Informs the user their input is invalid, explains what the program is looking for, and allows them to re-enter their input
}
if(playerScoreForHole == 1)//Checks to see if the players score was a 1
{
	alert("Congratulations on the HOLE IN ONE!");//Alert to tell them they got a hole in one
}
parForCourse += parseInt(parForHole);//Adds the par for the current hole to the total par
playerScore += parseInt(playerScoreForHole);//Adds the score for the hole to the total score
scoreDifference = playerScore - parForCourse;//Calculates the players difference in score
if(scoreDifference < 0)//Checks to see if the score difference is less than 0
{
	plusOrMinus = "";//sets plusOrMinus to nothing
}
else
{
	plusOrMinus = "+";//sets plus or minus to a plus sign
}
console.log("You finshed this game " + plusOrMinus + scoreDifference + ", on a par " + parForCourse + " course, with a score of " + playerScore + ".\n");//Outputs the players current standing compared to par and their current score
