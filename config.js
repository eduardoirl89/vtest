// Configuración central de VNET Speedtest
window.VNET_CONFIG = {
  brandName: 'VNET',
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
      summary: 'Redes sociales, streaming en HD y series a tu ritmo',
      recommendedDevices: 16
    },
    {
      id: 'VNET600',
      name: 'VNET600',
      label: '600 Mbps',
      mbps: 600,
      summary: 'Videojuegos, conferencias y varias apps al mismo tiempo',
      recommendedDevices: 28
    },
    {
      id: 'VNET1GIGA',
      name: 'VNET1GIGA',
      label: '1 Gbps',
      mbps: 1000,
      summary: 'Streaming 4K/8K, descargas rápidas y familia gamer',
      recommendedDevices: 45
    }
  ],

  // Perfiles de uso calibrados con los planes VNET
  useCases: [
    {
      id: 'social_hd',
      title: 'Redes sociales y series en HD',
      minMbps: 10,
      idealMbps: 40,
      deviceLoadMbps: 8,
      planRef: 'VNET400 (400 Mbps)',
      planDevices: 16,
      featuredDevices: ['Celular', 'SmartTV', 'Laptop'],
      okText: 'Sí alcanza para redes sociales y series en HD.',
      lowText: 'Velocidad baja: puede haber esperas al cargar videos o fotos.'
    },
    {
      id: 'gaming_confs',
      title: 'Videojuegos, conferencias y varias apps',
      minMbps: 30,
      idealMbps: 100,
      deviceLoadMbps: 18,
      planRef: 'VNET600 (600 Mbps)',
      planDevices: 28,
      featuredDevices: ['Laptop', 'Desktop', 'Celular', 'PS5/XBOX'],
      okText: 'Sí rinde para juegos, videollamadas y varias apps a la vez.',
      lowText: 'Ajustado para multitarea o juegos: conviene evitar descargas pesadas a la vez.'
    },
    {
      id: 'ultra_4k_gamer',
      title: 'Streaming 4K/8K, descargas y familia gamer',
      minMbps: 80,
      idealMbps: 250,
      deviceLoadMbps: 30,
      planRef: 'VNET1GIGA (1 Gbps)',
      planDevices: 45,
      featuredDevices: ['SmartTV', 'PS5/XBOX', 'Desktop', 'Laptop', 'Celular'],
      okText: 'Sí soporta 4K/8K, descargas rápidas y uso familiar exigente.',
      lowText: 'Para 4K/8K simultáneo o familia gamer, se queda corto en picos altos.'
    }
  ],

  // Servidores de medición
  cdnNodes: [
    { name: 'Servidor rápido Cloudflare', url: 'https://speed.cloudflare.com/__down?bytes=15000000' },
    { name: 'Servidor de archivos jsDelivr', url: 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js' }
  ],

  pingEndpoints: [
    { name: 'Servidor rápido Cloudflare', url: 'https://speed.cloudflare.com/__down?bytes=100' },
    { name: 'Servidor de subida VNET', url: 'https://vtest-backend-d4nr.onrender.com/ping' }
  ],

  // Valores por defecto de la prueba
  defaults: {
    minThreads: 2,
    maxThreads: 4,
    durationSec: 8,
    autoStart: true,
    alwaysShowDetails: false
  },

  // Preguntas y respuestas adaptadas a VNET (lenguaje simple)
  faq: [
    {
      q: '¿Qué mide VNET?',
      a: 'VNET calcula la velocidad aproximada que tiene tu internet en este momento, tanto para descargar cosas como para subirlas, y te orienta qué uso y plan VNET se adapta mejor a tu ritmo.'
    },
    {
      q: '¿Cómo calcula VNET los equipos como Celular, Desktop, Laptop, SmartTV y PS5/XBOX?',
      a: 'Cada dispositivo consume un promedio distinto según lo que haga (navegar en Celular o Laptop, trabajar en Desktop, ver series en SmartTV o jugar/descargar en PS5/XBOX). Con tu velocidad actual y el plan de referencia calculamos una estimación práctica.'
    },
    {
      q: '¿Cuáles son los planes VNET400, VNET600 y VNET1GIGA?',
      a: 'VNET400 (400 Mbps) está pensado para redes sociales, series y streaming HD; VNET600 (600 Mbps) para videojuegos, conferencias y varias apps a la vez; y VNET1GIGA (1 Gbps) para streaming 4K/8K, descargas rápidas y hogares con varios jugadores.'
    },
    {
      q: '¿Por qué el cálculo de dispositivos conectados es orientativo?',
      a: 'Por seguridad, el navegador no puede listar los equipos conectados a tu router; por eso estimamos cuántos dispositivos simultáneos caben según tu velocidad medida, el consumo de cada uso y la capacidad de referencia de cada plan.'
    },
    {
      q: '¿Qué significan el tiempo de respuesta y el retraso extra?',
      a: 'El tiempo de respuesta (en ms) muestra qué tan rápido reacciona tu conexión en reposo y usando internet. Si sube mucho al descargar o subir, hay retraso extra (lo que se nota como lag o lentitud).'
    },
    {
      q: '¿Qué puedo hacer si quiero contratar o consultar un plan?',
      a: 'Puedes escribirnos directo por WhatsApp (584122593059), visitar nuestro Instagram (@vnet_ve), Facebook o nuestra web oficial usando los botones circulares.'
    }
  ]
};
