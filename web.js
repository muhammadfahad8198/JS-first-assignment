//chapter 1

// Question # 1
alert ("error! please enter a valid password");

alert ("welcome to js land!...\nhappy coding!.")


// Question # 2

alert ("welcome to js and")

alert ("happy coding..\n\n prevent this page from creating additional diaogues")

// Question # 3

//chapter 2 

//question 1

var username = ("");

//question 2

var myname = ("muhammad fahad");

//question 3

var message = ("hello world!..");

alert(message);

var studentname = ("muhammad fahad");

alert(studentname);

//question 4

var fullname = ("john doe");

alert(fullname);

var age = ("15 years old");

alert(age);

var certification = ("certified mobile application deveopment");

alert(certification);


//question 5

var food = ("pizza\npizz\npiz\npi\np");

alert(food);

//question 6

var email = ("abc@gmail.com");

alert("my email is " + email);

//question 7

var asmarterwaytolearnjavascript = ("i am trying to learn javascript from book a smarter way to learn javascript");

alert(asmarterwaytolearnjavascript);

// document.getElementById("demo").innerHTML

//question 9

var design = ("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");

alert(design);

//chapter 3

// // question 1

var birth = ("my birth year is 1999");

alert(birth);

//question 2

var visits = ("you have visited this site 20 times");

alert(visits);

//3 screenshot

var birthyear = 1999;
var textfirst = document.getElementById("birth_year").innerHTML;
var fulltext = textfirst + birthyear;
document.getElementById("birth_year").innerHTML = fulltext

var secondline = document.getElementById("data_type").innerHTML;
var fullsecondline = secondline + (typeof(birthyear));
console.log(fullsecondline)
document.getElementById('data_type').innerHTML = fullsecondline;

//question 4

var visitor = "john doe";
var product = "t-shirts";
var quantity = "5";

var firstpart = visitor + document.getElementById("first").innerHTML;
document.getElementById("first").innerHTML = firstpart

var productandquantity = quantity+ " " + product;
var secondpart = productandquantity + document.getElementById("second").innerHTML;

var fullline = firstpart+ ' ' + secondpart

document.getElementById("first").innerHTML = fullline
document.getElementById("second").innerHTML = ''

//chapter 4

//question 1

var variable1 = "variable 1", variable2 = "variable 2", variable3 = "variable 3";

alert(variable3);

//question 2

var firstVariable = "legal variable 1";
var second = "legal variable 2";
var _third = "legal variable 3";
var $fourthVariable = "legal variable 4";
var fifth_variable = "legal variable 5";

alert(firstVariable);
alert(second);
alert(_third); 
alert($fourthVariable);
alert(fifth_variable);

// 1stVariable
// user-name
// second variable
// @fahad
// break

//question 3


var rulesLine = "Rules for naming JS variables";
document.getElementById("rules").innerHTML = rulesLine;

var variable1 = " _first,";
var variable2 = " $secondVariable,"
var variable3 = " thirdVariable, "
var variable4 = " fourth_variable "
var variable5 = " $my_1stVariable."

var firstline = "Variable names can only contain";
document.getElementById("first").innerHTML = firstline;
var threevariables = variable1 + variable2 + variable3;
var firsthalf = firstline + threevariables;
document.getElementById("first").innerHTML = firsthalf;

var and = " and ";
document.getElementById("and").innerHTML = and;

var secondhalf = and + variable4;

var forExample = "for example";
document.getElementById("for_example").innerHTML = forExample;

var thirdhalf = forExample + variable5;

var fullLine = firsthalf + secondhalf + thirdhalf;

document.getElementById("first").innerHTML = fullLine;
document.getElementById("and").innerHTML = "";
document.getElementById("for_example").innerHTML = "";

var character = " sensitive";

var second = "variable names are case";
document.getElementById("second").innerHTML = second;

var secondline = second + character;
document.getElementById("second").innerHTML = secondline;

var another_character = "keywords";

var third = "Variable names should not be JS "
document.getElementById("third").innerHTML = third;

var thirdline = third + another_character;
document.getElementById("third").innerHTML = thirdline;