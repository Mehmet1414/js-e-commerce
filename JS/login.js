const form = document.querySelector(".login-form");
const userNameInput = document.getElementById("username");
const passwordInput = document.querySelector("#password");

const buttonRegister = document.querySelector(".btn-register");
const errorUserName = document.querySelector("#errorUserName");
const errorPassword = document.querySelector("#errorPassword");

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

  userNameInput.value = "";
  passwordInput.value = "";
});

buttonRegister.addEventListener("click", function () {
  window.open("register.html", "_blank");
});
