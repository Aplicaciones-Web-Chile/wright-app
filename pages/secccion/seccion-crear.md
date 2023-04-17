---
layout: default
title: Seccion Crear
permalink: /seccion/crear
section: seccion-crear
---

<div class="container">
  <div class="row">
    <div class="col-md-6 mx-auto">
      <h1 class="text-center">Crear nueva sección</h1>
      <form id="seccion-form">
        <div class="form-group">
          <label for="nombre-input">Nombre de la sección</label>
          <input type="text" class="form-control" id="nombre-input" name="nombre" required>
        </div>
        <div class="form-group">
          <label for="seccion-superior-select">Sección superior</label>
          <select class="form-control" id="seccion-superior-select" name="seccion-superior">
            <option value="GESTIÓN PERSONAL">GESTIÓN PERSONAL</option>
            <option value="GESTIÓN DE OTROS">GESTIÓN DE OTROS</option>
            <option value="SOLUCIONES DE VALOR">SOLUCIONES DE VALOR</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Crear</button>
      </form>
      <div id="seccion-success" class="d-none">
        <p class="text-center">¡Sección creada exitosamente!</p>
        <a href="/seccion/editar" class="btn btn-success d-block mx-auto">Editar secciones</a>
      </div>
    </div>
  </div>
</div>
