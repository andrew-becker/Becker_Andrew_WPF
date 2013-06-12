/* Name: Andy Becker
   Date: 6/11/2013
   Assignment: Expressions - Industry
*/

/*In my current job we support the iOS users and have over 45000 iOS devices deployed in the field.  When ordering devices and scanners that attach to the iPhones we have to know the average number of devies received each day, and the fail rate of those devices.  This program will allow the user to specify what device they are inputting the information for, the number received for each day, and the number that failed for each day.  It will output the results.*/

//Variables
var deviceName; //String for the user to input the device Name
var numReceived = new Array(); //Array for the number of devices received each day
var numReceivedBroken = new Array(); //Array for the number of devices received that are broken
var count = 0; //Counter to move through the Array
var numDays; //Number of days of information the user will be inputting, user will set this value
var avgReceived = 0; //Average number of devices received
var percentBroken; //Percentage of devices that are broken and will need to be replaced
var totalReceived = 0; //Total number of devices recieved
var totalReceivedBroken = 0; //Total number of devices received broken

//Input
deviceName = prompt("Please enter the name of the device. \nEx: iPhone");//Prompts user to input the name of the device
numDays = prompt("Please enter the number of days you have information for " + deviceName + ".");//Prompts the user to input the number of days they have device totals for that device
while(count <numDays)//Loops through the input prompts for the number of times the user has information for
{
	numReceived[count] = prompt("Enter the total number of " + deviceName + " recieved on day " + (count+1) + ".");//Prompts the user for input and assigns that information to the array
	numReceivedBroken[count] = prompt("Enter the number of broken " + deviceName + " recieved on day " + (count+1) + ".");//Prompts the user for input and assigns that information to the array
	totalReceived += parseInt(numReceived[count],10); //Add the number recieved to get the total devices received
	totalReceivedBroken += parseInt(numReceivedBroken[count],10); //Add the number of devies received broken to get the total
	count++;//increments the counter by 1
}

//Calculations
avgReceived = totalReceived / numDays;//divides the total received by the number of days to get the average

percentBroken = totalReceivedBroken / totalReceived * 100;//Calculates the percentage of devices received that are broken

//Output
console.log("The average number of " + deviceName + " received each day over a span of " + numDays + " day(s) is "+ avgReceived + ". \nThese devices had a " + percentBroken + "% fail rate."); //Outputs the desired information to the user


