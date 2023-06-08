let txtNombre = document.getElementById("txtNombre");
let BtnEnviar = document.getElementById("BtnEnviar");
let modalAlert = document.getElementById("modalAlert");
let modalAceptar = document.getElementById("modalAceptar");
let txtAlert  = document.getElementById("txtAlert");

BtnEnviar.addEventListener("click", function(){
    if (txtNombre.value.length === 0) {
        txtAlert.classList.add("txt-alert-visible");
        txtAlert.classList.remove("txt-alert-hidden");
    //    alert ("por favor llene los campos") m
    }
    else{
        txtAlert.classList.remove("txt-alert-visible");
        txtAlert.classList.add("txt-alert-hidden");
        // alert ("registro exitoso")
    }
});

modalAceptar.addEventListener("click", function(){
    modalAlert.classList.remove("txt-alert-visible");
    modalAlert.classList.add("txt-alert-hidden");
});