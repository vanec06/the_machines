  let  Nombre = document.getElementById("nombres");
  let  Apellido = document.getElementById("apellidos");
  let  Ficha = document.getElementById("ficha");
  let  Correo = document.getElementById("correo");
  let  Contra  = document.getElementById("password");
  let  BtnEnviar = document.getElementById("BtnEnviar");

 BtnEnviar.addEventListener("click", function(){

    if (( Nombre.value.length === 0 ) && (Apellido.value.length === 0) && (Ficha.value.length === 0 ) && (Correo.value.length === 0)&& (Contra.value.length === 0) ) {
        
        alert("por favor llene los campos");
    }
    else if ( Nombre.value.length === 0 ){
      alert ("por favor llene el campo  (Nombre)");
    }
    else if ( Apellido.value.length === 0 ){
      alert ("por favor llene el campo  (Apellido)");
    }
    else if ( Ficha.value.length === 0 ){
      alert ("por favor llene el campo  (Ficha)");
    }
    else if ( Correo.value.length === 0){
      alert ("por favor llene el campo   (Correo)");
    }
    else if ( Contra.value.length === 0 ){
      alert ("por favor llene el campo  (Contraseña)");
    }
    else{
      alert ("Bienvenido")
    }
  });

