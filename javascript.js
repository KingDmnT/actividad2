var rut = document.getElementById("rut");
var appaterno = document.getElementById("appaterno");
var apmaterno = document.getElementById("apmaterno");
var nombre = document.getElementById("nombre");
var fechanacimiento = document.getElementById("fechanacimiento");
var edad = document.getElementById("edad");
var generos = document.getElementById("generos");
var email = document.getElementById("email");
var celular = document.getElementById("celular");
var profesion = document.getElementById("profesion");
var motivacion = document.getElementById("motivacion");
var error = document.getElementById("error");
error.style.color = "red";



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