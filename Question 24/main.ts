// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

const string1: string = "Orange";
const string2: string = "Pineapple";
console.log(string1 != string2);
console.log(string1 == string2);


const mixedCaseString: string = "Hello World"
console.log(mixedCaseString.toLowerCase() === "hello world")
console.log(mixedCaseString.toLowerCase() === "hello world")

const num1: number = 8
const num2: number = 4
console.log(num1 !== num2);
console.log(num1 === num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

const Condition1: boolean = true;
const Condition2: boolean = false;

console.log(Condition1 && Condition2);
console.log(Condition1 || Condition2);

const Fruits: string[] = ["Apple", "Orange","Grapes", "Mango", "Banana"]
console.log(Fruits.includes("Apple"))

const fruits: string[] = ["Apple", "Orange","Grapes", "Mango", "Banana"]
console.log(Fruits.includes("apple"))





