/* Shared theme + header for index, guide, and help */
(function () {
  const THEME_KEY = 'doingrightnow_theme';
  const moonIcon = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  const sunIcon = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>';

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark';
    } catch (e) {
      return 'dark';
    }
  }

  function applyTheme(mode) {
    const btn = document.getElementById('theme-btn');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      if (meta) meta.setAttribute('content', '#13171e');
      if (btn) {
        btn.setAttribute('aria-label', 'Light Mode');
        btn.innerHTML = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + sunIcon + '</svg>';
      }
    } else {
      document.documentElement.classList.remove('dark');
      if (meta) meta.setAttribute('content', '#ffffff');
      if (btn) {
        btn.setAttribute('aria-label', 'Dark Mode');
        btn.innerHTML = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + moonIcon + '</svg>';
      }
    }
    try { localStorage.setItem(THEME_KEY, mode); } catch (e) {}
  }

  applyTheme(getStoredTheme());

  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      applyTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
    });
  }

  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });
  }

  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll('[data-nav]').forEach(link => {
      if (link.dataset.nav === page) link.setAttribute('aria-current', 'page');
    });
  }
})();
