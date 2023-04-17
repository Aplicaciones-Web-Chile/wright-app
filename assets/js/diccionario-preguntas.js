$(document).ready(function() {
    if ($('body').hasClass('diccionario-de-preguntas-crear')) {
        
        $('#pregunta-form').submit(function(e) {
            e.preventDefault();
            $.ajax({
            url: '/crear-pregunta', // Cambiar por la URL de la página que procesa el formulario
            method: 'POST',
            data: $('#pregunta-form').serialize(),
            success: function() {
                $('#pregunta-form').addClass('d-none');
                $('#success-message').removeClass('d-none');
            },
            error: function() {
                $('#pregunta-form').addClass('d-none');
                $('#success-message').removeClass('d-none');
                //alert('Hubo un error al crear la pregunta. Intente nuevamente.');
            }
            });
        });
          
    }
});
