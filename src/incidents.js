export default [
  // first incident
  {
    title: 'Network outage in Europe.',
    message: 'We have been informed that there are outages, we are working on it.',
    date: new Date().toISOString().split('T')[0],
    targets: [
      { system: 'API', type: 'warning' },
      { system: 'Billing', type: 'error' },
      { system: 'Network', type: 'warning' }
    ],
    partialResolve: {
      message: 'We have resolved the API system, work is still ongoing.',
      targets: [
        { system: 'API', type: 'success' },
        { system: 'Network', type: 'success' }
      ]
    }
  },
  // second incident
  {
    title: 'Planned maintenance.',
    message: 'We are doing a scheduled maintenance of all systems.',
    date: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString().split('T')[0],
    targets: [
      { system: 'Website', type: 'maintenance' },
      { system: 'Billing', type: 'maintenance' },
      { system: 'Network', type: 'maintenance' },
      { system: 'API', type: 'maintenance' }
    ],
    update: {
      message: 'Things are getting better, but we are still working. ETA on partial resolve 2h.'
    },
    partialResolve: {
      message: 'We have resolved the website and billing system. Maintenance of the last two items might go on till next week.',
      targets: [
        { system: 'Website', type: 'success' },
        { system: 'Billing', type: 'success' }
      ]
    }
  },
  // third incident
  {
    title: 'Website down due to hosting service.',
    message: 'Our provider is experiencing problems.',
    date: new Date(new Date().setDate(new Date().getDate() - 6)).toISOString().split('T')[0],
    targets: [
      { system: 'Website', type: 'error' }
    ],
    resolve: {
      message: 'They fixed their shit, so we are up and running again.'
    }
  },
  // fourth incident and should not be visible, without the
  // resolve this incident would however still have an effect on the UI
  {
    title: 'Should not show!',
    message: 'Our provider is experiencing problems.',
    date: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().split('T')[0],
    targets: [
      { system: 'Website', type: 'warning' }
    ],
    resolve: {}
  }
]
