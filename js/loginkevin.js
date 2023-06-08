document.getElementById("Iniciar").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var overlay = document.getElementById("overlay");
  var messageDiv = document.getElementById("messageDiv");

  if (username && password) {
    overlay.style.display = "block";
    messageDiv.textContent = "Inicio de sesión exitoso. ¡Bienvenido, " + username + "!";
    messageDiv.style.display = "block";

    setTimeout(function() {
      window.location.href = "kevin.html";
    }, 1000);
  } else {
    alert("Por favor, ingresa tanto el nombre de usuario como la contraseña.");
  }
});

