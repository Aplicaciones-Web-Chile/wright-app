---
layout: default
title: Diccionario de preguntas Editar
permalink: /diccionario-de-preguntas/editar
section: diccionario-de-preguntas-editar
---

<div class="container">
  <h1 class="text-center">Diccionario de preguntas</h1>
  <hr>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <ul class="list-group">
        {% for pregunta in site.data.diccionario_preguntas %}
        <li class="list-group-item">
          <a href="/diccionario-de-preguntas-crear">{{ pregunta.nombre }}</a>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>