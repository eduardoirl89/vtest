window.VNET_CONFIG = {
  brandName: 'VTEST',
  poweredByName: 'VNET',
  brandLogoUrl: '',
  backendUrl: 'https://vtest-backend-d4nr.onrender.com',

  defaults: {
    adaptiveThreads: true,
    minThreads: 2,
    maxThreads: 4,
    durationSec: 8,
    serverId: 'cloudflare_std',
    autoStart: true,
    alwaysShowDetails: false
  },

  plans: [
    {
      id: 'vnet400',
      name: 'VNET400',
      label: 'Hasta 400 Mbps',
      mbps: 400,
      recommendedDevices: 8,
      summary: 'Hasta 400 Mbps • Ideal para hogares con varias personas, streaming HD/4K, videollamadas y uso diario compartido'
    },
    {
      id: 'vnet600',
      name: 'VNET600',
      label: 'Hasta 600 Mbps',
      mbps: 600,
      recommendedDevices: 12,
      summary: 'Hasta 600 Mbps • Pensado para mayor coincidencia de equipos, descargas pesadas, teletrabajo y juegos en línea'
    },
    {
      id: 'vnet1giga',
      name: 'VNET1GIGA',
      label: 'Hasta 1 Gbps',
      mbps: 1000,
      recommendedDevices: 20,
      summary: 'Hasta 1 Gbps (1000 Mbps) • Máxima capacidad para alta concurrencia, múltiples pantallas, nube y uso intensivo'
    }
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
      featuredDevices: ['Celular', 'Laptop', 'Tablet'],
      usageHint: 'Carga rápida de páginas, mensajería, fotos y videos cortos.',
      okText: 'Páginas, redes y mensajería cargan con rapidez.',
      lowText: 'Puede haber demoras al abrir sitios pesados o cargar medios.'
    },
    {
      id: 'video_streaming',
      title: 'Streaming HD y 4K',
      minMbps: 25,
      idealMbps: 100,
      deviceLoadMbps: 25,
      planRef: 'VNET400',
      planDevices: 8,
      featuredDevices: ['Smart TV', 'TV Box', 'Tablet'],
      usageHint: 'Reproducción fluida sin cortes ni caídas de resolución.',
      okText: 'Soporta reproducción fluida y buen inicio de video.',
      lowText: 'Puede bajar la calidad de imagen o pausar en horas pico.'
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
      featuredDevices: ['Laptop', 'PC Escritorio', 'Celular'],
      usageHint: 'Voz y cámara estables, envío de archivos y apps en la nube.',
      okText: 'Buen respaldo para reuniones, cámara y envío de archivos.',
      lowText: 'Riesgo de cortes de audio/video o demora al subir archivos.'
    },
    {
      id: 'online_gaming',
      title: 'Juegos en línea y descargas',
      minMbps: 50,
      idealMbps: 150,
      deviceLoadMbps: 30,
      planRef: 'VNET600',
      planDevices: 12,
      featuredDevices: ['PC Gamer', 'Consola', 'Laptop'],
      usageHint: 'Menor espera de respuesta y descargas de juegos más rápidas.',
      okText: 'Buen margen para descargas y respuesta estable.',
      lowText: 'Descargas lentas o retraso si otros equipos descargan a la vez.'
    }
  ],

  deviceTypes: [
    { label: 'Celulares / Tablets', loadMbps: 12 },
    { label: 'PC / Laptops', loadMbps: 25 },
    { label: 'Smart TV / Streaming', loadMbps: 25 },
    { label: 'Consolas', loadMbps: 30 }
  ],

  activityReferenceTable: [
    {
      activity: 'Navegación web, redes sociales y mensajería',
      devices: '1 a 6+ equipos',
      recommended: '15–60 Mbps (cubierto desde VNET400)'
    },
    {
      activity: 'Streaming HD / 4K simultáneo',
      devices: '1 a 5+ pantallas',
      recommended: '25–150 Mbps (cubierto desde VNET400)'
    },
    {
      activity: 'Videollamadas, clases y teletrabajo',
      devices: '1 a 6+ puestos',
      recommended: '25–120 Mbps (VNET400 / VNET600 según concurrencia)'
    },
    {
      activity: 'Juegos en línea, descargas y respaldo en la nube',
      devices: '2 a 8+ equipos',
      recommended: '60–300+ Mbps (VNET600 / VNET1GIGA en alta carga)'
    }
  ],

  cdnNodes: [
    {
      id: 'cloudflare_std',
      name: 'Cloudflare CDN — Estándar (15 MB)',
      url: 'https://speed.cloudflare.com/__down?bytes=15000000'
    },
    {
      id: 'cloudflare_high',
      name: 'Cloudflare CDN — Alta velocidad (50 MB)',
      url: 'https://speed.cloudflare.com/__down?bytes=50000000'
    },
    {
      id: 'cloudflare_h3',
      name: 'Cloudflare CDN — HTTP/3 (25 MB)',
      url: 'https://h3.speed.cloudflare.com/__down?bytes=25000000'
    },
    {
      id: 'vnet_backend_dl',
      name: 'Servidor VNET Render — Prueba ligera (5 MB)',
      url: 'https://vtest-backend-d4nr.onrender.com/ping?size=5mb'
    }
  ],

  pingEndpoints: [
    {
      id: 'cloudflare_std',
      name: 'Cloudflare CDN — Estándar',
      url: 'https://speed.cloudflare.com/__down?bytes=100'
    },
    {
      id: 'cloudflare_high',
      name: 'Cloudflare CDN — Alta velocidad',
      url: 'https://speed.cloudflare.com/__down?bytes=100'
    },
    {
      id: 'cloudflare_h3',
      name: 'Cloudflare CDN — HTTP/3',
      url: 'https://h3.speed.cloudflare.com/__down?bytes=100'
    },
    {
      id: 'vnet_backend_dl',
      name: 'Servidor VNET Render — Ping',
      url: 'https://vtest-backend-d4nr.onrender.com/ping'
    }
  ],

  links: {
    website: 'https://vnet.com.ve',
    whatsapp: 'https://wa.me/',
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/'
  },

  faq: [
    {
      q: '¿Por qué la primera pregunta evalúa el escenario de uso antes de contar equipos?',
      a: 'Porque un hogar, un puesto de teletrabajo, un comercio o un entorno de juegos/descargas exigen distintos márgenes de velocidad, subida y estabilidad.'
    },
    {
      q: '¿Por qué mi prueba en Wi-Fi o celular puede marcar menos que el plan?',
      a: 'El alcance del Wi-Fi, la distancia al router, la antena del dispositivo y el tráfico de otros equipos afectan la medición final.'
    },
    {
      q: '¿Por qué conviene desactivar VPN o probar por cable?',
      a: 'Una VPN puede desviar o limitar el tráfico, y una conexión por cable Ethernet suele reflejar mejor la capacidad real de la línea que el Wi-Fi.'
    }
  ]
};
