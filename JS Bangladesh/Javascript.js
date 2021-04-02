
/* Number to string */
let string1,string2,date1,date2,date22,boolean1,boolean2,array1,array2,number1,number2,StoN1,StoN2,StoN3,StoN4,StoN5; 
string1=5555;
string11 = typeof(string1);
string2 = String(5555);
string22 = typeof(string2);
//output 

document.querySelector(".string1").innerHTML=`string1=5555 = typof : ${string11} ` ;
document.querySelector(".string2").innerHTML=`string2 = String(5555) = typof : ${string22} ` ;

// Date to string 

date1= typeof(new Date());
date2=String(new Date());
date22= typeof(date2)
//output
document.querySelector(".date1").innerHTML= `date1= typeof(new Date()) = typeof : ${date1} `;
document.querySelector(".date2").innerHTML= `date2=String(new Date()) = typeof : ${date22} `;


//Boolean to string 

boolean1= true;
boolean2= String(boolean1);



//output
document.querySelector(".boolean1").innerHTML=`boolean1= ture = Typeof : ${ typeof boolean1}`;
document.querySelector(".boolean2").innerHTML=`boolean2= String(boolean1) = Typeof : ${ typeof boolean2}`;


// array to string 


array1=[1,2,3];

array2 = String(array1);


//output
document.querySelector(".array1").innerHTML=`array1={1,2,3} = Typeof : ${ typeof array1}`;
document.querySelector(".array2").innerHTML=`array2 = String(array1); = Typeof : ${ typeof array2}`;

//Number to string

number1= 555;
number2= (555).toString();

//output
document.querySelector(".number1").innerHTML=`number1= 555; = Typeof : ${ typeof number1}`;
document.querySelector(".number2").innerHTML=`number2= (555).toString();; = Typeof : ${ typeof number2}`;

//string to Number

StoN1= "Nazmul islam";
StoN2= Number(StoN1);

StoN3= "555.5644";
StoN4= parseInt("555.5644");
StoN5= parseFloat(StoN4);
StoN6= StoN5.toFixed(2);


//output
document.querySelector(".StoN1").innerHTML=`StoN1= "Nazmul islam"; = Typeof : ${ typeof StoN1}`;
document.querySelector(".StoN2").innerHTML=`StoN2= Number(StoN1); = Typeof : ${ typeof StoN2}`;
document.querySelector(".StoN3").innerHTML=`StoN3= "555.5644"; = output = ${StoN3} = Typeof : ${ typeof StoN3}`;
document.querySelector(".StoN4").innerHTML=`StoN4= parseInt("555.5644"); = output = ${StoN4} = Typeof : ${ typeof StoN4}`;
document.querySelector(".StoN5").innerHTML=`StoN5= parseFloat(StoN4); = output = ${StoN5}  = Typeof : ${ typeof StoN5}`;
document.querySelector(".StoN6").innerHTML=`StoN6= StoN5.toFixed(2); = output = ${StoN6} = Typeof : ${ typeof StoN6}`;


// pat two Math Methods Start 

let math1,math2,math3,math4,math5,math6,math7,math8,math9,math10,math11,math12,math13,math14,math15,math16,math17,math18;

math1 = Math.E;
math2 = Math.PI;
math3 = Math.round(7.3);
math4 = Math.ceil(7.3);
math5 = Math.floor(2.9);
math6 = Math.sqrt(64);
math7 = Math.pow(3,4);
math8 = Math.abs(-5);
math9 = Math.min(5,56,54,43,23,12,43,523,32);
math10 = Math.max(5,56,54,43,23,12,43,523,32);
math11 = Math.random();
math12 = Math.trunc(2.9);
math13 = Math.sign(4);
math14 = Math.log10(100);
math15 = Math.tanh(9);

document.querySelector(".math1").innerHTML=`math1 = Math.E =  result = ${math1} `;
document.querySelector(".math2").innerHTML=`math2 = Math.PI =  result = ${math2} `;
document.querySelector(".math3").innerHTML=`math3 = Math.round(7.3); =  result = ${math3}`;
document.querySelector(".math4").innerHTML=`math4 = Math.ceil(7.3); =  result = ${math4}`;
document.querySelector(".math5").innerHTML=`math5 = Math.floor(2.9); =  result = ${math5}`;
document.querySelector(".math6").innerHTML=`math6 = Math.sqrt(64); =  result = ${math6}`;
document.querySelector(".math7").innerHTML=`math7 = Math.pow(3,4); =  result = ${math7}`;
document.querySelector(".math8").innerHTML=`math8 = Math.abs(-5); =  result = ${math8}`;
document.querySelector(".math9").innerHTML=`math9 = Math.min(5,56,54,43,23,12,43,523,32); =  result = ${math9}`;
document.querySelector(".math10").innerHTML=`math10 = Math.max(5,56,54,43,23,12,43,523,32); =  result = ${math10}`;
document.querySelector(".math11").innerHTML=`math11 = Math.random(); =  result = ${math11}`;
document.querySelector(".math13").innerHTML=`math12 = Math.trunc(2.9); =  result = ${math12}`;
document.querySelector(".math14").innerHTML=`math13 = Math.sign(4); =  result = ${math13}`;
document.querySelector(".math15").innerHTML=`math14 = Math.log10(100); =  result = ${math14}`;
document.querySelector(".math15").innerHTML=`math15 = Math.tanh(9); =  result = ${math15}`;



