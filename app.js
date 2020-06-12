

                             //Chapter 1 Alerts

//Task-1

alert("greetings ... Welcome Here")

//Task-2

alert("Error! Please enter a valid password.")

//Task-3

alert("Welcome to JS Land...." + "\n" + "Happy Coding!")

//Task-4

alert("Welcome to JS Land")
alert("Happy Coding")

//Task-5

alert("Hello... I can run JS through my web browser's console")



                      //Chapter 2 Variable for Strings

//Task-1

var username="";

//Task-2

var myName = "Muhammad Faraz Qureshi"
alert(myName)

//Task-3

var message;
var message = "Hello World";
alert(message)

//Task-4

var Student;
var StudentName = "Jhone Doe"
alert(StudentName)
var StudentAge = "15 years old"
alert(StudentAge)
var StudentCourse = "Certified Mobile Application Development"
alert(StudentCourse)

//Task-5

var food = "PIZZA" + "\n" + "PIZZ" + "\n" + "PIZ" +  "\n" +"PI" + "\n" + "P";
alert(food)


//Task-6

var email;
var email = "example@example.com";
alert("My Email address is " + email)

//Task-7

var book;
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book)

//Task-8

var display;
var display = "Yah! I can write HTML content through JavaScript"
document.write(display)

//Task-9

var thing = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”"
alert(thing)
document.write(thing)


                       //Chapter 3 Variable For Numbers


//Task-1

var age = "I am 15 Years Old";
alert(age)


//Task-2

for(var i=1; i<=13; i++)
var message= "You have visited this site i times";
alert("You have visited this site " + i + " times")


//Task-3

var birth = "My birth year is 1990";
document.write(birth)


//Task-4

var VisitorName = "John Doe"
var ProductTitle = "T-shirt(s)"
var Quantity =  "5 "
document.write(VisitorName + " ordered " + Quantity + ProductTitle + " on XYZ Clothing store")


                 // Chapter 4 Variable Names : Legal & Illegal


//Task-1

var name = "Muhammad Faraz Qureshi";
var age = "28 years old";
var number = "0345-2508034";
alert("my name is " +name + " Age is " + age + " my contact number is "+ number)


//Task-2

var legal1 = "number";
var legal2 = "$";
var legal3 = "_";
var legal4 = "Uppercase letter (Lu)";
var legal5 = "Lowercase letter (Ll)";

var illegal1 = "break or boolean";
var illegal2 = "start with numeral";
var illegal3 = "";
var illegal4 = "";
var illegal5 = "";


//Task-3

var heading = "Rules for naming JS variables";
document.write("<b>" + heading + "</b>" + "<br> <br>")
document.write("Variable names can only contain numbers, $ , _ and . For example $my_1stVariable" + "<br>")
document.write("Variables must begin with a letter, $ or __. For example $name, _name or name" + "<br>")
document.write("Variable names are case sensitive" + "<br>")
document.write("Variable names should not be JS keywords" + "<br>")



                       //Chapter 5 Math Expressions


//Task-1

var a = 3;
var b = 5;
var c = a + b;
document.write("the sum of " + a + " and " + b + " is " + c)


//Task-2

var a = 3;
var b = 5;
var c = a - b;
document.write("the difference of " + a + " and " + b + " is " + c)

var a = 3;
var b = 5;
var c = a * b;
document.write("the product of " + a + " and " + b + " is " + c)


var a = 3;
var b = 5;
var c = a / b;
document.write("the div of " + a + " and " + b + " is " + c)


var a = 3;
var b = 5;
var c = a % b;
document.write("the modulus of " + a + " and " + b + " is " + c)

//Task-3

var value= 5;
document.write("Value after variable declaration is undefined " +"<br>")
document.write("Initial value: " + value+"<br>")
var value1=value + 1;
document.write(" Value after increment is : " + value1 +"<br>")
var value2 = value1 + 7;
document.write(" Value after addition is : " + value2 +"<br>")
var value3 = value2 - 1;
document.write(" Value after decrement is : " + value3 +"<br>")
value3 = value3 / 4;
document.write(" Value is " + value3 +"<br>")
value3 = value3 % 3;
document.write(" The remainder is " + value3)


//Task-4

var ticket = 600;
document.write("Total cost to buy 5 tickets to a movie is " + 5*ticket +"PKR")


//Task-5

var table = 5;
for (i=1; i<=10; i++){
document.write( table +"x"+i + "=" + table*i +"<br>" )
}


//Task-6

