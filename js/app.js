// ============================================
// CinePlus - app.js
// Lógica principal: carga de películas con AJAX
// ============================================

$(document).ready(function () {

  // ---- TAREA 9: Alerta de bienvenida con localStorage ----
  if (!localStorage.getItem('bienvenidaMostrada')) {
    const alertaHTML = `
      <div id="alerta-bienvenida" class="alert alert-bienvenida alert-dismissible fade show mx-3 mt-3" role="alert">
        <strong>🎬 ¡Bienvenido a CinePlus!</strong> Descubre los mejores estrenos y clásicos del cine.
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    $('main').before(alertaHTML);
    localStorage.setItem('bienvenidaMostrada', 'true');
  }

  // ---- TAREA 5: Spinner de carga con retraso artificial de 5 segundos ----
  $('#lista-peliculas').html(`
    <div id="spinner-carga" class="col-12">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p>Cargando películas...</p>
    </div>`);

  setTimeout(function () {
    // ---- TAREA 2: Cargar peliculas.json con AJAX y nuevo formato ----
    $.ajax({
      url: 'data/peliculas.json',
      method: 'GET',
      dataType: 'json',
      success: function (peliculas) {
        $('#spinner-carga').remove();
        renderizarPeliculas(peliculas);
      },
      error: function (xhr, status, error) {
        console.error('Error al cargar películas:', error);
        $('#lista-peliculas').html(`
          <div class="col-12">
            <div class="alert alert-danger text-center">
              No se pudo cargar la lista de películas. Intenta nuevamente más tarde.
            </div>
          </div>`);
      }
    });
  }, 5000); // 5 segundos de retraso

});

// ---- TAREA 3 y 4: Renderizar tarjetas con badge de estreno/precio ----
function renderizarPeliculas(peliculas) {
  const hoy = new Date();

  peliculas.forEach(function (peli) {
    const fechaEstreno = new Date(peli.estreno);
    const esEstreno = fechaEstreno >= hoy;
    const precio = esEstreno ? peli.precios.estreno : peli.precios.normal;
    const badgeHTML = esEstreno
      ? `<span class="badge-estreno">🔥 ESTRENO</span>`
      : `<span class="badge-cartelera">✅ En Cartelera</span>`;

    // Géneros como badges
    const generosHTML = peli.generos.map(g => `<span class="badge-genero">${g}</span>`).join('');

    const cardHTML = `
      <div class="col-md-4 col-sm-6 mb-4">
        <div class="card h-100 shadow">
          <div class="position-relative">
            <img src="img/${peli.imagen}" class="card-img-top" alt="${peli.titulo}"
                 onerror="this.src='https://via.placeholder.com/400x280/1f1f1f/e50914?text=Sin+Imagen'">
            <div class="position-absolute top-0 end-0 m-2">${badgeHTML}</div>
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${peli.titulo}</h5>
            <div class="mb-2">${generosHTML}</div>
            <p class="card-text mt-1" style="font-size:0.85rem;color:#aaa;">
              ${peli.sinopsis.substring(0, 80)}...
            </p>
            <div class="mt-auto">
              <p class="precio-tag mb-2">$${precio.toFixed(2)}</p>
              <div class="d-flex gap-2">
                <a href="pages/detalle.html?id=${peli.id}" class="btn btn-cineplus flex-grow-1">Ver más</a>
                <button class="btn btn-trailer btn-ver-trailer"
                  data-trailer="${peli.trailer}"
                  data-titulo="${peli.titulo}">▶ Tráiler</button>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    // ---- TAREA 10: Animación fadeIn al mostrar cada card ----
    const $card = $(cardHTML);
    $('#lista-peliculas').append($card);
    $card.find('.card').fadeIn(600);
  });

  // ---- TAREA 8: Modal de tráiler ----
  $(document).on('click', '.btn-ver-trailer', function () {
    const trailerUrl = $(this).data('trailer');
    const titulo = $(this).data('titulo');
    $('#trailerModalLabel').text(titulo);
    $('#trailerFrame').attr('src', trailerUrl);
    $('#trailerModal').modal('show');
  });

  // Limpiar el iframe al cerrar el modal (detener video)
  $('#trailerModal').on('hidden.bs.modal', function () {
    $('#trailerFrame').attr('src', '');
  });
}
