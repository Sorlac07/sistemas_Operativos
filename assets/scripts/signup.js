const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("#signup-name").value;
  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;

  try {
    // Realiza una solicitud HTTP POST al endpoint de tu backend
    const response = await fetch("http://172.191.145.152:3000/agregar-usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: name,
        correo_electronico: email,
        contrasena: password,
      }),
    });

    // Verifica si la solicitud fue exitosa
    if (response.ok) {
      // El usuario se registró correctamente en el backend
      const responseData = await response.json();
      console.log(responseData);
      // Redirige al usuario después de un breve período de tiempo
      setTimeout(() => {
        window.location.href = "productos.html";
      }, 3000); // Redirige después de 3 segundos (ajusta según tus necesidades)
    } else {
      // Maneja errores en la respuesta (por ejemplo, usuario ya existe)
      const responseData = await response.json();
    }
  } catch (error) {
    // Maneja otros errores
    //console.error(error);
    console.log("Error interno del servidor");
  }
});
