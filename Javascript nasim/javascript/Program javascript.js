 /* output system by Javascript */ 
//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();
document.querySelector(".Nasim").innerHTML="<h1>Learn from NASIM Tutorials</h1>";
document.write("<h1>Learn Javascript Output </h1>");
   console.log("Learn Javascript");

// Variable in JAVASCRIPT
// var
// let
//const
var nazmul,nasima,laboni,nzrul;
nazmul="age is 19";
nasima="age is 36";
laboni="age is 23";
nzrul="age is 42"

document.write(" Nazmul "+nazmul+" Nasima "+nasima+" Laboni "+laboni+" Nzrul"+nzrul+"<br/>");

var n =10;
var m =15;
var g ="<button style='width:10rem;height:3rem;text-align:center;background:black;color:white;border:.3rem solid green;font-size:1.6rem;'>Start</button>";
var r =" <br/><button style='width:10rem;height:3rem;text-align:center;background:black;color:white;border:.3rem solid green;font-size:1.6rem;'>Stop</button>";
document.querySelector(".varialbe").innerHTML= n+m;
document.write(g);
document.write(r);
var i =1;

while( i < 25){
    document.write(i+ ".Meherun ");
    ++i;
}
// JavaScript Operator + - * /  ** ++ --

var number1 =15;
var number2 = 25;
var br = "</br>";
var resultp = number1+number2+br;
var resultm = number1-number2+br;
var resultmm = --number1+br;
var resultpp = ++number2+br;
var resultnn = number1**2 +br;
document.write(br);
document.write(resultp);
document.write(resultm);
document.write(resultmm);
document.write(resultpp);
document.write(resultnn);

// JavaScript data types
/*
srting 
number 
Object
array (originally object)
Null
undifinqed 
boolean
*/

var a ="<h1>Hello data types</h1>";/* string type data*/
var b =500.01; /* Number*/
var c =["Nazmul","Robin","Shove","tamjid"];/* Array (is is called as Object in javascript)*/
var d ={name:"Nazmul",Address:"Mymensingh",profession:"Freelanecr"};/*Object*/
var e= true; /* booleam, it contains only tow values (true/false) */
var f = null;
var g =undefined;
document.querySelector(".data_types").innerHTML= a ;
document.querySelector(".data_types1").innerHTML= typeof a ;
document.querySelector(".h11").innerHTML= typeof b ;
document.querySelector(".h2").innerHTML= typeof c ;
document.querySelector(".h3").innerHTML= typeof d ;
document.querySelector(".h4").innerHTML= typeof e ;
document.querySelector(".h5").innerHTML= typeof f ;
document.querySelector(".h6").innerHTML= typeof g ;

/*javascript Comparison Operators */
// == Ewuals to someting
/*
var h ="Nazmul";
var I =Nazul;
h==I -> true;
*/
/* === Equals value & type to someting*/
/*
var h ="Nazmul";
var I =Nazul;
h==I -> false;
*/
/*
// < (5 < 10 ? true)less than to someting

// > (10>5 ? true)Greater than to someting

// <= (20 <= 20 ? true)Equal or less than to someting

// >= (20 >= 20 ? true)Equal or greater than to someting 
? (comparision)*/
/*
&& ->AND , || -> OR, ! -> NOT

!=, Not verstion of "==" Operator

!==, Not verstion of "===" Operator
*/
document.querySelector(".data_types_Eaxple").innerHTML="<h1>javascript Comparison Operators:</h1>";

var regUserName = "Nazmul";

var userInputU="Nazmul"


var result =(regUserName == userInputU) ? "Login success":"login failed";

document.querySelector(".data_types_Eaxples ").innerHTML=result;

var minAge=18;

var regAge=17;

var resultAge=(minAge < regAge) ? "You can register!":"You are too young for reggister"
var resultAge1= ( (minAge > regAge) == true ) ? "You can register! ":"You are too young for reggister "


document.querySelector(".data_types_Eaxples1").innerHTML= resultAge;
document.querySelector(".data_types_Eaxples2").innerHTML= resultAge1;

var enteringPerson = "teacher";

var resulEnter = (enteringPerson =="teacher"|| enteringPerson == "madam" || enteringPerson=="parents") ?"Welcome to my house!": "we don't know you!"

