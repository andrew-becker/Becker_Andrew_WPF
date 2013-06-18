/* Name: Andy Becker
   Date: 6/9/2013
   Assignment: Expression Worksheet:  Slice of Pie Pt 1
*/

//Calculate the number of slices of pizza each person at the party will get
var slicesPerPizza = 8;
var numPeople = 10;
var numPizza = 3;
var slicesPerPerson;

//multiply number of pizzas times number of slices then divide by the number of people
slicesPerPerson = slicesPerPizza * numPizza / numPeople;

//print out the slices per person
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");