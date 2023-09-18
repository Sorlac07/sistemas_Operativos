import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { ShowMessage } from "./showMessage.js";

const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider);
    ShowMessage("Bienvenido " + credentials.user.displayName);
    // Espera un breve período de tiempo antes de redirigir
    setTimeout(() => {
      window.location.href = "hotels.html";
    }, 3000); // Redirige después de 2 segundos (puedes ajustar este valor según tus necesidades)
  } catch (error) {
  }
});
