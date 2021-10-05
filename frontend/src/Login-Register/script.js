const login = document.querySelector(".login-a");
const register = document.querySelector(".register-a");
const forgot = document.querySelector(".forgot-a");
const close = document.querySelector(".iconclose");

const loginSection = document.querySelector(".login");
const registerSection = document.querySelector(".register");
const forgotSection = document.querySelector(".forgot");

// Click on Register from index html and set display none for login and flex for register.
register.addEventListener("click", (e) => {
   loginSection.style.display = "none";
   registerSection.style.display = "flex";
});

// Reverse above function with Login and Register
login.addEventListener("click", (e) => {
    registerSection.style.display = "none";
    loginSection.style.display = "flex";
 });

 // Hide Login and show Forget
 forgot.addEventListener("click", (e) => {
    loginSection.style.display = "none";
    forgotSection.style.display = "flex";
 });
 
 //Cross Icon click on forget page, Hide Forget and show Login.
 close.addEventListener("click", (e) => {
    loginSection.style.display = "flex";
    forgotSection.style.display = "none";
 });