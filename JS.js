// const myEmail = "22.4";
// const newNmbr = parseFloat(myEmail); 
// console.log(newNmbr);
// console.log(typeof newNmbr);
// //-------------------------------------------------------------
// console.log("qwertyui" + "qwerty");
// console.log(parseInt ("123" , 10));
// console.log(parseInt ("  123  "));
// console.log(parseInt ("077"));
// console.log(parseFloat ("12.3"));
// console.log(parseInt ("qwerty "));
// console.log(isNaN ("12.3"));
// //---------------------------------------------------------------
// console.log(true + true);
// console.log(true + false);
// console.log(false - true);
// console.log(false - false);
// console.log(10 + "20");
// console.log(9 - "5");
// console.log("java" + "script");
// console.log(""+"");
// console.log("" + 0);
// console.log(55 * "qwertyui");
// //------------------------------------------------------------
// var age = 18;
// const citizenship = 1; //1==true  0==false
// const registered = 1;
// if(age >= 18)
// {
//     if(citizenship)
//     {
//         if(registered)
//         {
//                 console.log("Eligible for voting");
//         }
//         else
//         {
//             console.log("Not eligible for voting due to registaration");
//         }
//     }
//     else
//     {
//         console.log("Not eligible for voting due to citizenship");
//     }
// }
// else
// {
//     console.log("Not eligible for voting due to age");
// }

// // -------------------------------------------------------------

// var day = "mon";
// switch(day)
// {
//     case "mon":
//         console.log("mon");
//         break;
//     case "tue":
//         console.log("tue");
//         break;
//     case "sun":
//         console.log("sun");
//         break;
//     default:
//             console.log("def")
// }


// var area = "circle";
// var a = 5;
// var b = 10;
// var result;
// switch(area)
// {
//     case "square":
//         result = a*a;
//         console.log("area of square:" , result);
//         break;
//     case "rectangle":
//         result = a*b;
//         console.log("area of rectangle:" , result);
//         break;
//     case "circle":
//         result = 3.14*a*a;
//         console.log("area of circle:" , result);
//         break;
//     default:
//             console.log("no shape")
// } 
// //----------------------------------------------------------------

// var i = 0;
// while(i<=10)
// {
//     console.log(i);
//     i++;
// }

// do
// { 
//     console.log(i);
//     i++;    
// }while(i<=10);

// for(i=0 ; i<=10 ; i++)
// {
//     console.log(i);
// }


// var year = 2028;

// if(year%4===0 && year%100!=0 || year%400===0)
// {
//     console.log("leap year")
// }
// else
// {
//     console.log("not a leap year");
// }


// for(var i=1 ; i<=5 ; i++)
// {
//     var pat = "";
//     for(var j=1 ; j<=i ; j++)
//     {
//        pat = pat + "*";
//     } console.log(pat);
// }
// //-------------------------------------------------------------------
// function sum(a,b)
// {
//     return console.log(a+b);
// }

// sum(2,2);
// sum(5,5);
// sum(10,10);

// function greet(name)
// {
//     return console.log("Welcome " + name + " to JS");
// }

// greet("Khalid"); 
// //----------------------------------------------------------------

// let fruits = ["apple" , "mango" , "banana" , "grapes" , "orange"];
// for(let items in fruits) //for...in
// {
//     console.log(items);
// }
// for(let items of fruits) //for...of
// {
//     console.log(items);
// }

// fruits.forEach((currElem , index , arr)=>{
//     console.log(`${currElem} ${index} `);
// })

// fruits.map((currElem , index , arr)=>{
//     console.log(`${currElem} ${index} `);
// })

// const mapArr = fruits.map((currElem , index , arr)=>{
//     return `${currElem} ${index} `;
// })
// console.log(mapArr); //we cant return forEach function

// const mapArr = fruits.map((currElem , index , arr)=>{
//     return `my fav fruit is ${currElem}`;
// })
// console.log(mapArr);
// console.log(fruits); //orignal array as it is but we have new array

// const num = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
// num.forEach((curElem)=>{
//     console.log(`${curElem} * 2  = ${curElem * 2}`);
// })

// const table = num.map((curElem)=>{
//     return (curElem *2);
// })
// console.log(table);

// let fruits = ["apple" , "mango" , "banana" , "grapes" , "orange"]; 
// console.log(fruits.push("kiwi"));
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// console.log(fruits.push());
// console.log(fruits.pop()); //orange poped
// console.log(fruits);

// fruits.splice(2 , 0 , "kiwi");
// console.log(fruits);

// console.log(fruits.indexOf("mango" , 1));
// console.log(fruits.lastIndexOf("mango" , 5));
// console.log(fruits.includes("grapes"));

// const months = ["jan" , "march" , "April" , "June" , "July"];
// console.log(months);
// months.splice(months.length , 0 , "Dec");
// console.log(months);
// // console.log(months.IndexOf("march"));
// months.splice(months.indexOf("march") , 1 , "March");
// console.log(months);
// months.splice(months.indexOf("June") , 1);
// console.log(months);
// //---------------------------------------------------------------

// let val =3; // want to dlt 3 fromm array
// const num = ['1' , '2' , '3' , '4' , '5' , '3' , '7' , '9'];
// let updateArr = num.filter((currNum) => {
//     return currNum != val;
// });
// console.log(updateArr);