var C = 25;
var F = 70;
var C1 = (F-32)* 5/9;
var F1 = (C * 9/5) + 32;
document.write(C +" C is " + F1 +"F"+"<br>")
document.write(F +" F is " + C1 +"C")


//Task-7

var price1= 650 ;
document.write("Price of item 1 is " + price1 + "<br>")
var price2= 100 ;
document.write("Price of item 2 is " + price2 + "<br>")
var order1= 3 ; 
document.write("Quantity of item 1 is " + order1 + "<br>")
var order2= 7 ; 
document.write("Price of item 2 is " + order2 + "<br>")
var charges= 100; 
document.write("Shipping charges " + charges + "<br>")
var totalCost = (price1 * order1) + (price2 * order2) + charges;
document.write("Total cost of your order is " + totalCost) 


//Task-8

var marks = 980;
document.write("Total marks: " +marks +"<br>")
var obtained = 804;
document.write("Marks obtained: "+ obtained +"<br>")
var percent = (obtained/marks) * 100;
document.write("Percentage: "+percent +"%")


//Task-9

var $ = 104.80;
var riyal = 28
var rate = (10 * $) + (25 * riyal)
document.write("Total currency in PKR: " + rate)


//Task-10

var a = 5;
document.write(((a+5)*10)/2)


//Task-11

var current = 2020;
document.write("Current Year: " + current+"<br>" )
var birth = 1992;
document.write("Birth Year: " + birth+"<br>")
var age = current - birth
document.write("Your Age is: " + age)


//Task-12

var pi = 3.142;
var rad = 20;
document.write("Radius of a Circle: " + rad +"<br>")
var circumference = 2 * pi * rad;
document.write("The Circumference is: " + circumference +"<br>")
var area = pi * rad * rad;
document.write("The Area is: " + area +"<br>")


//Task-13

var snack = "COCOMO";
document.write("Favourite Snack: " + snack +"<br>")
var age = 28;
document.write("Current age: " + age +"<br>")
var max_age = 50;
document.write("Estimate Maximum Age: " + max_age +"<br>")
var estimate = 2;
document.write("Amount of snacks per day: " + estimate +"<br>")
var total = (max_age - age) * 2;
document.write("You will need " + total + " cocomo to last you until the ripe old age of "+ max_age)




                           //Chapter 6-9 Math Expressions


//Task-1

var a = 10;
document.write("Result:" + "<br>")
document.write("The value of a is : " + a + "<br>")

var a= ++a;
document.write("The value of ++a is : " + a + "<br>")
document.write("Now the value of a is : " + a + "<br>")


var a= a++;
document.write("The value of a++ is : " + a + "<br>")
document.write("Now the value of a is : 12 " + "<br>")

var a=--a;
document.write("The value of --a is : 11"  + "<br>")
document.write("Now the value of a is : 11"  + "<br>")


a= a--;
document.write("The value of a-- is : 11 "  + "<br>")
document.write("Now the value of a is : " + a + "<br>")



//Task-2

var a = 2;
document.write("a is: "+a+ "<br>")
var b = 1;
document.write("b is: "+b+ "<br>")
var result = --a - --b + ++b + b--;
document.write("result is: "+result+ "<br>")

// --a; 1
// --a - --b; 1 - 0 =1
// --a - --b + ++b; 1 - 0 + 1 = 2
// --a - --b + ++b +b--; 1 - 0 + 1 + 1= 3 


//Task-3

var name = prompt("whats your name");
alert("welcome " + name)


//Task-5

var j = prompt("Enter a number");
for(var i=1; i<=10; i++) 
{

    if (j>0) 
   {  document.write(j+"x"+ i + "=" + j*i + "<br>")
}

else
{
    document.write("5"+"x"+ i + "=" + 5*i + "<br>")
}
}


//Task-6

var subject1 = prompt ("Enter your first subject");
document.write("Subject 1 : " + subject1 + "<br>" )
var subject2 = prompt ("Enter your second subject");
document.write("Subject 2 : " + subject2 + "<br>" )
var subject3 = prompt ("Enter your third subject");
document.write("Subject 3 : " + subject3 + "<br>" )

var subjectMarks = 100;

var marks1 = prompt ("Enter your first subject marks")
document.write(subject1 + " marks: " + marks1 + "<br>")
var marks2 = prompt ("Enter your second subject marks")
document.write(subject2 + " marks: " + marks2 + "<br>")
var marks3 = prompt ("Enter your third subject marks")
document.write(subject3 + " marks: " + marks3 + "<br>")

