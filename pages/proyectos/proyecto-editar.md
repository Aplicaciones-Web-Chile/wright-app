---
layout: default
title: Proyecto Editar
permalink: /proyectos/editar
section:  proyecto-editar
---
  <h1>Proyectos</h1>
  <p> Seleccione el proyecto que desea editar </p>
  <div class="list-group">
    {% for proyecto in site.data.proyectos %}
    <p>
      <h3>{{ proyecto.cliente }} - {{ proyecto.nombre }}</h3>
      <a href="/proyectos/modificar?nombre={{ proyecto.nombre }}" class="list-group-item list-group-item-action">Agregar nuevo ciclo</a>
      <a href="/proyectos/modificar?nombre={{ proyecto.nombre }}" class="list-group-item list-group-item-action">Modificar </a>
    </p>
    {% endfor %}
  </div>