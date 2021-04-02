//variables
var nazmul_islam,nzrul_Islam;

nazmul_islam="variables"
nzrul_Islam="I learn "
document.write(nzrul_Islam+nazmul_islam);

// data types

// convert string to number
var num1= "125";

num1=parseInt(num1);

console.log( typeof num1);
// if "120.55"

var num2="120.55";

num2=parseFloat(num2);
console.log( "convert string to number = '120.55' to "+ typeof num2);
console.log( "convert string to number = '125' to "+ typeof Number("125"));
console.log("convret (true and false) number"+ Number(true));
//if fixed (120.557576);

var hello=120.557576;
console.log("use tofixed = "+hello.toFixed(2));

//Library function 
// most important
//var login_enter=prompt("enter your name:");

var textE1="Md Namul Isalm";
var textE2="My Name is ";
// concat
var myName=textE2.concat(textE1);
// charAt
document.write("<br/>"+textE1.charAt(6));
// toUpperCase
document.write("<br/>"+textE1.toUpperCase());
// toLowerCase
document.write("<br/>"+textE1.toLowerCase());
//concat
document.write("<br/>"+myName);
// slice
var slicetext1=textE1.slice(5,8);
document.write("<br/>"+slicetext1);
/*
// task - 2

var userfname1=prompt("Enter you first name :");
var userlname1=prompt("Enter you last name :");
var fullname1=userfname1+userlname1;
var nameupperCase1=fullname1.toUpperCase();
var totallengh1=fullname1.length;
var slictext2=fullname1.charAt(7,9);
document.write("<br/> full name is "+fullname1+"<br/> total Length"+totallengh1+"<br/> upperCase name is "+nameupperCase1+"<br/> pint 7-9 charAt: "+slictext2);
*/
/*
// task-3


var num3=prompt("enter first number: ");
var num4=prompt("enter Second number: ");

var num5=parseInt(num3);
var num6=parseInt(num4);

var num7=num5+num6;
var num8=num5-num6;
var num9=num5*num6;
var num10=num5/num6;
var num11=num5%num6;

document.write("task 3");
document.write("<br/>"+num3+" + "+num4+" = "+num7);
document.write("<br/>"+num3+" - "+num4+" = "+num8);
document.write("<br/>"+num3+" * "+num4+" = "+num9);
document.write("<br/>"+num3+" / "+num4+" = "+num10);
document.write("<br/>"+num3+" % "+num4+" = "+num11);

*/

// swich function ( switch,case,break,default)

var digit ="1" //prompt ("enter any digit : ");
switch(digit){
       case "0":
        console.log("zero");break;
        case "1":
          console.log("one"); break;
        case "0":
        console.log("zero");
        case "1":
          console.log("one");break; 
         case "2":
        console.log("two");break;
        case "3":
          console.log("three"); break;
        case "4":
        console.log("four");break;
        case "5":
          console.log("five");break;
        case "6":
        console.log("six");break;
        case "7":
          console.log("seven"); break;
        case "8":
        console.log("Eight");break;
        case "9":
          console.log("Nine");break;   
        case "0":
        console.log("zero");break;
        case "1":
          console.log("one");break;
    default:
        console.log("not a digit");
       }
var nazmul1="143nasima143"
switch(nazmul1){
    case "nasima143":
    case "143nasima":
    case "143nasima143":
        console.log("password is right");break;
    default:
        console.log("Password is wrong");
       }
/*
if (digit == 0){
    console.log("zero");
}else if(digit==1){
    console.log("one");
}else if(digit==2){
    console.log("two");
}else if(digit==3){
    console.log("three");
}else if(digit==4){
    console.log("four");
}else if(digit==5){
    console.log("five");
}else if(digit==6){
    console.log("six");
}else if(digit==7){
    console.log("seven");
}else if(digit==8){
    console.log("eignth");
}else if(digit==9){
    console.log("nine");
}else{
    console.log("not a digit");
}

*/
// loops

// for loop
document.write("<h1>loops </h1>");

document.write("<h2> for loops </h2>");

for(var forloopc=1;  forloopc<=10; forloopc= forloopc+1){
    document.write(" <br/>"+forloopc+" N+M "); 
};
document.write("<br/> bajur number".toUpperCase());
for(var forloopc=1;  forloopc<=30; forloopc= forloopc+2){
    document.write(" "+forloopc+" "); 
};
document.write("<br/> zur number".toUpperCase());
for(var forloopc=0;  forloopc<=30; forloopc= forloopc+2){
    document.write(" "+forloopc+" "); 
};
document.write("<br/> juk fol number (1+2+3+4+5) = ".toUpperCase());
sum =0;
for(var forloopc=1; forloopc<= 5;forloopc=forloopc+1 ){
    sum = sum+forloopc;
     
};
   document.write(sum);

