/* Name: Andy Becker
   Date: 6/13/2013
   Assignment: Expressions - Wacky
*/

/* I have always found it interesting when watching a show like Unwrapped and they talk about how far the number of whatever they create would reach, such as this could go from here to the moon and back.  For this assignment I decided to make a program that will take the name and the length of a product and also how many they make in a year and see if it could reach from my house to Full Sail.*/

//Variables
const distanceToFullSail = 33897600;//length, in inches, from Full Sail to my house
const inchPerMile = 63360; //number of inches in a mile
var nameOfItem; //variable for the name of the item
var lengthOfItem; //variable for the length of the item in inches
var numProduced; //variable for the number of the item produced each year
var result; //Variable to hold the result of true or false

//Input
nameOfItem = prompt("What is the name of the item? \nEx. Pencil");//Prompt for the user to input the name of the item
lengthOfItem = prompt("How long is the item, in inches? \nEx. 10");//Prompt for the user to input the length of the item
numProduced = prompt("How many " + nameOfItem + "are produced each year?");//Prompt for the user to input the number of the item produced each year

