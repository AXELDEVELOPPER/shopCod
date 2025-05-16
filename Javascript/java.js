// Header

const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // carrusel

let index = 0;
const images = document.querySelectorAll('.carousel img');

function showNextImage() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}

setInterval(showNextImage, 4000);

// CARRUSEL OFERTAS

