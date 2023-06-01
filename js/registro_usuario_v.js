  let  Nombre = document.getElementById("nombres").value;
  let  Apellido = document.getElementById("apellidos").value;
  let  Ficha = document.getElementById("ficha").value;
  let  Correo = document.getElementById("correo").value;
  let  Contra  = document.getElementById("password").value;
  let  BtnEnviar = document.getElementById("BtnEnviar");

 BtnEnviar.addEventListener("click", function(){

    if ( Nombre === "" ) {
        
        alert("Bienvenido");
    }
    else{
        alert("por favor llene el campo");
    }
  });

