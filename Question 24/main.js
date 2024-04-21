"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
const string1 = "Orange";
const string2 = "Pineapple";
console.log(string1 != string2);
console.log(string1 == string2);
const mixedCaseString = "Hello World";
console.log(mixedCaseString.toLowerCase() === "hello world");
console.log(mixedCaseString.toLowerCase() === "hello world");
const num1 = 8;
const num2 = 4;
console.log(num1 !== num2);
console.log(num1 === num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
const Condition1 = true;
const Condition2 = false;
console.log(Condition1 && Condition2);
console.log(Condition1 || Condition2);
const Fruits = ["Apple", "Orange", "Grapes", "Mango", "Banana"];
console.log(Fruits.includes("Apple"));
const fruits = ["Apple", "Orange", "Grapes", "Mango", "Banana"];
console.log(Fruits.includes("apple"));
