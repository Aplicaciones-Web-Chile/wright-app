---
layout: default
title: Editar Cliente
permalink: /cliente/editar
section: cliente-editar
comment for copilot: 
---

## Editar clientes



<div class="container">
  <h1 class="text-center">Por favor, seleccione el cliente que desea editar:</h1>
  <hr>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <ul class="list-group">
        {% for cliente in site.data.clientes %}
        <li class="list-group-item">
          <a href="/clientes/crear">Modificar {{ cliente.nombre }} ( {{ cliente.codigo }} )</a> <br>
          <a href="/clientes-encargados/asignar">Asociar encargados {{ cliente.cliente }}</a>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>