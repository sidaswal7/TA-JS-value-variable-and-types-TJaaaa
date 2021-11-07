// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = Number(prompt("Enter the number:"));
if (num%2 == 0){
  alert("Number is even");
}
else alert("Number is odd");
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
if (num1 > num2){
  alert("The greater number is:"+(num1));
}
else alert("The greater number is:"+(num2));
// 3. Convert the above code using`?` terniary operator
let greaterNumber = num1 > num2 ? alert("The greater number is:"+ (num1)):alert("The greater number is:"+ (num2));
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("Enter the house name: ");
if (houseName == "stark"){
  alert(`"Winter is coming"`);
}
else if(houseName == "lannister") {
  alert(`"A Lannister always pays his debt"`);
}
else alert(`"All men must die"`);

// 5. Convert the above code using`?` terniary operator
let houseTitle = houseName == "stark" ? alert(`"Winter is coming"`)
: houseName == "lannister" ? alert(`"Lannister always pays his debt"`)
: alert(`"All men must die"`);
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthNUm = Number(prompt("Enter the month number: "));
switch(monthNUm){
  case 1:
    alert("January");
    break;
  case 2:
    alert("February");
    break;
  case 3:
    alert("March");
    break;
  case 4:
    alert("April");
    break;
  case 5:
    alert("May");
    break;
  case 6:
    alert("June");
    break;
  case 7:
    alert("July");
    break;
  default:
    alert("Enter correct number!");          
} 
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salaryUser = Number(prompt("Enter the salary: "));
let tax;
if (salaryUser <= 20000){
  tax = 10/100;
}
else if (salaryUser <= 40000){
  tax = 20/100;
}
else if (salaryUser > 50000){
  tax = 30/100;
}
let inHand = salaryUser - (salaryUser * tax);
alert(`In-hand amount is: `+ (inHand));
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("Enter the marks: "));
if (marks > 100){
  alert(`Marks can't be greater than 100`);
}
else if (marks > 80 && marks < 100){
  alert(`"Grade A"`);
}
else if (marks > 50 && marks < 80){
  alert(`"Grade B"`);
}
else if (marks >30 && marks < 50){
  alert(`"Grade C"`);
}
else if (marks > 0){
  alert(`"Grade D"`);
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like outisde?");
switch(weather){
  case "sunny":
    alert("Wear a T-shirt");
    break;
  case "rainy":
    alert(`Don't forget to take your raincoat`);
    break;
  case "hot":
    alert("Get a hanky");
    break;
  case "freezing":
    alert("Get your sweater on");
    break;
  default:
    alert("Not a valid input");         
}