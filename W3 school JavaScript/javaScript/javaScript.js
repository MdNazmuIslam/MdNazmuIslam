// add class 
document.querySelector(".W3s").addEventListener("mouseover",function(){
    document.querySelector(".W3s").classList.add("addw3s");
    document.querySelector(".W3s h1").classList.add("addw3s1");
});
// remove class 
document.querySelector(".W3s").addEventListener("mouseout",function(){
    document.querySelector(".W3s").classList.remove("addw3s");
    document.querySelector(".W3s h1").classList.remove("addw3s1");
});

// css style by javaxript 
var button1=document.querySelector(".button1");
 button1.style.color="white";
 button1.style.background="black";
button1.style.width="25%";
button1.style.height="4rem";
button1.style.fontSize="1.6rem";
button1.style.border=".2rem solid orange";
button1.style.marginTop="3rem";

// date and time display 
document.querySelector(".button1").addEventListener("click",function(){
    document.querySelector("#date h3").innerHTML=Date();
})

// count center string or objects(indexof(),search())


var countstring = "Please locate where locate occurs"
var countresult =countstring.indexOf("occurs");
var countresult1 =countstring.lastIndexOf("locate");
document.querySelector(".string").innerHTML="count string = "+countstring;
document.querySelector(".string1").innerHTML="indexOf = "+countresult;
document.querySelector(".string2").innerHTML="lastIndexOf = "+countresult1;

// slice(), 
var slicemin="aplpe, banana,kiwi,anar" ;
var sliceminslice=slicemin.slice(7);
var sliceminslice1=slicemin.slice(7-15);
document.querySelector(".slice").innerHTML="var = "+ slicemin;
document.querySelector(".slice1").innerHTML="slice(7) = "+ sliceminslice;
document.querySelector(".slice2").innerHTML="slice(7-15) = "+ sliceminslice1;

//substring

var substrings="My name is  NAzmul islam, I am a student of class xi";
var substrings1=substrings.substring(7,18);

document.querySelector(".substring").innerHTML="string var = "+substrings;
document.querySelector(".substring1").innerHTML="substring(7,18) = "+substrings1;

// string Replace ();

var replces="he is goes to Dhaka"
var replaces1=replces.replace("Dhaka","Mymesingh")

document.querySelector(".Repace").innerHTML="var = "+replces;
document.querySelector(".Repace1").innerHTML="after = "+replaces1;

// toUpperCase(), toLowerCase()
var textUC="she is my sister. "
document.querySelector(".textUC").innerHTML="Min text = "+textUC;
document.querySelector(".textUC1").innerHTML="After touppercase = "+textUC.toUpperCase();

var textLC=textUC.toLowerCase();

document.querySelector(".textLC").innerHTML="Min text = "+textUC.toUpperCase();
document.querySelector(".textLC1").innerHTML="After lowercase = "+textLC;

// concat()

var concats= "I am her brother.";
var concatsr=textUC.concat(concats);

document.querySelector(".concat").innerHTML="Min text 1 = "+concats+" and 2 = "+textUC;
document.querySelector(".concat1").innerHTML="After concat = "+concatsr;

// charAT()

var chaeat="Select text by charAt methods";
var charat=chaeat.charAt(10);

document.querySelector(".charAt").innerHTML="Min Text = "+chaeat;
document.querySelector(".charAt1").innerHTML="Afther selcted texts = "+charat;


// split() make string to array

var split1=" Md Nazmul islam Md Nzrul islam";
var splitarr=split1.split(",");

document.querySelector(".split").innerHTML="Min text = "+split1;
document.querySelector(".split1").innerHTML="after split = "+splitarr;



// number methods 

// toExponential() methods

var tet=9.543;
var tet1=tet.toExponential();
var tet2 =tet.toExponential(4);


document.querySelector(".tet").innerHTML="min text = "+tet;
document.querySelector(".tet1").innerHTML=tet1;
document.querySelector(".tet2").innerHTML=tet2;

// tofixed 

var tofixed=53.2344545
var tofixed1=tofixed.toFixed();
var tofixed2=tofixed.toFixed(3);

document.querySelector(".tofixed").innerHTML="Min number = "+tofixed;
document.querySelector(".tofixed1").innerHTML="afther toFixed = "+tofixed1;
document.querySelector(".tofixed2").innerHTML="afther toFixed(3) = "+tofixed2;

// toPrecision()
var topr=45.2334434;
var topr1=topr.toPrecision(2);
var topr2=topr.toPrecision(5);
var topr3=topr.toPrecision(7);

document.querySelector(".toprecision").innerHTML="Min Number = "+topr;
document.querySelector(".toprecision1").innerHTML="after toPrecisin(2) = "+topr1;
document.querySelector(".toprecision2").innerHTML="after toPrecisin(5) = "+topr2;
document.querySelector(".toprecision3").innerHTML="after toPrecisin(7) = "+topr3;

