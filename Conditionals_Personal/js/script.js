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
	userDiameter = prompt("Enter the diameter of your Weber One-Touch grill. \nEx. If you have a 21 inch grill input 21.");
	if(userDiameter == "" || isNaN(userDiameter) == true)
	{
		alert("Invalid input.  Must input a number.");
		userDiameter = prompt("Enter the diameter of your Weber One-Touch grill. \nEx. If you have a 21 inch grill input 21.");
	}
	else if(userDiameter <= 0 || userDiameter > 40)
	{
		alert("Invalid input.  Number must be greater than 0 and less than 40");
		userDiameter = prompt("Enter the diameter of your Weber One-Touch grill. \nEx. If you have a 21 inch grill input 21.");
	}
	//console.log(userDiameter);
	typeOfCooking = prompt("Please choose a type of cooking. \nFor Indirect enter 1, for Direct enter 2");
	if(typeOfCooking != 1 && typeOfCooking != 2)
	{
		typeOfCooking = prompt("Invalid input. \nPlease enter either 1 indirect cooking or 2 for direct cooking");
	}

//Calculations
	if(typeOfCooking == 1)
	{
		typeOfCooking = "indirect";
		coefficient = 2;
	}
	else if(typeOfCooking == 2)
	{
		typeOfCooking = "direct";
		coefficient = 3.5;
	}
	numBriquettes = userDiameter * coefficient;

//Output
	console.log("When cooking over " + typeOfCooking + " heat you will need to use " + numBriquettes + " charcoal briquettes when cooking on your Weber " + userDiameter + "\" grill.");






