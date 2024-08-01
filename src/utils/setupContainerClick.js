function setupContainerClick({ containerId, triggerSelector }) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Elemento con ID ${containerId} no encontrado`);
    return;
  }

  container.addEventListener('click', (e) => {
    const tag = e.target.tagName.toLowerCase();

    if (e.target.matches(triggerSelector)) {
      if (tag === 'img') {
        const movieId = e.target.parentNode.getAttribute('data-id');
        location.hash = `movie=${movieId}`;
      } else if (tag === 'h3') {
        const genreId = e.target.getAttribute('data-id');
        location.hash = `category=${genreId}`;
      } else {
        console.error(`El elemento clicado dentro del contenedor con ID "${containerId}" no es (img) ni (h3)`);
      }
    }
  })
}

export default setupContainerClick;