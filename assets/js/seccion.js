$(document).ready(function() {

    // Validar que se ejecute solo en seccion-crear
    if ($('body').hasClass('seccion-crear')) {
        $('#seccion-form').submit(function(e) {
            e.preventDefault();
            // Simular inserción en base de datos
            $('#seccion-form').addClass('d-none');
            $('#seccion-success').removeClass('d-none');
        });        
    }

});
