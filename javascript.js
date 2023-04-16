var rut = document.getElementById("rut");
var appaterno = document.getElementById("rut");
var apmaterno = document.getElementById("rut");
var nombre = document.getElementById("rut");
var fechanacimiento = document.getElementById("rut");
var edad = document.getElementById("rut");
var generos = document.getElementById("rut");
var email = document.getElementById("rut");
var celular = document.getElementById("rut");
var profesion = document.getElementById("rut");
var motivacion = document.getElementById("rut");
var error = document.getElementById("error");
error.style.color = "red";

//function enviarFormulario(){
  //  console.log("Enviando Formulario ...");

 //   var mensajesError = [];

 //   if (nombre.value === null || nombre.value === ""){
 //       mensajesError.push("Ingresa tu nombre");
 //   }

//    if (password.value === null || password.value === ""){
//        mensajesError.push("Ingresa tu password");
//    }

//    error.innerHTML = mensajesError.join(", ")

//    return false;
//    


var form = document.getElementById("formulario");
    form.addEventListener("submit", function(evt){
        evt.preventDefault();
        var mensajesError = [];

    if (rut.value === null || rut.value === ""){
        mensajesError.push("Ingresa tu rut");
    }

    if (appaterno.value === null || appaterno.value === ""){
        mensajesError.push("Ingresa tu apellido paterno");
    }

    if (apmaterno.value === null || apmaterno.value === ""){
        mensajesError.push("Ingresa tu apellido materno");
    }
    if (nombre.value === null || nombre.value === ""){
        mensajesError.push("Ingresa tu nombre");
    }
    if (fechanacimiento.value === null || fechanacimiento.value === ""){
        mensajesError.push("Ingresa tu fecha de nacimiento");
    }
    if (edad.value === null || edad.value === ""){
        mensajesError.push("Ingresa tu edad");
    }
    if (generos.value === null || generos.value === ""){
        mensajesError.push("Ingresa tu genero");
    }
    if (email.value === null || email.value === ""){
        mensajesError.push("Ingresa tu email");
    }
    if (celular.value === null || celular.value === ""){
        mensajesError.push("Ingresa tu celular");
    }
    if (profesion.value === null || profesion.value === ""){
        mensajesError.push("Ingresa tu profesion");
    }
    if (motivacion.value === null || motivacion.value === ""){
        mensajesError.push("Ingresa tu motivacion en el campo requerido");
    }

    error.innerHTML = mensajesError.join(", ")

    });