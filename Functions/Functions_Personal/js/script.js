/* Name: Andy Becker
   Date: 6/27/13
   Assignment: Functions - Personal
*/

//This program will allow the user to input the size of a room in their house and will calculate how much carpet they will need.  The user can also input the cost of carpet and installation fees and the program will give them a final cost.


//variables
	var calcCost = function(width, length, costPerSqFt)
	{
		var totalCost;
		totalCost = parseFloat(width) * parseFloat(length) * parseFloat(costPerSqFt);
		return totalCost;
	}
	var roomWidth = new Array();
	var roomLength = new Array();
	var carpetCost;
	var fees;
	var costForRoom = new Array();
	var inputCheck;
	var nameRoom = new Array();
	var numRooms;
	var totalCostOfCarpet = 0;

//input
	do
	{
		numRooms = prompt("Enter the number of rooms you will\nneed to buy carpet for.");
		inputCheck = inputValidation(numRooms);
		if (inputCheck == 0)
		{
			alert("Invalid input!.\nInput must be a number larger than 0.");
		}
	}while(inputCheck == 0);
	
	for(var i=0; i < numRooms; i++)
	{
		nameRoom[i] = prompt("Enter Name");
		do
		{
			roomWidth[i] = prompt("Enter the width of the room in feet");
			inputCheck = inputValidation(roomWidth[i]);
			if (inputCheck == 0)
			{
				alert("Invalid input!.\nInput must be a number larger than 0.");
			}
		}while(inputCheck == 0);
		do
		{
			roomLength[i] = prompt("Enter the length of the room in feet");
			inputCheck = inputValidation(roomLength[i]);
			if (inputCheck == 0)
			{
				alert("Invalid input!.\nInput must be a number larger than 0.");
			}
		}while(inputCheck == 0);
	}
	
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

	for(i=0; i < numRooms; i++)
	{
		costForRoom[i] = calcCost(roomWidth[i], roomLength[i], carpetCost);
		totalCostOfCarpet += costForRoom[i];
		outputForCarpet(nameRoom[i], costForRoom[i]);
	}

(numRooms == 1) ? console.log("The cost for this room is $" + (parseFloat(totalCostOfCarpet) + parseFloat(fees))) : console.log("The total cost for all " + numRooms + " rooms including installation is $" + (parseFloat(totalCostOfCarpet) + parseFloat(fees)));


//functions
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

function outputForCarpet(roomName, roomCost)
{
	console.log(roomName + ":\nCost for carpet: $" + roomCost + "\n");
}