// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Configuración Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBxx8bxy_ZWCCrA0XxzM2ed0GuXfR-dZN8",
    authDomain: "movilidad-dn.firebaseapp.com",
    projectId: "movilidad-dn",
    storageBucket: "movilidad-dn.appspot.com",
    messagingSenderId: "1084567359712",
    appId: "1:1084567359712:web:4ecd508eedb0789874c085",
    measurementId: "G-S7YE4FLN17"
};

// Inicializar Firebase y Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Botones para alternar entre formularios
const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", () => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", () => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
});

// Función para registrar usuario
async function registerUser(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert("Cuenta creada exitosamente.");
        
        // Cambia al formulario de inicio de sesión después del registro exitoso
        document.querySelector(".register").classList.add("hide");
        document.querySelector(".login").classList.remove("hide");
    } catch (error) {
        console.error("Error en el registro:", error.message);
        alert("Error en el registro: " + error.message);
    }
}

// Función para iniciar sesión
async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // alert("Inicio de sesión exitoso.");
        
        // Redirige a la vista principal o dashboard después del inicio de sesión exitoso
        window.location.href = "../dashboard/dashboard.html";
    } catch (error) {
        console.error("Error en el inicio de sesión:", error.message);
        alert("Error en el inicio de sesión: " + error.message);
    }
}

// Conecta los eventos `submit` de los formularios
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector(".register .form");
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = registerForm.querySelector("input[type='email']").value;
        const password = registerForm.querySelector("input[type='password']").value;
        registerUser(email, password);
    });

    const loginForm = document.querySelector(".login .form");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = loginForm.querySelector("input[type='email']").value;
        const password = loginForm.querySelector("input[type='password']").value;
        loginUser(email, password);
    });
});
