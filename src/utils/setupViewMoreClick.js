function setupViewMoreClick() {
  const viewMore = document.getElementById('viewMore');

  if (viewMore) {
    viewMore.addEventListener('click', () => {
      location.hash = `#trends`;
    })
  } else {
    console.error('ID viewMore o searchText no encontrado');
  }
}

export default setupViewMoreClick;