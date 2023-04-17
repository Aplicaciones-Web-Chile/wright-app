$(document).ready(function () {
  if ($('body').hasClass('login')) {
    // Capturar el formulario del cliente
    const clienteForm = document.getElementById("cliente-form");

    // Agregar un evento al formulario al momento de enviarlo
    clienteForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Capturar el valor seleccionado en el selector de roles
      const selectedRole = document.getElementById("cliente-role").value;

      // Redireccionar a la página correspondiente con el query string
      window.location.href = "/dashboard/" + selectedRole;
    });

    // Capturar el formulario de usuarios Wright
    const wrightForm = document.getElementById("wright-form");

    // Agregar un evento al formulario al momento de enviarlo
    wrightForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Capturar los valores del formulario
      const username = document.getElementById("wright-username").value;
      const password = document.getElementById("wright-password").value;
      const selectedRole = document.getElementById("wright-role").value;

      // Redireccionar a la página correspondiente con el query string
      window.location.href = "/dashboard/" + selectedRole;
    });
  }
});