percent1= (marks1/subjectMarks) *100;
document.write("1st subject percentage is : " + percent1 + "%" + "<br>")
percent2= (marks2/subjectMarks) *100;
document.write("2nd subject percentage is : " + percent2 + "%" + "<br>")
percent3= (marks3/subjectMarks) *100;
document.write("3rd subject percentage is : " + percent3 + "%" + "<br>")
overallmarks= subjectMarks * 3;
document.write("Overall marks: " + overallmarks + "<br>")
obtainedmarks= +marks1 + +marks2 + +marks3;
document.write("Obtained marks is : " + obtainedmarks + "<br>")
totalpercent = ( percent1 + percent2 + percent3 ) / 3 ;
document.write("Total percentage is:  " + totalpercent + "%" + "<br>")




                // Chapter 9-11      USER INPUT & CONDITIONAL STATEMENT


//Task-1

var city = prompt("Enter your City")
if (city === "karachi"){
    alert("Welcome to city of lights")
}
else {
    alert("Welcome")
}


//Task-2

var gender = prompt("Enter your gender")
if (gender === "male")
{
    alert("Good Morning Sir")
}
else if (gender === "female")
{
    alert("Good Morning Ma'am")
}
else
{
    alert("Good Morning")

}


//Task-3

var signal = prompt("enter your traffic signal color")
if (signal === "red"){
    document.write("Must Stop")
}
else if (signal === "yellow"){
    document.write("Ready to Move")
}
else if (signal === "green"){
    document.write("Move Now")
}
else {
    document.write("Stay Calm")
}


//Task-4

var fuel = prompt("remaining fuel in car ?")
if (fuel < 0.25){
    alert("Please refill the fuel in your car")
}
else
{
    alert("Ok")
}


//Task-5

// a)

var a = 4; 
if (++a === 5)
{
     alert
    ("given condition for variable a is true");
 }

 document.write("Given condition is displayed " +"<br>")


// // b)

var b = 82;
 if (b++ === 83)
 {
      alert
      ("given condition for variable b is true");
     }
    
     document.write("Given condition is not displayed "+"<br>")


// // c)

var c = 12; 
if (c++ === 13)
{ alert("condition 1 is true");
 } 
 if 
 (c === 13)
 { 
     alert
    ("condition 2 is true"); 
} 
if (++c < 14)
{ 
    alert
    ("condition 3 is true");
 }
  if(c === 14)
  { alert
    ("condition 4 is true");
 }

 document.write("Condition 2 and 4 are true "+"<br>")


// // d)

var materialCost = 20000;
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost; 
 if (totalCost === laborCost + materialCost)
 { 
     alert("The cost equals"); 
}
document.write("The cost equals" +"<br>")


// // e)

if (true)
{
     alert("True");
 } 
 if (false)
 {
      alert("False");
     }
document.write("True" +"<br>")


// // f)

if("car" < "cat")
{
     alert("car is smaller than cat");
     }


document.write("Car is smaller than cat" +"<br>")



//Task-6

var subone = prompt("enter subject 1 marks")
var subtwo = prompt("enter subject 2 marks")
var subthree = prompt("enter subject 3 marks")
var totalmarks = 300;
document.write("Total Marks :" + totalmarks +"<br>")
var subject = +subone + +subtwo + +subthree;
document.write("obtained marks: "+ subject+ "<br>")
var percent = subject*100/300;
 if (percent>=80 && percent<=100){
    document.write("Grade: A-one " +"<br>"+ "Percentage: "+percent+"<br>"+ "Remarks: Excellent")
}
else if (percent>=70 && percent<80){
    document.write("Grade: A " +"<br>"+ "Percentage: "+percent+"<br>"+ "Remarks: Good")
}
else if (percent>=60 && percent<70){
    document.write("Grade: B " +"<br>"+ "Percentage: "+percent+"<br>"+ "Remarks: You need to improve")
}
else if (percent<60){
    document.write("Grade: Fail " +"<br>"+ "Percentage: "+percent+"<br>"+ "Remarks: Sorry")
}
else{
    document.write("please try again")
}



//Task-7

var secret = prompt("guess the secret number 1 to 10")
if (secret ==5){
    alert("Bingo! ")
}
else if (secret ==6){
    alert("Close enough to the correct answer")
}
else {
    alert("Try Again")
}


//Task-8

var number = prompt("enter a Number");
 if ( number%3 )
{
    alert("Number is not divisible by 3")
}

