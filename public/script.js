// Récupérer tous les éléments du menu
const navItems = document.querySelectorAll('.nav-item');

// Ajouter un gestionnaire d'événement au survol
navItems.forEach(navItem => {
  navItem.addEventListener('mouseover', () => {
    navItem.classList.add('hovered');
  });

  navItem.addEventListener('mouseout', () => {
    navItem.classList.remove('hovered');
  });
});

document.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('active');
    }
  });
});

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