document.querySelector(".data_types_Eaxples3").innerHTML=resulEnter;


var country = "bangladesh";
var age=18;
var enterPerson="freelaner";

var regResult=(country=="bangladesh" && age==18 && enterPerson=="freelaner") ? "Registration successfull":"You are not allowed";


document.querySelector(".data_types_Eaxples4").innerHTML= regResult;
var country="bangladesh"

var age=19;

var person="freelaner"

var Formresult= ( (country=="bangladesh" || country=="india" || country=="pakistan") && (age >=18 && person=="freelaner") ) ? "  you are perfect person for us" : "you are a worried person for us";


document.querySelector(".data_types_Eaxples5").innerHTML= Formresult;


/* functions of javascript*/

document.querySelector(".function").innerHTML="<h1>Start Function :</h1>";

var bkashTaka =10000;
var percent =2;
var resultofTaka = bkashTaka/100*percent;
var productResult=bkashTaka-resultofTaka;

document.querySelector(".function1").innerHTML= resultofTaka;

document.querySelector(".function2").innerHTML= productResult;

var productPrice=1550;
var tax=15;
var productresults= productPrice-productPrice/100*tax;

document.querySelector(".function3").innerHTML= productresults;

function functionbutton(){
    
 return '<button style="background:orange;border:.3rem solid black;width:20rem;height:4rem;font-size:2rem;color:white;font-weight:bold;">Function button</button>';

    
}


document.querySelector(".function4").innerHTML= (functionbutton()+" add This is my button and I can extra function in this class ");

function taxcal( price,tax,byuer){
    var productp=price;
    var percent=tax;
    var totalPrice=price-productp/100*percent;
    return totalPrice +  byuer;
}

 document.querySelector(".Mobile").innerHTML= taxcal(16000,12.5,"  Taka byuer Name Nazmul");
 document.querySelector(".laptop").innerHTML= taxcal(26000,14.5,"  Taka byuer Name Sumaya");
 document.querySelector(".computer").innerHTML= taxcal(46000,15.5,"  Taka byuer Name Meherun");

// parameter function

function biogkoro(fnumber,lnumber){
    var a = fnumber;
    var b = lnumber;
    return a-b;
}
console.log(biogkoro(50,34));

var jogkoro = function(){
    console.log(20+45);
}
jogkoro();
// this is a nested functions
function myname(){
    return "my name is ";
}
    function name(){
        return "Nazmul";
    }
function nameAndage(){
    return myname() + name()+" And age is 19 year old.";
    
}
document.querySelector(".function6").innerHTML= nameAndage();
/*  Object in JavaScript */


var car ={
    name : "Toyota Corolla",
    Price : 3500000,
    Color : "Red wine",
    WheelSize : "15",
    tax : 30,
    function :function(Amaderdiscount){
        
        var carPrice = this.Price;
        var tax = this.tax;
        var pricewithtax = carPrice/ 100 *tax + carPrice;
        var myDiscount = Amaderdiscount;
        var reducemoney = pricewithtax/100 *myDiscount;
        var finalPrice = pricewithtax-reducemoney;
        return finalPrice;
    }
};
document.querySelector(".carName").innerHTML= car.name;
document.querySelector(".Price").innerHTML= car.Price;
document.querySelector(".color").innerHTML= car.Color;
document.querySelector(".wheelSize").innerHTML= car.WheelSize;
document.querySelector(".finalprice").innerHTML= car.function(15);

// different way of object 

var car = {};

car.name ="x corolla";
car.Price = "5000000";
car.tax = "12";
car.Color = "orange";
car.WheelSize = "15";
car.function=function(){
    return "I ma a method"
};

// updatre a property

//car.name = "toyota corolla";
//delet car.name
console.log(car.function() );

//console.log(car);



/* JAVASCRIPT ARRAY  */
// Array in [string, number,boolean (true/false),object,array]

var introduction = ["Bangladesh","Nazmul islam","19","hsc"];
var details = [
    [
        "Nazmul Islam","Mohidul Islam","Sulaiman Islam","Ashik khan","saidul Islam","Sujon Islam","Md Aminul Islam"
    ],[
        "23","16","18","19","24","17"
    ],[ "dhaka","sylet","borisal","chittagong","Mymensingh","khulna","Rajshahi","Rangpur"
    ],[
        "psc","jsc","ssc","hsc"
    ]
]

