let nombreUsuario = document.getElementById("nombreUsuario");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let contraseña = document.getElementById("contraseña");
let btnEnviar = document.getElementById("btnEnviar");
let modalAlert = document.getElementById("modalAlert");
let btnAceptar = document.getElementById("btnAceptar");
let formulario = document.getElementById("formulario");
let txtAlert = document.getElementById("txtAlert");
let txtApe = document.getElementById("txtApe");
let txtcorr = document.getElementById("txtcorr");
let txtcon = document.getElementById("txtcon");


btnEnviar.addEventListener("click", function(){
    if (nombreUsuario.value.length === 0){
        txtAlert.classList.add("txt-alert-visible");
        txtAlert.classList.remove("txt-alert-hidden");
    }else {
        txtAlert.classList.remove("txt-alert-visible");
        txtAlert.classList.add("txt-alert-hidden");
    }

    if (apellido.value.length === 0){
        txtApe.classList.add("txt-alert-visible");
        txtApe.classList.remove("txt-alert-hidden");
    }else{ 
        txtApe.classList.remove("txt-alert-visible");
        txtApe.classList.add("txt-alert-hidden"); 
    }

    if (correo.value.length === 0){
        txtcorr.classList.add("txt-alert-visible");
        txtcorr.classList.remove("txt-alert-hidden");
    }else{
        txtcorr.classList.remove("txt-alert-visible");
        txtcorr.classList.add("txt-alert-hidden");
    }

    if (contraseña.value.length === 0){
        txtcon.classList.add("txt-alert-visible");
        txtcon.classList.remove("txt-alert-hidden");
    }
    else{
        txtcon.classList.remove("txt-alert-visible");
        txtcon.classList.add("txt-alert-hidden");
    }
});
btnAceptar.addEventListener("click", function() {
    modalAlert.classList.remove("modal-alert-visible");
    modalAlert.classList.add("modal-alert-hidden");

});




btnEnviar.addEventListener("click", function () {
 
     if ((nombreUsuario.value.length !== 0)&&(correo.value.length!==0)&&(contraseña.value.length !== 0)) {
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
