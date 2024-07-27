function lazyLoader() {
  const moviesImages = document.querySelectorAll('.lazy');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentTarget = entry.target;
        const url = currentTarget.getAttribute('data-img');
        currentTarget.setAttribute('src', url);
        currentTarget.removeAttribute('data-img');
        observer.unobserve(currentTarget);
      }
    });
  });

  moviesImages.forEach(movieImage => observer.observe(movieImage));
}

export default lazyLoader;