document.querySelector(".Array3").innerHTML= introduction[0];
document.querySelector(".Array1").innerHTML= introduction[1];
document.querySelector(".Array2").innerHTML= introduction[2];
document.querySelector(".Array4").innerHTML= introduction[3];
console.log(details);

document.querySelector(".Nazmul .name").innerHTML=details[0][0];
document.querySelector(".Nazmul .age").innerHTML=details[1][3];
document.querySelector(".Nazmul .contry").innerHTML=details[2][4];
document.querySelector(".Nazmul .pass").innerHTML=details[3][3];

document.querySelector(".Mohidul .name").innerHTML=details[0][1];
document.querySelector(".Mohidul .age").innerHTML=details[1][0];
document.querySelector(".Mohidul .contry").innerHTML=details[2][0];
document.querySelector(".Mohidul .pass").innerHTML=details[3][1];

document.querySelector(".sulaiman .name").innerHTML=details[0][2];
document.querySelector(".sulaiman .age").innerHTML=details[1][4];
document.querySelector(".sulaiman .contry").innerHTML=details[2][4];
document.querySelector(".sulaiman .pass").innerHTML=details[3][1];

document.querySelector(".ashik .name").innerHTML=details[0][3];
document.querySelector(".ashik .age").innerHTML=details[1][2];
document.querySelector(".ashik .contry").innerHTML=details[2][4];
document.querySelector(".ashik .pass").innerHTML=details[3][3];

document.querySelector(".saidul .name").innerHTML=details[0][4];
document.querySelector(".saidul .age").innerHTML=details[1][2];
document.querySelector(".saidul .contry").innerHTML=details[2][3];
document.querySelector(".saidul .pass").innerHTML=details[3][2];

document.querySelector(".sujon .name").innerHTML=details[0][5];
document.querySelector(".sujon .age").innerHTML=details[1][1];
document.querySelector(".sujon .contry").innerHTML=details[2][4];
document.querySelector(".sujon .pass").innerHTML=details[3][2];

document.querySelector(".aminul .name").innerHTML=details[0][6];
document.querySelector(".aminul .age").innerHTML=details[1][3];
document.querySelector(".aminul .contry").innerHTML=details[2][4];
document.querySelector(".aminul .pass").innerHTML=details[3][2];

// array with ne system


var details2= new Array("Md Nazmul islam",["Md Ashik Islam","Md Sujon Isalm"], "Md Mohidul Islam","Md Sulainam Isalm")

console.log(details2);

var arraysystem=[];

arraysystem[0]="mymensingh"
arraysystem[1]="Dhaka"
arraysystem[2]="chittagong"
arraysystem[3]="khulna"
arraysystem[4]="rajsahi"
arraysystem[5]="Sylet"
arraysystem[6]="borisal"
arraysystem[7]="Rogpur"

console.log(arraysystem);

var details3 =[];

details3["name"]="Meherun","Akhi","Sweeti","Riya","Shaleha","Sumona","Sumi";
details3["Age"]="11","12","13","14","15","16","17";
details3["Adress"]="Khulna","Mymensingh","Kishorgonj","Dinajpur","Cumilla";
details3["address"]="arraysystem";
details3["Relationship"]="in love";

console.log(details3);

var employes =[];
employes[0]={
    name:"Namzul",age:"30",designation:"Freelaner",
    isActive:true
};
employes[1]={
    name:"Ashik",age:"28",designation:"web desiner",
    isActive:true
};
employes[2]={
    name:"Sujon",age:"20",designation:"graphics desiner",
    isActive:true
};

console.log(employes);
console.log(employes.length);

var arrayLength=employes.length;

var i=0;
while(i < 3){
    console.log("Name : "+ employes[i].name+", age : "+employes[i].age+", Designation :"+employes[i].designation);
    ++i;
}


// Loops in Programming Language(JS)

var i =1;

while( i < 10){
    console.log(i+" while loop"+" Meherun ");
    ++i;
}

// Math .random()

