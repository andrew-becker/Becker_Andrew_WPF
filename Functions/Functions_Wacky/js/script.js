/* Name: Andy Becker
   Date: 6/27/2013
   Assignment: Functions - Wacky
*/

//This program allows the user to enter the points possible and the points earned for each assignment.  It will calculate the final grade for the class and give them their letter grade and average.  This program assumes grades are not weighted

var pointsEarned = new Array();//array to hold the points earned for each grade
var pointsPossible = new Array();//array to hold the points possible for each grade
var gradeLetter;//holds the letter grade, a+, a, b+...etc
var gradePercent;//holds the percentage for the user's grade


alert("For this program you will enter the points earned \nfor an assignment and then on the next prompt \nenter the possible points for that grade");//alert to inform the user what is expected from them in this program

do{//do while to take input from the user
	pointsEarned[pointsEarned.length] = inputNum("Enter the points earned for an assignment.");//passes an input statement to the inputNum function, then sets the input equal to the array using the array length as the index....this array holds the points earned for each assignment
	pointsPossible[pointsPossible.length] = inputNum("Enter the points possible for the same assignment.");//passes an input statement to the inputNum function, then sets the input equal to the array using the array length as the index...this array holds the points possible for each assignment
}while(inputYesNo() == "YES");//checks to see if the function returns YES, if so the do while loop continues

gradePercent = calcGradePercent(pointsEarned, pointsPossible);//passes 3 values to the calcGradePercent function.  Passes the pointsEarned array, pointsPossible array, and the length of these arrays.  This function will return the final percent grade for this class.
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
	var finalPercentage = 0;
	var gradePercentage = new Array(earned.length);
	for(i=0; i < earned.length; i++)
	{
		gradePercentage[i] = parseFloat(earned[i]) / parseFloat(possible[i]) * 100;
		finalPercentage = parseFloat(gradePercentage[i]) + parseFloat(finalPercentage);
	}
	finalPercentage = parseFloat(finalPercentage) / parseInt(earned.length);
	return finalPercentage;
}


function inputNum(str)
{
	var num;
	num = prompt(str);
	while(inputValidation(num)){
		{
			alert("Invalid input.  Input must be a number 0 or higher");
			num = prompt(str);
		}
	}
	return num;
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


function inputYesNo(){
	var ans;
	do{
		ans = prompt("Do you have more grades to enter?\nYes or No");
		ans = ans.toUpperCase();
		if(ans != "YES" && ans != "NO")
		{
			alert("Invalid input.  Valid input is Yes or No.");
		}
	}while(ans != "YES" && ans != "NO");
	return ans;
}


function findGradeLetter(gradePercent)
{
	if(gradePercent >= 95)
	{
		return "A+";
	}
	else if(gradePercent >= 90)
	{
		return "A";
	}
	else if(gradePercent >= 85)
	{
		return "B+";
	}
	else if(gradePercent >= 80)
	{
		return "B";
	}
	else if(gradePercent >= 76)
	{
		return "C+";
	}
	else if(gradePercent >= 73)
	{
		return "C";
	}
	else if(gradePercent >= 70)
	{
		return "D";
	}
	else
	{
		return "F";
	}
}


