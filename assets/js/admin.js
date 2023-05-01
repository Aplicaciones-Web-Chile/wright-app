$(document).ready(function() {

    if ( $('#boton-clonar').length > 0 ) {
        $("#boton-clonar").click(function() {
        var encargadoClonado = $(".encargado").last().clone(true, true);
        encargadoClonado.find("input[type='text']").val("");
        encargadoClonado.find("input[type='email']").val("");
        encargadoClonado.find("textarea").val("");
        $(".encargado").last().after(encargadoClonado);
        });
    }

});
