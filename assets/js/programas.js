$(document).ready(function() {

    if($("body").hasClass("programa-crear")) {
        // Etapa1
        $("#etapa-2, #etapa-3, #etapa-4").hide(); // Ocultar las etapas 2, 3 y 4
        $("#btn-etapa-1").click(function() { // Agregar evento al botón de siguiente de la etapa 1
            console.log("Hola etapa 2");
            /*if ($("#etapa-1 #nombre-programa").val() == "" || $("#etapa-1 #cliente").val() == "" || $("#etapa-1 #contraparte").val() == "") { // Validar que se hayan ingresado los datos necesarios
                alert("Por favor ingrese todos los datos necesarios.");
                return;
            }*/
            $("#etapa-1").hide(); // Ocultar la etapa 1
            $("#etapa-2").show(); // Mostrar la etapa 2
        });
        
        // Etapa2
        $("#etapa-2 #btn-etapa-2").click(function() { // Agregar evento al botón de siguiente de la etapa 2
            if ($("#etapa-2 #jefe-proyecto-nombre").val() == "" || $("#etapa-2 #jefe-proyecto-rut").val() == "" || $("#etapa-2 #jefe-proyecto-email").val() == "") { // Validar que se hayan ingresado los datos necesarios
                alert("Por favor ingrese todos los datos necesarios.");
                return;
            }
            $("#etapa-2").hide(); // Ocultar la etapa 2
            $("#etapa-3").show(); // Mostrar la etapa 3
        });
        
        // Etapa3
        $("#etapa-3 #btn-etapa-3").click(function() { // Agregar evento al botón de siguiente de la etapa 3
            if ($("#etapa-3 #encuesta-pregunta").val() == "") { // Validar que se hayan ingresado los datos necesarios
                alert("Por favor ingrese al menos una pregunta para la encuesta.");
                return;
            }
            $("#etapa-3").hide(); // Ocultar la etapa 3
            $("#etapa-4").show(); // Mostrar la etapa 4
        });
    }

});
  