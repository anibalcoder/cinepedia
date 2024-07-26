function setupSearchClick() {
  const searchBtn = document.getElementById('searchBtn');
  const searchText = document.getElementById('searchText');

  if (searchBtn && searchText) {
    searchBtn.addEventListener('click', () => {
      location.hash = `search=${searchText.value}`;
    })

    searchText.addEventListener('keydown', (e) => {
      if (e.key === "Enter") {
        location.hash = `search=${searchText.value}`;
      }
    })
  } else {
    console.error('ID searchBtn o searchText no encontrado');
  }
}

export default setupSearchClick;