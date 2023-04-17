---
title: Inicio de sesión
layout: default-not-login
permalink: /
section: login
classes: hide-navbar
---

## Iniciar sesión

<div class="container">
  <div class="row">
    <div class="col-6">
      <h1>Inicio</h1>
      <h2>Usuarios Wright</h2>
      <form id="wright-form">
        <div class="form-group">
          <label for="wright-username">Nombre de usuario:</label>
          <input type="text" id="wright-username" class="form-control">
        </div>
        <div class="form-group">
          <label for="wright-password">Contraseña:</label>
          <input type="password" id="wright-password" class="form-control">
        </div>
        <div class="form-group mb-4">
          <label for="wright-role">Rol:</label>
          <select id="wright-role" class="form-control">
            <option value="admin">Administrador</option>
            <option value="jefe_proyecto">Jefe de proyecto</option>
            <option value="coach">Coach</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Iniciar sesión</button>
      </form>
    </div>
    <div class="col-6">
      <h2>Clientes</h2>
      <form id="cliente-form">
      <div class="form-group">
          <label for="cliente-username">Nombre de usuario:</label>
          <input type="text" id="cliente-username" class="form-control">
        </div>
        <div class="form-group">
          <label for="cliente-password">Contraseña:</label>
          <input type="password" id="cliente-password" class="form-control">
        </div>
        <div class="form-group mb-4">
          <label for="cliente-role">Rol:</label>
          <select id="cliente-role" class="form-control">
            <option value="cliente_evaluador">Evaluador</option>
            <option value="cliente_sponsor">Cliente</option>
            <option value="cliente_evaluado">Usuario Evaluado</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Iniciar sesión</button>
      </form>
    </div>
  </div>
</div>
