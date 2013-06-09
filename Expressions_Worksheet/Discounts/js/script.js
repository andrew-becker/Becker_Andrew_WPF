/* Name: Andy Becker
   Date: 6/9/2013
   Assignment: Expression Worksheet: Discounts
*/

//Calculate the discounted price of an item with and without sales tax
var origPrice = 174.99
var discountPercentage = 15;
var itemDescription = "19\" Monitor";
var salesTax = 7.25;
var discountedPrice;
var discountedPriceWithTax;

//multiply the item price with the discount, subtract the discount amout from the original price.  Then determine sales tax amount and add to discounted price

discountedPrice = origPrice - origPrice * (discountPercentage / 100);
discountedPriceWithTax = discountedPrice + discountedPrice * (salesTax / 100);

//print out the original price, the item, the discount percentage, the discounted price, and discounted price with sales tax
console.log("Your " + itemDescription + " was originally $" + origPrice + ", but after a " + discountPercentage + "% discount, it is now $" + 		discountedPrice + " without tax, and $" + discountedPriceWithTax + " with tax.");
