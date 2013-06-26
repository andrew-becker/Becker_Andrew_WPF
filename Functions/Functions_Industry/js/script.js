/* Name: Andy Becker
   Date: 6/27/13
   Assignment: Functions - Industrial
*/

//This function calculates the size of a websites content area and sidebar area and outputs it to the user

//Variables
var websiteWidth, contentWidth, sidebarWidth;//variables to hold the total width of the website, the width of the content area, and the width of the sidebar

//Input
websiteWidth = inputWebsiteWidth();//sets the website width equal to the returned value from the input function

//Calculations
contentWidth = calcContentArea(websiteWidth);//passes the width of the website to a function to calculate the content area, returns the content area
sidebarWidth = calcSidebar(contentWidth, websiteWidth);//passes the total website width and the content width and returns the sidebar width

//Output
console.log("Your website is " + websiteWidth + " pixels wide.  The content area should be " + contentWidth + " pixels wide, and the sidebar area should be " + sidebarWidth + " pixels wide.");//Outputs the results of the calculations to the user through the console

//Functions
function calcContentArea(origSize)//calculates the content area of a website using the golden ratio
{
	var content = parseInt((origSize / 1.618));//divides the website width by 1.618 to calculate the width of the content area and rounds it to a whole number
	return content;//returns the width of the content
}

function calcSidebar(contentArea, originalSize)//calculates the width of the sidebar when given the total website width and the width of the content area
{
	var sidebar = originalSize - contentArea;//subtracts the content area from the total website size
	return sidebar;//returns the width of the sidebar
}

function inputWebsiteWidth()//takes user input and validates the input is a number greater than 0
{
	var width;//holds the user input
	var validInput = true;//boolean to hold whether the input is valid or not
	do{//do while to take in and validate the input
	width = prompt("Enter the width of your website in pixels:");//prompts the user for input, assigns it to the width variable
	if(isNaN(width) == true)//checks to see if the input is a number
	{
		alert("You must input a number.  Example: 1024");//if the input is not a number it will alert the user
		validInput = false;//sets valid input to false
	}
	else if(width <= 0)//checks to see if the input is less than or equal to 0
	{
		alert("Your number must be greater than 0")//alerts the user that their input was invalid
		validInput = false;//sets valid input to false
	}
	else validInput = true;//sets valid input to true since it passed validation checks
	}while(validInput == false);//will continue to loop while valid input is set to false
	return width;//returns the width after it passes all checks
}
