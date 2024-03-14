// console.log(new Date);
// const name = "Fahad Saad";
// console.log(name);
// const Birthday = "2008/12/31"
// console.log(Birthday)

// // data types

// let string = "hello" //string type
// let boolen = false // boolen type
// let tuwaiq = 10 //integer type 
// let double = 91.82 // double type
// let tuwaiq_academy = 91n // Bigint type
// let symbol = Symbol("$") // Symbol type
// let Null = "object" //null/object type
// let Undefined; // Undifined type

// // to print them out with there type

// console.log("string type:", string)
// console.log("type:", typeof string)
// console.log("boolen type:", boolen)
// console.log("type:", typeof boolen)
// console.log("integer type:", tuwaiq)
// console.log("type:", typeof tuwaiq)
// console.log("double type:", double);
// console.log("type:", typeof double)
// console.log("Bigint type:", tuwaiq_academy)
// console.log("type:", typeof tuwaiq_academy)
// console.log("symbol type:", symbol)
// console.log("type:", typeof symbol)
// console.log("null/object type:", Null)
// console.log("type:", typeof Null)
// console.log("Undifined type:", Undefined)
// console.log("type:", typeof Undefined)

// // trying new stuff

// console.log("Hi My Name Is Fahad");
// console.log("Hi My 'Name' Is Fahad");
// console.log('Hi My "Name" Is Fahad');
// console.log("Hi My \"Name\" Is Fahad");
// console.log('Hi My \'Name\' Is Fahad');

// // numbers in strings and whats nan

// let nan = "hello" - "hello"
// console.log(nan)
// console.log(typeof nan);

// nan = "1" - "0.5"
// console.log(nan)
// console.log(typeof nan);

// nan = "1" + "1"
// console.log(nan)
// console.log(typeof nan)

// // new type of placing var in sentences

// let name = "Fahad"
// console.log(`My Name Is ${name}`);

// // trying string commands

// let string = ("I like my self hehe")
// console.log(string.length); //to show how long the essay is
// console.log(string.charAt(5)); // to show in that number what letter is there
// console.log(string.slice(0,6)); // to show the letters from what words i choose
// console.log(string.split(" ", 5)); // to remove/sperate the spaces or to sperate the words form each other

// // challange

// let str = "java script language"

// console.log(str.length); // -> 20
// console.log('test'.length); // -> 4

// console.log(str.charAt(0)); // -> j
// console.log('abc'.charAt); // -> f charAt() {[native code]}

// console.log(str.slice(0,4)); // -> java
// console.log('test'.slice(1,3)); // -> es

// console.log(str.split(' ')); // -> 'java', 'script', 'language'
// console.log('192.168.1.1'.split('.')); // -> '192', '168', '1', '1'


// // turning diffrnent datatypes to other datatypes

// // .........................................................................

// // anything to string
// console.log("-----------ANYTHING TO STRING-----------");
// const num = 314 // number to string
// console.log(`${typeof num} ${num}`);
// const numtostr = String(num)
// console.log(`${typeof numtostr} ${numtostr}`);
// // ...........................................................................
// const str = "test" // strings to string
// console.log(`${typeof str} ${str}`);
// const strtostr = String(str)
// console.log(`${typeof strtostr} ${strtostr}`);
// // ...........................................................................
// const bol = true // boolen to string
// console.log(`${typeof bol} ${bol}`);
// const boltostr = String(bol)
// console.log(`${typeof boltostr} ${boltostr}`);
// // ...........................................................................
// let und;// undefined to String
// console.log(`${typeof und} ${und}`);
// const undtostr = String(und)
// console.log(`${typeof undtostr} ${undtostr}`);
// // ...........................................................................
// const big = 2374897n // bigint to string
// console.log(`${typeof big} ${big}`);
// const bigtostr = String(big)
// console.log(`${typeof bigtostr} ${bigtostr}`);
// // ........................................................................... 
// let Null = null // null/object to string
// console.log(`${typeof Null} ${Null}`);
// const nulltostr = String(Null)
// console.log(`${typeof nulltostr} ${nulltostr}`);
// // ............................................................................

