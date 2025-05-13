document
  .getElementById("loginForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();

    const usuarioCorrecto = "admin";
    const contrasenaCorrecta = "1234";

    const usuario  = document.getElementById("username").value;
    const contrasena = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje");

    // Caso “admin”
    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
      mensaje.textContent = "¡Bienvenido, Admin!";
      mensaje.style.color = "green";
      window.location.href = "asistencia.html";
      return;
    }

    // Caso “aprendiz”
    if (usuario === "aprendiz" && contrasena === "1234") {
      mensaje.textContent = "¡Bienvenido, Aprendiz!";
      mensaje.style.color = "green";
      window.location.href = "asistencia-aprendiz.html";
      return;
    }

    // Cualquier otro caso
    mensaje.textContent = "Inténtalo de nuevo";
    mensaje.style.color = "red";
  });
