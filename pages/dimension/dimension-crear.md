---
layout: default
title: Dimension Crear
permalink: /dimension/crear
section: dimension-crear
---
  <h2>Crear nueva dimension</h2>
  <form id="dimension-form">
    <div class="form-group  mb-3">
      <label for="nombre-input">Nombre de la dimension</label>
      <input type="text" class="form-control" id="nombre-input" name="nombre" required>
    </div>
    <div class="form-group mb-3">
      <label for="dimension-superior-select">Dimension superior</label>
      <select class="form-control" id="dimension-superior-select" name="dimension-superior">
        <option value="GESTIÓN PERSONAL">GESTIÓN PERSONAL</option>
        <option value="GESTIÓN DE OTROS">GESTIÓN DE OTROS</option>
        <option value="SOLUCIONES DE VALOR">SOLUCIONES DE VALOR</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Crear</button>
  </form>
  <div id="dimension-success" class="d-none">
    <p class="text-center">¡Dimensión creada exitosamente!</p>
    <a href="/dimension/editar" class="btn btn-success d-block mx-auto">Editar dimensiones</a>
  </div>