// // anything to number
// console.log("-----------ANYTHING TO NUMBER-----------");
// const num1 = 314 // number to number
// console.log(`${typeof num1} ${num1}`);
// const num1tonum = Number(num1)
// console.log(`${typeof num1tonum} ${num1tonum}`);
// // ............................................................................
// const str1 = "three hundred and forteen" // string to number
// console.log(`${typeof str1} ${str1}`);
// const str1tonum = Number(str1)
// console.log(`${typeof str1tonum} ${str1tonum}`);
// // ............................................................................
// const bol1 = true // boolen to number
// console.log(`${typeof bol1} ${bol1}`);
// const bol1tonum = Number(bol1)
// console.log(`${typeof bol1tonum} ${bol1tonum}`);
// // ............................................................................
// const str2 = "11" // string to number 2.0 to number
// console.log(`${typeof str2} ${str2}`);
// const str2tonum = Number(str2)
// console.log(`${typeof str2tonum} ${str2tonum}`);
// // ............................................................................
// const big1 = 7248169n // bigint to number
// console.log(`${typeof big1} ${big1}`);
// const big1tonum = Number(big1)
// console.log(`${typeof big1tonum} ${big1tonum}`);
// // ............................................................................
// let und1; // undefined to number
// console.log(`${typeof und1} ${und1}`);
// const und1tonum = Number(und1)
// console.log(`${typeof und1tonum} ${und1tonum}`);
// // ............................................................................
// const null1 = null // null to number
// console.log(`${typeof null1} ${null1}`);
// const null1tonum = Number(bol1)
// console.log(`${typeof null1tonum} ${null1tonum}`);
// // ...........................................................................

// // anything to boolean
// console.log("-----------ANYTHING TO BOOLEAN-----------");
// const bol2 = true // boolean to boolean
// console.log(`${typeof bol2} ${bol2}`);
// const bol2tobol = Boolean(bol2)
// console.log(`${typeof bol2tobol} ${bol2tobol}`);
// // ............................................................................
// const str3 = "three hundred and forteen" // string to boolean
// console.log(`${typeof str3} ${str3}`);
// const str3tobol = Boolean(str3)
// console.log(`${typeof str3tobol} ${str3tobol}`);
// // ............................................................................
// const num2 = 0 // number to boolean
// console.log(`${typeof num2} ${num2}`);
// const num2tobol = Boolean(num2)
// console.log(`${typeof num2tobol} ${num2tobol}`);
// // ............................................................................
// const num3 = 300 // number 2.0 to boolean
// console.log(`${typeof num3} ${num3}`);
// const num3tobol = Boolean(num3)
// console.log(`${typeof num3tobol} ${num3tobol}`);
// // ............................................................................
// let und2; // undefined to boolean
// console.log(`${typeof und2} ${und2}`);
// const und2tobol = Boolean(und2)
// console.log(`${typeof und2tobol} ${und2tobol}`);
// // ............................................................................
// const Null3 = null // null/object to boolean
// console.log(`${typeof Null3} ${Null3}`);
// const Null3tobol = Boolean(Null3)
// console.log(`${typeof Null3tobol} ${Null3tobol}`);
// // ............................................................................
// const str4 = "" // empty to Boolean
// console.log(`${typeof str4} ${str4}`);
// const str4tobol = Boolean(str4)
// console.log(`${typeof str4tobol} ${str4tobol}`);
// // ............................................................................

// //Auto conversion

// let auto1 = console.log(22 - "1");
// console.log(`${typeof auto1} ${auto1}`);
// let auto2 = console.log(22 + "1");
// console.log(`${typeof auto2} ${auto2}`);

// //---------------------------------finshed with converstions------------------------------------\\

// // -----------------------------Starting with non-premetive datatypes---------------------------\\

// //challenge--------------------------------------------------------------

// let testobj = {
//     name1: "sara",
//     surename: "mohammad",
//     age1: 22,
//     email1: "Saramohammad@teleworm.us"
// };
// console.log(testobj.name1);
// console.log(testobj.surename);
// console.log(testobj.age1);
// console.log(testobj.email1);
// let testobj1 = {
//     name2: "salman",
//     surename2: "ahmad",
//     age2: 20,
//     email2: "salmanahmad@dayrep.com"
// };
// console.log(testobj1.name2);
// console.log(testobj1.surename2);
// console.log(testobj1.age2);
// console.log(testobj1.email2);