function funtion1(){
    document.querySelector(".math12").innerHTML=`${math12} and ${math13} is love percentage is ${math14}%`;  
}



// love caculator 

math12 = document.querySelector(".firsName").value;
math13 = document.querySelector(".parterName").value;
math14 = Math.random() *100;
math14 = Math.floor(math14);

/* Math Methods end

/* string Methods start  */

let str,str1,str2,str3,str4,str5,str6,stringtest,stringinput;

 
str1=" first course of this chanel is about JavaSrcipt";
str2= " and we will learn more thing too";
str3 = " Hi all My name is Nazmul Islam. I am 20 year old. i read in class ten "
str4 =" I love programing, "
str5 =" I love programing, ";
str6 ="   I Love my Mother       ."

//output
document.querySelector(".str").innerHTML=`str1= ${str1} `;
document.querySelector(".str1").innerHTML=`str= ${str2} `;
document.querySelector(".str1").innerHTML=`str1= ${str1} `;
document.querySelector(".str2").innerHTML=`str1.charAt(4) = Result =  ${str1.charAt(4)}`;
document.querySelector(".str3").innerHTML=`str1.charCodeAt(4) = Result =  ${str1.charCodeAt(4)}`;
document.querySelector(".str4").innerHTML=`str1.concat(str2) = Result =  ${str1.concat(str2)}`;
document.querySelector(".str5").innerHTML=`str1.endsWith("JavaSrcipt") = Result =  ${str1.endsWith("JavaSrcipt")}`;

document.querySelector(".str6").innerHTML=`str1.includes("this") = Result =  ${str1.includes("this")}`;
document.querySelector(".str7").innerHTML=`String.fromCharCode(115) = Result =  ${String.fromCharCode(115).toUpperCase()}`;
document.querySelector(".str8").innerHTML=`Str1.indexOf("this") = Result =  ${str1.indexOf("this")}`;
document.querySelector(".str10").innerHTML=`Str3.lastIndexOf("a") = Result =  ${str3.lastIndexOf("a")}`;
document.querySelector(".str9").innerHTML=`str3= ${str3} `;
document.querySelector(".str11").innerHTML=`str3.match("Nazmul") = Result = ${str3.match("Nazmul")}`;
document.querySelector(".str12").innerHTML=`str4.repeat(3) = Result = ${str4.repeat(3)}`;
document.querySelector(".str13").innerHTML=` ${str5}`
document.querySelector(".str14").innerHTML=` = str5.replace(/love/g,"head") Result = ${str5.replace(/love/g,"head")}`
document.querySelector(".str15").innerHTML=`str3.search("Nazmul") = Result = ${str3.search("Nazmul")}`;
document.querySelector(".str16").innerHTML=`str3.slice(5,10) = Result = ${str3.slice(5,10)}`;
document.querySelector(".str17").innerHTML=`str3.split("M") = Result = ${str3.split("M")}`;
document.querySelector(".str18").innerHTML=`str3.startsWith("I") = Result = ${str3.startsWith("I")}`;
document.querySelector(".str19").innerHTML=`str3.substr(4,7) = Result = ${str3.substr(4,7)}`;
document.querySelector(".str20").innerHTML=`str3.substring(4,7) = Result = ${str3.substring(4,7)}`;
document.querySelector(".str21").innerHTML=`str5.toUpperCase() = Result = ${str5.toUpperCase()}`;
document.querySelector(".str22").innerHTML=`str5.toLowerCase() = Result = ${str5.toLowerCase()}`;
document.querySelector(".str23").innerHTML=`str6 = Result = ${str6}`;
document.querySelector(".str24").innerHTML=`str6.trim() = Result = ${str6.trim()}`;

// string test start

stringtest = document.querySelector(".stringtest input");


stringinput = stringtest.value;
let userNameupper = stringinput.toUpperCase();
let userNameLower = stringinput.toLocaleLowerCase();
let firstlltter = userNameupper.slice(0,1);
let totalength = stringinput.length;
let sliceinputlower = userNameLower.slice(1, totalength);


