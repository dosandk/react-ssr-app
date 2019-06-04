const initServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.error(`Service Worker registered! Scope: ${registration.scope}`);
        })
        .catch(err => {
          console.error(`Service Worker registration failed: ${err}`);
        });
    });
  }
};

export default initServiceWorker;
