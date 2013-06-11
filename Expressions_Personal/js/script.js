/* Name: Andy Becker
   Date: 6/10/2013
   Assignment: Expressions_Personal
*/

/*This program will prompt the user to input their monthly wage, monthly bill payments, and the percentage of the leftover amount they plan to save.  It will output the amount leftover after bills, amount saved, and amount left for spending.*/

//Variables
var monthlyWage; //Variable for the user's monthly wage
var monthlyBills; //Variable for the user's monthly bills
var percentToSave; //Variable for the percentage the user wishes to save
var amtAfterBills; //Variable to store the amount the user has left after paying bills
var amtAfterSaving; //Variable to store the amount the user will have left after saving money
var amtSaved; //Variable to store the amount the user is saving

//Input
monthlyWage = prompt("Enter your monthly wages. \nEx. 2250.76"); //Prompts the user for input
monthlyBills = prompt("Enter your monthly bills. \nEx. 1278.99"); //Prompts the user for input
percentToSave = prompt("Enter the percentage you wish to save. \nEx: If you wish to save 15% you would enter 15."); //Prompts the user to input

//Calculations
amtAfterBills = monthlyWage - monthlyBills; //Subtracts the monthly bills from monthly wage to get the amount leftover after bills
amtSaved = amtAfterBills * (percentToSave / 100); //Divides percent to save by 100, then multiplies that by the amount leftover after bills to get the amount the user saves
amtAfterSaving = amtAfterBills - amtSaved; //Calculates the amount the user has after saving by subtracting the amount saved from the amout the user has after their bills

//Output
console.log("You make $" + monthlyWage + " each month.  After paying $" + monthlyBills + " towards bills, that leaves you with $" + amtAfterBills + ".  You chose to save " + percentToSave + "% of this amount.  You will be putting " + amtSaved + " into savings and will have " + amtAfterSaving + " left to spend for the month.");  //Outputs a concatenated string to explain to the user the results of their input.  Also displays what they input so the users can verify they input the correct information


