let nombreUsuario = document.getElementById("nombreUsuario");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let contraseña = document.getElementById("contraseña");
let btnEnviar = document.getElementById("btnEnviar");
let modalAlert = document.getElementById("modalAlert");
let btnAceptar = document.getElementById("btnAceptar");
let formulario = document.getElementById("formulario");

btnEnviar.addEventListener("click", function () {
    if (nombreUsuario.value.length === 0) {
         alert("El nombre de usuario es obligatorio. Por favor, igreselo"); 
        modalAlert.style.visibility = "visible";
        modalAlert.style.opacity = "1";
    }
    else if (apellido.value.length === 0) {
        alert("El apellido es obligatorio. Por favor, igreselo");
    } else if (contraseña.value.length === 0) {
        alert("Por favor, ingrese su contraseña");
    } else if (correo.value.length === 0) {
        alert("Por favor, ingrese su correo");
        
    } if ((nombreUsuario.value.length !== 0)&&(correo.value.length!==0)&&(contraseña.value.length !== 0)) {
        modalAlert.style.visibility = "visible";
        modalAlert.style.opacity = "1";
        btnAceptar.addEventListener("click",function(){
         formulario.submit()
        })
     }else if ((nombreUsuario.value.length === 0)&&(correo.value.length===0)&&(contraseña.value.length === 0)) {
       modalAlert.style.visibility = "hidden";
       modalAlert.style.opacity = "0.0";
       btnAceptar.addEventListener("click",function(){
        formulario.submit()
       })
    }

});

btnAceptar.addEventListener("click", function () {
    modalAlert.style.visibility = "hidden";
    modalAlert.style.opacity = "0";
})
