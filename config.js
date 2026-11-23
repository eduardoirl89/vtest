window.VNET_CONFIG = {
  brandName: 'VTEST',
  poweredByName: 'VNET',
  backendUrl: 'https://vtest-backend-d4nr.onrender.com',
  uploadUrl: 'https://vtest-backend-d4nr.onrender.com/upload',
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
    simulatedDevices: 2,
    mbpsPerDevice: 18
  },
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
  ],
  plans: [
    { id: 'vnet400', name: 'VNET400', label: 'Hasta 400 Mbps', mbps: 400, recommendedDevices: 8 },
    { id: 'vnet600', name: 'VNET600', label: 'Hasta 600 Mbps', mbps: 600, recommendedDevices: 12 },
    { id: 'vnet1giga', name: 'VNET1GIGA', label: 'Hasta 1 Gbps', mbps: 1000, recommendedDevices: 20 }
  ],
  useCases: [
    {
      id: 'web_browsing',
      title: 'Navegación y redes sociales',
      minMbps: 15,
      idealMbps: 50,
      deviceLoadMbps: 10,
      planRef: 'VNET400',
      planDevices: 8,
      okText: 'Páginas y redes cargan con rapidez.',
      lowText: 'Puede haber demoras al abrir sitios pesados.'
    },
    {
      id: 'video_streaming',
      title: 'Streaming HD y 4K',
      minMbps: 25,
      idealMbps: 100,
      deviceLoadMbps: 25,
      planRef: 'VNET400',
      planDevices: 8,
      okText: 'Reproducción fluida sin cortes.',
      lowText: 'Puede bajar la calidad o pausar en horas pico.'
    },
    {
      id: 'video_conferencing',
      title: 'Videollamadas y trabajo remoto',
      minMbps: 25,
      idealMbps: 80,
      minUploadMbps: 8,
      deviceLoadMbps: 20,
      planRef: 'VNET600',
      planDevices: 12,
      okText: 'Buen respaldo para reuniones y envío de archivos.',
      lowText: 'Riesgo de cortes en audio/video o subida lenta.'
    },
    {
      id: 'online_gaming',
      title: 'Juegos en línea y descargas',
      minMbps: 50,
      idealMbps: 150,
      deviceLoadMbps: 30,
      planRef: 'VNET600',
      planDevices: 12,
      okText: 'Buen margen para descargas y respuesta estable.',
      lowText: 'Descargas lentas o retraso bajo carga compartida.'
    }
  ],
  deviceTypes: [
    { label: 'Celulares / Tablets', loadMbps: 12 },
    { label: 'PC / Laptops', loadMbps: 25 },
    { label: 'Smart TV / Streaming', loadMbps: 25 },
    { label: 'Consolas', loadMbps: 30 }
  ],
  activityReferenceTable: [
    { activity: 'Navegación web, redes sociales y mensajería', recommended: '15–60 Mbps (VNET400)' },
    { activity: 'Streaming HD / 4K simultáneo', recommended: '25–150 Mbps (VNET400)' },
    { activity: 'Videollamadas, clases y teletrabajo', recommended: '25–120 Mbps (VNET400 / VNET600)' },
    { activity: 'Juegos en línea y descargas', recommended: '60–300+ Mbps (VNET600 / VNET1GIGA)' }
  ],
  testTips: [
    { title: '🔌 Prioriza cable Ethernet', desc: 'Medir por cable ofrece mayor precisión y estabilidad que el Wi-Fi.' },
    { title: '📶 Usa Wi-Fi 5 GHz y cerca del router', desc: 'El test mide el enlace hacia el servidor, no la cobertura Wi-Fi ni el cableado interno.' },
    { title: '🔁 Haz al menos 3 pruebas seguidas', desc: 'Repite al menos tres veces en distintos horarios y evalúa ping, jitter y pérdida.' },
    { title: '⏸️ Pausa descargas y evita VPN', desc: 'Cierra descargas o streaming activos y desactiva VPN para no alterar la ruta.' }
  ],
  faq: [
    {
      q: '1. ¿Qué mide y qué no mide un test de velocidad?',
      a: 'Mide descarga, subida, latencia (ping), jitter y estabilidad hacia un servidor; no mide la cobertura Wi-Fi real, el router, el cableado ni las interferencias internas.'
    },
    {
      q: '2. ¿Cómo leer la latencia, el jitter y la pérdida de paquetes?',
      a: '0–30 ms es excelente, 30–60 ms buena, 60–100 ms aceptable y +100 ms muestra retrasos en tiempo real. Jitter bajo da mayor estabilidad y desde 1% de pérdida ya puede haber cortes.'
    },
    {
      q: '3. ¿Qué significan fibra óptica, NAP, ONT/ONU y velocidad simétrica?',
      a: 'La fibra óptica transmite pulsos de luz con baja latencia; el NAP distribuye la señal FTTH mediante splitter; la ONT/ONU convierte la señal óptica para enlazar con la OLT y el router; y la velocidad simétrica iguala descarga y subida.'
    }
  ]
};