var x = Math.random() * 99999;
console.log(x.toFixed());

var IDx= 1;

while(IDx < 10){
var IdNumber = Math.random() * 99999;
console.log(IdNumber.toFixed());
++IDx;
}

// for loop in js
  var jsin="for loop"
for(let id2 =0; id2 < 10; ++id2){
  
    console.log(id2 +" "+ jsin);
}
// do while loop
let counter1=1;
do{
    console.log(counter1 + " do while lop");
    ++counter1;
}while(counter1 < 10);

// for of loop

var names=["Namzul isalm","meherun","akhi","mohidul"];

var namesLength=names.length;
var counter=0;

for (let myname of names){
    console.log(myname);
}

for (let myname of names){
    if(myname==="akhi"){
        console.log(myname +" is not real");
    }
}
// for in loop

var myallinformation={
    name:"Md Nazmul Islam",
    Father_Name:"Md Nzrul Isalm",
    Mother_name:"Nasima Akter",
    sisther_Name:"Laboni",
}

for(name in myallinformation){
    console.log(name+" : "+myallinformation[name]);
}

for(name in myallinformation){
    console.log(`properties : ${name} & value:${myallinformation[name]}`);
}

// for each loop
var good_boys=["Md MOhidul Islam","Md Saju Miya","Md Sabir Isalm","Imran Islam"];
good_boys.forEach(function(values,indexes){
    console.log(indexes+" "+values);
});

// if else, else if conditions


let dbpassword ="nasima143";
let typePassword="143nasima";

if(dbpassword == typePassword){
    console.log("log in success")
}else{
        console.log("log id failed");
    }
if(dbpassword !== typePassword){
    console.log("log in success")
}else{
        console.log("log id failed");
    }

const login ={Userame:"Md Nazmul islam",Email:"mdmnla033@gamil.com",Password:"nasima143",confiram:"nasima143",country:"Bangladesh",Religion:"Islam"};

if (login.Userame=="Md Nazmul islam" && (login.country=="Bangladesh"|| login.country=="india"|| login.country=="pakithan") && login.Email=="mdmnla033@gamil.com" && login.Password=="nasima143" && login.confiram=="nasima143" && login.Religion=="Islam"){
    console.log("Registration Successfull");
}else{
    console.log("Restricted country or password");
}

const Exam_result={Nazmul:"73",Onik:"85"};

if(Exam_result.Nazmul>= 80 && Exam_result.Nazmul<= 100){
    console.log("Nazmul was got A+ on the Exam.")
}else if(Exam_result.Nazmul>= 70 && Exam_result.Nazmul<= 79){
    console.log("Nazmul was got A on the Exam.")
}else if(Exam_result.Nazmul>= 60 && Exam_result.Nazmul<= 69){
    console.log("Nazmul was got -A on the Exam.")
}else if(Exam_result.Nazmul>= 50 && Exam_result.Nazmul<= 59){
    console.log("Nazmul was got b on the Exam.")
}else if(Exam_result.Nazmul>= 40 && Exam_result.Nazmul<= 49){
    console.log("Nazmul was got c on the Exam.")
}else if(Exam_result.Nazmul>= 33 && Exam_result.Nazmul<= 39){
    console.log("Nazmul was got d on the Exam.")
}else if(Exam_result.Nazmul>= 0 && Exam_result.Nazmul<= 32){
    console.log("Nazmul was got f on the Exam.")
}else{
     console.log("Result is not scan")
}


// Alert / Confirm box in javacsript 

//var cbox= confirm(" do you like our website");
//
//if(cbox){
//    alert(" thanks you so much");
//}else{
//    alert(" soorry for incovience")
//}
//
//document.querySelector(".confirmbox").innerHTML=cbox;

// switch statement in javascript

var myI= document.querySelector(".switch").value;
switch(myI){
    case "1":document.querySelector(".switch1").innerHTML=("I am one ");
        break;
    case "2": document.querySelector(".switch1").innerHTML=(" i am two");
        break;
    case "3" : document.querySelector(".switch1").innerHTML=(" I am three");
        break;
    case "4":document.querySelector(".switch1").innerHTML=(" I am four");
        break;
    default:document.querySelector(".switch1").innerHTML=(" I am nothing");
}





















