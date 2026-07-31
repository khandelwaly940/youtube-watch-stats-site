(() => {
  const storageKey = 'ytstats-site-theme';
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  const readPreference = () => {
    try {
      const value = localStorage.getItem(storageKey);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  };

  const applyTheme = (preference) => {
    const resolved = preference || (media.matches ? 'dark' : 'light');
    root.dataset.theme = resolved;
    root.style.colorScheme = resolved;
  };

  let preference = readPreference();
  applyTheme(preference);
  root.classList.add('theme-ready');

  const updateButtons = () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.setAttribute('aria-label', `Use ${nextTheme} theme`);
      button.setAttribute('title', `Use ${nextTheme} theme`);
    });
  };

  const saveTheme = (value) => {
    try {
      localStorage.setItem(storageKey, value);
    } catch {
      // The selected theme still applies for this page when storage is unavailable.
    }
  };

  const setup = () => {
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
        saveTheme(preference);
        applyTheme(preference);
        updateButtons();
      });
    });
    updateButtons();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup, { once: true });
  } else {
    setup();
  }

  media.addEventListener('change', () => {
    if (!preference) {
      applyTheme(null);
      updateButtons();
    }
  });

  window.addEventListener('storage', (event) => {
    if (event.key === storageKey) {
      preference = readPreference();
      applyTheme(preference);
      updateButtons();
    }
  });
})();
