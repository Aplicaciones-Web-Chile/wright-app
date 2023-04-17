---
layout: default
title: Diccionario de preguntas Crear
permalink: /diccionario-de-preguntas/crear
section: diccionario-de-preguntas-crear
---

<div class="container mt-5">
  <h1 class="mb-4">Crear pregunta</h1>
  <form id="pregunta-form">
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre de la pregunta</label>
      <input type="text" class="form-control" id="nombre" name="nombre" required>
    </div>
    <div class="mb-3">
      <label for="evaluado" class="form-label">Pregunta para el evaluado (En 1era persona)</label>
      <textarea class="form-control" id="evaluado" name="evaluado" required></textarea>
    </div>
    <div class="mb-3">
      <label for="evaluador" class="form-label">Pregunta para el evaluador (En 3era persona)</label>
      <textarea class="form-control" id="evaluador" name="evaluador" required></textarea>
    </div>
    <div class="mb-3">
      <label for="seccion" class="form-label">Sección</label>
      <select class="form-select" id="seccion" name="seccion" required>
        {% for seccion in site.data.secciones %}
          <option value="{{ seccion.nombre }}">{{ seccion.categoria }} - {{ seccion.nombre }}</option>
        {% endfor %}
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Crear pregunta</button>
  </form>
  <div id="success-message" class="mt-3 d-none">
    <div class="alert alert-success" role="alert">
      Pregunta creada exitosamente.
    </div>
    <a href="/diccionario-de-preguntas/editar" class="btn btn-primary">Ir a ver las preguntas</a>
  </div>
</div>