//valuefo()

var valueofn=256;
var valueof1=valueofn.valueOf();
var valueof2=valueofn.valueOf(3);

document.querySelector(".valuefo").innerHTML=" Min Number = "+valueofn;
document.querySelector(".valuefo1").innerHTML="After valueof = "+valueof1;
document.querySelector(".valuefo2").innerHTML="After valueof (3) = "+valueof2;

//parsefloat()

var number11="20";
var number22=parseFloat(number11);
var num=typeof(number22)

document.querySelector(".parsefloat").innerHTML=" Min string = "+number11;
document.querySelector(".parsefloat1").innerHTML=" use parsefloat() and convert number = "+number22;
document.querySelector(".parsefloat2").innerHTML=" use parsefloat() and convert number = "+num;

//parseInt()

var parseint="53 this a number";
var parseint1=parseInt(parseint);

document.querySelector(".parseint").innerHTML=" Min string = "+parseint;
document.querySelector(".parseint1").innerHTML="convert number and just show number = "+parseint1;

// array methods

// push () afther array add and unshift brefore array add

var push1=["banana","Orange","Apple","Mango"];
var push2=["banana","Orange","Apple","Mango"];
var push3=push2.push("lemon");

document.querySelector(".push").innerHTML="Min arrays = "+push1;
document.querySelector(".push1").innerHTML="after push ('lemon') = "+push2;

//join() methods

var join1=["sumaya is my jan","sumaya is my wife","sumaya is my love"]
var join2=join1.join(" * ");

document.querySelector(".join").innerHTML="Min arrays = "+join1;
document.querySelector(".join1").innerHTML="Afther use join methods = "+join2;

// pop() =  after array cut and shift = brefore arrays cut 
var pop1=["Nazmul","nasima","laboni","Nzrul","sumaya"];
var pop2=["Nazmul","nasima","laboni","Nzrul","sumaya"];
var pop3=pop2.pop("sumaya");

document.querySelector(".pop").innerHTML="Min arrays = "+pop1;
document.querySelector(".pop1").innerHTML=" After pop(' sumaya ') = "+pop2;

//splice () 

var splice1=["Meherun","akhi","riya","sweeti","shaleha"];
var splice4=["Meherun","akhi","riya","sweeti","shaleha"];
var splice2=["Meherun","akhi","riya","sweeti","shaleha"];
var splice3=splice2.splice(2.4,"sumi","sumona");
var splice5=splice4.splice(3,5)


document.querySelector(".splice").innerHTML=" min arrays = "+splice1;
document.querySelector(".splice1").innerHTML=" After splice(0,2,'sumi','sumona') = "+splice2;
document.querySelector(".splice2").innerHTML=" After splice(3,5) = "+splice4;

// sort()
var sort1=["Nazmul","Ashik","sujon","akhi","Eva"];
var sort2=["Nazmul","Ashik","sujon","akhi","Eva"];
var sortnumber=[10,23,,4,52,60,,62,56,54,59,]
var sort3=sort2.sort();
function sortf(){sortnumber.sort(function(a,b){return a - b});
             document.querySelector(".sort2").innerHTML="After used sort() = "+sortnumber;
                }
function sortf1(){sortnumber.sort(function(a,b){return a + b});
             document.querySelector(".reverse2").innerHTML="After used sort() = "+sortnumber;
                }

document.querySelector(".sort").innerHTML="min array = "+sort1;
document.querySelector(".sort1").innerHTML="After used sort() = "+sort2;


// Reverse()

var reverse1=["Nazmul","Ashik","sujon","akhi","Eva"];
var reverse2=["Nazmul","Ashik","sujon","akhi","Eva"];
var reverse3=reverse2.reverse();

document.querySelector(".reverse").innerHTML=" Min arrays = "+reverse1;
document.querySelector(".reverse1").innerHTML=" after use reverse() = "+reverse2;

// math.max apply

var mma1=[40,100,2,434,5,26,34,]
function mma11(MMA2){
    return Math.max.apply(null,MMA2);
}
document.querySelector(".mma1").innerHTML=" main Numbers all = "+mma1;
document.querySelector(".mma2").innerHTML="max Number faind out = "+mma11(mma1);

// math.min,apply

function mma111(mm){
    return Math.min.apply(null,mm)
}
document.querySelector(".mma3").innerHTML="Min Number faind out = "+mma111(mma1);

// forEach methods

var num1=[13,233,,43,34,4,22,34,,44,324,24,24]
var pushnum1="";
num1.forEach(zugf);

function zugf(value,index,array){
    pushnum1 = pushnum1+value+"</br>";
}

