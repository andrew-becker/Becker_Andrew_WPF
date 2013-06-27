/* Name: Andy Becker
   Date: 6/27/2013
   Assignment: Functions - Wacky
*/

//This program allows the user to enter the points possible and the points earned for each assignment.  It will calculate the final grade for the class and give them their letter grade and average.  This program assumes grades are not weighted

var arrayIndex = 0;//sets counter to 0
var moreGrades = "NO";//initializes variable to hold user input for if they have more grades to enter to "NO"
var pointsEarned = new Array();//array to hold the points earned for each grade
var pointsPossible = new Array();//array to hold the points possible for each grade
var gradeLetter;//holds the letter grade, a+, a, b+...etc
var gradePercent;//holds the percentage for the user's grade


alert("For this program you will enter the points earned \nfor an assignment and then on the next prompt \nenter the possible points for that grade");//alert to inform the user what is expected from them in this program

do{//do while to take input from the user
	pointsEarned[pointsEarned.length] = inputNum("Enter the points earned for an assignment.");//passes an input statement to the inputNum function, then sets the input equal to the array using the array length as the index....this array holds the points earned for each assignment
	pointsPossible[pointsPossible.length] = inputNum("Enter the points possible for the same assignment.");//passes an input statement to the inputNum function, then sets the input equal to the array using the array length as the index...this array holds the points possible for each assignment
	//moreGrades = inputYesNo();
}while(inputYesNo() == "YES");

gradePercent = calcGradePercent(pointsEarned, pointsPossible, pointsEarned.length);
gradeLetter = findGradeLetter(gradePercent);

if(gradeLetter == "A" || gradeLetter == "A+")
{
	console.log("You earned an " + gradeLetter + " for this class with a " + parseInt(gradePercent) + "%.");
}
else
{
	console.log("You earned a " + gradeLetter + " for this class with a " + parseInt(gradePercent) + "%.");
}



function calcGradePercent(earned, possible, arrayLength)
{
	var finalPercentage = 0;
	var gradePercentage = new Array();
	for(i=0; i < arrayLength; i++)
	{
		gradePercentage[i] = parseFloat(earned[i]) / parseFloat(possible[i]) * 100;
		finalPercentage = parseFloat(gradePercentage[i]) + parseFloat(finalPercentage);
	}
	finalPercentage = parseFloat(finalPercentage) / parseInt(arrayLength);
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


