let txtNombre      = document.getElementById("txtNombre");
  let  apellidos   = document.getElementById("apellidos");
  let  ficha       = document.getElementById("ficha");
  let  Correo      = document.getElementById("correo");
  let  Contra      = document.getElementById("password");
  let  BtnEnviar   = document.getElementById("BtnEnviar");
  let  modalAlert  = document.getElementById("modalAlert");
  let  modalAceptar= document.getElementById("modalAceptar");
  let  txtAlert    = document.getElementById("txtAlert");
  let  AlertApe    = document.getElementById("AlertApe");



  
BtnEnviar.addEventListener("click", function(){
  if (txtNombre.value.length === 0) {
      txtAlert.classList.add("txt-alert-visible");
      txtAlert.classList.remove("txt-alert-hidden");

  }
  else{
      txtAlert.classList.remove("txt-alert-visible");
      txtAlert.classList.add("txt-alert-hidden");
    
  }
});

modalAceptar.addEventListener("click", function(){
  modalAlert.classList.remove("txt-alert-visible");
  modalAlert.classList.add("txt-alert-hidden");
});

BtnEnviar.addEventListener("click", function(){
  if ( apellidos.value.length === 0) {
    AlertApe.classList.add("txt-alert-visible");
    AlertApe.classList.remove("txt-alert-hidden");
  
  }
  else{
    AlertApe.classList.remove("txt-alert-visible");
    AlertApe.classList.add("txt-alert-hidden");
   
  }
});

modalAceptar.addEventListener("click", function(){
  modalAlert.classList.remove("txt-alert-visible");
  modalAlert.classList.add("txt-alert-hidden");
});

BtnEnviar.addEventListener("click", function(){
  if ( apellidos.value.length === 0) {
    AlertApe.classList.add("txt-alert-visible");
    AlertApe.classList.remove("txt-alert-hidden");
  
  }
  else{
    AlertApe.classList.remove("txt-alert-visible");
    AlertApe.classList.add("txt-alert-hidden");
   
  }
});

modalAceptar.addEventListener("click", function(){
  modalAlert.classList.remove("txt-alert-visible");
  modalAlert.classList.add("txt-alert-hidden");
});

BtnEnviar.addEventListener("click", function(){
  if (ficha.value.length === 0) {
    AlertFic.classList.add("txt-alert-visible");
    AlertFic.classList.remove("txt-alert-hidden");
  
  }
  else{
    AlertFic.classList.remove("txt-alert-visible");
    AlertFic.classList.add("txt-alert-hidden");
   
  }
});

modalAceptar.addEventListener("click", function(){
  modalAlert.classList.remove("txt-alert-visible");
  modalAlert.classList.add("txt-alert-hidden");
});

//  BtnEnviar.addEventListener("click", function(){

//     if (( Nombre.value.length === 0 ) && (Apellido.value.length === 0) && (Ficha.value.length === 0 ) && (Correo.value.length === 0)&& (Contra.value.length === 0) ) {
        
//         alert("por favor llene los campos");
//     }
//     else if ( Nombre.value.length === 0 ){
//       alert ("por favor llene el campo  (Nombre)");
//     }
//     else if ( Apellido.value.length === 0 ){
//       alert ("por favor llene el campo  (Apellido)");
//     }
//     else if ( Ficha.value.length === 0 ){
//       alert ("por favor llene el campo  (Ficha)");
//     }
//     else if ( Correo.value.length === 0){
//       alert ("por favor llene el campo   (Correo)");
//     }
//     else if ( Contra.value.length === 0 ){
//       alert ("por favor llene el campo  (Contraseña)");
//     }
//     else{
//       alert ("Bienvenido")
//     }
//   });

