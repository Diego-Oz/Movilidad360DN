const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})


btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
})

function validarInicioSesion() {
    var usuario = "jmorfe@unibe.com"; // Usuario de ejemplo
    var contraseña = "123456"; // Contraseña de ejemplo

    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var emailLabel = document.getElementById("email-label");
    var passwordLabel = document.getElementById("password-label");

    if (emailInput.value === usuario && passwordInput.value === contraseña) {
        emailInput.classList.remove("error");
        emailInput.classList.add("success");
        passwordInput.classList.remove("error");
        passwordInput.classList.add("success");
        emailLabel.classList.remove("error");
        emailLabel.classList.add("success");
        passwordLabel.classList.remove("error");
        passwordLabel.classList.add("success");
        return true;
    } else {
        emailInput.classList.remove("success");
        emailInput.classList.add("error");
        passwordInput.classList.remove("success");
        passwordInput.classList.add("error");
        emailLabel.classList.remove("success");
        emailLabel.classList.add("error");
        passwordLabel.classList.remove("success");
        passwordLabel.classList.add("error");
        return false;
    }
}