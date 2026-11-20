// Configuración central de VTEST Speedtest (Powered by VNET)
window.VNET_CONFIG = {
  brandName: 'VTEST',
  poweredByName: 'VNET',
  brandLogoUrl: '',
  backendUrl: 'https://vtest-backend-d4nr.onrender.com',

  links: {
    website: 'https://vnet.com.ve',
    whatsapp: 'https://wa.me/584122593059?text=Hola%20VNET%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20planes%20y%20mi%20conexi%C3%B3n',
    facebook: 'https://www.facebook.com/people/VNET-Venezuela/61566969571570/?mibextidinstagram',
    instagram: 'https://www.instagram.com/vnet_ve/'
  },

  deviceTypes: [
    { id: 'celular', label: 'Celular', loadMbps: 8 },
    { id: 'laptop', label: 'Laptop', loadMbps: 15 },
    { id: 'desktop', label: 'Desktop', loadMbps: 20 },
    { id: 'smarttv', label: 'SmartTV', loadMbps: 25 },
    { id: 'console', label: 'PS5/XBOX', loadMbps: 35 }
  ],

  plans: [
    {
      id: 'VNET400',
      name: 'VNET400',
      label: '400 Mbps',
      mbps: 400,
      summary: 'Navegación, streaming en HD/4K y uso diario fluido',
      recommendedDevices: 16
    },
    {
      id: 'VNET600',
      name: 'VNET600',
      label: '600 Mbps',
      mbps: 600,
      summary: 'Juegos en línea, videollamadas y múltiples equipos a la vez',
      recommendedDevices: 28
    },
    {
      id: 'VNET1GIGA',
      name: 'VNET1GIGA',
      label: '1 Gbps',
      mbps: 1000,
      summary: '4K/8K simultáneo, descargas grandes y hogares exigentes',
      recommendedDevices: 45
    }
  ],

  useCases: [
    {
      id: 'web_browsing',
      title: 'Navegación web y redes sociales',
      minMbps: 5,
      idealMbps: 20,
      minUploadMbps: 1,
      idealUploadMbps: 5,
      deviceLoadMbps: 6,
      planRef: 'VNET400 (400 Mbps)',
      planDevices: 16,
      featuredDevices: ['Celular', 'Laptop', 'Desktop'],
      usageHint: 'Ref.: 0.5–5+ Mbps • ~60 MB/h en navegación/redes',
      okText: 'Fluida para navegar, revisar correos y redes sociales sin esperas.',
      lowText: 'Puede haber pausas al cargar páginas o fotos si la constancia baja.'
    },
    {
      id: 'online_gaming',
      title: 'Juegos en línea',
      minMbps: 10,
      idealMbps: 50,
      minUploadMbps: 3,
      idealUploadMbps: 10,
      deviceLoadMbps: 15,
      planRef: 'VNET600 (600 Mbps)',
      planDevices: 28,
      featuredDevices: ['PS5/XBOX', 'Desktop', 'Laptop'],
      usageHint: 'Ping ideal <50 ms • Descargas de juegos pesan decenas de GB',
      okText: 'Buen respaldo para partidas en línea cuando la latencia y la variación son bajas.',
      lowText: 'Con latencia alta, variación o descargas activas puede presentarse lag.'
    },
    {
      id: 'video_streaming',
      title: 'Streaming de video',
      minMbps: 10,
      idealMbps: 50,
      minUploadMbps: 2,
      idealUploadMbps: 5,
      deviceLoadMbps: 25,
      planRef: 'VNET400 (400 Mbps)',
      planDevices: 16,
      featuredDevices: ['SmartTV', 'Celular', 'Laptop'],
      usageHint: 'HD: 4–10 Mbps (~1.5–3 GB/h) • 4K: 25+ Mbps (~7–10 GB/h)',
      okText: 'Soporta reproducción fluida en HD y 4K sin cortes frecuentes.',
      lowText: 'Si la velocidad cae o sube el retraso, la calidad puede bajar a HD o SD.'
    },
    {
      id: 'video_conferencing',
      title: 'Videollamadas',
      minMbps: 6,
      idealMbps: 25,
      minUploadMbps: 3,
      idealUploadMbps: 10,
      deviceLoadMbps: 12,
      planRef: 'VNET600 (600 Mbps)',
      planDevices: 28,
      featuredDevices: ['Laptop', 'Desktop', 'Celular'],
      usageHint: 'HD: 3–6 / 2–3 Mbps • 4K: 10–15 / 5–10 Mbps (bajada / subida)',
      okText: 'Adecuada para videollamadas estables con buen audio y video.',
      lowText: 'Si la subida o la constancia caen, el audio o el video pueden desfasarse.'
    }
  ],

  speedQuiz: [
    {
      id: 'people',
      question: '¿Cuántas personas en tu hogar usan el servicio de internet / WiFi a diario?',
      options: [
        { label: '1-2', badge: '👤', addMbps: 25 },
        { label: '3-4', badge: '👥', addMbps: 55 },
        { label: '5+', badge: '👨‍👩‍👧‍👦', addMbps: 90 }
      ]
    },
    {
      id: 'devices',
      question: '¿Cuántos dispositivos en tu hogar se conectan a internet, incluyendo tablets, consolas de video juegos y dispositivos inteligentes?',
      options: [
        { label: '1-3', badge: '💻', addMbps: 10 },
        { label: '4-6', badge: '💻📱', addMbps: 25 },
        { label: '7-9', badge: '📱⌚', addMbps: 45 },
        { label: '10+', badge: '🎮📱', addMbps: 70 }
      ]
    },
    {
      id: 'wfh',
      question: '¿Cuántas personas en tu hogar trabajan desde casa?',
      options: [
        { label: 'Ninguno', badge: 'N/A', addMbps: 0 },
        { label: '1', badge: '👤', addMbps: 20 },
        { label: '2', badge: '👥', addMbps: 45 },
        { label: '3+', badge: '👨‍👩‍👧‍👦', addMbps: 75 }
      ]
    },
    {
      id: 'videoQuality',
      question: '¿Qué calidad de video utilizas al reproducir TV y películas?',
      options: [
        { label: 'No consumo video', badge: '📺', addMbps: 0 },
        { label: 'HD', badge: 'HD', addMbps: 20 },
        { label: '4K', badge: '4K', addMbps: 55 }
      ]
    },
    {
      id: 'gaming',
      question: '¿Qué tanto juegan en línea en tu hogar?',
      options: [
        { label: 'No se juega en línea', badge: 'N/A', addMbps: 0 },
        { label: 'Casual / Recreacional', badge: '🕹️', addMbps: 15 },
        { label: 'Si se juega con mucha frecuencia', badge: '🎮', addMbps: 35 },
        { label: 'Nivel profesional', badge: '🎧', addMbps: 60 }
      ]
    },
    {
      id: 'heavyDownloads',
      question: '¿En tu hogar se descargan pesados archivos de alguna nube o del internet?',
      options: [
        { label: 'No', badge: '☁️', addMbps: 0 },
        { label: 'Si, ocasionalmente', badge: '📥', addMbps: 30 },
        { label: 'Si, frecuentemente', badge: '⚡', addMbps: 80 }
      ]
    }
  ],

  activityReferenceTable: [
    {
      activity: 'Enviar e-mails, navegar por internet, streaming de radio, llamadas (VoIP)',
      devices: '1',
      recommended: '0.5–4 Mbps'
    },
    {
      activity: 'Streaming de películas y videos en formato estándar y HD',
      devices: '1',
      recommended: '4–7 Mbps'
    },
    {
      activity: 'Videoconferencias, juego casual (multijugador ligero)',
      devices: '1',
      recommended: '7–12 Mbps'
    },
    {
      activity: 'Juegos en línea, streaming de contenido HD en varios dispositivos',
      devices: '2',
      recommended: '12–15 Mbps'
    },
    {
      activity: 'Juegos en línea competitivos (FPS) y uso simultáneo en múltiples equipos',
      devices: '2+',
      recommended: '16+ Mbps (y baja latencia)'
    }
  ],

  cdnNodes: [
    { id: 'cloudflare', name: 'Cloudflare CDN (Recomendado)', url: 'https://speed.cloudflare.com/__down?bytes=15000000' },
    { id: 'jsdelivr', name: 'jsDelivr CDN (Respaldo)', url: 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js' },
    { id: 'render', name: 'Servidor VTEST Render', url: 'https://vtest-backend-d4nr.onrender.com/ping' }
  ],

  pingEndpoints: [
    { id: 'cloudflare', name: 'Cloudflare CDN (Recomendado)', url: 'https://speed.cloudflare.com/__down?bytes=100' },
    { id: 'render', name: 'Servidor VTEST Render', url: 'https://vtest-backend-d4nr.onrender.com/ping' }
  ],

  defaults: {
    adaptiveThreads: true,
    minThreads: 2,
    maxThreads: 4,
    durationSec: 8,
    serverId: 'cloudflare',
    autoStart: true,
    alwaysShowDetails: false
  },

  faq: [
    {
      q: '¿Por qué puede variar el resultado entre un celular y una laptop en la misma red?',
      a: 'Las laptops suelen tener antenas Wi-Fi con mayor capacidad (MIMO) y procesadores más potentes para manejar múltiples conexiones paralelas, mientras que los celulares priorizan ahorro de energía o pueden conectarse en banda de 2.4 GHz.'
    },
    {
      q: '¿Qué significan los términos de medición en VTEST?',
      a: 'Pasa el cursor sobre Bajada, Subida, Latencia, Variación o Constancia para ver su definición breve. VTEST mide bytes reales transferidos y ajusta los canales según el dispositivo.'
    },
    {
      q: '¿Cómo funciona el benchmarking de VTEST?',
      a: 'Separa tu benchmarking propio (tu prueba actual frente a tu mejor marca histórica y promedio) de la comparación entre tu test y los tests de otros usuarios de VTEST en tu zona, país y proveedores.'
    },
    {
      q: '¿Cómo puedo mejorar mi conexión si va lenta?',
      a: 'Reinicia el router/ONU, ubícalo en un punto central lejos de obstáculos, conéctate a la banda Wi-Fi de 5 GHz o usa cable Ethernet cuando sea posible.'
    }
  ]
};
