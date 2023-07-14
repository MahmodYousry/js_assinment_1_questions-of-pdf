var demo = document.getElementById("demo");
// Qestion 1

// var number = Number(window.prompt("Enter your number"));
// demo.innerHTML= number;
// console.log(number)

// Qestion 2

// var num =Number(window.prompt("enter a number divide by 3 or 4"))
// if(num % 3== 0 && num % 4== 0) {
//     demo.innerHTML = "yes";
// } else {
//      demo.innerHTML = "No";
// }

// Qestion 3

// var num1 = Number(window.prompt("enter first number"));
// var num2 = Number(window.prompt("enter second number"));

// if (num1 > num2) {
//   demo.innerHTML = num1;
//   console.log(num1);
// } else {
//   demo.innerHTML = num2;
//   console.log(num2);
// }

// Qestion 4

// var number = Number(window.prompt("Enter negative or positive value"));
// if (number < 0) {
//   demo.innerHTML = "Negative";
// } else if (number > 0) {
//   demo.innerHTML = "Positive";
// }

// Qestion 6

// var num = Number(window.prompt("enter even or odd number"));
// if (num % 2 == 0) {
//   demo.innerHTML = "even";
// } else {
//   demo.innerHTML = "odd";
// }

// Qestion 5

// num1 = Number(window.prompt("enter first number"));
// num2 = Number(window.prompt("enter second number"));
// num3 = Number(window.prompt("enter third number"));

// if (num1 > num2 && num1 > num3) {
//   console.log(num1);
//   demo.innerHTML = num1;
// } else if (num2 > num1 && num2 > num3) {
//   console.log(num2);
//   demo.innerHTML = num2;
// } else if (num3 > num1 && num3 > num2) {
//   console.log(num3);
//   demo.innerHTML = num3;
// } else if (num1 < num2 && num1 < num3) {
//   console.log(num1);
//   demo.innerHTML = num1;
// } else if (num2 < num1 && num2 < num3) {
//   console.log(num2);
//   demo.innerHTML = num2;
// } else if (num3 < num1 && num3 < num2) {
//   console.log(num3);
//   demo.innerHTML = num3;
// }

// Qestion 8

// var character = window.prompt("Enter character vowel or consontant");
// if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
//   demo.innerHTML = "vowel";
//   console.log("vowel");
// } else if ( character == "A" || character == "E" || character == "I" || character == "O" || character == "U" ) {
//     demo.innerHTML = "vowel";
//     console.log("vowel");
// } else {
//   demo.innerHTML = "Consonant";
//   console.log("Consonant");
// }

// Qestion 9

// var number = Number(window.prompt(" Enter integer numbers between 1 to that’s number"));
// for (var i = 1; i <= number; i++) {
//     console.log(i);
//     demo.innerHTML += i + "</br>";
// }

// Qestion 10
// var number =Number(window.prompt(" Enter a multiplication table up to 12"));
// for (var i = 1; i <= 12; i++) {
//     var product = number * i;
//     console.log(number + " * " + i + " = " + product);
//     demo.innerHTML += number + " * " + i + " = " + product + "</br>";
// }

// Qestion 11
// var number =Number(window.prompt("  insert number then print all even numbers between 1 to this number"));
// for (var i = 2; i <= number; i += 2) {
//     console.log(i);
//     demo.innerHTML += i + "</br>";
// }

// Qestion 12
// var firstNumber = Number(window.prompt("Enter the first number:"));
// var secondNumber =  Number(window.prompt("Enter the second number:"));
//     console.log(firstNumber ** secondNumber);
//     demo.innerHTML += (firstNumber ** secondNumber);

// Qestion 12

// Qwstion 14

// var num1 = Number(window.prompt("Enter a first Subject"));
// var num2 = Number(window.prompt("Enter a sec Subject"));
// var num3 = Number(window.prompt("Enter a 3rd Subject"));
// var num4 = Number(window.prompt("Enter a 4th Subject"));
// var num5 = Number(window.prompt("Enter a 5th Subject"));

// demo.innerHTML +=  "Total Marks = " + (num1+num2+num3+num4+num5)  +"</br>";
// demo.innerHTML +=  "Average = " + (num1+num2+num3+num4+num5) / 5  +"</br>";
// demo.innerHTML +=  "Percentage = " + ((num1+num2+num3+num4+num5)*100) /500  +"%</br>";

// var firstSubject= Number(window.prompt("Enter mark of first subject"));
// var secondSubject= Number(window.prompt("Enter mark of second subject"));
// var thirdubject= Number(window.prompt("Enter mark of third subject"));
// var forthSubject= Number(window.prompt("Enter mark of forth subject"));
// var fifthSubject= Number(window.prompt("Enter mark of fifth subject"));

// var total = 500;
// var totalAllMarks = firstSubject+secondSubject+thirdubject+forthSubject+fifthSubject;
// var percentage = (totalAllMarks /total)*100;

