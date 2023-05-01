---
layout: default
title: Cliente
permalink: /cliente/crear
section: cliente-crear
comment for copilot: Crea un formulario que permita crear un Cliente, con los siguiente campos Nombre de la Empresa (texto maximo 255 caracteres), Código de la empresa (texto alfanumérico de maximo 50 caracteres), y un Encargado Principal que debe ser selector que provenga de un encargados_cliente.yml. El formulario deberá tener clases de bootstrap y debe tener validaciones de javascript.  
---
# Cliente
Aquí puedes ver y gestionar los clientes
<form class="form-horizontal" role="form">
  <div class="form-group mb-3">
    <label for="empresa" class="col-sm-2 control-label">Nombre comercial de la empresa</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="empresa" placeholder="Nombre de la Empresa">
    </div>
  </div>
  <div class="form-group mb-3">
    <label for="codigo" class="col-sm-2 control-label">Código</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="codigo" placeholder="Código de la Empresa">
    </div>
  </div>

  <div class="form-group mb-3">
    <label for="codigo" class="col-sm-2 control-label">Rut</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="rut" placeholder="Rut de la Empresa">
    </div>
  </div>

<h3 class="mb-3 mt-4">Crear encargados</h3>

{% include clientes/encargados.html %}

  <button type="submit" class="btn btn-primary">Crear Cliente</button>
</form>
