---
layout: default
title: Programa Editar
permalink: /programas/editar
section:  programa-editar
---
<div class="container">
  <h1>Programas</h1>
  <p> Seleccione el programa que desea editar </p>
  <div class="list-group">
    {% for programa in site.data.programas %}
    <p>
      <h3>{{ programa.cliente }} - {{ programa.nombre }}</h3>
      <a href="/programas/modificar?nombre={{ programa.nombre }}" class="list-group-item list-group-item-action">Agregar nuevo ciclo</a>
      <a href="/programas/modificar?nombre={{ programa.nombre }}" class="list-group-item list-group-item-action">Modificar </a>
    </p>

    {% endfor %}
  </div>
</div>
