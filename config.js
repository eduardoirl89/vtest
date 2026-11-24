window.VNET_CONFIG = {
  brandName: 'VTEST',
  poweredByName: 'VNET',
  contentUrl: './content.json',
  backendUrl: 'https://vtest-api.eduardoirl89.workers.dev',
  uploadUrl: 'https://vtest-api.eduardoirl89.workers.dev/upload',
  links: {
    website: 'https://vnet.com.ve',
    whatsapp: 'https://wa.me/584122593059',
    facebook: 'https://www.facebook.com/61566969571570/',
    instagram: 'https://www.instagram.com/vnet_ve/'
  },
  defaults: {
    durationSec: 8,
    serverId: 'cloudflare',
    autoStart: true,
    repeatCount: 1,
    simulatedDevices: 0,
    mbpsPerDevice: 18
  },
  plans: [
    { id: 'vnet400', name: 'VNET400', label: 'Hasta 400 Mbps', mbps: 400, recommendedDevices: 8 },
    { id: 'vnet600', name: 'VNET600', label: 'Hasta 600 Mbps', mbps: 600, recommendedDevices: 12 },
    { id: 'vnet1giga', name: 'VNET1GIGA', label: 'Hasta 1 Gbps', mbps: 1000, recommendedDevices: 20 }
  ]
};
