---
title: Dashboard
layout: default
permalink: /dashboard/admin
section: dashboard
---
## Dashboard

<div class="row">
	<div class="col-12">
		<p>Dashboard del administrador.</p>
		<p>Desde esta pantalla tendrás links a reportes de los proyectos en curso.</p>
		<ul>
			{% for proyecto in site.data.proyectos %}
			<li><a href="/proyectos/update/">{{ proyecto.nombre }} del cliente {{ proyecto.cliente }}</a></li>
			{% endfor %}
		</ul>
		<p> O tal vez quieras <a href="/proyectos/crear">Crear un nuevo proyecto.</a></p>

	</div>

</div>
