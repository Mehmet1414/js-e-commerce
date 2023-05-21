const form = document.querySelector(".login-form");
const userNameInput = document.getElementById("username");
const passwordInput = document.querySelector("#password");

const buttonRegister = document.querySelector(".btn-register");
const errorUserName = document.querySelector("#errorUserName");
const errorPassword = document.querySelector("#errorPassword");
const errorUser = document.querySelector("#errorUser")

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
  }
});

let users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (userNameInput.value === "") {
    errorUserName.style.visibility = "visible";
    userNameInput.focus();
    return;
  } else {
    errorUserName.style.visibility = "hidden";
  }
  if (passwordInput.value === "") {
    errorPassword.style.visibility = "visible";
    passwordInput.focus();
    return;
  } else {
    errorPassword.style.visibility = "hidden";
  }

  console.log(users)

  let isLoggedIn= "false"

  users.find((item,i)=>{

    if (item.username===userNameInput.value && item.password===passwordInput.value) {
         
        //console.log("giris yapildi")
        window.open("index.html")
    }else{
        errorUser.style.visibility="visible"
    }
  })

  userNameInput.value = "";
  passwordInput.value = "";

});

buttonRegister.addEventListener("click", function () {
  window.open("register.html", "_blank");
});
