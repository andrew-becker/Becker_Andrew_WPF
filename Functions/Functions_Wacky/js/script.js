/* Name: Andy Becker
   Date: 6/27/2013
   Assignment: Functions - Wacky
*/

//This program allows the user to enter the points possible and the points earned for each assignment.  It will calculate the final grade for the class and give them their letter grade and average.  This program assumes grades are not weighted

var pointsEarned = new Array();//array to hold the points earned for each grade
var pointsPossible = new Array();//array to hold the points possible for each grade
var gradeLetter;//holds the letter grade, a+, a, b+...etc
var gradePercent;//holds the percentage for the user's grade
var invalidNumMsg = "Invalid input.  Input must be a number 0 or higher.";//message to display if the user inputs an invalid number


alert("For this program you will enter the points earned \nfor an assignment and then on the next prompt \nenter the possible points for that grade");//alert to inform the user what is expected from them in this program

do{//do while to take input from the user
	pointsEarned[pointsEarned.length] = inputNum("Enter the points earned for an assignment.", invalidNumMsg);//passes an input statement to the inputNum function, then sets the input equal to the array using the array length as the index....this array holds the points earned for each assignment
	pointsPossible[pointsPossible.length] = inputNum("Enter the points possible for the same assignment.", invalidNumMsg);//passes an input statement to the inputNum function, then sets the input equal to the array using the array length as the index...this array holds the points possible for each assignment
}while(inputYesNo() == "YES");//checks to see if the function returns YES, if so the do while loop continues

gradePercent = calcGradePercent(pointsEarned, pointsPossible);//passes 2 values to the calcGradePercent function.  Passes the pointsEarned array, pointsPossible array.  This function will return the final percent grade for this class.
gradeLetter = findGradeLetter(gradePercent);//Passes the final grade percent to the findGradeLetter function, this function will return the letter grade for the class

if(gradeLetter == "A" || gradeLetter == "A+")//Checks to see if the grade letter is an A or A+, this is used for output formatting reasons only
{
	console.log("You earned an " + gradeLetter + " for this class with a " + parseInt(gradePercent) + "%.");//Output message for the user, includes both their grade letter and their percentage in the message.  The percentage is parsed as an integer since going to a decimal point isn't needed for the final grade.
}
else//If the user's grade is not an A or A+ the following message is displayed
{
	console.log("You earned a " + gradeLetter + " for this class with a " + parseInt(gradePercent) + "%.");//Output message for the user, includes both their grade letter and their percentage in the message.  The percentage is parsed as an integer since going to a decimal point isn't needed for the final grade.
}


function calcGradePercent(earned, possible)//Function to calculate a percentage when passed 2 arrays both holding the same amount of numbers.  This function will also work if passing only a single number and not an array
{
	var finalPercentage = 0;//variable to hold the final percentage for the grade(s).
	var gradePercentage = new Array(earned.length);//Array to hold the grade percentage
	for(i=0; i < earned.length; i++)//for loop that will loop through the number of grades passed to the function
	{
		gradePercentage[i] = parseFloat(earned[i]) / parseFloat(possible[i]) * 100;//calculates the grade percentage for each assignment
		finalPercentage = parseFloat(gradePercentage[i]) + parseFloat(finalPercentage);//adds all of the grade percentages to get a total amount
	}
	finalPercentage = parseFloat(finalPercentage) / parseInt(earned.length);//divides the total of all the grade percentages by the number of grades to get the average
	return finalPercentage;//returns the final percentage for the class
}


function inputNum(str, errorMsg)//This function allows the user to input information.  The 
{
	var num;//variable to hold the user input
	num = prompt(str);//displays prompt to user using parameters passed to function, sets input equal to the variable num
	while(inputValidation(num)){//passes the user input to the input validation function. Enters while loop if the input is invalid
		{
			alert(errorMsg);//Alert to the user.  Message is generated from what is passed to the function
			num = prompt(str);//displays prompt to user using parameters passed to function, sets input equal to the variable num
		}
	}
	return num;//returns the variable num which holds the number which was input by the user
}


function inputValidation(value)//This function validates the user input for number values
{
	if (value < 0 || isNaN(value) == true)//checks to see if the user's input is less than 0 or is not a number
	{
		return true;//returns true if the input is invalid
	}
	else
	{
		return false;//returns false if the input is valid
	}
}


function inputYesNo(){//This function takes user input, and returns it only if it equals yes or no
	var ans;//variable to hold the user input
	do{//do while to take the user input and validate the input also
		ans = prompt("Do you have more grades to enter?\nYes or No");//prompt for the user input, also informs the user what input is expected
		ans = ans.toUpperCase();//converts the user to uppercase to make it easier to validate
		if(ans != "YES" && ans != "NO")//checks to see if the input does not equal yes or no
		{
			alert("Invalid input.  Valid input is Yes or No.");//alert to the user if the input does not pass validation
		}
	}while(ans != "YES" && ans != "NO");//will exit the loop once the user input equals YES or NO
	return ans;//returns the user input
}


function findGradeLetter(gradePercent)//function takes a number as a parameter and uses it to determine the letter grade
{
	if(gradePercent >= 95)//checks if the grade is greater than or equal to 95
	{
		return "A+";//returns the letter grade A+
	}
	else if(gradePercent >= 90)//checks if the grade is greater than or equal to 90
	{
		return "A";//returns the letter grade A
	}
	else if(gradePercent >= 85)//checks if the grade is greater than or equal to 85
	{
		return "B+";//returns the letter grade B+
	}
	else if(gradePercent >= 80)//checks if the grade is greater than or equal to 80
	{
		return "B";//returns the letter grade B
	}
	else if(gradePercent >= 76)//checks if the grade is greater than or equal to 76
	{
		return "C+";//returns the letter grade C+
	}
	else if(gradePercent >= 73)//checks if the grade is greater than or equal to 73
	{
		return "C";//returns the letter grade C
	}
	else if(gradePercent >= 70)//checks if the grade is greater than or equal to 70
	{
		return "D";//returns the letter grade D
	}
	else//if the value doesn't match any of the preceeding if statements if will default to the final statement
	{
		return "F";//returns the letter grade F
	}
}