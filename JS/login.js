const form = document.querySelector(".login-form");
const userNameInput = document.getElementById("username");
const passwordInput = document.querySelector("#password");

const buttonRegister = document.querySelector(".btn-register")

document.addEventListener("keydown",function(e){
    if (e.key==="Enter") {
        
    }
})

let users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users)

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    
})

buttonRegister.addEventListener("click",function(){
    window.open("register.html", "_blank");

})