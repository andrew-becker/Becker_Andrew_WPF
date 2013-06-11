/* Name: Andy Becker
   Date: 6/11/2013
   Assignment: Expressions: Industry
*/

/*In my current job we support the iOS users and have over 45000 iOS devices deployed in the field.  When ordering devices and scanners that attach to the iPhones we have to know the average number of devies received each day, and the percentage of those devices that need to be replaced, and not just restored and reconfigured.  This program will allow the user to specify what device they are inputting the information for, the number received for each day, and the number that failed for each day.  It will output the results.*/

//Variables
var deviceName; //String for the user to input the device Name
var numReceived = new Array(); //Array for the number of devices received each day
var numReceivedBroken = new Array(); //Array for the number of devices received that are broken
var count = 0; //Counter to move through the Array
var numDays; //Number of days of information the user will be inputting, user will set this value
var avgReceived; //Average number of devices received
var percentBroken; //Percentage of devices that are broken and will need to be replaced

//Input
deviceName = prompt("Please enter the name of the device. \nEx: iPhone");//Prompts user to input the name of the device
numDays = prompt("Please enter the number of days you have information for " + deviceName + ".");//Prompts the user to input the number of days they have device totals for that device
while(count <numDays)//Loops through the input prompts for the number of times the user has information for
{
	numReceived[count] = prompt("Enter the total number of " + deviceName + " recieved on day " + (count+1) + ".");//Prompts the user for input and assigns that information to the array
	numReceivedBroken[count] = prompt("Enter the number of broken " + deviceName + " recieved on day " + (count+1) + ".");//Prompts the user for input and assigns that information to the array
	count++;//increments the counter by 1
}
