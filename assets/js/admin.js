$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    if ( $('#boton-clonar').length > 0 ) {
        $("#boton-clonar").click(function() {
        var contactoClonado = $(".contacto").last().clone(true, true);
        contactoClonado.find("input[type='text']").val("");
        contactoClonado.find("input[type='email']").val("");
        contactoClonado.find("textarea").val("");
        $(".contacto").last().after(contactoClonado);
        });
    }

});
