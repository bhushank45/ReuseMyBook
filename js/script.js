function login() {
  let email = document.getElementById("email-input").value;
  let password = document.getElementById("password-input").value;
  let error = document.getElementById("error");

  if (email === "admin@123" && password === "1234") {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", email);

    window.location.href = "index.html";
  } else {
    error.innerText = "Invalid Email or Password";
  }
}

// toggle password
function togglePassword() {
  let passinput = document.getElementById("password-input");
  if ((passinput.type = "password")) {
    passinput.type = "text";
  } else {
    passinput.type = "password";
  }
}

//hamburger
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    if(menuToggle.textContent === "☰"){
        menuToggle.textContent = "✕";
    }else{
        menuToggle.textContent = "☰";
    }

});
