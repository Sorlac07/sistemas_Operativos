import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { ShowMessage } from "./showMessage.js";

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#login-email").value;
  const password = document.querySelector("#login-password").value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    
    ShowMessage("Bienvenido "+credentials.user.email);

    // Espera un breve período de tiempo antes de redirigir
    setTimeout(() => {
      window.location.href = "hotels.html";
    }, 3000); // Redirige después de 2 segundos (puedes ajustar este valor según tus necesidades) 

  } catch (error) {
    if (error.code === "auth/wrong-password") {
      ShowMessage("Contraseña incorrecta", "error");
    } else if (error.code === "auth/user-not-found") {
      ShowMessage("Usuario no encontrado", "error");
    } else {
      ShowMessage(error.code, "error");
    }
  }
});
