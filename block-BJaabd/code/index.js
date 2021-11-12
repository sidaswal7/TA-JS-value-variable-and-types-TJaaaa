// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let ageUser = +prompt("Enter the age");
if(ageUser < 4){
  alert("Hey kiddo! Can you walk?");
}else if (ageUser>=4 && ageUser<=11){
  alert("Your are too young to participate");
}else if (ageUser >= 12 && ageUser<=55){
  alert("You can participate");
} else{
  alert("You are too old to participate");
}
// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
let n = +prompt("Enter a positive integer");
let str = "H";
while(n>0){
  str = str+"e";
  n -=1;
}
str = str+ "llo";
alert(str);


/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
let naturalNum = +prompt("Enter the number");
let sum = 0;
while(naturalNum>0){
  sum = sum+ naturalNum;
  naturalNum-=1;
}
alert("The sum is:" + sum);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
let numValue = +prompt("Enter a number: ");
switch(numValue){
  case 1:
    alert("ONE");
    break;
  case 2:
    alert("TWO");
    break;
  case 3:
    alert("THREE");
    break;
  case 4:
    alert("FOUR");
    break;
  case 5:
    alert("FIVE");
    break;
  case 6:
    alert("SIX");
    break;
  case 7:
    alert("SEVEN");
    break;
  case 8:
    alert("EIGHT");
    break;
  case 9:
    alert("NINE");
    break;
  default:
    alert("Please try again");                  
}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

let marks = +prompt("Enter your marks: ");
switch(true){
  case marks > 90:
    alert("Your Grade is AA");
    break;
  case marks > 80 && marks<=90:
    alert("Your Grade is AB");
    break;
  case marks > 70 && marks<=80:
    alert("Your Grade is BB");
    break;
  case marks > 60 && marks<=70:
    alert("Your Grade is BC");
    break;
  case marks > 50 && marks<=60:
    alert("Your Grade is CC");
    break;
  case marks > 40 && marks<=50:
    alert("Your Grade is CD");
    break;  
  case marks > 30 && marks<=40:
    alert("Your Grade is DD");
    break;   
  case marks <= 30:
    alert("Your grade is FF");
    break;
  default:
    alert("Marks entered are invalid");     
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
let numA = +prompt("Enter first number");
let numB = +prompt("Enter second number");
if (numA > numB){
  alert("Larger number is " + numA);
}else {
  alert("Larger number is " + numB);
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
let firstNum = +prompt("Enter the first number");
let secNum = +prompt("Enter the second number");
let thirdNum = +prompt("Enter the third number");
let product = firstNum*secNum*thirdNum;
if(product>0){
  alert("Sign is +");
}else{
  alert("Sign is -");
}

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

let fnum = +prompt("Enter first number");
let snum = +prompt("Enter second number");
let operation = prompt("Enter the operation");
switch(operation){
  case ("Add"):
    alert("Sum is:"+ " "+ (fnum + snum));
    break;
  case ("Sub"):
    alert("Subtraction is:"+ " "+ (fnum - snum));
    break;  
  case ("Mul"):
    alert("Product is:"+ " "+ (fnum * snum));
    break;   
  case ("Div"):
    alert("Division is:"+ " "+ (fnum/snum));
    break;   
  default:
    alert("Invalid Input");  
}