document.querySelector(".foreach").innerHTML=" Min Numbers = "+num1;
document.querySelector(".foreach1").innerHTML="afther foreach(zug) = "+pushnum1;

// map methoed 

var num2=[23,34,54,43,,44,23,];
var num22=num2.map(map1);
function map1(gun){
    return gun *2;
}
document.querySelector(".map").innerHTML="Main Munbers ="+num2;

document.querySelector(".map1").innerHTML=" After map(map1) "+num22;

//  fliter methods

var num3= [23,45,56,56,34,334,323,]
var num33=num3.filter(num333);
var num34=num3.filter(num334);
function num333(value,index,array){
    return value > 100;
}
function num334(value,index,array){
    return value < 100;
}
document.querySelector(".filter").innerHTML="Miain numbers = "+num3;
document.querySelector(".filter1").innerHTML=" filter > 100 = "+num33;
document.querySelector(".filter2").innerHTML=" filter < 100 = "+num34;

// reduce methods 
var num4 =num3.reduce(num44);
var num444 =num3.reduce(num44,1000);
function num44(total,value,indx,array){
    return total + value;
}

document.querySelector(".reduce").innerHTML=" mian Numbers = "+num3;
document.querySelector(".reduce1").innerHTML=" after reduce = "+num4;
document.querySelector(".reduce2").innerHTML=" after reduce ( num44,1000 ) = "+num444;

// very or some methods

var num5=num3.every(function(num){
    return num > 10;
});
var num555=num3.some(function(num){
    return num > 1000;
});
document.querySelector(".very").innerHTML=" mian Numbers = "+num3;
document.querySelector(".very1").innerHTML="very methods =( num > 10 ) "+num5;
document.querySelector(".some").innerHTML="some methods =( num < 1000 ) "+num555;

// indexof methods 

var names=["nazmul"," Nasima","nazrul","Laboni","Nazmul","Nasima","Nasima"];
var names1=names.indexOf("Nazmul");
var names11=names.indexOf("Nasima");

document.querySelector(".index").innerHTML=" main array = "+names;
document.querySelector(".index1").innerHTML= " after indexof = "+names1;
document.querySelector(".index2").innerHTML= " after indexof = "+names11;


// js date() methods
var d1= new Date();
var d= new Date();
var months = ["january"," february","March","April","May","jane","August","September","October","November","December"];
var days=["saturday","sunday","Monday","Tuesday","wednesday","Thrsday","friday"];

document.querySelector(".date").innerHTML="today date is = "+Date();
document.querySelector(".date1").innerHTML="today date is = "+d1.toDateString();
document.querySelector(".date4").innerHTML=" getdate ()= "+d1.getDate();
document.querySelector(".date5").innerHTML=" getFullYear ()= "+d1.getFullYear();
document.querySelector(".date6").innerHTML=" getmoth ()= "+d1.getMonth();
document.querySelector(".date2").innerHTML="date is editing date(2019,12,29,4,45,0) = "+new Date(2019,11,29,4,45,0);
document.querySelector(".date3").innerHTML= months [d.getMonth()];
document.querySelector(".date7").innerHTML=" getdays = "+ days [d.getDate()];
document.querySelector(".date8").innerHTML=" set days months and year = "+ d.setDate(d.getDate()+20);

// math.round()
document.querySelector(".IP").innerHTML=Math.IP;
document.querySelector(".round").innerHTML="Main Number 345.5655";
document.querySelector(".round1").innerHTML="After math.round = "+Math.round(345.5655);

// pow methods

document.querySelector(".pow").innerHTML=" Main Number (4,3)";
document.querySelector(".pow1").innerHTML=" after math.pow(4,3) = "+Math.pow(4,3);

// sqrt() methods ()

document.querySelector(".Sqrt").innerHTML=" Main Number 100";
document.querySelector(".Sqrt1").innerHTML="after Sqrt(99) = "+Math.sqrt(100);
// math abs 

document.querySelector(".abs").innerHTML="Main Number -25 <br> After math.abs(-25) = "+Math.abs(-25);
// math.ceil

document.querySelector(".ceil").innerHTML="Main Munber = 25.65 <br> afher math.ceil = "+Math.ceil(25.65);
// math.floor

document.querySelector(".floor").innerHTML="main Number = 22.355 <br> after math.floor = "+Math.floor(22.355);
// math.min

document.querySelector(".mathmin").innerHTML="Main array [0,150,30,20,-8,-200] <br> after math.min = "+Math.min(0,150,30,20,-8,-200);
// math max
document.querySelector(".mathmax").innerHTML="Main array [0,150,30,20,-8,-200] <br> after math.max = "+Math.max(0,150,30,20,-8,-200);

// math.random
document.querySelector(".random").innerHTML="use math.random() = "+Math.random()+"</br> and Math.random(123456) = "+Math.random(12345);














