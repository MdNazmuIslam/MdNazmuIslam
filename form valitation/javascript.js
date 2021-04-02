function validate() {
    let usename = document.getElementById("user").value.trim();
    let password = document.getElementById("pass").value.trim();

    if (usename == "" || password == "") {
        alert(" No blank value allowed");
        return false;
    } else {
        return true;
    }
}

function validate1() {
    let user = document.getElementById("user1");
    let pass = document.getElementById("pass1");
    let username = String(user.value.trim());
    let password = String(pass.value.trim());
    if (username == "") {
        user.style.border = " 1px solid red";
        return false;
    } else if (username.length <= 2) {
        user.style.border = "solid 1px red";
        return false;
    } else if (password == "") {
        pass.style.border = " 1px solid red";
        return false;
    } else if (password.length < 6) {
        pass.style.border = "solid 1px red";
        return false;
    } else {
        return true;
    }

}

function emailvalidate() {
    let user = document.getElementById("user2");
    let pass = document.getElementById("pass2");
    let em = document.getElementById("eamil2");
    let username = String(user.value.trim());
    let password = String(pass.value.trim());
    let email = String(em.value);
    let validate = /^([a-xA-Z0-9\.-]+)$/;
    let regx = /^([a-xA-Z0-9\.-]+)@([a-xA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    let regx2 =regx.test(email);

    if (username == "" || username.length < 3) {
        user.style.border = "solid 1px red";
        return false;
    } else if (password == "" || password.length < 6) {
        pass.style.border = "solid 1px red";
        return false;
    } else if (email == "") {
        em.style.border = "solid 1px red";
        return false;
    }else if(regx.test(email)){
        em.style.border = "solid 1px green";
        return true;
    }
    else if(regx2 == false){
        em.style.border = "solid 1px red";
        return false;
    }else{
        return true;
    }
}

//Project one form validation

function animatedform(){
    let allarrow = document.querySelectorAll(".fa-arrow-down");
    allarrow.forEach(validite);
}
function validite(arrow) {
        arrow.addEventListener("click",()=>{
            const input = arrow.previousElementSibling;
            const parent= arrow.parentElement;
            const nexform = parent.nextElementSibling
            
            if(input.type ==="text" && validateUser(input)){
                nexSlider(parent,nexform);
            }else if(input.type ==="email" && validateEamil(input)){
                      nexSlider(parent,nexform);
            }else if(input.type==="password" && validateUser(input)){
                nexform(parent,nexform);
            }else{
                parent.style.animation="shake 0.5s ease"
            }
            parent.addEventListener("animationend",()=>{
                parent.style.animation="";
            })
        })
    }

function validateUser(user){
    if(user.value.length<6){
        error("rgb(189,87,87)");
    }else{
        error("rgb(87,189,130)");
        return true;
    }
}
function validateEamil(email){
    const validation =  /^([a-xA-Z0-9\.-]+)@([a-xA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    
    if(validation.test(email.value)){
         error("rgb(87,189,130)");
        return true;
    }else{
        error("rgb(189,87,87)");
    }
    
}
function nexSlider(parent, nexform){
    parent.classList.add("innactive");
    parent.classList.remove("active");
    nexform.classList.add("active");
}

function error(color){
    const bg=document.querySelector(".project1");
    bg.style.backgroundColor= color;
}
animatedform();

/*project one end*/


/*project two start*/

/*   not complete     */

window.addEventListener('load',()=>{
    let long;
    let lat
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
           long =position.coords.longitude;
            lat = position.coords.latitude;
            
            const api='https://api.darksky.net/forecast/fd9c6418c23d94745b836767721ad1/${lat},${long}';
            
            
            fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            console.log(data);
        });
            
            
        });
        
    }
    
})


/*project two end*/



/*project three start*/

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImgaes = document.querySelectorAll(".carousel-slide img");
const prebtn = document.querySelector(".prebtn");
const Next = document.querySelector(".Next");



let counter =1;
const slide = carouselImgaes[0].clientWidth;

carouselSlide.style.transform="translate('+(-size * counter)+ 'px)";

Next.addEventListener('click',()=>{
   carouselSlide.style.transition ="transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform="translate('+(-size * counter)+ 'px)";
    console.log(counter);
});

prebtn.addEventListener('click',()=>{
   carouselSlide.style.transition ="transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform="translate('+(-size * counter)+ 'px)";
    console.log(counter);
});

/*project three end*/

/*project two start*/
/*project two end*/