document.write("<br/> <h2> while loop </h2>".toUpperCase());
var whileloop=1;
while(whileloop<6){
    document.write(" i am "+whileloop + " you are use while loop <br>");
    whileloop++
};

document.write("<br/>juk fol (2+4+6 -- 100) = ".toUpperCase());

var whileloop=2;
var cNamber=0;

while(whileloop<= 100){
    cNamber=cNamber+whileloop;
    whileloop++;
}
    document.write(" "+cNamber+" <br/>");

/*
task - 6
*/
var task6=1;
var tnamber=0;

while(task6<=50){
        if(task6 % 3==0 && task6 % 5===0 ){
            document.write( " "+task6);
            tnamber=tnamber+task6;
        }
        task6++;
}

document.write(" result ="+tnamber);

document.write("<br/><h3> do while loop</h3> = ".toUpperCase());
var dowhile1=1;

do {
    document.write(" " +dowhile1+" do while");
    dowhile1++;
}while(dowhile1 <= 10);


// break & continue
document.write(" <br/><h3> break & continue </h3>")
document.write(" <br/> break=")
for ( var bc=1; bc<=100; bc++){

    if(bc === 10){
        break;
    }
        document.write(" "+ bc);
}

document.write(" <br/> continue=");
do{ if (bc==10){
    break;
}
    document.write(" "+bc);
    bc++;
}while(bc<= 100);

for( var bc1 =1; bc1<=50; bc1++){
    if(bc1==10 || bc1==20 || bc1==5 || bc1==25){
        continue;
    }
    document.write(" "+bc1);
}
// function 
document.write("<br/> <h3>function</h3> <br/>".toUpperCase())
function addition(zuk1,zuk2){
    var zukfol=zuk1+zuk2;
    document.write(" + function : "+zuk1 +" + "+ zuk2 +" = Answer : "+ zukfol);
}

 addition(2,70);

function addition1(boik,boik1){
    var biokfol=boik-boik1;
    document.write(" <br/><br/> - fuction : "+boik+" - "+boik1+" = Answer :"+biokfol)
}
addition1(80,40);

function addition2(gun,gun1){
    var gunfol=gun*gun1;
    document.write(" <br/><br/> * fuction : "+gun+" * "+gun1+" = Answer :"+gunfol)
}
addition2(80,40);

function addition3(vag,vag1){
    var vagfol=vag/vag1;
    document.write(" <br/><br/> / fuction : "+vag+" / "+vag1+" = Answer :"+vagfol)
}
addition3(80,40);

// array is  an objcet; collection of variables

// array push();
document.write("<br/> <h3> Array </h3>")
var myarray=["Nazmul","Nzrul","Nasima","Laboni",]

document.write("<br/> Min Array = "+myarray);
document.write(" <br/> Length = "+myarray.length);
myarray.push("taslima","Sakibul");
myarray.shift("Mohidul");
document.write("<br/><h3>push</h3> After push array = " +myarray);
document.write("<br/> After push Length = " +myarray.length);

myarray.pop();

document.write("<br/> <h3>pop</h3> After pop Length = " +myarray.length);

//  array use loops 
document.write("<br/> arrays = ")
var myarray1=[25,62.,826,866,65,97];
total=0;
for (var x1=0; x1 < 6; x1++){
    document.write(" "+myarray1[x1]);
    total=total  + myarray1[x1];
}
document.write("<br/> total + answer =" +total);

//  array methods
document.write("<br/> <h1>array methods</h1> ");
document.write("<h3> concat() method this method add one varialbe to and two varialbes </h3> ");
var shif1=["anis ","rebiya ","kolpona "]
var shif2=[" ashik ","sujon ","Hordoy ","saidul ","sulaiman "]
// concat method 
document.write(shif1.concat(shif2));
// shif methods
document.write("<h3> shif method </h3> ");

shif2.shift();
document.write(shif2);

// unshif methods
document.write("<h3> unshif method opposite of push method </h3> ");
document.write("min var array = "+shif2+" <br/>");
shif2.unshift("Ashik");
document.write("unshif method add a string in var array = "+shif2);
// splice methods

document.write("<h3> splice method (){ this method can add elements and remove elements }</h3> ");

document.write("min var = "+shif2);

document.write("<h4> add elements by slpice() </h4>");
//add 
shif2.splice(2,0,"Rabvi","Mohidul");

document.write(shif2);

