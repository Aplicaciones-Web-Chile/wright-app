---
layout: default
title: Seccion Editar
permalink: /seccion/editar
section: seccion-editar
---

<div class="container">
  <h1>Editar Secciones</h1>
  <table class="table">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Sección Superior</th>
      </tr>
    </thead>
    <tbody>
      {% for seccion in site.data.secciones %}
        <tr>
          <td><a href="/seccion/crear">{{ seccion.nombre }}</a></td>
          <td>{{ seccion.categoria }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
