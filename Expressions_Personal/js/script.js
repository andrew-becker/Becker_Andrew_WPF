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
monthlyWage = prompt("Enter your monthly wages");
monthlyBills = prompt("Enter your monthly bills");
percentToSave = prompt("Enter the percentage you wish to save. \nEx: If you wish to save 15% you would enter 15.");

