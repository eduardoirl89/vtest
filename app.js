(() => {
  'use strict';

  const SRV_CFG = window.VTEST_SERVERS || {};
  const CFG = window.VNET_CONFIG || {};
  const BACKEND_URL = CFG.backendUrl || SRV_CFG.backendUrl || 'https://vtest-api.eduardoirl89.workers.dev';
  const CONTENT_URL = CFG.contentUrl || './content.json';

  const FALLBACK_CONTENT = {
    ui: {
      brandPill: 'RED DE POSIBILIDADES',
      installApp: '📲 Instalar app',
      installSettings: '📲 Instalar app en este equipo',
      phaseReady: 'Listo',
      phaseDownload: 'Bajada',
      phaseUpload: 'Subida',
      phaseStopped: 'Detenido',
      gaugeInit: 'Iniciando...',
      gaugeDownload: 'Midiendo bajada{rep}...',
      gaugeUpload: 'Midiendo subida{rep}...',
      gaugeCompleted: 'Completado',
      gaugeMultiAvg: 'Prom. {count} pruebas',
      gaugeStopped: 'Detenido',
      gaugeError: 'Error de red',
      btnStop: 'Detener prueba',
      btnStart: 'Iniciar prueba',
      btnRepeat: 'Repetir prueba',
      ispDetecting: 'Detectando ISP...',
      ispUnknown: 'Red no identificada',
      locationInactive: 'Ubicación no activa',
      serverDefaultLocation: 'Red Edge Global',
      deviceMobile: 'Móvil',
      deviceDesktop: 'PC / Laptop',
      providerPrefix: 'Proveedor',
      serverPrefix: 'Servidor',
      clientPrefix: 'Cliente',
      dlHead: '↓ BAJADA',
      ulHead: '↑ SUBIDA',
      pingLabel: 'Latencia',
      jitterLabel: 'Jitter',
      stabilityLabel: 'Constancia',
      lossLabel: 'Pérdida',
      quizHeading: '🧮 Tu plan ideal',
      quizResultTitle: 'Resultado de tu recomendación',
      quizRecommendationPrefix: 'Sugerencia para',
      quizSuggestedPlan: 'Plan sugerido: {plan} ({label})',
      quizMeasuredNote: 'Tu bajada medida hoy es de {mbps} Mbps.',
      quizUnmeasuredNote: 'Haz una prueba en Velocidad para comparar con tu conexión actual.',
      quizRestart: 'Volver a responder',
      quizProgress: 'Pregunta {step}/{total}',
      quizEstimatedPrefix: 'Estimado:',
      quizBack: '‹ Anterior',
      accordionHeading: '📂 Guía práctica de tu conexión',
      accMetricsGuideTitle: '📊 ¿Qué significa cada métrica?',
      accActivitiesTitle: '🎯 ¿Cómo rinde en tu día a día?',
      accDevicesTitle: '📱 ¿Cuántos equipos pueden conectarse?',
      accRefTableTitle: '📋 Guía rápida por tipo de uso',
      accTipsTitle: '💡 Consejos para medir mejor',
      accFaqTitle: '❓ Dudas frecuentes y términos',
      refColActivity: 'Actividad',
      refColRecommended: 'Recomendado',
      ratingGood: 'Óptimo / Bueno',
      ratingOk: 'Aceptable',
      ratingPoor: 'Limitado',
      ratingInitial: 'Referencia inicial',
      planRefPrefix: 'Plan ref.:',
      deviceEstPrefix: 'Equipos simultáneos estimados:',
      devicePerEqSuffix: 'Mbps/eq',
      devicesNoteMeasured: 'Margen útil: ~{usable} Mbps (base: {base} Mbps • constancia: {stab}% • latencia: {ping} ms • jitter: {jitter} ms • pérdida: {loss}%).',
      devicesNoteRef: 'Estimación de referencia inicial. Haz una prueba para usar tu velocidad real.',
      pwaInstalledNote: 'VTEST ya está ejecutándose como aplicación instalada.',
      pwaReadyNote: 'Listo para instalar en tu pantalla de inicio o escritorio.',
      pwaManualNote: 'En Android/Windows usa el menú del navegador para instalar como app; en iPhone/iPad usa Compartir -> Añadir a pantalla de inicio.',
      historyTitle: '🕒 Mis mediciones en cada red (D1)',
      exportCsvBtn: 'CSV',
      clearHistoryBtn: 'Borrar',
      histColDate: 'Fecha',
      histColIsp: 'Red / ISP',
      histColDl: 'Bajada',
      histColUl: 'Subida',
      histColPing: 'Latencia',
      histColJitter: 'Jitter',
      histColStab: 'Constancia',
      histColLoss: 'Pérdida',
      historyEmpty: 'Aún no tienes pruebas registradas en D1 para este equipo.',
      linkWeb: '🌐 Web',
      linkWa: '💬 WhatsApp',
      linkFb: 'Facebook',
      linkIg: 'Instagram',
      poweredByPrefix: 'Powered by',
      navTest: 'Velocidad',
      navQuiz: 'Tu plan ideal',
      navAccordion: 'Guía y métricas',
      navSettings: 'Mis mediciones'
    },
    metricsGuide: [
      { title: '↓ Bajada (Descarga)', desc: 'Muestra qué tan rápido puedes traer datos desde internet hacia tu equipo, clave para streaming, descargas y actualizaciones. Se mide con transferencias de distintos tamaños y reporta el percentil 90 de las lecturas.' },
      { title: '↑ Subida (Carga)', desc: 'Indica qué tan rápido puedes enviar información desde tu equipo hacia la red, útil para subir archivos, respaldos o transmitir en vivo. También se mide con envíos variados y reporta el percentil 90.' },
      { title: '⏱️ Latencia (Ping / RTT)', desc: 'Es el tiempo de ida y vuelta (RTT) que tarda un paquete desde tu equipo hasta el servidor y de regreso. Importa mucho en juegos y videollamadas; el valor mostrado refleja la mediana de las lecturas.' },
      { title: '〰️ Jitter', desc: 'Muestra qué tanto cambia la latencia entre mediciones consecutivas (distancia promedio entre lecturas sucesivas de RTT). Un jitter bajo ayuda a mantener llamadas, juegos y video más estables.' },
      { title: '📉 Pérdida de paquetes', desc: 'Indica si hubo paquetes de datos que no llegaron a destino durante la prueba. Cuando aumenta, puede causar cortes o retrasos en aplicaciones en tiempo real; lo ideal es mantenerse cerca de 0%.' }
    ],
    notMeasuredGuide: {
      title: '🔎 Qué no mide un test de velocidad',
      desc: 'No mide la cobertura o alcance real del Wi-Fi en cada habitación, el rendimiento interno o saturación del router, el estado del cableado o conectores internos ni las interferencias cercanas.'
    },
    quizSteps: [
      {
        id: 'scenario_now',
        question: '¿Cuál de estos escenarios describe mejor tu uso actual del internet?',
        options: [
          { badge: '🏠', label: 'Hogar (streaming, redes y tareas)', basePerPerson: 22 },
          { badge: '💻', label: 'Home office y videollamadas', basePerPerson: 34 },
          { badge: '🏪', label: 'Comercio / negocio', basePerPerson: 32 },
          { badge: '🎮', label: 'Gaming y descargas pesadas', basePerPerson: 44 }
        ]
      },
      {
        id: 'people_daily',
        question: '¿Cuántas personas usan el servicio de internet a diario?',
        options: [
          { badge: '1–2', label: '1 a 2 personas', peopleCount: 2, factor: 1.5 },
          { badge: '3–4', label: '3 a 4 personas', peopleCount: 4, factor: 2.7 },
          { badge: '5–8', label: '5 a 8 personas', peopleCount: 8, factor: 4.4 },
          { badge: '9+', label: '9 o más personas', peopleCount: 12, factor: 6.0 }
        ]
      },
      {
        id: 'peak_overlap',
        question: '¿Con qué frecuencia coinciden varias personas o equipos a la vez?',
        options: [
          { badge: 'Rara vez', label: 'Casi nunca coinciden', addMbps: 10 },
          { badge: 'A veces', label: 'En horas pico o tardes', addMbps: 40 },
          { badge: 'Seguido', label: 'Varias horas al día', addMbps: 75 },
          { badge: 'Siempre', label: 'Casi todo el día a la vez', addMbps: 120 }
        ]
      }
    ],
    useCases: [
      { id: 'web_browsing', title: 'Navegación y redes sociales', minMbps: 15, idealMbps: 50, deviceLoadMbps: 10, planRef: 'VNET400', planDevices: 8, okText: 'Páginas y redes cargan con rapidez.', lowText: 'Puede haber demoras al abrir sitios pesados.' },
      { id: 'video_streaming', title: 'Streaming HD y 4K', minMbps: 25, idealMbps: 100, deviceLoadMbps: 25, planRef: 'VNET400', planDevices: 8, okText: 'Reproducción fluida sin cortes.', lowText: 'Puede bajar la calidad o pausar en horas pico.' },
      { id: 'video_conferencing', title: 'Videollamadas y trabajo remoto', minMbps: 25, idealMbps: 80, minUploadMbps: 8, deviceLoadMbps: 20, planRef: 'VNET600', planDevices: 12, okText: 'Buen respaldo para reuniones y envío de archivos.', lowText: 'Riesgo de cortes en audio/video o subida lenta.' },
      { id: 'online_gaming', title: 'Juegos en línea y descargas', minMbps: 50, idealMbps: 150, deviceLoadMbps: 30, planRef: 'VNET600', planDevices: 12, okText: 'Buen margen para descargas y respuesta estable.', lowText: 'Descargas lentas o retraso bajo carga compartida.' }
    ],
    deviceTypes: [
      { label: 'Celulares / Tablets', loadMbps: 10 },
      { label: 'PC / Laptops', loadMbps: 22 },
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
      { title: '🔁 Haz al menos 3 pruebas seguidas', desc: 'Repite al menos tres veces en distintos horarios y evalúa latencia, jitter y pérdida.' },
      { title: '⏸️ Pausa descargas y evita VPN', desc: 'Cierra descargas o streaming activos y desactiva VPN para no alterar la ruta.' }
    ],
    faq: [
      { q: '1. ¿Qué mide y qué no mide un test de velocidad?', a: 'Mide bajada, subida, latencia (RTT), jitter y pérdida hacia el servidor; no mide la cobertura Wi-Fi real, el router, el cableado ni las interferencias internas.' },
      { q: '2. ¿Cómo leer la latencia, el jitter y la pérdida de paquetes?', a: '0–30 ms es excelente, 30–60 ms buena, 60–100 ms aceptable y +100 ms muestra retrasos en tiempo real. Un jitter bajo da mayor estabilidad y desde 1% de pérdida ya puede haber cortes.' },
      { q: '3. ¿Qué significan fibra óptica, NAP, ONT/ONU y velocidad simétrica?', a: 'La fibra óptica transmite pulsos de luz con baja latencia; el NAP distribuye la señal FTTH mediante splitter; la ONT/ONU convierte la señal óptica para enlazar con la OLT y el router; y la velocidad simétrica iguala bajada y subida.' }
    ]
  };

  let contentData = {
    ui: { ...FALLBACK_CONTENT.ui },
    metricsGuide: FALLBACK_CONTENT.metricsGuide,
    notMeasuredGuide: FALLBACK_CONTENT.notMeasuredGuide,
    quizSteps: FALLBACK_CONTENT.quizSteps,
    useCases: FALLBACK_CONTENT.useCases,
    deviceTypes: FALLBACK_CONTENT.deviceTypes,
    activityReferenceTable: FALLBACK_CONTENT.activityReferenceTable,
    testTips: FALLBACK_CONTENT.testTips,
    faq: FALLBACK_CONTENT.faq
  };

  const t = (key, vars = {}) => {
    let str = contentData.ui[key] ?? FALLBACK_CONTENT.ui[key] ?? key;
    Object.entries(vars).forEach(([k, v]) => {
      str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
    });
    return str;
  };

  const DEFAULT_SERVER_ID = 'cloudflare';
  const FALLBACK_CDN_NODES = [
    { id: 'cloudflare', name: 'Cloudflare', location: 'Red Edge Global', url: 'https://speed.cloudflare.com/__down?bytes=25000000' },
    { id: 'worker', name: 'Servidor VNET Worker', location: 'Cloudflare Edge', url: `${BACKEND_URL}/download?mb=5` }
  ];
  const FALLBACK_PING_ENDPOINTS = [
    { id: 'cloudflare', name: 'Cloudflare', location: 'Red Edge Global', url: `${BACKEND_URL}/ping` },
    { id: 'worker', name: 'Servidor VNET Worker', location: 'Cloudflare Edge', url: `${BACKEND_URL}/ping` }
  ];
  const FALLBACK_UPLOAD_ENDPOINTS = [
    { id: 'cloudflare_upload', name: 'Cloudflare Edge', location: 'Red Edge Global', url: 'https://speed.cloudflare.com/__up' },
    { id: 'worker_upload', name: 'Servidor VNET Worker (Upload)', location: 'Cloudflare Edge', url: `${BACKEND_URL}/upload` }
  ];
  const FALLBACK_PLANS = [
    { id: 'vnet400', name: 'VNET400', label: 'Hasta 400 Mbps', mbps: 400, recommendedDevices: 8 },
    { id: 'vnet600', name: 'VNET600', label: 'Hasta 600 Mbps', mbps: 600, recommendedDevices: 12 },
    { id: 'vnet1giga', name: 'VNET1GIGA', label: 'Hasta 1 Gbps', mbps: 1000, recommendedDevices: 20 }
  ];

  const CDN_NODES = Array.isArray(SRV_CFG.cdnNodes) && SRV_CFG.cdnNodes.length ? SRV_CFG.cdnNodes : FALLBACK_CDN_NODES;
  const PING_ENDPOINTS = Array.isArray(SRV_CFG.pingEndpoints) && SRV_CFG.pingEndpoints.length ? SRV_CFG.pingEndpoints : FALLBACK_PING_ENDPOINTS;
  const UPLOAD_ENDPOINTS = Array.isArray(SRV_CFG.uploadEndpoints) && SRV_CFG.uploadEndpoints.length ? SRV_CFG.uploadEndpoints : FALLBACK_UPLOAD_ENDPOINTS;
  const PLANS = Array.isArray(CFG.plans) && CFG.plans.length ? CFG.plans : FALLBACK_PLANS;

  const DURATION_SEC = Math.max(5, Math.min(15, parseInt(CFG.defaults?.durationSec, 10) || 8));
  const AUTO_START = CFG.defaults?.autoStart !== false;

  let isRunning = false;
  let testCompleted = false;
  let abortCtrl = null;
  let dlSeries = [];
  let ulSeries = [];
  let quizAnswers = {};
  let quizStep = 0;
  let deferredInstallPrompt = null;
  let gpsLocationLabel = '';
  let ipLocationLabel = '';
  let gaugeTotalLen = 0;
  let d1Records = [];

  // Estado del embudo en la misma pantalla principal
  let funnelOpen = false;
  let funnelStep = 1;
  let funnelUse = { key: 'home', label: 'Hogar / Streaming', base: 24 };
  let funnelPeople = { people: 2, label: '1–2 personas', factor: 1.5, add: 15 };
  let selectedHirePlan = null;

  let netInfo = {
    ip: '',
    isp: '',
    countryCode: ''
  };

  let lastMetrics = {
    downloadMbps: null,
    uploadMbps: null,
    pingMs: null,
    jitterMs: null,
    packetLossPct: null,
    stabilityPct: null
  };

  const GAUGE_TICKS = [0, 1, 5, 10, 25, 50, 100, 250, 500, 1000];
  const GAUGE_CX = 180;
  const GAUGE_CY = 126;
  const GAUGE_R = 104;
  const START_DEG = 140;
  const SWEEP_DEG = 260;

  function syncRunningChrome() {
    document.body.classList.toggle('test-running', Boolean(isRunning));
  }

  function getClientTimeZone() {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    } catch {
      return 'UTC';
    }
  }

  function getLocalSqlDateTime(dateInput = new Date()) {
    const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
    if (Number.isNaN(d.getTime())) return '';
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  function formatClientLocalDate(dateInput = new Date()) {
    const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
    if (Number.isNaN(d.getTime())) return '--';
    const tz = getClientTimeZone();
    try {
      return d.toLocaleString(navigator.language || undefined, { timeZone: tz });
    } catch {
      return d.toLocaleString();
    }
  }

  function getActiveClientLocation() {
    return gpsLocationLabel || ipLocationLabel || t('locationInactive');
  }

  function detectDevice() {
    const ua = navigator.userAgent || '';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
      || (navigator.maxTouchPoints > 1 && window.innerWidth <= 900);
    const cores = navigator.hardwareConcurrency || 4;
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const slow = Boolean(conn && (conn.saveData || ['2g', 'slow-2g', '3g'].includes(String(conn.effectiveType || '').toLowerCase())));

    return {
      isMobile,
      label: isMobile ? t('deviceMobile') : t('deviceDesktop'),
      minThreads: slow ? 2 : (isMobile ? 4 : 6),
      maxThreads: slow ? 3 : (isMobile ? (cores >= 6 ? 6 : 5) : (cores >= 4 ? 8 : 6)),
      uploadChunkBytes: isMobile ? (1 * 1024 * 1024) : (2 * 1024 * 1024),
      uploadThreads: slow ? 2 : (isMobile ? 4 : 6),
      durationSec: DURATION_SEC
    };
  }

  function getDlNode() {
    return CDN_NODES.find(n => n.id === DEFAULT_SERVER_ID) || CDN_NODES[0];
  }

  function getPingNode() {
    return PING_ENDPOINTS.find(p => p.id === DEFAULT_SERVER_ID) || PING_ENDPOINTS[0];
  }

  function getUploadUrl() {
    if (UPLOAD_ENDPOINTS.length) {
      const cfUp = UPLOAD_ENDPOINTS.find(u => u.id.includes(DEFAULT_SERVER_ID));
      return (cfUp || UPLOAD_ENDPOINTS[0]).url;
    }
    return CFG.uploadUrl || SRV_CFG.uploadUrl || `${BACKEND_URL}/upload`;
  }

  function getUploadCandidates() {
    const list = [];
    const primary = getUploadUrl();
    if (primary) list.push(primary);
    const workerUp = `${BACKEND_URL}/upload`;
    if (!list.includes(workerUp)) list.push(workerUp);
    return list;
  }

  function fmtSpeed(mbps) {
    if (typeof mbps !== 'number' || !Number.isFinite(mbps)) return '--';
    if (mbps >= 100) return Math.round(mbps).toString();
    if (mbps >= 10) return mbps.toFixed(1);
    return mbps.toFixed(2);
  }

  function fmtGauge(mbps) {
    if (typeof mbps !== 'number' || !Number.isFinite(mbps)) return '0.00';
    return mbps.toFixed(2);
  }

  function calcMedian(values) {
    if (!Array.isArray(values) || !values.length) return null;
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    return sorted[mid];
  }

  function calcPercentile(values, p = 0.9) {
    if (!Array.isArray(values) || !values.length) return 0;
    const sorted = [...values].filter(v => typeof v === 'number' && Number.isFinite(v) && v >= 0).sort((a, b) => a - b);
    if (!sorted.length) return 0;
    const idx = Math.min(sorted.length - 1, Math.max(0, Math.ceil(sorted.length * p) - 1));
    return sorted[idx];
  }

  function calcJitterFromRtts(rtts) {
    if (!Array.isArray(rtts) || rtts.length < 2) return 0;
    let sum = 0;
    for (let i = 1; i < rtts.length; i++) {
      sum += Math.abs(rtts[i] - rtts[i - 1]);
    }
    return Number((sum / (rtts.length - 1)).toFixed(1));
  }

  function polarToCartesian(cx, cy, r, angleDeg) {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function buildArcPath(cx, cy, r, startDeg, endDeg) {
    const s = polarToCartesian(cx, cy, r, startDeg);
    const e = polarToCartesian(cx, cy, r, endDeg);
    const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
    const sweepFlag = endDeg >= startDeg ? 1 : 0;
    return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${largeArc} ${sweepFlag} ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
  }

  function mbpsToProgress(mbps) {
    if (!mbps || mbps <= 0) return 0;
    const clamped = Math.min(1000, mbps);
    const idx = GAUGE_TICKS.findIndex((v, i) => i < GAUGE_TICKS.length - 1 && clamped >= v && clamped <= GAUGE_TICKS[i + 1]);
    if (idx === -1) return 1;
    const low = GAUGE_TICKS[idx];
    const high = GAUGE_TICKS[idx + 1];
    return (idx + (clamped - low) / (high - low)) / (GAUGE_TICKS.length - 1);
  }

  function initGauge() {
    const trackPath = document.getElementById('gaugeTrackPath');
    const fillPath = document.getElementById('gaugeFillPath');
    const ticksGroup = document.getElementById('gaugeTicksGroup');
    if (!trackPath || !fillPath || !ticksGroup) return;

    const d = buildArcPath(GAUGE_CX, GAUGE_CY, GAUGE_R, START_DEG, START_DEG + SWEEP_DEG);
    trackPath.setAttribute('d', d);
    fillPath.setAttribute('d', d);
    gaugeTotalLen = fillPath.getTotalLength();
    fillPath.style.strokeDasharray = `${gaugeTotalLen}`;
    fillPath.style.strokeDashoffset = `${gaugeTotalLen}`;

    ticksGroup.innerHTML = GAUGE_TICKS.map((val, i) => {
      const ratio = i / (GAUGE_TICKS.length - 1);
      const deg = START_DEG + ratio * SWEEP_DEG;
      const pos = polarToCartesian(GAUGE_CX, GAUGE_CY, GAUGE_R + 22, deg);
      return `<text x="${pos.x.toFixed(1)}" y="${(pos.y + 4).toFixed(1)}" text-anchor="middle" class="gauge-tick-label">${val}</text>`;
    }).join('');
  }

  function setGaugeProgress(mbps) {
    const fillPath = document.getElementById('gaugeFillPath');
    if (!fillPath || !gaugeTotalLen) return;
    const p = mbpsToProgress(mbps);
    fillPath.style.strokeDashoffset = `${(gaugeTotalLen * (1 - p)).toFixed(2)}`;
  }

  function setGaugePhaseColor(phase) {
    const color = phase === 'upload' ? 'var(--ul-color)' : 'var(--dl-color)';
    document.documentElement.style.setProperty('--gauge-fill', color);
  }

  function updateSparkline(pathId, series) {
    const el = document.getElementById(pathId);
    if (!el) return;
    if (!series.length) {
      el.setAttribute('d', '');
      return;
    }
    const maxVal = Math.max(...series, 10);
    const w = 160;
    const h = 22;
    const pts = series.map((v, idx) => {
      const x = series.length === 1 ? w : (idx / (series.length - 1)) * w;
      const y = h - Math.max(2, Math.min(h - 2, (v / maxVal) * (h - 4)));
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    el.setAttribute('d', `M ${pts.join(' L ')}`);
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el && typeof text === 'string') el.textContent = text;
  }

  /* --- EMBUDOS EN LA MISMA PANTALLA PRINCIPAL (SOLO AL COMPLETAR) --- */
  function hideFunnelUntilDone() {
    funnelOpen = false;
    const bubble = document.getElementById('funnelBubble');
    const drawer = document.getElementById('funnelDrawer');
    if (bubble) bubble.classList.remove('ready', 'highlighted');
    if (drawer) drawer.classList.remove('open');
  }

  function computeFunnelRecommendation() {
    const neededMbps = Math.max(30, Math.round(((funnelUse.base * funnelPeople.factor + funnelPeople.add) * 1.15) / 10) * 10);
    const sorted = [...PLANS].sort((a, b) => (a.mbps || 0) - (b.mbps || 0));
    const recommended = sorted.find(p => (p.mbps || 0) >= neededMbps) || sorted[sorted.length - 1] || {
      id: 'vnet400',
      name: 'VNET400',
      label: 'Hasta 400 Mbps',
      mbps: 400,
      recommendedDevices: 8
    };
    return { neededMbps, recommended, sorted };
  }

  function setFunnelStep(stepNum) {
    funnelStep = stepNum;
    document.querySelectorAll('.funnel-step-chip').forEach(ch => {
      ch.classList.toggle('active', Number(ch.getAttribute('data-funnel-step')) === stepNum);
    });
    document.querySelectorAll('.funnel-panel').forEach((panel, idx) => {
      panel.classList.toggle('active', idx + 1 === stepNum);
    });
    if (stepNum === 2) renderFunnelPlans();
    if (stepNum === 3) renderFunnelCheckout();
  }

  function toggleFunnelDrawer(forceOpen = null, targetStep = null) {
    if (!testCompleted || isRunning) {
      hideFunnelUntilDone();
      return;
    }
    funnelOpen = typeof forceOpen === 'boolean' ? forceOpen : !funnelOpen;
    const drawer = document.getElementById('funnelDrawer');
    if (drawer) drawer.classList.toggle('open', funnelOpen);
    if (funnelOpen) {
      setFunnelStep(targetStep || funnelStep || 1);
      renderFunnelDiagnosis();
    }
  }

  function renderFunnelBubble() {
    const bubble = document.getElementById('funnelBubble');
    const txtEl = document.getElementById('funnelBubbleText');
    if (!bubble || !txtEl) return;

    if (!testCompleted || isRunning || typeof lastMetrics.downloadMbps !== 'number' || lastMetrics.downloadMbps <= 0) {
      bubble.classList.remove('ready', 'highlighted');
      return;
    }

    const { recommended } = computeFunnelRecommendation();
    bubble.classList.add('ready', 'highlighted');
    txtEl.textContent = `Mediste ${lastMetrics.downloadMbps} Mbps (${lastMetrics.pingMs ?? '--'} ms latencia). Según tu perfil, encaja mejor ${recommended.name} (${recommended.label}).`;
  }

  function renderFunnelDiagnosis() {
    const box = document.getElementById('funnelDiagnosisBox');
    if (!box) return;
    const { neededMbps, recommended } = computeFunnelRecommendation();
    const dl = typeof lastMetrics.downloadMbps === 'number' && lastMetrics.downloadMbps > 0 ? lastMetrics.downloadMbps : null;

    let statusNote = 'Completa la prueba de velocidad para comparar tu conexión actual.';
    if (dl !== null) {
      statusNote = dl >= neededMbps
        ? `Tu bajada actual (${dl} Mbps) supera el margen estimado (${neededMbps} Mbps); ${recommended.name} te da holgura en horas pico.`
        : `Tu bajada actual (${dl} Mbps) está por debajo de lo ideal (${neededMbps} Mbps) para ${funnelPeople.label}; te conviene ${recommended.name}.`;
    }

    box.innerHTML = `
      <div class="funnel-diag-title">Plan sugerido: ${recommended.name} (${recommended.label})</div>
      <div class="funnel-diag-sub">Requerimiento estimado: ~${neededMbps} Mbps • ${funnelUse.label} • ${funnelPeople.label}</div>
      <div class="funnel-diag-sub" style="margin-top:4px;">${statusNote}</div>
    `;
    renderFunnelBubble();
  }

  function renderFunnelPlans() {
    const grid = document.getElementById('funnelPlansGrid');
    if (!grid) return;
    const { recommended, sorted } = computeFunnelRecommendation();
    if (!selectedHirePlan) selectedHirePlan = recommended;

    const descriptions = {
      vnet400: 'Ideal para hogar, streaming HD/4K y navegación fluida en varios equipos.',
      vnet600: 'Pensado para teletrabajo, videollamadas, juegos en línea y mayor concurrencia.',
      vnet1giga: 'Máxima capacidad para altos volúmenes de descarga, negocios y uso intensivo.'
    };

    grid.innerHTML = sorted.map(plan => {
      const isRec = plan.id === recommended.id;
      return `
        <div class="funnel-plan-card ${isRec ? 'recommended' : ''}">
          <div>
            ${isRec ? '<div class="funnel-plan-tag">Recomendado</div>' : ''}
            <div class="funnel-plan-name" style="margin-top:4px;">${plan.name}</div>
            <div class="funnel-plan-speed">${plan.label}</div>
            <div class="funnel-plan-desc" style="margin-top:4px;">${descriptions[plan.id] || `Hasta ${plan.recommendedDevices || 8} equipos recomendados.`}</div>
          </div>
          <button type="button" class="funnel-hire-btn" data-hire-id="${plan.id}">Contratar ${plan.name}</button>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.funnel-hire-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = btn.getAttribute('data-hire-id');
        selectedHirePlan = sorted.find(p => p.id === pid) || recommended;
        setFunnelStep(3);
      });
    });
  }

  function renderFunnelCheckout() {
    const box = document.getElementById('funnelCheckoutBox');
    if (!box) return;
    const { recommended } = computeFunnelRecommendation();
    const plan = selectedHirePlan || recommended;
    const waBase = (CFG.links && CFG.links.whatsapp) ? CFG.links.whatsapp : 'https://wa.me/584122593059';
    const cleanWa = waBase.split('?')[0];

    const summaryLines = [
      `Plan seleccionado: ${plan.name} (${plan.label})`,
      `Uso / Perfil: ${funnelUse.label} • ${funnelPeople.label}`,
      `Bajada / Subida: ${lastMetrics.downloadMbps ?? '--'} Mbps / ${lastMetrics.uploadMbps ?? '--'} Mbps`,
      `Latencia / Jitter: ${lastMetrics.pingMs ?? '--'} ms / ${lastMetrics.jitterMs ?? '--'} ms`,
      `Proveedor / Ubicación: ${netInfo.isp || 'No detectado'} • ${getActiveClientLocation()}`
    ].join('\n');

    const waText = encodeURIComponent(`Hola VNET, quiero contratar el plan ${plan.name} (${plan.label}).\n${summaryLines}`);
    const waHref = `${cleanWa}?text=${waText}`;

    box.innerHTML = `
      <div class="funnel-checkout-title">Contratar ${plan.name} (${plan.label})</div>
      <div class="funnel-checkout-summary">${summaryLines}</div>
      <div class="funnel-actions-row">
        <a class="funnel-cta-btn" href="${waHref}" target="_blank" rel="noopener noreferrer">💬 Continuar por WhatsApp</a>
      </div>
    `;
  }

  function pruneRemovedPanels() {
    document.querySelectorAll('.panel, .card, section, div').forEach(el => {
      if (el.id === 'tab-settings' || el.id === 'historyBody' || el.closest('#tab-settings')) return;
      const heading = el.querySelector('h1, h2, h3, h4, .panel-title, .card-title');
      if (!heading || heading.closest('#tab-settings')) return;
      const txt = heading.textContent || '';
      if (txt.includes('Ajustes de prueba') || txt.includes('Benchmarking')) {
        el.remove();
      }
    });

    const settingsTab = document.getElementById('tab-settings');
    if (settingsTab) {
      settingsTab.querySelectorAll('.panel, .card, .settings-box, .cfg-group, form').forEach(box => {
        if (!box.contains(document.getElementById('historyBody'))) {
          box.remove();
        }
      });
    }
  }

  function applyStaticUiTexts() {
    setText('brandName', CFG.brandName || 'VTEST');
    setText('brandPill', t('brandPill'));
    setText('installAppBtn', t('installApp'));
    setText('installSettingsBtn', t('installSettings'));
    setText('dlHeadLabel', t('dlHead'));
    setText('ulHeadLabel', t('ulHead'));
    setText('pingLabel', t('pingLabel'));
    setText('jitterLabel', t('jitterLabel'));
    setText('stabilityLabel', t('stabilityLabel'));
    setText('lossLabel', t('lossLabel'));
    setText('quizHeadingTitle', t('quizHeading'));
    setText('accordionHeadingTitle', t('accordionHeading'));
    setText('accMetricsGuideTitle', t('accMetricsGuideTitle'));
    setText('accActivitiesTitle', t('accActivitiesTitle'));
    setText('accDevicesTitle', t('accDevicesTitle'));
    setText('accRefTableTitle', t('accRefTableTitle'));
    setText('accTipsTitle', t('accTipsTitle'));
    setText('accFaqTitle', t('accFaqTitle'));
    setText('refColActivity', t('refColActivity'));
    setText('refColRecommended', t('refColRecommended'));
    setText('historyPanelTitle', t('historyTitle'));
    setText('exportCsvBtn', t('exportCsvBtn'));
    setText('clearHistBtn', t('clearHistoryBtn'));
    setText('histColDate', t('histColDate'));
    setText('histColIsp', t('histColIsp'));
    setText('histColDl', t('histColDl'));
    setText('histColUl', t('histColUl'));
    setText('histColPing', t('histColPing'));
    setText('histColLoss', t('histColLoss'));
    setText('linkWeb', t('linkWeb'));
    setText('linkWa', t('linkWa'));
    setText('linkFb', t('linkFb'));
    setText('linkIg', t('linkIg'));
    setText('poweredByPrefix', t('poweredByPrefix'));
    setText('poweredName', CFG.poweredByName || 'VNET');
    setText('navTestLabel', t('navTest'));
    setText('navQuizLabel', t('navQuiz'));
    setText('navAccordionLabel', t('navAccordion'));
    setText('navSettingsLabel', t('navSettings'));

    const headRow = document.querySelector('#tab-settings thead tr');
    if (headRow) {
      headRow.innerHTML = `
        <th>${t('histColDate')}</th>
        <th>${t('histColIsp')}</th>
        <th>${t('histColDl')}</th>
        <th>${t('histColUl')}</th>
        <th>${t('histColPing')}</th>
        <th>${t('histColJitter')}</th>
        <th>${t('histColStab')}</th>
        <th>${t('histColLoss')}</th>
      `;
    }

    if (!isRunning) {
      setText('phaseLabel', t('phaseReady'));
      setText('gaugeState', AUTO_START ? t('gaugeInit') : t('phaseReady'));
      setText('actionTestBtn', lastMetrics.downloadMbps !== null ? t('btnRepeat') : t('btnStart'));
    }
  }

  function updateHeaderAndFooter() {
    const dev = detectDevice();
    const node = getDlNode();
    const locText = getActiveClientLocation();
    const srvLoc = node.location || t('serverDefaultLocation');
    const ispText = netInfo.isp || t('ispDetecting');

    const providerEl = document.getElementById('providerLine');
    const serverEl = document.getElementById('serverLine');
    const clientEl = document.getElementById('clientLine');

    if (providerEl) providerEl.innerHTML = `${t('providerPrefix')}: <strong>${ispText}, ${locText}</strong>`;
    if (serverEl) serverEl.innerHTML = `${t('serverPrefix')}: <strong>${node.name}, ${srvLoc}</strong>`;
    if (clientEl) clientEl.innerHTML = `${t('clientPrefix')}: <strong>${dev.label}, ${locText}</strong>`;

    setText('serverIpChip', netInfo.ip ? `IP: ${netInfo.ip}` : 'IP: --');
    setText('deviceHeaderBadge', dev.label);
    setText('stabilityCardVal', lastMetrics.stabilityPct !== null ? `${lastMetrics.stabilityPct}` : '--');
    renderFunnelBubble();
  }

  async function loadContentJson() {
    try {
      const res = await fetch(CONTENT_URL, { cache: 'no-store' });
      if (!res.ok) return;
      const json = await res.json();
      if (json && typeof json === 'object') {
        contentData = {
          ui: { ...FALLBACK_CONTENT.ui, ...(json.ui || {}) },
          metricsGuide: Array.isArray(json.metricsGuide) && json.metricsGuide.length ? json.metricsGuide : FALLBACK_CONTENT.metricsGuide,
          notMeasuredGuide: json.notMeasuredGuide && typeof json.notMeasuredGuide === 'object' ? json.notMeasuredGuide : FALLBACK_CONTENT.notMeasuredGuide,
          quizSteps: Array.isArray(json.quizSteps) && json.quizSteps.length ? json.quizSteps : FALLBACK_CONTENT.quizSteps,
          useCases: Array.isArray(json.useCases) && json.useCases.length ? json.useCases : FALLBACK_CONTENT.useCases,
          deviceTypes: Array.isArray(json.deviceTypes) && json.deviceTypes.length ? json.deviceTypes : FALLBACK_CONTENT.deviceTypes,
          activityReferenceTable: Array.isArray(json.activityReferenceTable) && json.activityReferenceTable.length ? json.activityReferenceTable : FALLBACK_CONTENT.activityReferenceTable,
          testTips: Array.isArray(json.testTips) && json.testTips.length ? json.testTips : FALLBACK_CONTENT.testTips,
          faq: Array.isArray(json.faq) && json.faq.length ? json.faq : FALLBACK_CONTENT.faq
        };
        applyStaticUiTexts();
        pruneRemovedPanels();
        updateHeaderAndFooter();
        renderAccordionInsights();
        renderQuiz();
        renderHistory();
        updatePwaNote();
      }
    } catch {}
  }

  function requestGpsLocation() {
    if (!('geolocation' in navigator) || typeof navigator.geolocation.getCurrentPosition !== 'function') {
      gpsLocationLabel = '';
      updateHeaderAndFooter();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude.toFixed(4);
        const lon = pos.coords.longitude.toFixed(4);
        gpsLocationLabel = `${lat}, ${lon}`;
        try {
          const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&zoom=10`, {
            cache: 'no-store'
          });
          if (r.ok) {
            const data = await r.json();
            const addr = data.address || {};
            const city = addr.city || addr.town || addr.village || addr.municipality || addr.state || '';
            const state = addr.state || addr.region || '';
            const country = addr.country || '';
            const parts = [city, state, country].filter((v, i, arr) => v && arr.indexOf(v) === i);
            if (parts.length) gpsLocationLabel = parts.slice(0, 2).join(', ');
          }
        } catch {}
        updateHeaderAndFooter();
      },
      () => {
        gpsLocationLabel = '';
        updateHeaderAndFooter();
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 60000 }
    );
  }

  function updatePwaNote() {
    const note = document.getElementById('pwaStatusNote');
    if (!note) return;
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    if (isStandalone) note.textContent = t('pwaInstalledNote');
    else if (deferredInstallPrompt) note.textContent = t('pwaReadyNote');
    else note.textContent = t('pwaManualNote');
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    document.getElementById('installAppBtn')?.classList.add('visible');
    const sBtn = document.getElementById('installSettingsBtn');
    if (sBtn) sBtn.style.display = 'inline-block';
    updatePwaNote();
  });

  async function triggerPwaInstall() {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    try { await deferredInstallPrompt.userChoice; } catch {}
    deferredInstallPrompt = null;
    document.getElementById('installAppBtn')?.classList.remove('visible');
    const sBtn = document.getElementById('installSettingsBtn');
    if (sBtn) sBtn.style.display = 'none';
    updatePwaNote();
  }

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    document.getElementById('installAppBtn')?.classList.remove('visible');
    const sBtn = document.getElementById('installSettingsBtn');
    if (sBtn) sBtn.style.display = 'none';
    updatePwaNote();
  });

  async function fetchWithTimeout(url, ms = 3200) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms);
    try {
      const res = await fetch(url, { signal: ctrl.signal, cache: 'no-store' });
      if (!res.ok) throw new Error('bad status');
      return await res.json();
    } finally {
      clearTimeout(timer);
    }
  }

  async function refreshIsp(force = false) {
    if (force) {
      netInfo.isp = t('ispDetecting');
      updateHeaderAndFooter();
    }
    const q = `_t=${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    let ok = false;

    try {
      const d = await fetchWithTimeout(`https://ipwho.is/?${q}`);
      if (d && d.success !== false && d.connection) {
        netInfo = {
          ip: d.ip || '',
          isp: String(d.connection.isp || d.connection.org || t('ispUnknown')).trim(),
          countryCode: (d.country_code || '').trim().toUpperCase()
        };
        const locParts = [d.city, d.region, d.country].map(x => String(x || '').trim()).filter((v, i, arr) => v && arr.indexOf(v) === i);
        if (locParts.length) ipLocationLabel = locParts.slice(0, 2).join(', ');
        ok = true;
      }
    } catch {}

    if (!ok) {
      try {
        const d = await fetchWithTimeout(`https://ipapi.co/json/?${q}`);
        if (d && (d.org || d.asn)) {
          netInfo = {
            ip: d.ip || '',
            isp: String(d.org || d.asn).trim(),
            countryCode: (d.country_code || '').trim().toUpperCase()
          };
          const locParts = [d.city, d.region, d.country_name].map(x => String(x || '').trim()).filter((v, i, arr) => v && arr.indexOf(v) === i);
          if (locParts.length) ipLocationLabel = locParts.slice(0, 2).join(', ');
          ok = true;
        }
      } catch {}
    }

    if (!ok) {
      try {
        const d = await fetchWithTimeout(`${BACKEND_URL}/api/client-ip?${q}`, 3800);
        if (d && (d.ip || d.asOrganization)) {
          netInfo = {
            ip: d.ip || '',
            isp: String(d.asOrganization || t('ispUnknown')).trim(),
            countryCode: String(d.country || '').trim().toUpperCase()
          };
          const locParts = [d.city, d.region, d.country].map(x => String(x || '').trim()).filter((v, i, arr) => v && arr.indexOf(v) === i);
          if (locParts.length) ipLocationLabel = locParts.slice(0, 2).join(', ');
          ok = true;
        }
      } catch {}
    }

    if (!ok) netInfo.isp = t('ispUnknown');

    updateHeaderAndFooter();
    fetchBenchmarkD1();
  }

  async function measureIdlePingAndJitter(signal) {
    const pingNode = getPingNode();
    const baseUrl = pingNode?.url || `${BACKEND_URL}/ping`;
    const rtts = [];
    let sent = 0;
    let lost = 0;

    try {
      await fetch(`${baseUrl}${baseUrl.includes('?') ? '&' : '?'}warmup=${Date.now()}`, {
        cache: 'no-store',
        signal
      });
    } catch {}

    for (let i = 0; i < 12; i++) {
      if (signal.aborted) return { pingMs: null, jitterMs: 0, packetLossPct: 0 };
      sent++;
      const t0 = performance.now();
      try {
        const r = await fetch(`${baseUrl}${baseUrl.includes('?') ? '&' : '?'}idle=${Date.now()}_${i}`, {
          cache: 'no-store',
          signal
        });
        const ms = performance.now() - t0;
        if (r.ok && ms > 0 && ms < 2500) {
          rtts.push(ms);
        } else {
          lost++;
        }
      } catch {
        if (!signal.aborted) lost++;
      }
      await new Promise(resolve => setTimeout(resolve, 75));
    }

    const medianRtt = calcMedian(rtts);
    const pingMs = medianRtt !== null ? Math.round(medianRtt) : null;
    const jitterMs = calcJitterFromRtts(rtts);
    const packetLossPct = sent > 0 ? Number(((lost / sent) * 100).toFixed(1)) : 0;
    return { pingMs, jitterMs, packetLossPct };
  }

  async function runDownloadUnderLoad(durationMs, signal) {
    const dev = detectDevice();
    const dlNode = getDlNode();
    let totalBytes = 0;
    const samples = [];
    let smoothMbps = 0;
    let threads = dev.minThreads;
    const tStart = performance.now();

    async function worker() {
      while (!signal.aborted && performance.now() - tStart < durationMs) {
        try {
          const resp = await fetch(`${dlNode.url}${dlNode.url.includes('?') ? '&' : '?'}r=${Date.now()}_${Math.random()}`, {
            cache: 'no-store',
            signal
          });
          const reader = resp.body.getReader();
          while (true) {
            const { done, value } = await reader.read();
            if (done || signal.aborted || performance.now() - tStart >= durationMs) {
              reader.cancel().catch(() => {});
              break;
            }
            totalBytes += value.byteLength;
          }
        } catch {
          await new Promise(r => setTimeout(r, 100));
        }
      }
    }

    const workers = Array.from({ length: threads }, () => worker());

    await new Promise(resolve => {
      const iv = setInterval(() => {
        const sec = (performance.now() - tStart) / 1000;
        if (signal.aborted || sec * 1000 >= durationMs) {
          clearInterval(iv);
          resolve();
          return;
        }
        if (sec > 0.2) {
          const curMbps = (totalBytes * 8) / (sec * 1_000_000);
          samples.push(curMbps);
          smoothMbps = smoothMbps > 0 ? (smoothMbps * 0.45 + curMbps * 0.55) : curMbps;
          dlSeries.push(smoothMbps);
          if (dlSeries.length > 28) dlSeries.shift();

          setText('gaugeValue', fmtGauge(smoothMbps));
          setText('dlCardVal', fmtSpeed(smoothMbps));
          setGaugeProgress(smoothMbps);
          updateSparkline('dlSparkPath', dlSeries);

          if (curMbps > 60 && threads < dev.maxThreads) {
            workers.push(worker());
            threads++;
          }
        }
        const pBar = document.getElementById('progressBar');
        if (pBar) pBar.style.width = `${Math.min(55, 8 + (sec / (durationMs / 1000)) * 47)}%`;
      }, 220);
    });

    await Promise.allSettled(workers);

    const secFinal = Math.max(0.5, (performance.now() - tStart) / 1000);
    const avgMbps = (totalBytes * 8) / (secFinal * 1_000_000);
    const p90Mbps = samples.length ? calcPercentile(samples, 0.9) : avgMbps;
    const finalMbps = p90Mbps > 0 ? p90Mbps : avgMbps;

    const steady = samples.slice(Math.floor(samples.length * 0.2));
    let stability = 95;
    if (steady.length > 2) {
      const mean = steady.reduce((a, b) => a + b, 0) / steady.length;
      const variance = steady.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / steady.length;
      const cv = mean > 0 ? Math.sqrt(variance) / mean : 0;
      stability = Math.max(25, Math.min(99, Math.round((1 - cv) * 100)));
    }

    return { mbps: finalMbps, stability };
  }

  async function runUploadUnderLoad(durationMs, signal) {
    const dev = detectDevice();
    const candidates = getUploadCandidates();
    let activeUrl = candidates[0];
    const payload = new Uint8Array(dev.uploadChunkBytes);
    let uploaded = 0;
    let anyOk = false;
    const ulSamples = [];
    let smoothUl = 0;
    const tStart = performance.now();

    for (const url of candidates) {
      if (signal.aborted) return { mbps: null };
      try {
        const probe = await fetch(`${url}${url.includes('?') ? '&' : '?'}probe=${Date.now()}`, {
          method: 'POST',
          body: new Uint8Array(64 * 1024),
          headers: { 'Content-Type': 'application/octet-stream' },
          signal
        });
        if (probe.ok) {
          activeUrl = url;
          anyOk = true;
          uploaded += 64 * 1024;
          break;
        }
      } catch {}
    }

    async function worker() {
      while (!signal.aborted && performance.now() - tStart < durationMs) {
        try {
          const res = await fetch(`${activeUrl}${activeUrl.includes('?') ? '&' : '?'}u=${Date.now()}_${Math.random()}`, {
            method: 'POST',
            body: payload,
            headers: { 'Content-Type': 'application/octet-stream' },
            signal
          });
          if (res.ok) {
            anyOk = true;
            uploaded += payload.byteLength;
          } else {
            await new Promise(r => setTimeout(r, 120));
          }
        } catch {
          if (!signal.aborted) {
            await new Promise(r => setTimeout(r, 150));
          }
        }
      }
    }

    const workers = Array.from({ length: dev.uploadThreads }, () => worker());

    const iv = setInterval(() => {
      const sec = (performance.now() - tStart) / 1000;
      const pBar = document.getElementById('progressBar');
      if (pBar) pBar.style.width = `${Math.min(98, 55 + (sec / (durationMs / 1000)) * 43)}%`;
      if (uploaded > 0 && sec > 0.15) {
        const curUl = (uploaded * 8) / (sec * 1_000_000);
        ulSamples.push(curUl);
        smoothUl = smoothUl > 0 ? (smoothUl * 0.4 + curUl * 0.6) : curUl;
        ulSeries.push(smoothUl);
        if (ulSeries.length > 28) ulSeries.shift();
        setText('ulCardVal', fmtSpeed(smoothUl));
        setText('gaugeValue', fmtGauge(smoothUl));
        setGaugeProgress(smoothUl);
        updateSparkline('ulSparkPath', ulSeries);
      }
    }, 200);

    await Promise.allSettled(workers);
    clearInterval(iv);

    if (!anyOk || uploaded === 0) return { mbps: null };

    const secFinal = Math.max(0.5, (performance.now() - tStart) / 1000);
    const avgUl = (uploaded * 8) / (secFinal * 1_000_000);
    const p90Ul = ulSamples.length ? calcPercentile(ulSamples, 0.9) : avgUl;
    return { mbps: p90Ul > 0 ? p90Ul : avgUl };
  }

  async function runSingleLoadCycle(cycleIdx, totalCycles, signal) {
    const dev = detectDevice();

    dlSeries = [];
    ulSeries = [];
    updateSparkline('dlSparkPath', []);
    updateSparkline('ulSparkPath', []);
    setGaugeProgress(0);
    setGaugePhaseColor('download');

    const repSuffix = totalCycles > 1 ? ` (${cycleIdx}/${totalCycles})` : '';
    setText('phaseLabel', `${t('phaseDownload')}${repSuffix}`);
    const gState = document.getElementById('gaugeState');
    if (gState) {
      gState.className = 'gauge-state';
      gState.textContent = t('gaugeDownload', { rep: repSuffix });
    }
    setText('dlCardVal', '--');
    setText('ulCardVal', '—');
    const pBar = document.getElementById('progressBar');
    if (pBar) pBar.style.width = '6%';

    const idleNet = await measureIdlePingAndJitter(signal);
    if (signal.aborted) return null;

    if (idleNet.pingMs !== null) setText('pingCardVal', `${idleNet.pingMs}`);
    setText('jitterCardVal', `${idleNet.jitterMs}`);
    setText('lossCardVal', `${idleNet.packetLossPct}`);

    const dlRes = await runDownloadUnderLoad(dev.durationSec * 1000, signal);
    if (signal.aborted) return null;

    setText('dlCardVal', fmtSpeed(dlRes.mbps));
    setText('gaugeValue', fmtGauge(dlRes.mbps));
    setGaugeProgress(dlRes.mbps);

    await new Promise(resolve => setTimeout(resolve, 400));
    if (signal.aborted) return null;

    setGaugePhaseColor('upload');
    setText('phaseLabel', `${t('phaseUpload')}${repSuffix}`);
    if (gState) gState.textContent = t('gaugeUpload', { rep: repSuffix });
    const ulRes = await runUploadUnderLoad(Math.max(4, dev.durationSec - 2) * 1000, signal);
    if (signal.aborted) return null;

    return {
      downloadMbps: Number(dlRes.mbps.toFixed(1)),
      uploadMbps: ulRes.mbps !== null ? Number(ulRes.mbps.toFixed(1)) : null,
      pingMs: idleNet.pingMs,
      jitterMs: idleNet.jitterMs,
      packetLossPct: idleNet.packetLossPct,
      stabilityPct: dlRes.stability
    };
  }

  async function startTest() {
    if (isRunning && abortCtrl) abortCtrl.abort();

    isRunning = true;
    testCompleted = false;
    syncRunningChrome();
    hideFunnelUntilDone();
    abortCtrl = new AbortController();
    const { signal } = abortCtrl;
    const totalCycles = 1;

    setText('actionTestBtn', t('btnStop'));
    const dot = document.getElementById('statusDot');
    if (dot) dot.className = 'dot running';

    const ispPromise = refreshIsp(true);

    try {
      const res = await runSingleLoadCycle(1, totalCycles, signal);
      if (signal.aborted || !res) return;

      await ispPromise;

      lastMetrics = {
        downloadMbps: res.downloadMbps,
        uploadMbps: res.uploadMbps,
        pingMs: res.pingMs,
        jitterMs: res.jitterMs,
        packetLossPct: res.packetLossPct,
        stabilityPct: res.stabilityPct
      };

      setGaugePhaseColor('download');
      setText('dlCardVal', fmtSpeed(lastMetrics.downloadMbps));
      setText('ulCardVal', lastMetrics.uploadMbps !== null ? fmtSpeed(lastMetrics.uploadMbps) : 'N/D');
      setText('pingCardVal', lastMetrics.pingMs !== null ? `${lastMetrics.pingMs}` : '--');
      setText('jitterCardVal', `${lastMetrics.jitterMs}`);
      setText('stabilityCardVal', `${lastMetrics.stabilityPct}`);
      setText('lossCardVal', `${lastMetrics.packetLossPct}`);
      const pBar = document.getElementById('progressBar');
      if (pBar) pBar.style.width = '100%';
      setText('phaseLabel', t('phaseReady'));
      if (dot) dot.className = 'dot done';
      setText('gaugeState', t('gaugeCompleted'));
      setText('gaugeValue', fmtGauge(lastMetrics.downloadMbps));
      setGaugeProgress(lastMetrics.downloadMbps);

      testCompleted = true;

      const measuredAt = new Date().toISOString();
      saveLocalDeviceRecord(lastMetrics, measuredAt);
      updateHeaderAndFooter();
      renderFunnelDiagnosis();
      renderAccordionInsights();
      renderQuiz();
      renderHistory();
      await postBenchmarkServer(measuredAt);
    } catch {
      if (!signal.aborted) {
        const gState = document.getElementById('gaugeState');
        if (gState) {
          gState.className = 'gauge-state warn';
          gState.textContent = t('gaugeError');
        }
      }
    } finally {
      isRunning = false;
      syncRunningChrome();
      setText('actionTestBtn', t('btnRepeat'));
      renderFunnelBubble();
    }
  }

  function stopOrRestart() {
    if (isRunning && abortCtrl) {
      abortCtrl.abort();
      isRunning = false;
      syncRunningChrome();
      hideFunnelUntilDone();
      const dot = document.getElementById('statusDot');
      if (dot) dot.className = 'dot';
      setText('phaseLabel', t('phaseStopped'));
      setText('gaugeState', t('gaugeStopped'));
      setText('actionTestBtn', t('btnStart'));
    } else {
      startTest();
    }
  }

  function getQuizResult() {
    const steps = contentData.quizSteps;
    const sOpt = steps[0]?.options[quizAnswers[steps[0]?.id]];
    const pOpt = steps[1]?.options[quizAnswers[steps[1]?.id]];
    const oOpt = steps[2]?.options[quizAnswers[steps[2]?.id]];

    const base = sOpt ? sOpt.basePerPerson : 22;
    const peopleLabel = pOpt ? pOpt.label : (steps[1]?.options[0]?.label || '1 a 2 personas');
    const factor = pOpt ? pOpt.factor : 1.5;
    const add = oOpt ? oOpt.addMbps : 10;
    const mbps = Math.max(20, Math.round(((base * factor + add) * 1.2) / 5) * 5);

    const sorted = [...PLANS].sort((a, b) => (a.mbps || 0) - (b.mbps || 0));
    const plan = sorted.find(p => (p.mbps || 0) >= mbps) || sorted[sorted.length - 1] || { name: 'VNET400', label: 'Hasta 400 Mbps' };
    return { mbps, peopleLabel, plan };
  }

  function renderQuiz() {
    const stage = document.getElementById('quizStage');
    if (!stage) return;
    const steps = contentData.quizSteps;
    const res = getQuizResult();

    if (quizStep >= steps.length) {
      const note = lastMetrics.downloadMbps !== null
        ? t('quizMeasuredNote', { mbps: lastMetrics.downloadMbps })
        : t('quizUnmeasuredNote');

      stage.innerHTML = `
        <div class="quiz-meta"><span>${t('quizResultTitle')}</span></div>
        <div class="quiz-q">${t('quizRecommendationPrefix')} ${res.peopleLabel}</div>
        <div class="quiz-opt-badge" style="font-size:1.85rem; margin-bottom:6px;">${res.mbps} Mbps</div>
        <div style="font-weight:700; margin-bottom:8px;">${t('quizSuggestedPlan', { plan: res.plan.name, label: res.plan.label })}</div>
        <p style="font-size:0.82rem; color:var(--quiz-muted); margin-bottom:14px;">${note}</p>
        <button type="button" class="btn-sm primary" id="quizRestartBtn">${t('quizRestart')}</button>
      `;
      document.getElementById('quizRestartBtn')?.addEventListener('click', () => {
        quizAnswers = {};
        quizStep = 0;
        renderQuiz();
      });
      return;
    }

    const q = steps[quizStep];
    const sel = quizAnswers[q.id];

    stage.innerHTML = `
      <div class="quiz-meta">
        <span>${t('quizProgress', { step: quizStep + 1, total: steps.length })}</span>
        <span>•</span>
        <span>${t('quizEstimatedPrefix')} <span class="quiz-highlight">${res.mbps} Mbps</span></span>
      </div>
      <div class="quiz-q">${q.question}</div>
      <div class="quiz-options">
        ${q.options.map((o, idx) => `
          <button type="button" class="quiz-opt ${sel === idx ? 'selected' : ''}" data-idx="${idx}">
            <span class="quiz-opt-badge">${o.badge}</span>
            <span class="quiz-opt-label">${o.label}</span>
          </button>
        `).join('')}
      </div>
      <div class="btn-row" style="justify-content:center;">
        ${quizStep > 0 ? `<button type="button" class="btn-sm" id="quizBackBtn">${t('quizBack')}</button>` : ''}
      </div>
    `;

    stage.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        quizAnswers[q.id] = parseInt(btn.getAttribute('data-idx'), 10);
        quizStep++;
        renderQuiz();
      });
    });

    document.getElementById('quizBackBtn')?.addEventListener('click', () => {
      quizStep = Math.max(0, quizStep - 1);
      renderQuiz();
    });
  }

  function estimateSimultaneousDevices(usableMbps, perDevMbps, hasMeasured) {
    const safePerDev = Math.max(1, perDevMbps || 15);
    const safeUsable = Math.max(0, usableMbps || 0);
    if (safeUsable < safePerDev) return hasMeasured ? 0 : 1;

    let count = 0;
    let remaining = safeUsable;
    while (count < 40) {
      const concurrencyFactor = count === 0 ? 1.0 : Math.max(0.60, 1 - count * 0.04);
      const needed = safePerDev * concurrencyFactor;
      if (remaining >= needed) {
        remaining -= needed;
        count++;
      } else {
        break;
      }
    }
    return hasMeasured ? count : Math.max(1, count);
  }

  function renderAccordionInsights() {
    const metricsGrid = document.getElementById('metricsGuideGrid');
    if (metricsGrid) {
      metricsGrid.innerHTML = contentData.metricsGuide.map(item => `
        <div class="mini-info-card">
          <div class="mini-info-title">${item.title}</div>
          <div class="mini-info-sub">${item.desc}</div>
        </div>
      `).join('');
    }

    const notMeasuredCard = document.getElementById('notMeasuredCard');
    if (notMeasuredCard && contentData.notMeasuredGuide) {
      notMeasuredCard.innerHTML = `
        <div class="mini-info-title">${contentData.notMeasuredGuide.title}</div>
        <div class="mini-info-sub">${contentData.notMeasuredGuide.desc}</div>
      `;
    }

    const hasMeasuredDl = typeof lastMetrics.downloadMbps === 'number' && Number.isFinite(lastMetrics.downloadMbps) && lastMetrics.downloadMbps > 0;
    const baseMbps = hasMeasuredDl ? lastMetrics.downloadMbps : 50;
    const ul = lastMetrics.uploadMbps;
    const stab = typeof lastMetrics.stabilityPct === 'number' ? lastMetrics.stabilityPct : 85;
    const loss = typeof lastMetrics.packetLossPct === 'number' ? lastMetrics.packetLossPct : 0;
    const ping = typeof lastMetrics.pingMs === 'number' ? lastMetrics.pingMs : 25;
    const jitter = typeof lastMetrics.jitterMs === 'number' ? lastMetrics.jitterMs : 5;

    const stabFactor = Math.max(0.5, Math.min(1, stab / 100));
    const lossFactor = loss >= 2 ? 0.75 : (loss >= 1 ? 0.88 : 1);
    const latencyFactor = ping > 120 ? 0.82 : (ping > 80 ? 0.9 : 1);
    const jitterFactor = jitter >= 25 ? 0.88 : (jitter >= 15 ? 0.94 : 1);
    const overheadFactor = 0.78;
    const usableMbps = baseMbps * overheadFactor * stabFactor * lossFactor * latencyFactor * jitterFactor;

    const actGrid = document.getElementById('activitiesGrid');
    if (actGrid) {
      actGrid.innerHTML = contentData.useCases.map(uc => {
        let score = hasMeasuredDl ? 1 : 3;
        if (hasMeasuredDl) {
          if (usableMbps >= uc.idealMbps) score = 5;
          else if (usableMbps >= (uc.minMbps + uc.idealMbps) * 0.5) score = 4;
          else if (usableMbps >= uc.minMbps) score = 3;
          else if (usableMbps >= uc.minMbps * 0.5) score = 2;
          if (loss >= 1) score = Math.max(1, score - 1);
          if (uc.id === 'video_conferencing' && ul !== null && ul < (uc.minUploadMbps || 5)) score = Math.max(1, score - 1);
        }

        const cls = score >= 4 ? 'rating-good' : (score === 3 ? 'rating-ok' : 'rating-poor');
        const label = hasMeasuredDl
          ? (score >= 4 ? t('ratingGood') : (score === 3 ? t('ratingOk') : t('ratingPoor')))
          : t('ratingInitial');

        return `
          <div class="mini-info-card">
            <div class="mini-info-title">${uc.title} ${hasMeasuredDl ? `(${score}/5)` : ''}</div>
            <div class="${cls}">${label}</div>
            <div class="mini-info-sub" style="margin-top:4px;">${score >= 3 ? uc.okText : uc.lowText}</div>
            <div class="mini-info-sub" style="margin-top:5px;">${t('planRefPrefix')} <strong>${uc.planRef || 'VNET400'}</strong></div>
          </div>
        `;
      }).join('');
    }

    const devGrid = document.getElementById('devicesGrid');
    if (devGrid) {
      devGrid.innerHTML = contentData.deviceTypes.map(dt => {
        const perDev = Math.max(1, dt.loadMbps || 15);
        const estCount = estimateSimultaneousDevices(usableMbps, perDev, hasMeasuredDl);
        return `
          <div class="mini-info-card">
            <div class="mini-info-title">${dt.label}</div>
            <div class="mini-info-sub">${t('deviceEstPrefix')} <strong>~${estCount}</strong> (${perDev} ${t('devicePerEqSuffix')})</div>
          </div>
        `;
      }).join('');
    }

    const devNote = document.getElementById('devicesNote');
    if (devNote) {
      devNote.textContent = hasMeasuredDl
        ? t('devicesNoteMeasured', {
            usable: Math.round(usableMbps),
            base: baseMbps,
            stab,
            ping,
            jitter,
            loss
          })
        : t('devicesNoteRef');
    }

    const refBody = document.getElementById('refTableBody');
    if (refBody) {
      refBody.innerHTML = contentData.activityReferenceTable.map(r => `
        <tr>
          <td><strong>${r.activity}</strong></td>
          <td>${r.recommended}</td>
        </tr>
      `).join('');
    }

    const tipsGrid = document.getElementById('tipsGrid');
    if (tipsGrid) {
      tipsGrid.innerHTML = contentData.testTips.map(item => `
        <div class="mini-info-card">
          <div class="mini-info-title">${item.title}</div>
          <div class="mini-info-sub">${item.desc}</div>
        </div>
      `).join('');
    }

    const faqList = document.getElementById('faqList');
    if (faqList) {
      faqList.innerHTML = contentData.faq.map(f => `
        <div class="faq-item">
          <div class="faq-q">${f.q}</div>
          <div class="faq-a">${f.a}</div>
        </div>
      `).join('');
    }
  }

  function saveLocalDeviceRecord(metrics, measuredAtIso = new Date().toISOString()) {
    const devLabel = detectDevice().label;
    const ispLabel = netInfo.isp || t('ispUnknown');
    const item = {
      date: formatClientLocalDate(measuredAtIso),
      measured_at: measuredAtIso,
      time_zone: getClientTimeZone(),
      location: getActiveClientLocation(),
      isp: ispLabel,
      device_type: devLabel,
      download_mbps: metrics.downloadMbps,
      upload_mbps: metrics.uploadMbps,
      ping_ms: metrics.pingMs,
      jitter_ms: metrics.jitterMs,
      stability_pct: metrics.stabilityPct,
      packet_loss_pct: metrics.packetLossPct
    };
    const list = JSON.parse(localStorage.getItem('vtest_wa_hist') || '[]');
    list.unshift(item);
    localStorage.setItem('vtest_wa_hist', JSON.stringify(list.slice(0, 50)));
  }

  function formatD1Date(rawDate) {
    if (!rawDate) return '--';
    const str = String(rawDate).trim();
    if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(str)) {
      const [datePart, timePart] = str.split(' ');
      const [y, m, day] = datePart.split('-');
      return `${day}/${m}/${y}, ${timePart}`;
    }
    const d = new Date(str);
    if (!Number.isNaN(d.getTime())) {
      return formatClientLocalDate(d);
    }
    return str;
  }

  function getDeviceHistoryRows() {
    const currentDevice = detectDevice().label;
    const currentIsp = (netInfo.isp || '').trim().toLowerCase();

    const fromD1 = Array.isArray(d1Records)
      ? d1Records.filter(rec => String(rec.device_type || '').trim() === currentDevice)
      : [];

    const source = fromD1.length ? fromD1 : JSON.parse(localStorage.getItem('vtest_wa_hist') || '[]').filter(r => String(r.device_type || currentDevice) === currentDevice);

    const normalized = source.map(r => {
      const isp = String(r.isp || t('ispUnknown')).trim();
      const dlNum = Number(r.download_mbps);
      const ulNum = Number(r.upload_mbps);
      const pingNum = Number(r.ping_ms);
      const jitterNum = Number(r.jitter_ms);
      const stabNum = Number(r.stability_pct);
      const lossNum = Number(r.packet_loss_pct);
      const rawStamp = r.created_at || r.measured_at || r.date;

      return {
        date: formatD1Date(rawStamp),
        isp,
        isSameNet: Boolean(currentIsp && isp.toLowerCase() === currentIsp),
        download: Number.isFinite(dlNum) ? `${fmtSpeed(dlNum)} Mbps` : '--',
        upload: Number.isFinite(ulNum) && ulNum > 0 ? `${fmtSpeed(ulNum)} Mbps` : 'N/D',
        ping: Number.isFinite(pingNum) && pingNum > 0 ? `${Math.round(pingNum)} ms` : '--',
        jitter: Number.isFinite(jitterNum) ? `${jitterNum} ms` : '0 ms',
        stability: Number.isFinite(stabNum) ? `${Math.round(stabNum)}%` : '--',
        loss: Number.isFinite(lossNum) ? `${lossNum}%` : '0%'
      };
    });

    normalized.sort((a, b) => (a.isSameNet === b.isSameNet ? 0 : (a.isSameNet ? -1 : 1)));
    return normalized;
  }

  function renderHistory() {
    const rows = getDeviceHistoryRows();
    const body = document.getElementById('historyBody');
    if (!body) return;

    body.innerHTML = rows.length
      ? rows.map(r => `
          <tr>
            <td data-label="${t('histColDate')}">${r.date}</td>
            <td data-label="${t('histColIsp')}"><strong>${r.isp}</strong>${r.isSameNet ? ' • Red actual' : ''}</td>
            <td data-label="${t('histColDl')}"><strong>${r.download}</strong></td>
            <td data-label="${t('histColUl')}">${r.upload}</td>
            <td data-label="${t('histColPing')}">${r.ping}</td>
            <td data-label="${t('histColJitter')}">${r.jitter}</td>
            <td data-label="${t('histColStab')}">${r.stability}</td>
            <td data-label="${t('histColLoss')}">${r.loss}</td>
          </tr>
        `).join('')
      : `<tr><td colspan="8" style="color:var(--text-muted);">${t('historyEmpty')}</td></tr>`;
  }

  async function fetchBenchmarkD1() {
    try {
      const r = await fetch(`${BACKEND_URL}/api/benchmark?t=${Date.now()}`, { cache: 'no-store' });
      if (!r.ok) return;
      const j = await r.json();
      if (j && j.ok && Array.isArray(j.records)) {
        d1Records = j.records;
        renderHistory();
      }
    } catch {}
  }

  async function postBenchmarkServer(measuredAtIso = new Date().toISOString()) {
    if (!lastMetrics.downloadMbps) return;
    const node = getDlNode();
    try {
      const r = await fetch(`${BACKEND_URL}/api/benchmark`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          isp: netInfo.isp || 'Desconocido',
          serverName: node?.name ? `${node.name}, ${node.location || 'Red Edge Global'}` : 'Cloudflare, Red Edge Global',
          ipAddress: netInfo.ip || '',
          countryCode: netInfo.countryCode || '',
          gpsLocation: getActiveClientLocation(),
          clientTimeZone: getClientTimeZone(),
          localDateTime: getLocalSqlDateTime(measuredAtIso),
          measuredAt: measuredAtIso,
          deviceType: detectDevice().label,
          downloadMbps: Number(lastMetrics.downloadMbps ?? 0),
          uploadMbps: Number(lastMetrics.uploadMbps ?? 0),
          pingMs: Number(lastMetrics.pingMs ?? 0),
          jitterMs: Number(lastMetrics.jitterMs ?? 0),
          stabilityPct: Number(lastMetrics.stabilityPct ?? 0),
          packetLossPct: Number(lastMetrics.packetLossPct ?? 0)
        })
      });
      if (!r.ok) return;
      const j = await r.json();
      if (j && j.ok) {
        await fetchBenchmarkD1();
      }
    } catch {}
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vtest_wa_theme', theme);
    setText('themeIcon', theme === 'dark' ? '☀️' : '🌙');
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#1e0449' : '#f5f0ff');
  }

  function isValidHttpUrl(u) {
    if (!u || typeof u !== 'string') return false;
    try {
      const parsed = new URL(u.trim());
      return parsed.protocol === 'https:' || parsed.protocol === 'http:';
    } catch {
      return false;
    }
  }

  function initLinks() {
    const l = CFG.links || {};
    const map = [
      ['linkWeb', l.website, 'https://vnet.com.ve'],
      ['poweredLink', l.website, 'https://vnet.com.ve'],
      ['linkWa', l.whatsapp, 'https://wa.me/584122593059'],
      ['linkFb', l.facebook, 'https://www.facebook.com/61566969571570/'],
      ['linkIg', l.instagram, 'https://www.instagram.com/vnet_ve/']
    ];
    map.forEach(([id, val, fallback]) => {
      const el = document.getElementById(id);
      if (el) el.href = isValidHttpUrl(val) ? val.trim() : fallback;
    });
  }

  function bindFunnelEvents() {
    document.getElementById('funnelOpenBtn')?.addEventListener('click', () => {
      toggleFunnelDrawer(!funnelOpen, 1);
    });

    document.querySelectorAll('.funnel-step-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const s = Number(chip.getAttribute('data-funnel-step')) || 1;
        toggleFunnelDrawer(true, s);
      });
    });

    const useBases = {
      home: { label: 'Hogar / Streaming', base: 24 },
      office: { label: 'Trabajo / Videollamadas', base: 36 },
      business: { label: 'Comercio / Negocio', base: 34 },
      gaming: { label: 'Gaming / Descargas', base: 46 }
    };

    document.querySelectorAll('#funnelUseChoices .funnel-choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#funnelUseChoices .funnel-choice-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        const k = btn.getAttribute('data-use') || 'home';
        funnelUse = { key: k, ...(useBases[k] || useBases.home) };
        renderFunnelDiagnosis();
      });
    });

    document.querySelectorAll('#funnelPeopleChoices .funnel-choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#funnelPeopleChoices .funnel-choice-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        funnelPeople = {
          people: Number(btn.getAttribute('data-people')) || 2,
          label: btn.textContent.trim(),
          factor: Number(btn.getAttribute('data-factor')) || 1.5,
          add: Number(btn.getAttribute('data-add')) || 15
        };
        renderFunnelDiagnosis();
      });
    });

    document.getElementById('funnelToPlansBtn')?.addEventListener('click', () => {
      setFunnelStep(2);
    });

    document.getElementById('funnelBackToIdealBtn')?.addEventListener('click', () => {
      setFunnelStep(1);
    });

    document.getElementById('funnelBackToPlansBtn')?.addEventListener('click', () => {
      setFunnelStep(2);
    });
  }

  function bindEvents() {
    document.getElementById('installAppBtn')?.addEventListener('click', triggerPwaInstall);
    document.getElementById('installSettingsBtn')?.addEventListener('click', triggerPwaInstall);
    document.getElementById('actionTestBtn')?.addEventListener('click', stopOrRestart);
    bindFunnelEvents();

    document.querySelectorAll('.acc-header').forEach(h => {
      h.addEventListener('click', () => {
        const body = document.getElementById(h.getAttribute('data-acc'));
        if (body) body.classList.toggle('open');
      });
    });

    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));
        document.getElementById(targetTab)?.classList.add('active');
        if (targetTab === 'tab-settings') {
          renderHistory();
          fetchBenchmarkD1();
        }
        if (targetTab === 'tab-accordion') renderAccordionInsights();
        if (targetTab === 'tab-quiz') renderQuiz();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    document.getElementById('themeBtn')?.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });

    document.getElementById('exportCsvBtn')?.addEventListener('click', () => {
      const rows = getDeviceHistoryRows();
      if (!rows.length) return;
      const csv = ['Fecha,Red / ISP,Bajada,Subida,Latencia,Jitter,Constancia,Pérdida']
        .concat(rows.map(r => `"${r.date}","${r.isp}","${r.download}","${r.upload}","${r.ping}","${r.jitter}","${r.stability}","${r.loss}"`))
        .join('\n');
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
      a.download = `vtest_historico_${detectDevice().label.replace(/\s+/g, '_').toLowerCase()}.csv`;
      a.click();
    });

    document.getElementById('clearHistBtn')?.addEventListener('click', () => {
      localStorage.removeItem('vtest_wa_hist');
      d1Records = [];
      renderHistory();
    });

    const connObj = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connObj && typeof connObj.addEventListener === 'function') {
      connObj.addEventListener('change', () => refreshIsp(true));
    }
    window.addEventListener('online', () => refreshIsp(true));

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').catch(() => {});
      });
    }
  }

  async function init() {
    initGauge();
    initLinks();
    applyTheme(localStorage.getItem('vtest_wa_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    applyStaticUiTexts();
    pruneRemovedPanels();
    updateHeaderAndFooter();
    hideFunnelUntilDone();
    renderAccordionInsights();
    renderQuiz();
    renderHistory();
    updatePwaNote();
    bindEvents();
    requestGpsLocation();
    fetchBenchmarkD1();

    await loadContentJson();

    fetch(`${BACKEND_URL}/ping?wake=${Date.now()}`, { cache: 'no-store' }).catch(() => {});
    if (AUTO_START) startTest();
    else refreshIsp(true);
  }

  init();
})();