document.write("<h4> remove elements by spice() </h4>");
// remove
shif2.splice(2,4);
document.write(shif2);

// slice mehtod 

document.write("<h3> slice method (){ this method can add elements and remove elements but this can not change min variables }</h3> ");
var slice1=shif1.concat(shif2);
document.write(" Min variables = "+slice1);
document.write("<h4> remove elements by slice(3,6) </h4>");
document.write(slice1.slice(3,6));
document.write("<h3> sort method (){ this method style a,b,c - z}</h3> ");
// sorte
var sorteName = slice1.sort();
document.write(" Min variables = "+slice1);
document.write("<br/><h3> After sort</h3> "+sorteName);

document.write("<h3> reverse method (){ this method style z--c,b,a}</h3> ");
// sorte
document.write(" Min variables = "+sorteName);
document.write("<br/><h3> After reverse</h3> "+sorteName.reverse());
// number sorte 

document.write("<h3> reverse and sort method (){ number sorte and reverse }</h3>");

var number5=[30,83,9,876,23,4443,234,];
document.write("<br/> min nuber =  "+number5+" ");
number5.sort(function(a,b){
    return a-b;
});
document.write(" <br/> sort number = "+number5);
number5.sort(function(a,b){
    return a+b;
});
document.write(" <br/> revers number = "+number5);

document.write(" <br/> <h1> Object , print the value of an Objcet and adding a constructor </h1>  ");

// objcet  

function student(name,age,JPA,Subject){
    this.name=name;
    this.age=age;
    this.JPA=JPA;
    this.Subject=Subject;
    this.display = function(){
        document.write(this.name);
        document.write(this.age);
        document.write(this.JPA);
        document.write(this.Subject);
    };
};
var student1=new student("Md Namzul Islam ",19," A ",[" bangla "," English "," Math "]);
var student2=new student("Md Mohidul Islam ",24," A+ ",[" bangla "," English "," accounting "]);
var student3=new student("Md Hordoy Islam ",18," A+ ",[" Scince "," English "," ICT "]);

document.write("<br/>"+student1.display());
document.write("<br/>"+student2.display());
document.write("<br/>"+student3.display());

// create a gemes by
/*
    var numwon=0;
    var numlost=0;
for( var guessnum=0; guessnum<=5; guessnum++){
var guessNumber= parseInt(prompt("Enter a number form 1 to 5 : "))
var rendomnuber=Math.floor(Math.random()*5)+1;

if(guessNumber===rendomnuber){
   console.log("you have won");
    numwon++;
}else{
     console.log(" you have won You have lost. rendom munber ");
    numlost++;
}
    
}
console.log("Won Number : "+numwon);
console.log("Lost Number : "+numlost);
*/
// add images
var imgadd=document.querySelector("#mypic");

function add(){
    imgadd.src=Photo[0];
}

//Saider Photo

var Photo = ["images/s1.jpg","images/s2.jpeg","images/s3.jpeg","images/s4.jpeg","images/s5.jpg","images/s6.jpg","images/s7.jpg"];
var imageTag=document.querySelector("#sPic");
var count=0;
function mypic1(){
    count++;
    if(count>= Photo.length){
        count=0;
       imageTag.src = Photo[count];
    }else{
         imageTag.src = Photo[count];
    }
   
}
function mypic(){
        count--;
    if(count < 0){
        count= Photo.length -1;
       imageTag.src = Photo[count];
    }else{
         imageTag.src = Photo[count];
    }
}

// how to select html elements or add class and remove class

document.querySelector(".change").style.background="black";
document.querySelector(".change").style.color="white";
document.querySelector(".change").style.textAlign="center";
document.querySelector(".change").style.border=".5rem solid orange";
document.querySelector(".change").style.fontSize="2rem";

document.querySelector(".addclass").classList.add("addc");
document.querySelector(".addclass button").onclick=(function(){
    document.querySelector(".addclass").classList.remove("addc");
})
//  Create element and remove element

var createh3=document.createElement("h3");
var h3text=document.createTextNode("this text create by javascript");

createh3.appendChild(h3text);

var myoiv=document.querySelector(".createlement");

myoiv.appendChild(createh3);

//var removetext=document.getElementsByClassName("h3")[1];
//myoiv.removeChild(removetext);
var createh1=document.getElementsByClassName("h3")[1];
var createh0=document.createElement("h3");
var h3text0=document.createTextNode("add this text by method inserBrfore javascript ");

myoiv.insertBefore(h3text0,createh1);
//  Eventlistener,function add, text change and text Replase

