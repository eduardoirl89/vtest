// Configuración central de VTEST Speedtest (Powered by VNET)
window.VNET_CONFIG = {
  brandName: 'VTEST',
  poweredByName: 'VNET',
  // Ruta local (ej. 'logo-vnet.png' o 'assets/logo-vnet.svg') o URL del logo de VNET.
  // Si se deja vacío '', se muestra un emblema de respaldo con la inicial V.
  brandLogoUrl: '',
  backendUrl: 'https://vtest-backend-d4nr.onrender.com',

  // Enlaces oficiales y redes sociales de VNET
  links: {
    website: 'https://vnet.com.ve',
    whatsapp: 'https://wa.me/584122593059?text=Hola%20VNET%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20planes%20y%20mi%20conexi%C3%B3n',
    facebook: 'https://www.facebook.com/people/VNET-Venezuela/61566969571570/?mibextidinstagram',
    instagram: 'https://www.instagram.com/vnet_ve/'
  },

  // Tipos de dispositivos más usados (consumo promedio estimado por equipo en Mbps)
  deviceTypes: [
    { id: 'celular', label: 'Celular', loadMbps: 8 },
    { id: 'laptop', label: 'Laptop', loadMbps: 15 },
    { id: 'desktop', label: 'Desktop', loadMbps: 20 },
    { id: 'smarttv', label: 'SmartTV', loadMbps: 25 },
    { id: 'console', label: 'PS5/XBOX', loadMbps: 35 }
  ],

  // Planes comerciales de referencia según imágenes VNET
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

  // 4 categorías basadas en Speedtest Experience Ratings (Ookla) + métricas reales
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
      usageHint: 'Ref. Ookla: 1–5+ Mbps • ~60 MB/h en navegación/redes',
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
      okText: 'Buen respaldo para partidas en línea cuando el ping y el retraso extra son bajos.',
      lowText: 'Con ping alto, retraso extra o descargas activas puede presentarse lag.'
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
      usageHint: 'HD: 5–10 Mbps (~1.5–3 GB/h) • 4K: 25+ Mbps (~7–10 GB/h)',
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

  // Servidores de medición
  cdnNodes: [
    { name: 'Servidor rápido Cloudflare', url: 'https://speed.cloudflare.com/__down?bytes=15000000' },
    { name: 'Servidor de archivos jsDelivr', url: 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js' }
  ],

  pingEndpoints: [
    { name: 'Servidor rápido Cloudflare', url: 'https://speed.cloudflare.com/__down?bytes=100' },
    { name: 'Servidor de subida VTEST', url: 'https://vtest-backend-d4nr.onrender.com/ping' }
  ],

  // Valores por defecto de la prueba
  defaults: {
    minThreads: 2,
    maxThreads: 4,
    durationSec: 8,
    autoStart: true,
    alwaysShowDetails: false
  },

  // Preguntas y respuestas adaptadas a VTEST y VNET
  faq: [
    {
      q: '¿Qué mide VTEST?',
      a: 'VTEST calcula la velocidad aproximada que tiene tu internet en este momento, tanto para descargar como para subir, junto con la latencia y la constancia, para puntuar de 1 a 5 cómo rinde cada actividad.'
    },
    {
      q: '¿Por qué una buena velocidad de bajada no siempre garantiza buen juego o videollamada?',
      a: 'En juegos en línea y videollamadas también influyen el ping en reposo, el retraso extra al usar internet, la velocidad de subida y la constancia de la conexión.'
    },
    {
      q: '¿Cómo calcula VTEST los equipos como Celular, Desktop, Laptop, SmartTV y PS5/XBOX?',
      a: 'Cada dispositivo consume un promedio distinto según lo que haga (navegar en Celular o Laptop, trabajar en Desktop, ver series en SmartTV o jugar/descargar en PS5/XBOX). Con tu velocidad actual y el plan de referencia calculamos una estimación práctica.'
    },
    {
      q: '¿Cuáles son los planes VNET400, VNET600 y VNET1GIGA?',
      a: 'VNET400 (400 Mbps) está pensado para navegación, redes sociales y streaming HD/4K; VNET600 (600 Mbps) para juegos en línea, videollamadas y hogares con varios equipos; y VNET1GIGA (1 Gbps) para 4K/8K simultáneo, descargas grandes y uso exigente.'
    },
    {
      q: '¿Qué puedo hacer si quiero contratar o consultar un plan?',
      a: 'Puedes escribirnos directo por WhatsApp (584122593059), visitar nuestro Instagram (@vnet_ve), Facebook o nuestra web oficial usando los botones circulares.'
    }
  ]
};
