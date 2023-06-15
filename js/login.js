/* let password = document.getElementById("password"); */

/* let enviar = document.getElementById("enviar"); */
let btnAceptar = document.getElementById("btnAceptar");
let btnEnviar2= document.getElementById("btnEnviar2");
let btnAceptar2= document.getElementById("btnAceptar2")
let modalAlert = document.getElementById("modalAlert");
let modalAlert2 = document.getElementById("modalAlert2");


let User = document.getElementById("User");
let Name = document.getElementById("Name");
let Email = document.getElementById("Email");
let Psswor = document.getElementById("Psswor");
let btnEnviar = document.getElementById("btnEnviar");
let txtAlert = document.getElementById("txtAlert");
let txtAlert1 = document.getElementById("txtAlert1");
let txtAlert2 = document.getElementById("txtAlert2");
let txtAlert3 = document.getElementById("txtAlert3");

btnEnviar.addEventListener("click",function () {
    if(User.value.length ===0){
        txtAlert.classList.add("txt-alert-visible");
        txtAlert.classList.remove("txt-alert-hidden");
    }
    else{
        txtAlert.classList.remove("txt-alert-visible");
        txtAlert.classList.add("txt-alert-hidden");
    }
    
});
btnEnviar.addEventListener("click",function () {
    if(Name.value.length === 0){
        txtAlert1.classList.add("txt-alert-visible");
        txtAlert1.classList.remove("txt-alert-hidden");
    }
    else{
        txtAlert1.classList.remove("txt-alert-visible");
        txtAlert1.classList.add("txt-alert-hidden");
    }
    
});
btnEnviar.addEventListener("click",function () {
    if(Email.value.length === 0){
        txtAlert2.classList.add("txt-alert-visible");
        txtAlert2.classList.remove("txt-alert-hidden");
    }
    else{
        txtAlert2.classList.remove("txt-alert-visible");
        txtAlert2.classList.add("txt-alert-hidden");
    }
    
});
btnEnviar.addEventListener("click",function () {
    if(Psswor.value.length ===0){
        txtAlert3.classList.add("txt-alert-visible");
        txtAlert3.classList.remove("txt-alert-hidden");
    }
    else{
        txtAlert3.classList.remove("txt-alert-visible");
        txtAlert3.classList.add("txt-alert-hidden");
    }

   /*  alarma */
    
});
let closed = document.getElementById("closed");
btnEnviar.addEventListener("click",function() {
   
if (User.value.length == 0){
    btnEnviar.addEventListener("click",function(){
            modalAlert2.classList.remove("alert-hidden2")
            });
    closed2.addEventListener("click",function(){
            modalAlert2.classList.add("alert-hidden2") 
            });
    btnAceptar2.addEventListener("click",function(){
            modalAlert2.classList.add("alert-hidden2")
            }); 
}
else {
    btnEnviar.addEventListener("click",function(){
        modalAlert.classList.remove("alert-hidden")
        });
    closed.addEventListener("click",function(){
        modalAlert.classList.add("alert-hidden")
        });
    btnAceptar.addEventListener("click",function(){
        modalAlert.classList.add("alert-hidden")
        });
}
if (Name.value.length == 0){
    btnEnviar.addEventListener("click",function(){
            modalAlert2.classList.remove("alert-hidden2")
            });
    closed2.addEventListener("click",function(){
            modalAlert2.classList.add("alert-hidden2") 
            });
    btnAceptar2.addEventListener("click",function(){
            modalAlert2.classList.add("alert-hidden2")
            }); 
}
else {
    btnEnviar.addEventListener("click",function(){
        modalAlert.classList.remove("alert-hidden")
        });
    closed.addEventListener("click",function(){
        modalAlert.classList.add("alert-hidden")
        });
    btnAceptar.addEventListener("click",function(){
        modalAlert.classList.add("alert-hidden")
        });
}
if (Email.value.length == 0){
    btnEnviar.addEventListener("click",function(){
            modalAlert2.classList.remove("alert-hidden2")
            });
    closed2.addEventListener("click",function(){
            modalAlert2.classList.add("alert-hidden2") 
            });
    btnAceptar2.addEventListener("click",function(){
            modalAlert2.classList.add("alert-hidden2")
            }); 
}
else {
    btnEnviar.addEventListener("click",function(){
        modalAlert.classList.remove("alert-hidden")
        });
    closed.addEventListener("click",function(){
        modalAlert.classList.add("alert-hidden")
        });
    btnAceptar.addEventListener("click",function(){
        modalAlert.classList.add("alert-hidden")
        });
}
if (Psswor.value.length == 0){
    btnEnviar.addEventListener("click",function(){
            modalAlert2.classList.remove("alert-hidden2")
            });
    closed2.addEventListener("click",function(){
            modalAlert2.classList.add("alert-hidden2") 
            });
    btnAceptar2.addEventListener("click",function(){
            modalAlert2.classList.add("alert-hidden2")
            }); 
}
else {
    btnEnviar.addEventListener("click",function(){
        modalAlert.classList.remove("alert-hidden")
        });
    closed.addEventListener("click",function(){
        modalAlert.classList.add("alert-hidden")
        });
    btnAceptar.addEventListener("click",function(){
        modalAlert.classList.add("alert-hidden")
        });
}
});

