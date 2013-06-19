/* Name: Andy Becker
   Date: 6/20/13
   Assignment: Conditionals - Industry
*/

//This program will prompt the user to input 3 pieces of infomation to calculate the file size of an uncompressed image.  This can be useful to get a rough idea of how large the file for an image on a website could be.  This will multiply the length, width, and bitdepth of the image.  It will then divide that number by 8192 to give the answer in KB.

//Variables
var horizontalPixels;//User inputted, holds the number of horizontal pixels
var vertPixels;//User inputted, holds the number of vertical pixels
var bitDepth;//User inputted, holds the bit depth of the image
const kbConvert = 8192;//Will be used in the calculations to convert the file size to kilobytes
var fileSize;//holds the size (in KB) of the file, will be used in the output

//Input
horizontalPixels = prompt("Enter the number of horizontal pixels for the image.");//Prompts the user to input the number of horizontal pixels in their image
if (horizontalPixels == "" || horizontalPixels < 1 || isNaN(horizontalPixels) == true)//Verifies the user entered data, the data is 1 or greater, and that the user input was a number
{
	horizontalPixels = prompt("Invalid input! Input must be a number. \nValid numbers are 1 or greater.");//Informs the user their input was invalid, explains what the program is looking for in their input, and assigns that input to horizontalPixels
}
vertPixels = prompt("Enter the number of horizontal pixels for the image.");//Prompts the user to input the number of horizontal pixels in their image
if (vertPixels == "" || vertPixels < 1 || isNaN(vertPixels) == true)//Verifies the user entered data, the data is 1 or greater, and that the user input was a number
{
	vertPixels = prompt("Invalid input! Input must be a number. \nValid numbers are 1 or greater.");//Informs the user their input was invalid, explains what the program is looking for in their input, and assigns that input to vertPixels
}
bitDepth = prompt("Enter the bit depth for the image. \nValid numbers are 1, 2, 3, 4, 6, 8, 16, 24, or 32");//Prompts the user to enter the bit depth of their image and assigns it to bitDepth
if (bitDepth != "1" && bitDepth != "2" && bitDepth != "3" && bitDepth != "4" && bitDepth != "6" && bitDepth != "8" && bitDepth != "16" && bitDepth != "24" && bitDepth != "32")//Verifies that the variable bitDepth matches one of the accepted answers
{
	alert("Invalid Input");//Alerts the user that their input was invalid
	bitDepth = prompt("Enter the bit depth for the image. \nValid numbers are 1, 2, 3, 4, 6, 8, 16, 24, or 32");//Prompts the user to re-input their value
}




//Use ternary to output if the file size is too large or if it is ok

