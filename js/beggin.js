let nombreUsuario = document.getElementById("nombreUsuario");
let apellido  = document.getElementById("apellido");
let correo = document.getElementById("correo");
let contraseña  = document.getElementById("contraseña");
let btnEnviar  = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(){
    if(nombreUsuario.value.length === ""){
        alert("El nombre de usuario es un campo obligatorio. Por favor, igreselo");
    }
    else if(apellido.value.length === ""){
        alert("El apellido es obligatorio. Por favor, igreselo");
    }else if (contraseña.value.length === ""){
        alert("Por favor, ingrese su contraseña");
    }else if(correo.value.length === ""){
        alert("Por favor, ingrese su correo");
    } else{
        alert("Bienvenid@!!!")
    }

});