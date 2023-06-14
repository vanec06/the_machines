let txtNombre    = document.getElementById("txtNombre");
let  apellidos   = document.getElementById("apellidos");
let  ficha       = document.getElementById("ficha");
let  Correo      = document.getElementById("Correo");
let  Contra      = document.getElementById("Contra");
let  BtnEnviar   = document.getElementById("BtnEnviar");
let  modalAlert  = document.getElementById("modalAlert");
let  BtnAceptar  = document.getElementById("BtnAceptar");
let  txtAlert    = document.getElementById("txtAlert");
let  AlertApe    = document.getElementById("AlertApe");
let  Alertcortra = document.getElementById("Alertcortra");



BtnEnviar.addEventListener("click", function(){
if (txtNombre.value.length === 0) {
    txtAlert.classList.add("txt-alert-visible");
    txtAlert.classList.remove("txt-alert-hidden");

}
else{
    txtAlert.classList.remove("txt-alert-visible");
    txtAlert.classList.add("txt-alert-hidden");
  
}
if ( apellidos.value.length === 0) {
  AlertApe.classList.add("txt-alert-visible");
  AlertApe.classList.remove("txt-alert-hidden");

}
else{
  AlertApe.classList.remove("txt-alert-visible");
  AlertApe.classList.add("txt-alert-hidden");
 
}
if (ficha.value.length === 0) {
  AlertFic.classList.add("txt-alert-visible");
  AlertFic.classList.remove("txt-alert-hidden");

}
else{
  AlertFic.classList.remove("txt-alert-visible");
  AlertFic.classList.add("txt-alert-hidden");
 
}


if (Correo.value.length === 0) {
  Alertcor.classList.add("txt-alert-visible");
  Alertcor.classList.remove("txt-alert-hidden");

}
else{
  Alertcor.classList.remove("txt-alert-visible");
  Alertcor.classList.add("txt-alert-hidden");
 
}
if (Contra.value.length === 0) {
  Alertcortra.classList.add("txt-alert-visible");
  Alertcortra.classList.remove("txt-alert-hidden");

}
else{
  Alertcortra.classList.remove("txt-alert-visible");
  Alertcortra.classList.add("txt-alert-hidden");
 
}
});
BtnAceptar.addEventListener("click", function(){
modalAlert.classList.remove("modal-alert-visible");
modalAlert.classList.add("modal-alert-hidden");

});