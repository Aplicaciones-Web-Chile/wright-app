---
layout: default
title: Diccionario de conductas Crear
permalink: /diccionario-de-conductas/crear
section: diccionario-de-conductas-crear
---

<div class="container mt-5">
  <h1 class="mb-4">Crear conducta</h1>
  <form id="conducta-form">
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre de la conducta</label>
      <input type="text" class="form-control" id="nombre" name="nombre" required>
    </div>
    <div class="mb-3">
      <label for="evaluado" class="form-label">Conducta para el evaluado (En 1era persona)</label>
      <textarea class="form-control" id="evaluado" name="evaluado" required></textarea>
    </div>
    <div class="mb-3">
      <label for="evaluador" class="form-label">Conducta para el evaluador (En 3era persona)</label>
      <textarea class="form-control" id="evaluador" name="evaluador" required></textarea>
    </div>
    <div class="mb-3">
      <label for="dimension" class="form-label">Dimensión</label>
      <select class="form-select" id="dimension" name="dimension" required>
        {% for dimension in site.data.dimension %}
          <option value="{{ dimension.nombre }}">{{ dimension.categoria }} - {{ dimension.nombre }}</option>
        {% endfor %}
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Crear conducta</button>
  </form>
  <div id="success-message" class="mt-3 d-none">
    <div class="alert alert-success" role="alert">
      conducta creada exitosamente.
    </div>
    <a href="/diccionario-de-conductas/editar" class="btn btn-primary">Ir a ver las conductas</a>
  </div>
</div>
