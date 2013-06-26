/* Name: Andy Becker
   Date: 6/27/2013
   Assignment: Functions - Wacky
*/

//This program allows the user to enter the points possible and the points earned for each assignment.  It will calculate the final grade for the class and give them their letter grade and average.

var arrayIndex = 0;
var moreGrades = "NO";
var pointsEarned = new Array();
var pointsPossible = new Array();
var message;
var totalPointsEarned;
var totalPointsPossible;


alert("For this program you will enter the points earned \nfor an assignment and then on the next prompt \nenter the possible points for that grade");

do{
	if(moreGrades == "YES")
	{
		arrayIndex++;
	}
	pointsEarned[arrayIndex] = inputNum();
	pointsPossible[arrayIndex] = inputNum();
	moreGrades = inputYesNo();
}while(moreGrades == "YES");
//console.log(pointsEarned.length);


function inputNum(str)
{
	var num;
	num = prompt("Enter the points earned.");
	while(inputValidation(num)){
		{
			alert("Invalid input.  Input must be a number 0 or higher");
			num = prompt("Enter the points earned.");
		}
	}
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
