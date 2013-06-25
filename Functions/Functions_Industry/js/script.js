/* Name: Andy Becker
   Date: 6/27/13
   Assignment: Functions - Industrial
*/

//This function calculates the size of a websites content area and sidebar area and outputs it to the user

//Variables
var websiteWidth, contentWidth, sidebarWidth;

//Input
websiteWidth = inputWebsiteWidth();

//Calculations
contentWidth = calcContentArea(websiteWidth);
sidebarWidth = calcSidebar(contentWidth, websiteWidth);

//Output
console.log("Your website is " + websiteWidth + " pixels wide.  The content area should be " + contentWidth + " pixels wide, and the sidebar area should be " + sidebarWidth + " pixels wide.");

//Functions
function calcContentArea(origSize)
{
	var content = parseInt((origSize / 1.618));
	return content;
}

function calcSidebar(contentArea, originalSize)
{
	var sidebar = originalSize - contentArea;
	return sidebar;
}

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
