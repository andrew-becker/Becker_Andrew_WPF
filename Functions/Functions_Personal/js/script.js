/* Name: Andy Becker
   Date: 6/27/13
   Assignment: Functions - Personal
*/

//This program will allow the user to input the size of a room in their house and will calculate how much carpet they will need.  The user can also input the cost of carpet and installation fees and the program will give them a final cost.


//variables
	var calcCost = function(width, length, costPerSqFt, installFees)
	{
		var totalCost;
		totalCost = width * length * costPerSqFt * installFees;
		return totalCost;
	}
	var roomWidth;
	var roomHeight;
	var carpetCost;
	var fees;
	var costForRoom;

//input
	//have a function for input validation that returns true or false....

//calculations


//output