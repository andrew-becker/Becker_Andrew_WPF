/* Name: Andy Becker
   Date: 6/11/2013
   Assignment: Expressions: Industry
*/

/*In my current job we support the iOS users and have over 45000 iOS devices deployed in the field.  When ordering devices and scanners that attach to the iPhones we have to know the average number of devies received each day, and the percentage of those devices that need to be replaced, and not just restored and reconfigured.  This program will allow the user to specify what device they are inputting the information for, the number received for each day, and the number that failed for each day.  It will output the results.*/

//Variables
var deviceName; //String for the user to input the device Name
var numReceived[]; //Array for the number of devices received each day
var numReceivedBroken[]; //Array for the number of devices received that are broken
var count = 0; //Counter to move through the Array
var numDays; //Number of days of information the user will be inputting, user will set this value
var avgReceived; //Average number of devices received
var percentBroken; //Percentage of devices that are broken and will need to be replaced