// // end of challange----------------------------------------------------
// // ------------------------------ Arrays ----------------------------\\
 
// {
//     let datatypes = ["str","bol","num","null","und","obj"]
//     console.log(datatypes [5]);
//     console.log(datatypes [0]); // this is how to print a array from its out side/to print it alone 
//     console.log(datatypes); // this is how to print the entire array from 0-5
//     datatypes[0] = "string";
//     datatypes[1] = "boolean";
//     datatypes[2] = "number"; // this to change a array to a differnt name like in this one i changed it form num to number
//     datatypes[3] = "null";
//     datatypes[4] = "undefined";
//     datatypes[5] = "object";    

//     console.log(datatypes.push("premetive")); // this is to add an addetional array to the main one
//     console.log(datatypes);

//     console.log(datatypes.shift()); // shift is used to delete from the start
//     console.log(datatypes);

//     console.log(datatypes.unshift("String")); // to add a array/var/name to the start of the main array
//     console.log(datatypes);

//     console.log("");
//     console.log(datatypes.pop()); // pop is used to delete from the end
//     console.log(datatypes);

//     console.log(datatypes.indexOf("string"));  // this is how to get/know whats the number/postion of this var/name/array

//     // Array thats has arrays and how to print them 

//     let Names = [
//         ["Fhd","Saad","Ali","Saud","Ahmad","Samah"],["1","2","3"],["!","@","#"] // this is used to make  arrays inside arrays
//     ]

//     console.log(Names[0][5]) // this is how to call an var/name/array to print when its inside-inside an array
//     console.log(Names[1][1]);
//     console.log(Names[2][2]);

//     let first = ["1", "2", "3"] // how to add two arrays to each other
//     let second = ['4', '5', '6']
//     let both = first.concat(second)
//     console.log(both);

//     let name = ["1", "2", "3", "4",]
//     console.log(name.slice(0,2)) // THIS I SHOW TO CHOOSE A SOME ARRAYS/NAMES/VARS TOGTHER WITHOUT REMOVING THE REST 
// }
// // --------------------------------------- challange --------------------------------------- \\
// {
//     console.log("--------------------CHALLANGE 1---------------------");
//     let user1 = [22, "Fatmia", "Fatmia@teleworm.us"]
//     let user2 = [20, "Laila@dayrep.com", "laila12@#12"]
//     console.log(user1);
//     console.log(user1.length);
//     console.log(user2);
//     console.log(user2.length);
// }
// // ------------------------------------ challange2 ----------------------------------------\\
// {
//     console.log("--------------------CHALLANGE 2---------------------");
//     let user1 = [22, "Fatmia", "Fatmia@teleworm.us"]
//     console.log(user1.shift());
//     console.log(user1.push(22));
//     let user2 = [20, "Laila@dayrep.com", "laila12@#12"]
//     console.log(user2.unshift("laila"));
//     console.log(user2.pop());
//     console.log(user1);
//     console.log(user1.length);
//     console.log(user2);
//     console.log(user2.length);
// }
// // ------------------------------------ challange3 ----------------------------------------\\
// {
//     console.log("--------------------CHALLANGE 3---------------------");
//     let user1 = [22, "Fatmia", "Fatmia@teleworm.us"]
//     console.log(user1.shift());
//     console.log(user1.push(22));
//     let user2 = [20, "Laila@dayrep.com", "laila12@#12"]
//     console.log(user2.unshift("laila"));
//     console.log(user2.pop());
//     console.log(user1.slice(0,2));
//     console.log(user1.length);
//     console.log(user2.slice(1,2));
//     console.log(user2.length);
//     let all_user = (user1.concat(user2))
//     console.log(all_user);
// }

// // ------------------------------------ Opreators --------------------------------------\\
// {
//     let x = 10 // first way to use math stuff like subtraction and addition this one is used to change the main varipol but the other one -->
//     console.log(x);
//     x -= 2
//     console.log(x);
//     x += 10
//     console.log(x);
//     x /= 2
//     console.log(x);
//     x *= 4
//     console.log(x);
//     const y = 10
//     console.log("y =", y); // second way to use mathh stuff like multiply and divide this one is used to change numbers for a temprary time like only when you place a log it changes
//     console.log("y + 1 =", y + 1);
//     console.log("y - 1 =", y - 1);
//     console.log("y * 2 =", y * 2);
//     console.log("y / 2 =", y / 2);
//     console.log("y ^ 2 =", y ** 2);