function stringfun1(){
    alert(" Result " +firstlltter + sliceinputlower +" length is "+ totalength );
};
/* string Methods end */

/* array Methods start */
let a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37,a38;
const numbers = [22,34,43,65, 32, 77];
const numbers1=[27,38,44,33,232,252,] 
const numbers2 = new Array( 25, 45, 56, 76, 54,);
const color = ["red","yellow","green","orange"];
const mixed = [26, "Hello", true, undefined, null, {a:1, b:2}, new Date()];

a1 = numbers.length
a2 = Array.isArray(numbers);
a3 = numbers[3];
a4 =numbers[0]=25;
a5 = numbers.indexOf(32);
a6 =numbers.push(100);
a7 = numbers.unshift(5);
a8 = numbers1.pop();
a9 = numbers1.shift();
a10 = [54,5,534,3,432,34,,45,46]
a11 = a10.splice(2,4);
a12 = [1,2,3,4,5,6]
a13 = a12.reverse();
a14 = numbers.concat(numbers1);
a15=color.sort();
a16 = [23,43,23,57,,78,98,954,5]
a17 = a16.sort(function(x,y){return x+y})
a18= numbers1.find(function(num){return num >20});
a19 = ["red","yellow","green","orange"];
a20 = a19.copyWithin(2,0);
var fruits = ["Banana", "Orange", "Apple", "Mango"];
a21= fruits.entries();
var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
a22= fruits1.fill("catberry",3)
var numbers3 = [32, 33, 16, 40];
a23 = numbers3.filter(function(age){return age>=18;});
var ages1 = [4, 10, 18, 20];
a24= ages1.findIndex(function(ages){return ages >=18});
var fruits2=["orange","red","yellow","blue"]
a25=fruits2.forEach(foreachf);
a26 =Array.from("Nazmul");
a27 =fruits1.includes("Orange");
a28 = fruits2.join(fruits1);
var numbers4 =[4, 9, 16, 25];
a29=numbers4.map(Math.sqrt);
var numbers5 =[175, 80, 25,60];
a30=numbers5.reduce(function(total,num){return total - num});
a31 =ages1.some(function(x){return x>=10});










//uotput
document.querySelector(".Number").innerHTML=`number = ${numbers}`;
document.querySelector(".a1").innerHTML=` a1 = numbers.length = Result = ${a1}`;
document.querySelector(".a2").innerHTML=` a2 = Array.isArray(numbers); = Result = ${a2}`;
document.querySelector(".a3").innerHTML=` a3 = numbers[3]; = Result = ${a3}`;
document.querySelector(".a4").innerHTML=` a4 =numbers[0]=25; = Result = ${numbers}`;
document.querySelector(".a5").innerHTML=` a5 = numbers.indexOf(32); = Result = ${a5}`;
document.querySelector(".a6").innerHTML=` a6 =numbers.push(100);
 = Result = ${numbers}`;
document.querySelector(".a7").innerHTML=` a7 = numbers.unshift(5);
 = Result = ${numbers}`;
document.querySelector(".a8").innerHTML=`numbers1 = ${numbers1}`;
document.querySelector(".a9").innerHTML=` a8 = numbers1.pop(); = Result = ${numbers1}`;
document.querySelector(".a10").innerHTML=` a9 = numbers1.shift();
 = Result = ${numbers1}`;
document.querySelector(".a11").innerHTML=` a10 = Result = ${a10}`;
document.querySelector(".a12").innerHTML=` a11 = a10.splice(2,4);
 = Result = ${a10}`;
document.querySelector(".a13").innerHTML=` a12 = Result = ${a12}`;
document.querySelector(".a14").innerHTML=` a13 = a12.reverse();
 = Result = ${a13}`;
document.querySelector(".a15").innerHTML=` a14 = numbers.concat(numbers1);
 = Result = ${a14}`;
document.querySelector(".a16").innerHTML=` color = Result = ${color}`;
document.querySelector(".a17").innerHTML=` a15=color.sort(); = Result = ${a15}`;

document.querySelector(".a18").innerHTML=` a17 = a16.sort(function(x,y){return x+y}) = Result = ${a17}`;
document.querySelector(".a19").innerHTML=` a18= numbers1.find(function(num){return num >20}); = Result = ${a18}`;
document.querySelector(".a20").innerHTML=` a20 = a19.copyWithin(2,0); = Result = ${a20}`;
for (x of a21){
    document.querySelector(".a21").innerHTML += x + " ";
}
document.querySelector(".a22").innerHTML=` a22= fruits1.fill("catberry",3)
 = Result = ${a22}`;
document.querySelector(".a23").innerHTML=` a23 = numbers3.filter(function(age){return age>=18;});
 = Result = ${a23}`;
