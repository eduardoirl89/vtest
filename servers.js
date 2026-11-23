window.VTEST_SERVERS = {
  uploadUrl: 'https://vtest-backend-d4nr.onrender.com/upload',
  cdnNodes: [
    {
      id: 'cloudflare',
      name: 'Cloudflare',
      url: 'https://speed.cloudflare.com/__down?bytes=25000000'
    },
    {
      id: 'render',
      name: 'Render',
      url: 'https://vtest-backend-d4nr.onrender.com/download?bytes=5242880'
    }
  ],
  pingEndpoints: [
    {
      id: 'cloudflare',
      name: 'Cloudflare',
      url: 'https://speed.cloudflare.com/__down?bytes=100'
    },
    {
      id: 'render',
      name: 'Render',
      url: 'https://vtest-backend-d4nr.onrender.com/ping'
    }
  ],
  uploadEndpoints: [
    {
      id: 'render_upload',
      name: 'Render (Upload)',
      url: 'https://vtest-backend-d4nr.onrender.com/upload'
    }
  ]
};
