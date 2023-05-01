---
layout: default
title: Dimensión Editar
permalink: /dimension/editar
section: seccion-editar
---

<div class="container">
  <h1>Editar Dimensiones</h1>
  <table class="table">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Dimensión Superior</th>
      </tr>
    </thead>
    <tbody>
      {% for dimension in site.data.dimensiones %}
        <tr>
          <td><a href="/dimension/crear">{{ dimension.nombre }}</a></td>
          <td>{{ dimension.categoria }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
