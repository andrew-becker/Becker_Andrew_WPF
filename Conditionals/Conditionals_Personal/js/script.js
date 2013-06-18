/* Name: Andy Becker
   Date: 6/20/13
   Assignment: Conditionals: Personal
*/

//This program allows the user to input the diameter of their weber charcoal grill and whether they are using indirect or direct heat.  This will calculate how many briquettes will be needed to cook the food.
//Direct cooking = multiply by 3.5
//Indirect cooking = multiply by 2

//Variables
var userDiameter; //diameter of the user's grill.  Will be input by user
var typeOfCooking; //type of cooking (direct or indirect).  Will be input by user
var coefficient; //will be used to multiply by the diameter of the grill to get the number of briquettes needed
var numBriquettes; //Will hold the result for the user

//Input
	userDiameter = prompt("Enter the diameter of your Weber One-Touch grill. \nEx. If you have a 21 inch grill input 21.");// Asks the user to input the diameter of their grill in inches
	if(userDiameter == "" || isNaN(userDiameter) == true) //input validation--makes sure the user didn't leave the field blank and that they entered a number and not a number
	{
		alert("Invalid input.  Must input a number."); //Alerts the user that they did not input a number
		userDiameter = prompt("Enter the diameter of your Weber One-Touch grill. \nEx. If you have a 21 inch grill input 21.");//Prompts the user to input the diameter of their grill again
	}
	else if(userDiameter <= 0 || userDiameter > 40)//input validation--verifies the input from the user is not less than 0, and also that it isn't greater than 40 since they don't make a grill over 40"
	{
		alert("Invalid input.  Number must be greater than 0 and less than 40");//Alert to user to let them know their input was invalid, and also explains why the input was invalid
		userDiameter = prompt("Enter the diameter of your Weber One-Touch grill. \nEx. If you have a 21 inch grill input 21.");//Prompts the user to input the diameter of their grill again
	}
	typeOfCooking = prompt("Please choose a type of cooking. \nFor Indirect enter 1, for Direct enter 2");//Prompts the user to enter the type of cooking they are going to be using, acceptable input is a number 1 or number 2
	if(typeOfCooking != 1 && typeOfCooking != 2)//The only input validation needed is to check if the input was not a 1 and it was not a 2
	{
		typeOfCooking = prompt("Invalid input. \nPlease enter either 1 indirect cooking or 2 for direct cooking");//Prompt to tell the user their input is invalid and explains what is needed from them so it is valid
	}

//Calculations
	if(typeOfCooking == 1)//Checks to see if type of cooking is valid
	{
		typeOfCooking = "indirect";//Sets variable to equal the string so it can be used in the output
		coefficient = 2;//Sets coefficient so it can be used in the calculation
	}
	else //runs if typeOfCooking is not 1
	{
		typeOfCooking = "direct";//Sets variable to equal the string so it can be used in the output
		coefficient = 3.5;//Sets coefficient so it can be used in the calculation
	}
	numBriquettes = userDiameter * coefficient;//multiplies the diameter of the grill by the coefficient to get the number of briquettes needed

//Output
	console.log("When cooking over " + typeOfCooking + " heat you will need to use " + parseInt(numBriquettes) + " charcoal briquettes when cooking on your Weber " + userDiameter + "\" grill.");//Output of information to the user through the console, also chose to pass numBriquettes as an int since you wouldn't use a fraction of a briquette






