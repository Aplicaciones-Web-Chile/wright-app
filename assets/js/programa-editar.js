$(document).ready(function() {
    if ($('body').hasClass('programa-editar')) {
        // Agregamos la clase "active" al enlace actual
        $('a[href="' + window.location.pathname + '"]').addClass('active');
    }
});