//     let yar = "Fahad"
//     let hny = "Happy New Year "
//     let ear_hny = hny += yar;
//     console.log(ear_hny);
// }
// // ------------------------------------ comaparison Opreators --------------------------------------\\
// // ------------------------------------ comaparison Opreators Using == --------------------------------------\\
// // The diffrent bettween them is the == shows only if there the same value like 10 and "10" will be ture
// {
//     console.log(10 == 5); // --> false
//     console.log(10 == 10); // --> true
//     console.log(10 == 10n); // --> true
//     console.log(10 == "10"); // --> true
//     console.log("10" == "10"); // --> true
//     console.log("Alice" == "Bob"); // --> false
//     console.log(undefined == false); // --> false
//     console.log(0 == false); // -->  true
//     console.log(NaN == NaN); // --> false
// }
// // ------------------------------------ comaparison Opreators Using === --------------------------------------\\
// // the diffrent between this one and the before this one can check there value and there type so it checks perfectly so if 10 and "10" it will be false cause they have diffrent types
// {
//     console.log(10 === 5); // --> false
//     console.log(10 === 10); // --> true
//     console.log(10 === 10n); // --> false
//     console.log(10 === "10"); // --> false
//     console.log("10" === "10"); // --> true
//     console.log("Alice" === "Bob"); // --> false
//     console.log(undefined === false); // --> false
//     console.log(0 === false); // -->  false
//     console.log(NaN === NaN); // --> false
// }
// // ------------------------------------ comaparison Opreators Using && "And" and || "or" --------------------------------------\\
// // The diffrents between "or" and "and" "or" takes only the true or number 1 if there cause 1 = true but for "and" it only takes false and number 0 cause number 0 = false
// {
//     // -------------------------------AND &&-----------------------------------
//     console.log(true && 1991); // --> 1991
//     console.log(false && 1991); // --> false
//     console.log(1991 && 0); // --> 0
//     console.log(1991 && 24); // --> 24
//     console.log("Alice" && "bob"); // --> bob
//     console.log("" && "bob"); // --> ""
//     // --------------------------------OR || ----------------------------------
//     console.log(true || 1991); // --> true
//     console.log(false || 1991); // --> 1991
//     console.log(1 || 1991); // --> 1
//     console.log(0 || 1991); // --> 1991
//     console.log("Alice" || "bob"); // --> Alice
//     console.log("" || "bob"); // --> bob
// }
// // ------------------------------------ comaparison Opreators Using ! "Not" --------------------------------------\\
// // not sends out the refliction of the main input and it only accepts one input like true --> false
// {
//     let num = 0
//     let bignum = 2023
//     let name = "Alice"
//     let ety = ""
//     console.log(!num); // --> true
//     console.log(!bignum); // --> false
//     console.log(!name); // --> false
//     console.log(!ety); // --> true
// }
// // ----------------------------interactive command that can be used by the client------------------------
// // -----------------------------Alerts-----------------------------
// {
//     window.alert("hello, World!!!") // --> "Hello world "in an alert way
//     window.alert(13 * 3) // --> 39 in an alert way
// }
// // -----------------------------prompt-----------------------------
// {
//     window.prompt("Username") // --> "Username "in an alert way but with an input
//     window.prompt(13 * 3) // --> 39 in an alert way  but with an input
//     window.prompt("Username", "Fhd133") // --> "Username " in an alert way but with in the input it have fhd133 in there
//     let name = window.prompt("Username") // --> "Username "in an alert way but with an input
//     let age = window.prompt("Hello " + name + " how old are you") // --> "Age"in an alert way but with an input
// }
// // ----------------------------Challange--------------------------- \\
// {
//     alert("")
//     let Username = window.prompt("Your name")
//     let age = window.prompt("Your Age")
//     alert("Your Age: " + age + "Your Name: " + Username)
// }
// // ------------------------- if statments --------------------------\\
// {
//     let number = 82 // give a var a value
//     if (number >= 100){ // the think you want to check if it is true of not 
//         console.log("yes,it is greater then 100"); // the code if the statment is true then this happens
//     }
//     else {
//         console.log("no,it is not greater then 100"); // the code if the statment is not true then this happens
//     }
//     // ....................................................................
//     let  = "Fhd"
//     let age = 14
//     if (age < 30 && name == "Fhd"){ // it will check if the name is fhd and age is less then 30 then it will print out wellcome back fhd if not then it will print out client not found
//         console.log("Wellcome, Back Fhd");
//     }
//     else{
//         console.log("Client Not Found 404");
//     }
//     // -----------------------callange---------------------------- \\
//     {    
//         let name = "fhd"
//         let percent = window.prompt("ENTER YOUR SCORE")
//         if (percent >= 95 && percent <= 100){
//             alert("A+");
//         }else if ( percent >= 90 && percent <= 100){
//             alert("A");
//         }else if ( percent >= 85 && percent <= 100){
//             alert("b+");
//         }else if ( percent >= 80 && percent <= 100){
//             alert("b");
//         }else if ( percent >= 70 && percent <= 100){
//             alert("c");
//         }else if ( percent >= 50 && percent <= 100){
//             alert("d");
//         }else if( percent <= 50 && percent <= 100){
//             alert("F");
//         }else{
//             alert("Error This Is Not A Grade");
//         }
//     }
//     // ----------------------- simplfide way to do if statment -------------------------------- \\
//     let speed = window.prompt("Enter Your Speed")
//     let speedlimit = window.prompt("Enter In The Speedlimit In Your Street")
//     let checker = speed < speedlimit ? "You Got A Ticket For Speeding"  : "Your Are Safe"; //this i sthe simplyfide way right the if in the start then right in the start the true then the false after it sprating them by a semicolon :\\
//     alert(checker)
//     // --------------------- switch type -------------------------- \\
//     let monthnumber = 12 // this i sthe pllace where u give it a value you cant use promt in switchs put it sees the number and matchs it with the case if there is no case then it will go to the defualte
//     let MonthName;
//     switch (monthnumber) {
//         case 1: // this is a case and its value  
//             MonthName = "JAN" // so if the value in month number then this will show up
//             break; // break code to stop the code here so it doesnt conuito
//         case 2:
//             MonthName = "FEB"
//             break;
//         case 3:
//             MonthName = "MAR"
//             break;
//         case 4:
//             MonthName = "APR"
//             break;
//         case 5:
//             MonthName = "MAY"
//             break;
//         case 6:
//             MonthName = "JUN"
//             break;
//         case 7:
//             MonthName = "JUL"
//             break;
//         case 8:
//             MonthName = "AUG"
//             break;
//         case 9:
//             MonthName = "SEP"
//             break;
//         case 10:
//             MonthName = "OCT"
//             break;
//         case 11:
//             MonthName = "NOV"
//             break;
//         case 12:
//             MonthName = "DEC"
//             break;
//         default:
//             MonthName = "Not A Month Number";
//             break;
//     }
//     alert("The Month's Number: " + monthnumber)
//     alert("The Month's Name: " + MonthName)
//     let Number1 = "JAN"
//     let NUMBER2;
//     switch (Number1) {
//         case "JAN":
//             NUMBER2 = "1"
//             break;
//         case "FEB":
//             NUMBER2 = "2"
//             break;
//         case "MAR":
//             NUMBER2 = "3"
//             break;
//         case "APR":
//             NUMBER2 = "4"
//             break;
//         case "MAY":
//             NUMBER2 = "5"
//             break;
//         case "JUN":
//             NUMBER2 = "6"
//             break;
//         case "JUL":
//             NUMBER2 = "7"
//             break;
//         case "AUG":
//             NUMBER2 = "8"
//             break;
//         case "SEP":
//             NUMBER2 = "9"
//             break;
//         case "OCT":
//             NUMBER2 = "10"
//             break;
//         case "NOV":
//             NUMBER2 = "11"
//             break;
//         case "DEC":
//             NUMBER2 = "12"
//             break;
//         default:
//             NUMBER2 = "Not A Month Name";
//             break;
//     }
//     alert("The Month's Name: " + Number1)
//     alert("The Month's NUMBER: " + NUMBER2)
// // ----------------- challange ----------------- \\
//     {
//         str = "23"
//         num = 23
//         if (str == num){
//             alert("yes")
//         }else{
//             alert("no")
//         }
//         if (str === num){
//             alert("yes")
//         }else{
//             alert("no")
//         }
//     }
// let logged = false
// if (!logged) {
//     console.log("yes");
// }else{
//     console.log("no");
// }
// // --------------------------- challange ------------------------------\\
// let age = window.prompt("Enter Your Age")
// let job = window.prompt("Enter Your Job Type (Programmer,Swimmer)")
// if (age <= 18){
//     alert("You Didnt Get A Vacation")
// }else if (job == "Programmer"){
//     alert("You Got A Vacation")
// }else if(job == "Swimmer"){
//     alert("You Got A Vacation")
// }else{
//     alert("You Didnt Get A Vacation")
// }
// }
// // ------------------------------------------------- For Loops ----------------------------------------------\\
// for (let num = 0; num <= 20; num++) { // so in here we used a loop so num adds one every time untill it eaquals 20 
//     console.log(num); // and in here to print it out
// }
// const datatypes = ["Apple", "Banana", "Orange", "Mango"]
// for (let i = 0; i < datatypes.length; i++){ // we made it add one WORD every time an till it equals every word in datatypes
//     console.log(datatypes[i]); // --> Apple, Banana, Orange, Mange it wont print in one print it will send it out one word by one
// }
// // ----------------------------------------------- While loop --------------------------------------------\\
// // while loop is about the same as for loop but in while if the order is worng/done then it will not print anything 
// {
//     let i = 0 // in here it will print from 1- 20 like a normal loop
//     while(i <= 20){
//         console.log(i);
//         i++;
//     }
// }
// {
//     let i = 21 // in here it will print nothing cause its already done/ the oder is finshed
//     while(i <= 20){
//         console.log(i);
//         i++;
//     }
// }
// // ---------------------------------------------- do while loop -------------------------------------------------- \\ 
// // do while loop will do loop even if its worng but it wont continuo it will stop after one time only
// {
//     let i = 10 
//     do { // in here it will only print a 10 cause it will print one time even if its a worng order 
//         console.log(i);
//         i++;
//     }while (i <= 5)
// }
// {
//     let i = 0 
//     do { // in here it will only print a 0 1 2 3 4 5 cause it will print one by one like a normal loop 
//         console.log(i);
//         i++;
//     }while (i <= 5)
// // ------------ challenga -------------- \\
// for(let i = 0; i <= 5; i++){
//     let star = ""
//     for(let g = 0; g<=i;g++){
//         console.log(star +="*");
//     }
// }
// // ----------------------------------- Shearch ------------------------------------ \\
// {
//     const Fruits = ["Fahad", "Saad", "Saud", "Samah"]
//     let sh = prompt()
//     let found = false
//     for (let index = 0; index < Fruits.length; index++) {
//         if(Fruits(index) === sh)
//         found = true;
//         break;
//     }