// const num = ['1' , '8' , '2' , '3' , '4' , '5' , '3' , '7' , '5' , '9'];
// console.log(num.sort((a , b) => {
//     if(a>b) return 1;
//     if(a<b) return -1;
// }));
// console.log(num.sort((a , b) => {
//     if(a>b) return -1;
//     if(a<b) return 1;
// }));
// console.log([...new Set(num)]);

// const result = num.map((curElem) => {
//     if(curElem%2 === 0)
//     {
//         return curElem*curElem;
//     }
// }).filter((curElem) => curElem!=undefined);
// console.log(result);

//  const price = [100 , 800 , 200 , 300 , 400 , 500 , 700 , 900];
// const totalPrice = price.reduce((accum , curEle) => {
//     return accum + curEle;
// } , 0);
// console.log(totalPrice);
// //-------------------------------------------------------------

// const checkAllVowel = (str) =>{  // check if vowel are present
//     const vowel = "aeiou";
//     for(let char of vowel)
//     {
//         // console.log(str.includes(char));
//         if(! str.includes(char))//this is for all the vowels present if one is missing it is false
//         {
//             return false;
//         }
//     }
// };
// console.log(checkAllVowel("Behtar ha k sheron ko sikha dain ram e ahoo"));

// const checkAllVowel = (str) =>{ 
//     let count = 0;
//     const vowel = "aeiou";
//     for(let char of str)
//     {
//         // console.log(str.includes(char));
//         if(vowel.includes(char)) 
//         {
//             count++;
//         }
//     }return count;
// };
// console.log(checkAllVowel("Behtar ha k sheron ko sikha dain ram e ahoo"));

// const pangramChecker = (str) => {
//     let inputArr = str.toLowerCase().split("");
//     const values = inputArr.filter((curElem) => 
//     curElem.charCodeAt() >= "a".charCodeAt() &&
//     curElem.charCodeAt() <= "z".charCodeAt() 
// );
// // console.log(values);
// return [... new Set(values)].length === 26;
// };

// console.log(pangramChecker("the quick brown fox jumps over the lazy dog"));

// console.log(Math.abs(0.0003));
// console.log(Math.round(0.0003));
// console.log(Math.ceil(0.0003));
// console.log(Math.floor(-4.7)); //ground value
// console.log(Math.trunc(-4.7)); //integer value
// console.log(Math.pow(2 , 5));
// console.log(Math.random() *100);
// //-------------------------------------------------------------------

// let parent = document;
// console.log(parent);
// console.log(document);
// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.body.firstElementChild);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild); 

// array.forEach(element => {
     
// });

// //---------------------------------------------------------------

// localStorage.setItem("lS1" , "local1");
// localStorage.setItem("lS2" , "local2");
// localStorage.setItem("lS3" , "local3");
// localStorage.getItem("lS3");
// localStorage.getItem("lS2");
// localStorage.getItem("lS1");
// localStorage.removeItem("lS3");
// localStorage.removeItem("lS2");
// localStorage.removeItem("lS1");

// let myArray = ["hello" , "this" , "is" , "JSON" , "stringify"];
// let arrayAsString = JSON.stringify(myArray);

// console.log(arrayAsString); // Output: '[1,"hello",true,null]'

// let stringArray = JSON.parse(arrayAsString);
// console.log(stringArray);
// //-------------------------------------------------------------------------------

// console.log(new Date(2032,8));

// const dateString = "2025-09-09T16:22:34.274Z"
// console.log(new Date(dateString));

// console.log(new Date(958710112000));
// //1757420224000
// const curMilli = new Date().getTime();
// console.log(curMilli);
// const milli = 1757420224000;
// const dateFromMilli = new Date(milli);
// console.log(dateFromMilli);

// console.log(new Date().toLocaleString());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toLocaleTimeString());
// console.log(Date.now());
// //-------------------------------------------------------------------------------

// console.log(this);

// function showThis(){
//     console.log(this);
// }
// showThis();

// const person = {
//     name: "Ali",
//     greet: function(){
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// person.greet();

// const obj = {
//     name: "Ali",
//     greet: function(){
//         console.log(this); //in function this refering to object
//     }
// }
// obj.greet();
// //------------------------------------------------------------------

// const sum = (... num) =>{
//    return num.reduce((accm , curVal) => (accm = accm + curVal) , 0);
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));
// //------------------------------------------------------------------------------------

//  console.log(Number.MAX_SAFE_INTEGER);

// let num = 1;
// for (let square = 1; square <= 64; square++) {
//     console.log(`Square ${square}: ${num} grains`);
//     num = num * 2; // Prepare for the next square
// }

// console.logs((2**64)-1);
// //-----------------------------------------------------------------------------------

// const mathOperation = (a , b , operation) => {
//     return operation(a , b);
// }
// const add = (a , b) => {
//     return a+b;
// }
// console.log(mathOperation(25 , 25 , add));
// // //-----------------------------------------------------------------------------------------------

// const promise = new Promise(function(resolve , reject){
//     setTimeout(() => {
//         resolve("after 3");
//     } , 3000)
// });

// function promiseFunction()
// {
//     return new Promise((resolve , reject) => {

//     })
// }