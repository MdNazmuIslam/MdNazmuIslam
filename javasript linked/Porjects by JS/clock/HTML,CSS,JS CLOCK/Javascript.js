const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
var date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

let hrposition = (hr*360/12)+(min*(360/60)/12);
let minposition = (min*360/60)+(sec*(360/60)/60);
let secposition = sec*360/60;

function runTheClock(){

 hrposition = hrposition+(3/360);
 minposition = minposition+(6/60);
 secposition=secposition +6;

 HOURHAND.style.cssText="transform:rotate("+hrposition +"deg)";
 MINUTEHAND.style.cssText="transform:rotate("+minposition +"deg)";
SECONDHAND.style.cssText="transform:rotate("+secposition +"deg)";
    
}

var interval = setInterval(runTheClock, 1000);
var date = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days= ["Saturday", "Sunday", "Monday", "Thuesday", "Wednesday","Thursday","Firday" ];

function myClcok(){
    var date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
document.querySelector(".months").innerHTML= months[date.getMonth()];
document.querySelector(".Date").innerHTML= days[date.getDay()+1];
document.querySelector(".hour").innerHTML= hr;
document.querySelector(".Minutes").innerHTML= min;
document.querySelector(".Seconds").innerHTML= sec;
}


var interval2 = setInterval(myClcok,1000);