// if ( percentage >= 90 ) {
//     demo.innerHTML += "Grade " + "A", (percentage),("%");
//     console.log("Grade " +"A" ,(percentage),("%"));
// } else if (percentage >= 80 && percentage<90 ) {
//     demo.innerHTML += "Grade " + "B", (percentage),("%");
//     console.log("Grade " + "B" , (percentage),("%"));
// } else if (percentage >=70&& percentage<80) {
//     demo.innerHTML += "Grade " + "C", (percentage),("%");
//     console.log("Grade " + "C", (percentage),("%"));
// } else if (percentage >=60&& percentage<70) {
//     demo.innerHTML += "Grade " + "d", (percentage),("%");
//     console.log("Grade " + "D", (percentage),("%"));
// } else if (percentage >= 40&& percentage<60) {
//     demo.innerHTML += "Grade " + "e", (percentage),("%");
//     console.log("Grade " + "E", (percentage),("%"));
// } else {
//     demo.innerHTML += "Grade " + "f", (percentage),("%");
//     console.log("Grade " + "F", (percentage),("%"));
// }

// Qestion 13
// var month = Number(window.prompt("Enter a month number "));
// if (month == 2) {
//     demo.innerHTML += "month " + month + " = 28 or 29 days" + "</br>";
// } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//     demo.innerHTML += "month " + month + " = 30 days" + "</br>";
// } else if (
//     month == 1 ||
//     month == 3 ||
//     month == 5 ||
//     month == 7 ||
//     month == 8 ||
//     month == 10 ||
//     month == 12
// ) {
//     demo.innerHTML += "month " + month + " = 31 days" + "</br>";
// } else {
//     console.log("Invalid month number");
// }

// SWITCH CASE !!!!

// Qestion 15
// var month=Number(window.prompt("Enter a month number "));
// switch (month) {
//     case 2:
//       console.log("28 or 29 days");
//       demo.innerHTML += "28 or 29 days";
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       console.log("30 days");
//       demo.innerHTML += "30 days";
//       break;
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       console.log("31 days");
//       demo.innerHTML += "31 days";
//       break;
//     default:
//       console.log("Invalid month number");
//       demo.innerHTML += "Invalid month number";
//       break;
// }

// Qestion 16

// var character=window.prompt("Enter character vowel or consonant");
// switch(character){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'u':
//     case 'o':
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'U':
//     case 'O':
//         console.log("vowel");
//         demo.innerHTML += "vowel";
//         break;
//     default:
//         console.log("consonant");
//         demo.innerHTML += "consonant";
//         break;
// }

// Qestion 17

// var number1 = Number(prompt("Enter number1 :"));
// var number2 = Number(prompt("Enter number2 :"));
// switch (true) {
//     case (number1 > number2):
//         console.log(number1 +" is greater than "+ number2);
//         demo.innerHTML+= number1 +" is greater than "+ number2;
//     break;
//     case (number1 < number2):
//         console.log(number2 +" is greater than "+ number1);
//         demo.innerHTML+= number2 +" is greater than "+ number1;
//     break;
//     default:
//     console.log("Both numbers are equal");
//     break;
// }

// Qestion 18

// var number = Number(window.prompt("Enter a number is even or odd "));
// var res = number % 2;
// switch(res){
//     case  1:
//         console.log("the number is odd");
//         demo.innerHTML+= "the number is odd";
//         break;
//     case  0:
//         console.log("the number is even");
//         demo.innerHTML+= "the number is even";
//         break;
//     default:
//         console.log("invalid value");
// }


// Qestion 19

// var number = Number(window.prompt("Enter positive or negative or zero "));

// switch (true) {
//     case number > 0:
//         console.log("The number is positive.");
//         demo.innerHTML+= "The number is positive.";
//         break;
//     case number < 0:
//         console.log("The number is negative.");
//         demo.innerHTML+= "The number is negative.";
//         break;
//     case number === 0:
//         console.log("The number is zero.");
//         demo.innerHTML+= "The number is Zero.";
//         break;
//     default:
//         console.log("Invalid number.");
//         document.write("Invalid number.");
// }


// Qestion 20

// var num1 = parseFloat(prompt("Enter first number:"));
// var operator = prompt("Enter operator (+, -, *, /):");
// var num2 = parseFloat(prompt("Enter second number:"));

// switch (operator) {
//   case "+":
//     console.log(num1 + " + " + num2 + " = " + (num1 + num2));
//     demo.innerHTML += num1 + " + " + num2 + " = " + (num1 + num2);
//     break;
//   case "-":
//     console.log(num1 + " - " + num2 + " = " + (num1 - num2));
//     demo.innerHTML += num1 + " - " + num2 + " = " + (num1 - num2);
//     break;
//   case "*":
//     console.log(num1 + " * " + num2 + " = " + (num1 * num2));
//     demo.innerHTML += num1 + " * " + num2 + " = " + (num1 * num2);
//     break;
//   case "/":
//     if (num2 == 0) {
//       console.log("Cannot divide by zero");
//       demo.innerHTML += "Cannot divide by zero";
//     } else {
//       console.log(num1 + " / " + num2 + " = " + (num1 / num2));
//       demo.innerHTML += num1 + " / " + num2 + " = " + (num1 / num2);
//     }
//     break;
//   default:
//     console.log("Invalid operator");
//     break;
// }

