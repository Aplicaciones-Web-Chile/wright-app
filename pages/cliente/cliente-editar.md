---
layout: default
title: Editar Cliente
permalink: /cliente/editar
section: cliente-editar
---

## Lista de clientes



<div class="container">
  <h3 class="text-center">Por favor, seleccione el cliente que desea editar:</h3>
  <hr>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Codigo</th>
          <th>Editar</th>
          <th>Archivar</th>
        </tr>
      </thead>
      <tbody>
        {% for cliente in site.data.clientes %}
          <tr>
            <td>{{ cliente.id }}</td>
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.codigo }}</td>
            <td><a href="/cliente/update/" class="btn btn-primary">Editar</a></td>
            <td><a href="/cliente/archivar/{{ cliente.id }}" class="btn btn-danger">Archivar</a></td>
          </tr>
        {% endfor %}
      </tbody>
    </table>
    </div>
  </div>
</div>