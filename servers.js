window.VTEST_SERVERS = {
  backendUrl: 'https://vtest-backend-d4nr.onrender.com',
  uploadUrl: 'https://vtest-backend-d4nr.onrender.com/upload',
  cdnNodes: [
    {
      id: 'cloudflare',
      name: 'Cloudflare',
      location: 'Red Edge Global',
      url: 'https://speed.cloudflare.com/__down?bytes=25000000'
    },
    {
      id: 'render',
      name: 'Render',
      location: 'Nube Render',
      url: 'https://vtest-backend-d4nr.onrender.com/download?bytes=5242880'
    }
  ],
  pingEndpoints: [
    {
      id: 'cloudflare',
      name: 'Cloudflare',
      location: 'Red Edge Global',
      url: 'https://speed.cloudflare.com/__down?bytes=100'
    },
    {
      id: 'render',
      name: 'Render',
      location: 'Nube Render',
      url: 'https://vtest-backend-d4nr.onrender.com/ping'
    }
  ],
  uploadEndpoints: [
    {
      id: 'render_upload',
      name: 'Render (Upload)',
      location: 'Nube Render',
      url: 'https://vtest-backend-d4nr.onrender.com/upload'
    }
  ]
};
