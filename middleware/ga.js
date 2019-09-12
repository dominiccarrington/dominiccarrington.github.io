export default function({ app }) {
  if (window.localStorage.getItem('cookie:accepted') === null) {
    window.localStorage.removeItem('cookie:required');
    window.localStorage.removeItem('cookie:analytics');
  }

  if (window.localStorage.getItem('cookie:required') === null ||
    window.localStorage.getItem('cookie:analytics') === null) {
    window.localStorage.removeItem('cookie:accepted');
  }

  app.$ga.set('anonymizeIp', true);
  app.$ga.disable();
  if (window.localStorage.getItem('cookie:analytics') === 'true') {
    app.$ga.enable();
  }
}
