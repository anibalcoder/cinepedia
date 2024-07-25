function setupClickHandler({ containerId, triggerSelector, callback }) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error('Element with ID moviePreviewList not found');
    return;
  }

  container.addEventListener('click', (e) => {
    if (e.target.matches(triggerSelector)) {
      const movieID = e.target.getAttribute('data-id');
      location.hash = `movie=${movieID}`;
    }
  })
}

export default setupClickHandler;