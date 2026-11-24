window.VTEST_SERVERS = {
  backendUrl: 'https://vtest-api.eduardoirl89.workers.dev',
  uploadUrl: 'https://vtest-api.eduardoirl89.workers.dev/upload',
  cdnNodes: [
    {
      id: 'cloudflare',
      name: 'Cloudflare',
      location: 'Red Edge Global',
      url: 'https://speed.cloudflare.com/__down?bytes=25000000'
    },
    {
      id: 'render',
      name: 'Servidor VNET Worker',
      location: 'Cloudflare Edge',
      url: 'https://vtest-api.eduardoirl89.workers.dev/download?mb=5'
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
      name: 'Servidor VNET Worker',
      location: 'Cloudflare Edge',
      url: 'https://vtest-api.eduardoirl89.workers.dev/ping'
    }
  ],
  uploadEndpoints: [
    {
      id: 'render_upload',
      name: 'Servidor VNET Worker (Upload)',
      location: 'Cloudflare Edge',
      url: 'https://vtest-api.eduardoirl89.workers.dev/upload'
    }
  ]
};
