/* Name: Andy Becker
   Date: 6/11/2013
   Assignment: Expressions: Industry
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

//Input
deviceName = prompt("Please enter the name of the device. \nEx: iPhone");//Prompts user to input the name of the device
numDays = prompt("Please enter the number of days you have information for " + deviceName + ".");//Prompts the user to input the number of days they have device totals for that device
while(count <numDays)//Loops through the input prompts for the number of times the user has information for
{
	numReceived[count] = prompt("Enter the total number of " + deviceName + " recieved on day " + (count+1) + ".");//Prompts the user for input and assigns that information to the array
	numReceivedBroken[count] = prompt("Enter the number of broken " + deviceName + " recieved on day " + (count+1) + ".");//Prompts the user for input and assigns that information to the array
	count++;//increments the counter by 1
}

//Calculations
/*Need to add the amounts received and divide it by numDays.  Then need to total the amount broken.  Then divide the total broken by the total received to get the percent broken.*/

//Calculate the average received
count = 0;//reset count back to zero
while(count < numDays)//loops the number of days the user entered
{
	avgReceived += numReceived[count];//adds each of the numbers received to average received to get the total
}
avgReceived /= numDays;//divides the total received by the number of days to get the average

//Calculate the percentage of broken devices
count = 0;
while(count < numDays)
{

}




/*console.log(deviceName);
count = 0;
while(count < numDays){
	console.log(numReceived[count] + "  " + numReceivedBroken[count] + "\n");
	count++;
}*/

