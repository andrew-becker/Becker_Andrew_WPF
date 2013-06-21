/* Name: Andy Becker
   Date: 6/21/13
   Assignment: Functions Worksheet - Stung!
*/

//Calculate the number a bee stings it would take to kill an animal based on the weight

var animal = "deer";
var animalWeight = 85;
var stings;

stings = calcStings(animalWeight);

console.log("It would take " + stings + " bee stings to kill a " + animal);

//Function to calculate the number of stings needed based off of the weight of the animal

function calcStings(lbs)
{
	const stingsPerLb = 8.666666667;
	return stingsPerLb * lbs;
}