else
{
    alert("Number is divisible by 3")

}


//Task-9

var number = prompt("enter a Number");
if(number%2)
{
    alert("Its is an odd number")
}
else if (number/1 )
{
    alert("Its is an even number")
}

else
{
    alert("Try again")

}


//Task-10

var temp = prompt("Enter temperture!")
if (temp>=40 && temp<100){
    document.write("It is too hot outside " +"<br>")
}
else if (temp>30 && temp<40){
    document.write("The wheather today is normal " +"<br>")
}
else if (temp>20 && temp<30){
    document.write("The wheather today is cool " +"<br>")
}
else if (temp>10 && temp<20){
    document.write("OMG! The wheather today is so cool " +"<br>")
}
else {
    document.write("write the correct temperatur ")
   
}



//Task-11

var val1=prompt("enter your first value")
var sign=prompt("enter your operator")
var val2=prompt("enter your second value")

if(sign=== '+')
{
    alert((+val1)+(+val2))
}

else if(sign === '-')
{
    alert (val1-val2)
}


else if(sign === '*')
{
    alert (val1*val2)
}


else if(sign === '/')
{
    alert (val1/val2)
}

else if(sign === '%')
{
    alert (val1/val2*100 + '%')
}




       //Chapter 12-13  IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS


//Task-1

var character = prompt ("enter your character");

if(character < 65)
{
    alert("character is a number")
}

else if
(character >=65 && character <= 90)
{
    alert ("character is a Uppercase letter")
}


else if(character >=97 && character <= 122)
{
    alert ("character is a lowercase letter")
}


//Task-2

var integer1 = prompt("Enter integer one")
var integer2 = prompt("Enter integer two")
if (integer1>integer2){
    alert("larger integer: "+integer1)
}
else if (integer1<integer2)
    {
    alert("larger integer: "+integer2)
}
else if(integer1==integer2){
    alert("Both are same")
}
else {
    alert("try again")
}


//Task-3

var a = prompt("enter a number");
if (a >= 1 ){
    alert("Number is positive")
}
else if(a<0){
    alert("Number is negative")
}
else{
    alert("Number is zero")
}


//Task-4

var character = prompt ("enter your character");


if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u")
{
    alert("True")
}

else

{
    alert("It is not a vowel")
}


//Task-5

var pass = prompt("Please Enter your password");
var password = "java2020";
if (pass == ""){
    alert("Please Enter your password")
}
else if (pass == password){
    alert("Correct!")
}
else {
    alert ("Incorrect Password")
}


//Task-6

var greeting; 
var hour = 20; 
if (hour < 18)
{
    alert(greeting = "Good day")
}
else
{
      alert(greeting = "Good evening")
}


//Task-7

var time = prompt ("enter the time");

if( time >= 0000 && time < 1200 )
{
    alert("Good Morning!")
}
else if( time >= 1200 && time < 1700 )
{
    alert("Good Afternoon!")
}
else if( time >= 1700 && time < 2100 )
{
    alert("Good Evening!")
}
else 
{
    alert ("Good Night!")
}





                               //Chapter 14-16 Arrays


//Task-1

students = []
document.write(students)


//Task-2

var students = []
document.write(students)


//Task-3

var students = ["Faraz"," Ameed"," Humza"]
document.write(students)


//Task-4

var students = [1,2,3,4]
document.write(students)


//Task-5

var students = [10>9, 9<10]
document.write(students)


//Task-6

var students = ["nabeel","ahmed",15,"umer"]
document.write(students)


//Task-7

var Qualification = ["1)SSC" , "<br>", "2)HSC","<br>","3)BCS","<br>","4)BS","<br>","5)BCOM","<br>","6)MS","<br>","7)M.PHIL","<br>","8)PHD"]
    document.write([Qualification])


//Task-8

var student = ["Michael","John","Tony"];
var score = [320,230,480];
var totalmarks = 500;
percent1 = (score[0]/500)*100;
percent2 = (score[1]/500)*100;
percent3 = (score[2]/500)*100;
document.write("Score of "+student[0]+ " is " +score[0] +". Percentage: "+percent1 +"%"+"<br>")
document.write("Score of "+student[1]+ " is " +score[1] +". Percentage: "+percent2 +"%"+"<br>")
document.write("Score of "+student[2]+ " is " +score[2] +". Percentage: "+percent3 +"%")


//Task-9

// a)

var colours =["red","green","blue","black"]
document.write(colours)

// b)

