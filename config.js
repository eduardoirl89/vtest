// Configuración central de VNET Speedtest
window.VNET_CONFIG = {
  brandName: 'VNET',
  backendUrl: 'https://vtest-backend-d4nr.onrender.com',

  // Enlaces externos y de contacto (edítalos con tus datos reales)
  links: {
    website: 'https://vnet.com.ve',
    whatsapp: 'https://wa.me/584120000000?text=Hola%20VNET%2C%20quiero%20consultar%20sobre%20mi%20conexi%C3%B3n',
    instagram: 'https://www.instagram.com/vnet/'
  },

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
      a: 'VNET calcula la velocidad aproximada que tiene tu internet en este momento, tanto para descargar cosas como para subirlas, usando servidores de prueba rápidos.'
    },
    {
      q: '¿Por qué se muestra primero la velocidad de bajada?',
      a: 'La velocidad de bajada es la que más se nota al abrir páginas, ver videos, escuchar música o cargar redes sociales. Toca "Ver más detalles" para ver la subida y otros datos.'
    },
    {
      q: '¿Qué significan el tiempo de respuesta y el retraso extra?',
      a: 'El tiempo de respuesta (en ms) indica qué tan rápido reacciona tu conexión. Medimos cuándo está en reposo y cuándo estás usando internet: si sube mucho al descargar o subir, hay retraso extra (lo que se nota como lag o lentitud).'
    },
    {
      q: '¿Cómo se calculan los resultados?',
      a: 'VNET envía y recibe bloques de datos de prueba durante unos segundos y divide los datos transferidos entre el tiempo transcurrido para darte un cálculo claro en Mbps.'
    },
    {
      q: '¿VNET funciona en celular, computadora o Smart TV?',
      a: 'Sí, funciona desde cualquier navegador moderno en teléfonos, tablets, laptops o televisores con internet.'
    },
    {
      q: '¿Para qué sirve esta prueba?',
      a: 'Te ayuda a revisar de forma rápida y sencilla cómo rinde tu conexión en el día a día y si se ajusta a lo que necesitas para navegar, ver TV, hacer videollamadas o jugar.'
    },
    {
      q: '¿Qué puedo hacer si mi velocidad es más baja de lo esperado?',
      a: 'Prueba acercarte al Wi-Fi, pausar descargas en otros equipos o repetir la prueba. Si el problema continúa, contáctanos por WhatsApp o Instagram.'
    },
    {
      q: '¿Sirve como certificado oficial o técnico?',
      a: 'No. VNET es una herramienta práctica de orientación rápida para usuarios y no sustituye una medición técnica certificada.'
    }
  ]
};
