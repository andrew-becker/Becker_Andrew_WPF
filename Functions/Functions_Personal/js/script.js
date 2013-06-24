/* Name: Andy Becker
   Date: 6/27/13
   Assignment: Functions - Personal
*/

//This program will allow the user to input the size of a room in their house and will calculate how much carpet they will need.  The user can also input the cost of carpet and installation fees and the program will give them a final cost.


//variables
	var calcCost = function(width, length, costPerSqFt, installFees)
	{
		var totalCost;
		totalCost = parseFloat(width) * parseFloat(length) * parseFloat(costPerSqFt) + parseFloat(installFees);
		return totalCost;
	}
	var roomWidth;
	var roomHeight;
	var carpetCost;
	var fees;
	var costForRoom;
	var inputCheck;

//input
	do
	{
		roomWidth = prompt("Enter the width of the room in feet");
		inputCheck = inputValidation(roomWidth);
		if (inputCheck == 0)
		{
			alert("Invalid input!.\nInput must be a number larger than 0.");
		}
	}while(inputCheck == 0);
	do
	{
		roomLength = prompt("Enter the length of the room in feet");
		inputCheck = inputValidation(roomLength);
		if (inputCheck == 0)
		{
			alert("Invalid input!.\nInput must be a number larger than 0.");
		}
	}while(inputCheck == 0);
	do
	{
		carpetCost = prompt("Enter the cost of the carpet per square feet.");
		inputCheck = inputValidation(carpetCost);
		if (inputCheck == 0)
		{
			alert("Invalid input!.\nInput must be a number larger than 0.");
		}
	}while(inputCheck == 0);
	do
	{
		fees = prompt("Enter the cost of installation.");
		inputCheck = inputValidation(fees);
		if (inputCheck == 0)
		{
			alert("Invalid input!.\nInput must be a number larger than 0.");
		}
	}while(inputCheck == 0);


//calculations
costForRoom = calcCost(roomWidth, roomLength, carpetCost, fees);
console.log(costForRoom);

//output

function inputValidation(value)
{
	if (value <= 0 || isNaN(value) == true)
	{
		return 0;
	}
	else
	{
		return 1;
	}
}