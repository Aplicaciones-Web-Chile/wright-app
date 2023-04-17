// Agregamos una clase "active" al enlace actual de la barra de navegación
const currentLocation = location.href;
const navLinks = document.querySelectorAll("nav a");

for (let link of navLinks) {
  if (link.href === currentLocation) {
    link.classList.add("active");
  }
}

