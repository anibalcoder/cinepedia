function removeLoadingClass() {
  const images = document.querySelectorAll('.container-loading');

  images.forEach(image => {
    image.addEventListener('load', () => {
      image.classList.remove('container-loading');
    });
  });
}

export default removeLoadingClass;