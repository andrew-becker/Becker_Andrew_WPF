/* Name: Andy Becker
   Date: 6/27/13
   Assignment: Functions - Industrial
*/

//This function calculates the size of a websites content area and sidebar area and outputs it to the user

//Variables
var websiteWidth, contentWidth, sidebarWidth;

//Input
websiteWidth = inputWebsiteWidth();

function inputWebsiteWidth()
{
	var width;
	var validInput = true;
	do{
	width = prompt("Enter the width of your website in pixels:");
	if(isNaN(width == true))
	{
		alert("You must input a number.  Example: 1024");
		validInput = false;
	}
	else if(width <= 0)
	{
		alert("Your number must be greater than 0")
		validInput = false;
	}
	else validInput = true;
	}while(validInput == false);
	return width;
}
