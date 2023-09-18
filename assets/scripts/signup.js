import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { ShowMessage } from "./showMessage.js";

const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;
  
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    ShowMessage("Bienvenido " + userCredentials.user.email);

    // Espera un breve período de tiempo antes de redirigir
    setTimeout(() => {
      window.location.href = "hotels.html";
    }, 3000); // Redirige después de 2 segundos (puedes ajustar este valor según tus necesidades)
  } catch (error) {
    if (
      error.code === "auth/email-already-in-use" ||
      error.code === "auth/network-request-failed"
    ) {
      ShowMessage("Ese correo electrónico ya está en uso", "error");
    } else if (error.code === "auth/invalid-email") {
      ShowMessage("Ese correo electrónico no es válido", "error");
    } else if (error.code === "auth/weak-password") {
      ShowMessage("La contraseña debe tener al menos 6 caracteres", "error");
    } else if (error.code) {
      ShowMessage(error.code, "error");
    }
  }
});
