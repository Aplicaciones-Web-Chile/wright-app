---
layout: default
title: Proyecto Editar
permalink: /proyectos/editar
section:  proyecto-editar
---
  <h3 class="text-center">Por favor, seleccione el proyecto que desea editar:</h3>
  <hr>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Cliente</th>
          <th>Editar</th>
          <th>Ciclos</th>
        </tr>
      </thead>
      <tbody>
        {% for proyecto in site.data.proyectos %}
          <tr>
            <td>{{ proyecto.id }}</td>
            <td>{{ proyecto.nombre }}</td>
            <td>{{ proyecto.descripcion }}</td>
            <td>{{ proyecto.cliente }}</td>
            <td><a href="/proyectos/update/" class="btn btn-primary">Editar</a></td>
            <td>
              <a href="/proyectos/ciclo-crear/" class="btn btn-primary d-block mb-3">Agregar Ciclo</a>
              <a href="/proyectos/ciclo-crear/" class="btn btn-info d-block mb-3">Modificar Ciclo I</a>
              <a href="/proyectos/ciclo-crear/" class="btn btn-info d-block">Modificar Ciclo II</a>

            </td>
          </tr>
        {% endfor %}
      </tbody>
    </table>
    </div>
  </div>