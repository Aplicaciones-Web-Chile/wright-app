---
layout: default
title: Diccionario de conductas Editar
permalink: /diccionario-de-conductas/editar
section: diccionario-de-conductas-editar
---

<div class="container">
  <h1 class="text-center">Diccionario de conductas</h1>
  <hr>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <ul class="list-group">
        {% for conducta in site.data.diccionario_conductas %}
        <li class="list-group-item">
          <a href="/diccionario-de-conductas/crear">{{ conducta.nombre }}</a>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>