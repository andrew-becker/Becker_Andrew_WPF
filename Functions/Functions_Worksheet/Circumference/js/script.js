/* Name: Andy Becker
   Date: 06/21/13
   Assignment: Functions Worksheet - Circumference
*/

//Calculate the circumference of a circle

//Variables
var radius = 6;
var circumference;

circumference = calcCircumference(radius);

//Output
console.log("The circumference of the circle is " + circumference);

function calcCircumference(r)
{
	return (2*3.14*r);
}
