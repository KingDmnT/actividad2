var rut = document.getElementById("rut");
var appaterno = document.getElementById("rut");
var apmaterno = document.getElementById("rut");
var nombre = document.getElementById("rut");
var fechanacimiento = document.getElementById("rut");
var edad = document.getElementById("rut");
var genero = document.getElementById("rut");
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

    error.innerHTML = mensajesError.join(", ")

    });