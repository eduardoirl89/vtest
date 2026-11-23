window.VNET_CONFIG = {
  brandName: 'VTEST',
  poweredByName: 'VNET',
  brandLogoUrl: '',
  backendUrl: 'https://vtest-backend-d4nr.onrender.com',

  defaults: {
    durationSec: 8,
    serverId: 'cloudflare',
    autoStart: true
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

  testTips: [
    {
      title: '🔌 Prioriza cable Ethernet',
      desc: 'Si mides desde una PC o laptop, el cable Ethernet ofrece una medición más precisa y estable que el Wi-Fi.'
    },
    {
      title: '📶 Usa Wi-Fi 5 GHz y cerca del router',
      desc: 'Un speed test mide el enlace hacia el servidor, no la cobertura Wi-Fi real, el router, el cableado ni las interferencias de tu red interna.'
    },
    {
      title: '🔁 Haz al menos 3 pruebas seguidas',
      desc: 'Realiza un mínimo de tres mediciones consecutivas en distintos momentos del día y evalúa latencia, jitter y pérdida de paquetes, no solo los megas.'
    },
    {
      title: '⏸️ Prepara la red antes de medir',
      desc: 'Cierra apps que consuman ancho de banda, pausa streaming y descargas, desconecta equipos sin uso y evita VPN o servidores lejanos.'
    },
    {
      title: '📡 Fibra óptica vs. inalámbrico y móvil',
      desc: 'La fibra óptica brinda mediciones más consistentes por su baja latencia y ausencia de interferencias; las redes inalámbricas y móviles varían por distancia, obstáculos, clima o saturación.'
    },
    {
      title: '⚖️ Bajada, subida y simetría',
      desc: 'La descarga pesa en navegación y streaming; la subida importa en videollamadas, envío de archivos, nube y juegos. Una conexión simétrica equilibra ambos sentidos.'
    }
  ],

  cdnNodes: [
    {
      id: 'cloudflare',
      name: 'Cloudflare',
      url: 'https://speed.cloudflare.com/__down?bytes=25000000'
    },
    {
      id: 'render',
      name: 'Servidor VNET Render',
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
      name: 'Servidor VNET Render',
      url: 'https://vtest-backend-d4nr.onrender.com/ping'
    }
  ],

  links: {
    website: 'https://vnet.com.ve',
    whatsapp: 'https://wa.me/584122593059',
    facebook: 'https://www.facebook.com/61566969571570/',
    instagram: 'https://www.instagram.com/vnet_ve/'
  },

  faq: [
    {
      q: '1. ¿Qué mide realmente un test de velocidad y qué no mide?',
      a: 'Mide velocidad de descarga, subida, latencia (ping), jitter y estabilidad del flujo hacia un servidor. No mide la cobertura Wi-Fi real del hogar, la congestión interna, la capacidad del router, la calidad del cableado ni las interferencias locales.'
    },
    {
      q: '2. ¿Cómo se interpreta la latencia (ping), el jitter y la pérdida de paquetes?',
      a: 'Como referencia general: 0–30 ms es excelente, 30–60 ms buena, 60–
