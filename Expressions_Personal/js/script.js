/* Name: Andy Becker
   Date: 6/10/2013
   Assignment: Expressions_Personal
*/

/*This program will prompt the user to input their monthly wage, monthly bill payments, and the percentage of the leftover amount they plan to save.  It will output the amount leftover after bills, amount saved, and amount left for spending.*/

//Variables
var monthlyWage = 0; //Variable for the user's monthly wage
var monthlyBills = 0; //Variable for the user's monthly bills
var percentToSave = 0; //Variable for the percentage the user 							wishes to save
var amtAfterBills = 0; //Variable to store the amount the user has left after paying bills
var amtAfterSaving = 0; //Variable to store the amount the user will have left after saving money
var amtSaved = 0; //Variable to store the amount the user is saving

//Input
monthlyWage = prompt("Enter your monthly wages. \nEx. 2250.76"); //Prompts the user for input
monthlyBills = prompt("Enter your monthly bills. \nEx. 1278.99"); //Prompts the user for input
percentToSave = prompt("Enter the percentage you wish to save. \nEx: If you wish to save 15% you would enter 15."); //Prompts the user to input

//Calculations
amtAfterBills = monthlyWage - monthlyBills; //Subtracts the monthly bills from monthly wage to get the amount leftover after bills
amtSaved = amtAfterBills * (percentToSave / 100); //Divides percent to save by 100, then multiplies that by the amount leftover after bills to get the amount the user saves
amtAfterSaving = amtAfterBills - amtSaved; //Calculates the amount the user has after saving by subtracting the amount saved from the amout the user has after their bills