document.querySelector(".button1").addEventListener("click",function(){
    var text=this.innerHTML;
    document.querySelector(".cvent h2").innerHTML=text+" is clicked";
});
document.querySelector(".button2").addEventListener("click",function(){
    var text=this.innerHTML;
    document.querySelector(".cvent h2").innerHTML=text+" is clicked";
});
document.querySelector(".button3").addEventListener("click",function(){
    var text=this.innerHTML;
    document.querySelector(".cvent h2").innerHTML=text+" is clicked";
});

// play audio uncomplet 

/*
for( var task00=0; task00 < 3; task00++){
    
    document.querySelectorAll(".Audiog")[task00].addEventListener("click",function(){
    var text1=this.innerHTML;
        console.log(text1)
        switch(text1){
            case "a":
                var audio = new Audio("audio/asmane1.mp3");
                audio.play();
                break;
            case "b":
                var audio = new Audio("audio/asmane2.mp3");
                audio.play();
                break;
            case "c":
                var audio= new Audio("audio/Namaj.mp3");
                audio.play();
                break;
        }
       
})

}
*/
function button1(){
                var audio = new Audio("audio/asmane1.mp3");
                audio.play();
}
function button2(){
                var audio = new Audio("audio/asmane2.mp3");
                audio.play();
}
function button3(){
          var audio= new Audio("audio/Namaj.mp3");
            audio.play();
}
// keypress 
var count = 0;

document.querySelector("#text11").addEventListener("keypress",function(event){
    count++;
    var text111 =event.key;
    document.querySelector(".hello").innerHTML =" you have pressed = "+count+" word";
})

// eanvas


var c = document.querySelector(".mycanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle="black";
ctx.fillStyle="green";
ctx.fillRect(10,10,330,180);
ctx.strokeRect(10,10,300,280);
var centerx =c.width / 2;
var centery = c.height / 2;
ctx.beginPath();
ctx.arc(centerx,centery,50,0,2*Math.PI,false);
ctx.fillStyle="red";
ctx.fill();
ctx.stroke();

// for each
document.write("<h2>for each </h2>");
let number43 =[23,32,4,5,6,67,];
document.write("<h3>for loop </h3>");
for (let x=0; x<= number43.length; x++){
   document.write(number43[x]+" ");
}
document.write("<h3>for each loop </h3>");
const number42 = [23,32,45,656,45,4,5,6,67,];

number42.forEach(eachfunction)

function eachfunction(x){
    document.write(x+" ");
}

document.write("<h3>for each loop +5 array</h3>");

number42.forEach(function(x,index,arr){
    arr[index]=x+5;
})
document.write(number42);

document.write("<h1>for each loop, map ,filter</h1>");

var minforeache= [];

number42.forEach(function(x){
    minforeache.push(x*x);
    
})
document.write(minforeache);

// map 
document.write("<h1> map loops </h1>");
var number41=number42.map(function(x){
    return (x*x);
})
console.log(number41);

document.write("<h1> filter loops </h1>")
// filter add condition and print then
var number41=number43.filter(function(x){
    return x>10;
})
document.write(number41);

// arrow 

document.write("<h1> arrow  function</h1>");


const number45 =(num22,num222) => number42+number41;

document.write(number45(3,5)+" ");
document.write("<h3> Normal function find array Name</h3>");
let studentresult=[
    {Name:"Nazmul",GPA:3.44,clas:"ten",id:102},
    {Name:"Ashik",GPA:2.94,clas:"ten",id:202},
    {Name:"Mohidul",GPA:3.45,clas:"eight",id:123}]

function studentName(){
    return studentresult.filter(function(x){
        return x.GPA>3;
    }).map(function(y){
        return y.Name;
    });
}
document.write( studentName());

document.write("<h3> arrow  function</h3>");

const studentresult11 =()=>{ return studentresult.filter((x) => x.GPA > 3).map((y)=>y.Name)}

document.write(studentresult11());

document.write("<h1> Erro headling </h1>");

// healing error 

try{
    document.write("<h3> Erro headling  by try and catch</h3>");
    Document.write("hello everyone ");
}catch(Error){
    document.write(Error);
}
//}finally(
//
//)

document.querySelector("#chakedb").addEventListener("click",function(){
  var put= document.querySelector("#writtext").value;
    document.querySelector(".showtext").innerHTML=put;
})
// Throw functiopn use

document.querySelector("#show1").addEventListener("click",function(){
    var output1=document.querySelector("#write1").value;
    document.querySelector("#mytext").innerHTML=output1;
    try{
        if( output1<5){
            throw" input is too low"
        }else if(output1 > 15){
            throw"input in too high"
        }
    }catch(error){
        document.querySelector("#mytext").innerHTML=error;
}
})













