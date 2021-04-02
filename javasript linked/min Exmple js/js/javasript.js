document.querySelector(".titale").style.background = "orange";
var tatile=document.querySelector(".titale");
tatile.style.cssText=" padding:1rem; color:white; background:orange; text-align:center"
//change Element
document.querySelector(".changee").innerHTML="you have change me by javasript";

//attributes set and get\

const attri = document.querySelector(".attributes a");

if(attri.hasAttribute("target")){
    console.log(attri.getAttribute("target"));
}else{
    attri.setAttribute("target","_blank");
}

console.log(attri);

//clock create 

const deg =6; 
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");



setInterval(() =>{ 
let day = new Date();
let hh = day.getHours() *30;
let mm = day.getMinutes() *deg;
let ss = day.getSeconds() * deg;

hr.style.transform = 'rotateZ(${(hh)+(mm/12)}deg)';
mn.style.transform = 'rotateZ(${mm}deg)';
hr.style.transform = 'rotateZ(${ss}deg)';


 })