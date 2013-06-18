/* Name: Andy Becker
   Date: 6/9/2013
   Assignment: Expression Worksheet:  Slice of Pie Pt 2
*/

//Calculate the number of slices of sparky gets to eat
var slicesPerPizza = 8;
var numPeople = 10;
var numPizza = 3;
var slicesForSparky;


//multiply number of pizzas times number of slices then divide by the number of people
slicesForSparky = slicesPerPizza * numPizza % numPeople;

//print out the slices per person
console.log("Sparky got " + slicesForSparky + " slices of pizza.");