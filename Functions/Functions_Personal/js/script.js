/* Name: Andy Becker
   Date: 6/27/13
   Assignment: Functions - Personal
*/

//This program will allow the user to input the size of a room in their house and will calculate how much carpet they will need.  The user can also input the cost of carpet and installation fees and the program will give them a final cost.


//variables
	var calcCost = function(width, length, costPerSqFt)//assigns this function to the variable calcCost, creates an anonymous functions
	{
		var totalCost = parseFloat(width) * parseFloat(length) * parseFloat(costPerSqFt);//creates the variable name total cost, multiplies width by length to get sq ft of the room, then multiplies that by the cost per square foot to get the total cost for the room
		return totalCost;//returns the cost of the carpet for the room
	}
	var totalCostOfCarpet = 0;//calculates the total cost of carpet for all rooms
	var carpetCost;//holds the value for the cost of the carpet per sq foot
	var fees;//holds the value for other fees, ie. installation
	var inputCheck;//holds a 1 or 0 for whether the input passed validation
	var numRooms;//holds the number of rooms in the house

//input
	do//do while loop for the user to enter the number of rooms in their house
	{
		numRooms = prompt("Enter the number of rooms you will\nneed to buy carpet for.");//prompt for the user to input the number of rooms
		inputCheck = inputValidation(numRooms);//passes their input to the function to validate their input, returns 1 or 0
		if (inputCheck == 0)//checks to see if the function returned a 0
		{
			alert("Invalid input!.\nInput must be a number larger than 0.");//if the function returned a 0 it will alert the user their input was invalid
		}
	}while(inputCheck == 0);//will continue to prompt the user for input while the function returns a zero

	var roomWidth = new Array(numRooms);//creates an array with length set to the number of rooms to hold the room widths
	var roomLength = new Array(numRooms);//creates an array with length set to the number of rooms to hold the room lengths
	var costForRoom = new Array(numRooms);//creates an array with length set to the number of rooms to hold the costs for each room
	var nameRoom = new Array(numRooms);//creates an array with length set to the number of rooms to hold the room names
	
	for(var i=0; i < numRooms; i++)//for loop to iterate through the arrays
	{
		nameRoom[i] = prompt("Enter the name of the room.\nEx. Master Bedroom");//prompts the user to input their name for the room.  No validation needed because this name can be anything the user decides on
		
		do//do while to accept input for the width of the room
		{
			roomWidth[i] = prompt("Enter the width of the room in feet");//Prompts the user to input the width of their room, assigns it to array
			inputCheck = inputValidation(roomWidth[i]);//passes the user's input to the input validation function, function returns 0 if the input does not pass validation
			if (inputCheck == 0)//checks to see if the function returned a 0
			{
				alert("Invalid input!.\nInput must be a number larger than 0.");//Alerts the user that their input was invalid
			}
		}while(inputCheck == 0);//continues to loop until the input is valid
		
		do//do while loop to accept input for the length of the room
		{
			roomLength[i] = prompt("Enter the length of the room in feet");//prompts the user to input the length of the room, assigns it to array roomLength
			inputCheck = inputValidation(roomLength[i]);//passes the user's input to the input validation function and assigns returned value to the input check variable
			if (inputCheck == 0)//checks to see if returned value is equal to 0
			{
				alert("Invalid input!.\nInput must be a number larger than 0.");//if returned value is a 0 it will alert the user that their input did not pass validation
			}
		}while(inputCheck == 0);//continues to loop until their input passes validation
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

//Calculations and Output
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