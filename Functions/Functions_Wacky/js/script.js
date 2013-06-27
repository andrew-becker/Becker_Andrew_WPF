/* Name: Andy Becker
   Date: 6/27/2013
   Assignment: Functions - Wacky
*/

//This program allows the user to enter the points possible and the points earned for each assignment.  It will calculate the final grade for the class and give them their letter grade and average.

var arrayIndex = 0;
var moreGrades = "NO";
var pointsEarned = new Array();
var pointsPossible = new Array();
var str;
var gradeLetter;
var gradePercent;


alert("For this program you will enter the points earned \nfor an assignment and then on the next prompt \nenter the possible points for that grade");

do{
	if(moreGrades == "YES")
	{
		arrayIndex++;
	}
	str = "Enter the points earned for an assignment.";
	pointsEarned[arrayIndex] = inputNum(str);
	str = "Enter the points possible for the same assignment.";
	pointsPossible[arrayIndex] = inputNum(str);
	moreGrades = inputYesNo();
}while(moreGrades == "YES");

gradePercent = calcGradePercent(pointsEarned, pointsPossible, pointsEarned.length);
gradeLetter = findGradeLetter(gradePercent);

if(gradeLetter == "A" || gradeLetter == "E")
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


