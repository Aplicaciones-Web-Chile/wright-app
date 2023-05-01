$(document).ready(function() {
    if ( $('body').hasClass('cliente-crear') || $('body').hasClass('cliente-update') ) {
        // Obtiene el valor de "id" del parámetro de la URL
        var id = 1;
        // Obtener los datos del cliente correspondiente desde un archivo JSON o una API REST
        $.getJSON('/assets/js/data/clientes.json', function(data) {
            var cliente = data.find(function(c) {
            return c.id == id;
            });
            // Carga los datos del cliente en el formulario
            $('#nombre').val(cliente.nombre);
            $('#codigo').val(cliente.codigo);
            $('#rut').val(cliente.rut);
            // Agregar más campos aquí si es necesario
        });
        $("#boton-clonar").click(function() {
        var encargadoClonado = $(".encargado").last().clone(true, true);
        encargadoClonado.find("input[type='text']").val("");
        encargadoClonado.find("input[type='email']").val("");
        encargadoClonado.find("textarea").val("");
        $(".encargado").last().after(encargadoClonado);
        });
    }
});