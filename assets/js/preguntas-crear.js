$(document).ready(function() {
    // Mostrar u ocultar la sección de opciones múltiples
    $('#tipo-pregunta').on('change', function() {
      if ($(this).val() == 'multiple') {
        $('#opciones-multiple').show();
      } else {
        $('#opciones-multiple').hide();
      }
    });
  
    // Agregar una nueva opción de selección múltiple
    $('#agregar-opcion').on('click', function() {
      var $nuevaOpcion = $('<div class="input-group mb-2"><input type="text" class="form-control" placeholder="Ingrese otra opción"><button type="button" class="btn btn-danger quitar-opcion">-</button></div>');
      $('#opciones-multiple').append($nuevaOpcion);
    });
  
    // Quitar una opción de selección múltiple
    $(document).on('click', '.quitar-opcion', function() {
      $(this).parent().remove();
    });
  
    // Validación del formulario
    $('form').on('submit', function(e) {
      e.preventDefault();
  
      // Validar que se ingresen valores en los campos requeridos
      if (!$('#nombre-interno').val() || !$('#pregunta-evaluado').val() || !$('#pregunta-evaluador').val()) {
        alert('Debe completar todos los campos requeridos');
        return;
      }
  
      // Validar que se ingresen opciones de selección múltiple si corresponde
      if ($('#tipo-pregunta').val() == 'multiple') {
        var opciones = $('#opciones-multiple input').map(function() { return $(this).val(); }).get();
        if (opciones.length == 0) {
          alert('Debe ingresar al menos una opción de selección múltiple');
          return;
        }
      }
  
      // Si llega hasta aquí, el formulario es válido y se puede enviar
      $('form')[0].submit();
    });
  });
  