document.querySelector(".a24").innerHTML=` a24= ages1.findIndex(function(ages){return ages >=18}); = Result = ${a24}`;
function foreachf(x, index){
    document.querySelector(".a25").innerHTML +=`${index} : ${x}, `
};
document.querySelector(".a26").innerHTML=` a26 =Array.from("Nazmul"); = Result = ${a26}`;
document.querySelector(".a27").innerHTML=` a27 =fruits1.includes("Orange"); = Result = ${a27}`;
document.querySelector(".a28").innerHTML=` a28 = fruits2.join(fruits1); = 
Result = ${a28}`;
document.querySelector(".a29").innerHTML=` a29=numbers4.map(Math.sqrt);
 = Result = ${a29}`;
document.querySelector(".a30").innerHTML=` a30=numbers5.reduce(function(total,num){return total - num});
 = Result = ${a30}`;
document.querySelector(".a31").innerHTML=` aa31 =ages1.some(function(x){return x>=10}); = Result = ${a31}`;




/* array Methods end */

/* if, else if, else, Conditions start   */

const Nazmul = [
    "Nazmul", 20,"students","bongubundo collage"
]

if (Nazmul[0] == "Nazmul" ){
    document.querySelector(".condition1").innerHTML=" Your Name is Namzul Islam ";
} else if(Nazmul[1] == Nazmul[0]){
          document.querySelector(".condition1").innerHTML=" Not find your name ";
          }else{
              document.querySelector(".condition1").innerHTML=" find not anthing ";
          }


/* if, else if, else, Conditions end   */

/*  switch Mehods start */

const switch1 = "unsome";

switch(switch1){
    case "some":
        document.querySelector(".switch1").innerHTML=" You are right ";
        break;
        case "unsome":
        document.querySelector(".switch1").innerHTML=" You are wrong ";
        break;
    default:
        document.querySelector(".switch1").innerHTML=" Typ some thing  ";
}


/*  switch Mehods end */

/* loops start */

/* while loop */ 
var Names1 = ["Nazul","Nasima","Nazrul","Laboni","Meherun","Mohidul"];
document.querySelector(".while").innerHTML=`Names1 = ${Names1}`;
var while1="";
var i =0;
while( i<Names1.length){
    document.querySelector(".while1").innerHTML +=i +" "+Names1[i]+"<br>";
    i++;
};
/* do while loop */ 
var Names2 = ["Nazul","Nasima","Nazrul","Laboni","Meherun","Mohidul"].reverse();
document.querySelector(".while3").innerHTML=`Names2 = ${Names2}`;

var i=0;
do{
    document.querySelector(".while3").innerHTML +=i+", "+ Names2[i]+"<br>";
    i++;
}while(i<Names2.length);

/* for loop  */ 
var Names3 = ["Nazul","Nasima","Nazrul","Laboni","Meherun","Mohidul"];

for ( i=0; i< Names3.length; i++){
    if(i == 0) continue;
//    if(i == 0) brack;
    document.querySelector(".for1").innerHTML +=i+", "+Names3[i]+" <br>";
};

/* for of */
var numbers6 = [
    {name: "Nazmul Isalm",age :20, profession : "student"},
    {name: "Mohidul Isalm",age :24, profession : "shop seller"},
    {name: "Bosih Isalm",age :29, profession : "house worker"},"hello"
]



for (x in numbers6[0]){
    document.querySelector(".forin2").innerHTML +=` ${x} = ${numbers6[0][x]} `;
}

var numbers7="";


function fE(value,index, array){
    numbers7 =numbers7 + value+"<br>";
}
numbers6.forEach(fE);

document.querySelector(".fE1").innerHTML =numbers7;
var numbers8 =["nazmul","sumona","nazrul","sumi","Jisan","happy","alamin","nila"];
var number9 ="";
for ( let x of numbers8){
    number9 += x+ "<br>"; 
}
document.querySelector(".fof1").innerHTML =number9;
document.querySelector(".fof1").style.textTransform="capitalize";

//time of loop

let timeloop = 10000000;
let myArray = new Array(timeloop);
console.time("for")

console.timeEnd("for")
for (let i=0; i <timeloop; i++){};
console.time("while")

while (i <timeloop) {
    i++};
console.timeEnd("while")

console.time("forEach")
myArray.forEach(elm=> "")
console.timeEnd("forEach")

console.time("for..of")
for (elem of myArray){};
console.timeEnd("for..of")

//console.time("for")
//
//console.timeEnd("for")


/* loops end */


/* DOM start */


/*  selector start  */ 
document.getElementById("qclass").innerHTML="getElementById";
var getclass = document.getElementsByClassName('getid');
getclass.innerHTML="hi"
document.querySelector("#qs").innerHTML="querySelector";

/*  selector start  */ 




















/* DOM end  */








