window.VNET_CONFIG = {
  brandName: 'VTEST',
  poweredByName: 'VNET',
  brandLogoUrl: '',
  backendUrl: 'https://vtest-backend-d4nr.onrender.com',

  defaults: {
    durationSec: 8,
    serverId: 'cloudflare',
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

  testTips: [
    {
      title: '🔌 Prioriza cable Ethernet',
      desc: 'Si mides desde una PC o laptop, el cable de red refleja la velocidad real de tu plan sin pérdidas por paredes o distancia.'
    },
    {
      title: '📶 Usa banda Wi-Fi de 5 GHz',
      desc: 'Si mides por Wi-Fi, conéctate a la red 5 GHz y acércate al router; la banda 2.4 GHz suele limitarse alrededor de 40–70 Mbps.'
    },
    {
      title: '🛡️ Desactiva VPN o proxy',
      desc: 'Las VPN redirigen tu tráfico hacia otros países y aumentan la latencia, reduciendo la velocidad medida.'
    },
    {
      title: '⏸️ Pausa descargas y streaming',
      desc: 'Evita actualizaciones de sistema, copias en la nube o videos 4K activos en otros equipos mientras dura la prueba.'
    },
    {
      title: '📱 Ten en cuenta los límites del celular',
      desc: 'Los teléfonos móviles y las redes celulares (4G/5G) gestionan menos conexiones simultáneas y ahorro de batería que una PC.'
    },
    {
      title: '🔄 Repite tras cambiar de red',
      desc: 'Si pasas de Wi-Fi a datos móviles, espera un par de segundos a que el teléfono estabilice la ruta antes de iniciar el test.'
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
    whatsapp: 'https://wa.me/',
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/'
  },

  faq: [
    {
      q: '1. ¿Cómo se alinean los planes VNET400, VNET600 y VNET1GIGA con el cuestionario?',
      a: 'El cuestionario calcula la necesidad real según tu escenario, cantidad de personas y coincidencia diaria, y sugiere el escalón correspondiente: VNET400 (hasta 400 Mbps), VNET600 (hasta 600 Mbps) o VNET1GIGA (hasta 1 Gbps).'
    },
    {
      q: '2. ¿Por qué la primera pregunta evalúa el escenario de uso antes de contar personas?',
      a: 'Porque un hogar, un puesto de teletrabajo, un comercio con cámaras/cajas o un entorno de gaming y descargas exigen distintos márgenes de velocidad, subida y estabilidad.'
    },
    {
      q: '3. ¿Por qué se pregunta por las personas que usan el servicio en presente y en horas pico?',
      a: 'Porque el ancho de banda de una conexión se reparte entre todas las personas y pantallas activas al mismo tiempo, no depende de un solo equipo aislado.'
    },
    {
      q: '4. ¿Por qué mi prueba en celular o Wi-Fi puede marcar menos que por cable?',
      a: 'El alcance del Wi-Fi, la banda (2.4 GHz vs 5 GHz), las paredes, la antena del celular y el uso simultáneo de otros equipos en la red influyen en la velocidad final.'
    },
    {
      q: '5. ¿Cómo influyen las VPN, proxys o antivirus en el resultado?',
      a: 'Una VPN o proxy desvía el tráfico hacia servidores externos y reduce la velocidad; los antivirus o firewalls solo afectan si inspeccionan tráfico en tiempo real.'
    },
    {
      q: '6. ¿Cómo se ajusta automáticamente el test según mi dispositivo?',
      a: 'VTEST detecta si entras desde móvil/tablet o desde PC/laptop y calibra automáticamente la cantidad de canales simultáneos y el tamaño de los bloques de prueba.'
    },
    {
      q: '7. ¿Qué servidores utiliza VTEST para medir bajada, subida y latencia?',
      a: 'De forma predeterminada utiliza la red global de Cloudflare para bajada y latencia de baja respuesta, junto con el servidor dedicado de VNET en Render para cargas de subida y comparación.'
    },
    {
      q: '8. ¿Qué indican la latencia en reposo, en bajada, en subida y el grado Bufferbloat?',
      a: 'Miden cuánto tarda en responder tu red sin tráfico y bajo carga intensa de descarga o subida. Si sube mucho al transferir datos (grado C o D), puede haber retrasos en videollamadas o juegos.'
    },
    {
      q: '9. ¿Qué significa la pérdida de paquetes y la variación (Jitter)?',
      a: 'La pérdida de paquetes muestra el porcentaje de sondas que no llegaron a tiempo, y el Jitter mide qué tanto fluctúa la latencia. Lo ideal es 0% de pérdida y Jitter bajo.'
    }
  ]
};