var beginningColour = prompt("Enter colour to add in the beginning")
colours.unshift("purple")
document.write(colours)

// c)

var endingColour = prompt("Enter colour to add in the ending")
colours.push("maroon")
document.write(colours)

// d)

colours.unshift("orange","black")
document.write(colours)

// e)

colours.shift("orange")
document.write(colours)

// f)

colours.pop("maroon")
document.write(colours)

var index = prompt("Enter index to add a colour")
var Colour = prompt("which colour you want to add")


var colours1 = colours.slice(1,1,"pink")
document.write(colours)


// g)

var index = prompt("Enter index to delete a colour")
var Colour = prompt("which colour you want to delete/remove")
var colours1 = colours.splice(1,1,"pink")
document.write(colours)



//Task-10

var scores = [320,230,480,120]
var orderedScores = [120,230,320,480]
document.write("scores of Students: " + scores + "<br>")
document.write("orderedScores of Students: " +orderedScores + "<br>")


//Task-11

var citiesList = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
var selectedCities= citiesList.splice(2,2)
document.write(selectedCities)


//Task-12

var arr = ["This","is","my","cat" + "<br>"]
var arr1= arr.join(" ")
document.write(arr)
document.write(arr1)


//Task-13

var computer = ["keyboard","mouse","printer","monitor"]
document.write(computer)


//Task-14

var computer = ["keyboard","mouse","printer","monitor"];
var rev = computer.reverse();
document.writeln(rev);


//Task-15

var mobilePhones = ["Apple","Samsung","Motorola","Nokia","Samsung","Haeir"]
document.write(mobilePhones)




                     //Chapter 17-20  Arrays and Loops



// Task-1

let array = [
    [],
    [],
    [],
    [],
    []
];

document.write(array);


// Task-2

let array = [
    [0,0],
    [1,1],
    [2,2],
    [3,3],
    [1,4],
    [0,5],
    [1,6],
    [2,7],
    [2,8],
    [1,9],
    [0,10],
    [1,11],

]
console.table(array)


// Task-3

var counting=[1,2,3,4,5,6,7,8,9,10];
var counting1= counting.join(" " + "<br>")
document.write(counting1)


// Task-4

var j = prompt("Enter a number");
var i = prompt("Enter a number lenth");
for(var k=1;k<20;k++) 
{

    if (j>0) 
   {  document.write(j+"x"+ k + "=" + j*k + "<br>")
}

else
{
    document.write("Try again" + "<br>")
}
}


// Task-5


var fruits = ["apple","banana","mango","orange","strawberry" + "<br>"]
var fruits1 = fruits.join(" " + "<br>")
document.write(fruits1)
document.write("Element at index 0 is "+fruits[0] +"<br>")
document.write("Element at index 1 is "+fruits[1]+"<br>")
document.write("Element at index 2 is "+fruits[2]+"<br>")
document.write("Element at index 3 is "+fruits[3]+"<br>")
document.write("Element at index 4 is "+fruits[4])


//Task-6


var count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
document.write("Counting: "+count+"<br>")
var revcount =count.reverse()
document.write("Reverse Counting: "+revcount+"<br>") 

var i;
for(var i=0; i<=20; i=i+2) 
{
    document.write(","+i)
}

var i;
for(var i=1; i<=20; i=i+2) 
{
    document.write(","+i)
}

var i;
for(var i=2; i<=20; i=i+2) 
{
    document.write(" "+i+"k")
}


//Task-7

var A = ["cake","apple pie","cookie","chips","patties"];
var input= prompt("Enter your order dear");

    if (input=A) 
   {  document.write("Your order is available dear")
}

else
{
    document.write("Your order is not available dear")
}


//Task-8

var a =[24,53,78,91,12];
document.write("Array Items: "+a +"<br>")
 var a = prompt["enter a number"];
var largestNumber = [91];
    if (a=largestNumber) 
   {  document.write("Largest number is: "+largestNumber)
}

else
{
    document.write("This is not the largest number")
}


//Task-9

var a =[24,53,78,91,12];
document.write("Array Items: "+a +"<br>")
 var a = prompt["enter a number"];
var smallestNumber = [12];
    if (a=smallestNumber) 
   {  document.write("Largest number is: "+smallestNumber)
}

else
{
    document.write("This is not the largest number")
}


//Task-10


var j=5;
for(var i=1; i<=20; i++) 
{

    if (j>0) 
   {  document.write( j*i + "<br>")
}

else
{
    document.write("Try again" + "<br>")
}
}

