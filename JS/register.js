const form = document.querySelector(".register-form");
const buttonRegister = document.querySelector(".btn-register");

const nameInput = document.getElementById("name");
const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorName = document.querySelector("#errorName");
const errorUserName = document.querySelector("#errorUserName")
const errorPassword = document.querySelector("#errorPassword")
const modal = document.querySelector(".modal")
const modalUserName = document.querySelector(".modal-userName")

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    //buttonRegister.click()
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //console.log(nameInput.value)
  //console.log(userNameInput.value)
  //console.log(passwordInput.value)

  
  const newUsers = {
      name: nameInput.value,
      username: userNameInput.value,
      password: passwordInput.value,
    };
    
    if (nameInput.value === "") {
      errorName.style.visibility = "visible";
      nameInput.focus()
      return
    }else{
        errorName.style.visibility = "hidden";
    }

    if (userNameInput.value==="") {
        errorUserName.style.visibility ="visible"
        userNameInput.focus()
        return
    } else {
        errorUserName.style.visibility ="hidden"
    }

    if (passwordInput.value==="") {
        errorPassword.style.visibility="visible"
        passwordInput.focus()
        return
    } else {
        errorPassword.style.visibility="hidden"
    }

  let localRepo = JSON.parse(localStorage.getItem("users")) || [];
  localRepo.push(newUsers);
  localStorage.setItem("users", JSON.stringify(localRepo));

  console.log(localRepo);

  

    modal.style.display = "grid"
    modalUserName.innerHTML = `${nameInput.value}`

    setTimeout(() => {
        modal.style.display = "none"
        window.location.href ="login.html"
    }, 3000);
  
    nameInput.value = "";
    userNameInput.value = "";
    passwordInput.value = "";
});
