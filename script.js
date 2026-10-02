document.addEventListener('DOMContentLoaded', () => {
  const menuButtons = document.querySelectorAll('[data-mobile-menu-button]');

  menuButtons.forEach((button) => {
    const targetId = button.getAttribute('aria-controls');
    const menu = targetId ? document.getElementById(targetId) : null;

    if (!menu) return;

    const openIcon = button.querySelector('[data-menu-open]');
    const closeIcon = button.querySelector('[data-menu-close]');

    const setMenu = (isOpen) => {
      button.setAttribute('aria-expanded', String(isOpen));
      menu.classList.toggle('hidden', !isOpen);

      if (openIcon) {
        openIcon.classList.toggle('hidden', isOpen);
      }

      if (closeIcon) {
        closeIcon.classList.toggle('hidden', !isOpen);
      }
    };

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      setMenu(!isExpanded);
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setMenu(false);
      }
    });

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleResize = (event) => {
      if (event.matches) {
        setMenu(false);
      }
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleResize);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handleResize);
    }
  });
});