//     if (found) {
//         alert(sh + "Is There")
//     }else{
//         alert(sh + "Is Not There")
//     }
// }
// // ---------------- challange ---------------- \\
// for (let i = 1; i<=10; i++){
//     if(i % 2 === 0){
//         alert(i)
//     }
// }
// // ------------------ challange ------------------ \\
// {
// for (let st = 1; st <= 5; st++){
//     let s = "The Golden Fish Is Happy"
//     alert(s)
// }
// }
// // ---------------------------------- functions ------------------------------------ \\
// {
//     function num(num1, num2) { // this is like the heading for a function so out side the () you write the name of the funtion and inside the () you wirte your var but its called parameters in functions
//         if(num1 == 1){
//             alert(num1+num2)
//         }else if(num1 == 2){
//             alert(num1-num2)
//         }else if(num1 == 3){
//             alert(num1/num2)
//         }else{
//             alert("The Number Needs To Be 1 For Adding 2 For Subtracting 3 For Dividing")
//         }  
//     }
//     // ------------------- built-in Function -------------------- \\
//     // ------------------- purseint -------------------- \\
//     num(Number(prompt("number1")), Number(prompt("number1"))) // and in here we give the var there values prompt is always a string so we made it a number using number() code and u can use purseint
//     function nan(hi, num) {
//     // ------------------- isNaN -------------------- \\
//         if(isNaN(hi) || isNaN(num)){ // this is the same as function code but we used nan which means to check is the var is a number or nan 
//             alert("This is not a number")
//         }else{
//             alert("this is a number")
//         }
//     }
//     nan("hi", 2)
//     // --------------------- timeout function ------------------ \\ 
//     {
//     console.log(1);
//     setTimeout(function () {
//         console.log(2);
//     }, 2000) // this is meant to be a two second so it will wait two second then print thats way it send out after 3
//     console.log(3); // --> 1 3 2
//     }
// // ---------------------------- Arrow Function/newest way to write a function --------------------- \\
//     let num = (num1, num2) => { // this is like the heading for a function so out side the () you write the name of the funtion and inside the () you wirte your var but its called parameters in functions
//         if(num1 == 1){
//             alert(num1+num2)
//         }else if(num1 == 2){
//             alert(num1-num2)
//         }else if(num1 == 3){
//             alert(num1/num2)
//         }else{
//             alert("The Number Needs To Be 1 For Adding 2 For Subtracting 3 For Dividing")
//         }      
//     }
//     alert(num(Number(prompt("number1")), Number(prompt("number1"))))
// // ------------------------------ Higher-Order Function --------------------------\\
// { // i wont write comments here cause it will take long to write
//     function multi(x, y) {
//         return x * y
//     }
//     let mainopr = (value, value2, opr) => {
//         return opr(value, value2)
//     }
//     let result = mainopr(Number(prompt("Number1")), Number(prompt("Number2")), multi)
//     alert (result)
// }
// // ------------------- challange -------------------- \\
// { // i wont write comments here cause it will take long to write
//     function multi(x, y) {
//         return x + y
//     }
//     let mainopr = (value, value2, opr) => {
//         return opr(value, value2)
//     }
//     let result = mainopr(Number(prompt("Number1 For Addition")), Number(prompt("Number2 For Addition")), multi)
//     alert (result)

