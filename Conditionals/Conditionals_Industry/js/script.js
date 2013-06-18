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
horizontalPixels = prompt("Enter the number of horizontal pixels for the image.");
if (horizontalPixels == "" || horizontalPixels < 1 || isNaN(horizontalPixels) == True)
{
	horizontalPixels = prompt("Invalid input! Input must be a number. \nValid numbers are 1 or greater.");
}



//Use isNaN() to output if the file size is too large or if it is ok

