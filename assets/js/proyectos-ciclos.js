$(document).ready(function () {

	if ($("body").hasClass("proyecto-ciclo-crear")) {
		// Etapa1
		$("#ciclo-etapa-3, #ciclo-etapa-4").hide(); // Ocultar las etapas 2, 3 y 4

		// Etapa2
		$("#btn-etapa-2").click(function () { // Agregar evento al botón de siguiente de la etapa 2
			if ($("#ciclo-etapa-2 #jefe-proyecto-nombre").val() == "" || 
				$("#ciclo-etapa-2 #jefe-proyecto-rut").val() == "" || 
				$("#ciclo-etapa-2 #jefe-proyecto-email").val() == "") { // Validar que se hayan ingresado los datos necesarios
				alert("Por favor ingrese todos los datos necesarios.");
				return;
			}
			$("#ciclo-etapa-2").hide(); // Ocultar la etapa 2
			$("#ciclo-etapa-3").show(); // Mostrar la etapa 3
		});

		// Etapa3
		$("#ciclo-etapa-3 #btn-etapa-3").click(function () { // Agregar evento al botón de siguiente de la etapa 3
			if ($("#ciclo-etapa-3 #encuesta-pregunta").val() == "") { // Validar que se hayan ingresado los datos necesarios
				alert("Por favor ingrese al menos una pregunta para la encuesta.");
				return;
			}
			$("#ciclo-etapa-3").hide(); // Ocultar la etapa 3
			$("#ciclo-etapa-4").show(); // Mostrar la etapa 4
		});

		$('div.card').hover(
			function () {
				$(this).addClass('zoom');
			}, function () {
				$(this).removeClass('zoom');
			}
		);

		$('div.card').click(function () {
			if ($(this).parent().hasClass('seleccionados')) {
				$(this).appendTo($('div.no-seleccionados'));
			} else {
				$(this).appendTo($('div.seleccionados'));
			}
		});

		$('#encuesta').on('input', function() {
			var query = $(this).val();
			if (query.length > 3) {
			buscarPreguntas(query);
			} else {
			mostrarTodasLasPreguntas();
			}
		});
		
		function buscarPreguntas(query) {
			$('div.no-seleccionados div.card').hide();
			$('div.no-seleccionados div.card').filter(function() {
			return $(this).text().toLowerCase().includes(query.toLowerCase());
			}).show();
		}
		
		function mostrarTodasLasPreguntas() {
			$('div.no-seleccionados div.card').show();
		}


	}

});