//     function multi1(x, y) {
//         return x - y
//     }
//     let mainopr2 = (value, value2, opr) => {
//         return opr(value, value2)
//     }
//     let result2 = mainopr(Number(prompt("Number1 For Subtraction")), Number(prompt("Number2 For Subtraction")), multi1)
//     alert (result2)
// }
// // ------------------ challange2 two ------------------ \\
// {
//     let smallcase = window.prompt("Enter The Word U want to turn into upper case")
//     let uppercase = window.prompt("Enter The Word You Want In Small Case")    
//     let result = smallcase.toUpperCase();
//     let result2= uppercase.toLowerCase();
//     alert(result)
//     alert(result2)
// }
// // ------------------------ challange 3 ----------------------- \\
// {
//     function add(x) {
//         if (x >= 10) {
//             alert(x + 10)
//         }else{
//             alert("number less than 10")
//         }
//     }
//     opr = (value, opration) =>{
//         return opration(value)
//     }
//     let result = opr(Number(prompt("Your Number")), add)
// }
// }
// // ------------------------- challange 4 ----------------------- \\
// {
//     function count(T, W) {
//         let IBM = W / (T*T)
//         alert ("Your BMI Is " + IBM)
//         if (IBM <= 50) {
//             alert("You Need To Get Some Waight In")
//         }else if (IBM >= 100){
//             alert("You Need To Hit The Gym")
//         }else if (IBM <= 75){
//             alert("You Are In Avarage IBM Keep The Good Work In")
//         }else{
//             alert("Your Sending Out Wrong Numbers NaN")
//         }

// n = 2312
// if (n.lenght = 0) {
//     n = String(n)
//     let w = n. charAt(n. length-1)
//     let r = n. charAt(0)
//     console.log(w);
//     console.log(r);
//     let t = r + w
//     console.log(t);
//     n = n.slice(0, -1)
//     n = n.slice(1)
//     console.log(n);
//     let s = n. charAt(n. length-1)
//     let d = n. charAt(0)
//     console.log(s);
//     console.log(d);
//     let p  = d + s
//     console.log(t);
//     n = n.slice(0, -1)
//     n = n.slice(1)
//     console.log(n);
//     console.log(Number(t) + Number(p));
//     console.log(n.length);
// }else{
//     return(p);
// }
