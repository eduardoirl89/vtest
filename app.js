(() => {
  'use strict';

  const SRV_CFG = window.VTEST_SERVERS || {};
  const CFG = window.VNET_CONFIG || {};
  const BACKEND_URL = CFG.backendUrl || SRV_CFG.backendUrl || 'https://vtest-backend-d4nr.onrender.com';
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
      gaugeDownload: 'Midiendo descarga{rep}...',
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
      serverDefaultLocation: 'Nodo de prueba',
      deviceMobile: 'Móvil',
      deviceDesktop: 'PC / Laptop',
      providerPrefix: 'Proveedor',
      serverPrefix: 'Servidor',
      clientPrefix: 'Cliente',
      dlHead: '↓ DOWNLOAD',
      ulHead: '↑ UPLOAD',
      pingLabel: 'Ping',
      jitterLabel: 'Jitter',
      stabilityLabel: 'Constancia',
      lossLabel: 'Loss',
      quizHeading: '🧮 Cuestionario de plan y velocidad',
      quizResultTitle: 'Resultado del cuestionario',
      quizRecommendationPrefix: 'Recomendación para',
      quizSuggestedPlan: 'Plan sugerido: {plan} ({label})',
      quizMeasuredNote: 'Tu bajada medida hoy es de {mbps} Mbps.',
      quizUnmeasuredNote: 'Ejecuta la prueba en Test para comparar con tu velocidad actual.',
      quizRestart: 'Repetir cuestionario',
      quizProgress: 'Pregunta {step}/{total}',
      quizEstimatedPrefix: 'Estimado:',
      quizBack: '‹ Anterior',
      accordionHeading: '📂 Acordeón de posibilidades y guía',
      accActivitiesTitle: '🎯 Calidad de conexión por actividad',
      accDevicesTitle: '📱 Dispositivos simultáneos estimados',
      accRefTableTitle: '📋 Tabla de referencia por actividad',
      accTipsTitle: '💡 Sugerencias para obtener una medición precisa',
      accFaqTitle: '❓ Preguntas y glosario VNET',
      refColActivity: 'Actividad',
      refColRecommended: 'Recomendado',
      ratingGood: 'Óptimo / Bueno',
      ratingOk: 'Aceptable',
      ratingPoor: 'Limitado',
      ratingInitial: 'Referencia inicial',
      planRefPrefix: 'Plan ref.:',
      deviceEstPrefix: 'Simultáneos estimados:',
      devicePerEqSuffix: 'Mbps/eq',
      devicesNoteMeasured: 'Margen útil: ~{usable} Mbps (base: {base} Mbps • sim: {sim} Mbps en {eq} eq • constancia: {stab}% • ping: {ping} ms • loss: {loss}%).',
      devicesNoteRef: 'Estimación de referencia ({eq} eq simulados = {sim} Mbps). Ejecuta la prueba para usar tu velocidad real.',
      settingsTitle: '⚙️ Ajustes de prueba y aplicación',
      serverSelectLabel: 'Servidor predeterminado',
      serverSelectHelp: 'Servidores cargados desde servers.js.',
      repeatCountLabel: 'Repeticiones seguidas del test',
      repeatOptionSingle: '1 prueba',
      repeatOptionMulti: '{count} pruebas seguidas',
      simDevicesLabel: 'Concurrencia simulada (equipos)',
      mbpsPerDeviceLabel: 'Consumo simulado por dispositivo (Mbps)',
      simLoadSummary: 'Carga simulada: {total} Mbps ({eq} eq × {mbps} Mbps){after}.',
      simLoadRemaining: ' • Restante estimado: {rem} Mbps',
      autoStartLabel: 'Medir automáticamente al abrir',
      saveSettingsBtn: 'Guardar ajustes',
      resetSettingsBtn: 'Restaurar',
      pwaInstalledNote: 'VTEST ya está ejecutándose como aplicación instalada.',
      pwaReadyNote: 'Listo para instalar en tu pantalla de inicio o escritorio.',
      pwaManualNote: 'En Android/Windows usa el menú del navegador para instalar como app; en iPhone/iPad usa Compartir -> Añadir a pantalla de inicio.',
      benchTitle: '📊 Benchmarking — Tu mejor red',
      benchTabDownload: 'Bajada',
      benchTabUpload: 'Subida',
      benchTabPing: 'Latencia',
      benchGpsPrefix: 'GPS:',
      benchEmpty: 'Ejecuta una prueba para comparar proveedores.',
      benchSortedServer: 'Ordenado por {criterion}.',
      benchCriterionLatency: 'menor latencia',
      benchCriterionSpeed: 'mayor velocidad',
      benchFallbackNote: 'Mostrando referencias (Ref.) donde aún no hay muestras del servidor.',
      benchCurrentTag: ' (Tu red)',
      benchActualBadge: ' • Actual',
      historyTitle: '🕒 Pruebas anteriores',
      exportCsvBtn: 'CSV',
      clearHistoryBtn: 'Borrar',
      histColDate: 'Fecha',
      histColIsp: 'ISP',
      histColDl: 'Bajada',
      histColUl: 'Subida',
      histColPing: 'Ping',
      histColLoss: 'Loss',
      historyEmpty: 'Sin pruebas guardadas todavía.',
      linkWeb: '🌐 Web',
      linkWa: '💬 WhatsApp',
      linkFb: 'Facebook',
      linkIg: 'Instagram',
      poweredByPrefix: 'Powered by',
      navTest: 'Test',
      navQuiz: 'Cuestionario',
      navAccordion: 'Acordeón',
      navSettings: 'Ajustes'
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
      { title: '🔁 Haz al menos 3 pruebas seguidas', desc: 'Repite al menos tres veces en distintos horarios y evalúa ping, jitter y pérdida.' },
      { title: '⏸️ Pausa descargas y evita VPN', desc: 'Cierra descargas o streaming activos y desactiva VPN para no alterar la ruta.' }
    ],
    faq: [
      { q: '1. ¿Qué mide y qué no mide un test de velocidad?', a: 'Mide descarga, subida, latencia (ping), jitter y estabilidad hacia un servidor; no mide la cobertura Wi-Fi real, el router, el cableado ni las interferencias internas.' },
      { q: '2. ¿Cómo leer la latencia, el jitter y la pérdida de paquetes?', a: '0–30 ms es excelente, 30–60 ms buena, 60–100 ms aceptable y +100 ms muestra retrasos en tiempo real. Jitter bajo da mayor estabilidad y desde 1% de pérdida ya puede haber cortes.' },
      { q: '3. ¿Qué significan fibra óptica, NAP, ONT/ONU y velocidad simétrica?', a: 'La fibra óptica transmite pulsos de luz con baja latencia; el NAP distribuye la señal FTTH mediante splitter; la ONT/ONU convierte la señal óptica para enlazar con la OLT y el router; y la velocidad simétrica iguala descarga y subida.' }
    ],
    benchmarkFallback: {
      ping: [
        { name: 'VNET Fibra (Ref.)', val: 16 },
        { name: 'Proveedor Regional A (Ref.)', val: 28 },
        { name: 'Proveedor Regional B (Ref.)', val: 45 }
      ],
      throughput: [
        { name: 'VNET Fibra (Ref.)', dl: 450, ul: 300 },
        { name: 'Proveedor Regional A (Ref.)', dl: 200, ul: 120 },
        { name: 'Proveedor Regional B (Ref.)', dl: 110, ul: 60 }
      ]
    }
  };

  let contentData = {
    ui: { ...FALLBACK_CONTENT.ui },
    quizSteps: FALLBACK_CONTENT.quizSteps,
    useCases: FALLBACK_CONTENT.useCases,
    deviceTypes: FALLBACK_CONTENT.deviceTypes,
    activityReferenceTable: FALLBACK_CONTENT.activityReferenceTable,
    testTips: FALLBACK_CONTENT.testTips,
    faq: FALLBACK_CONTENT.faq,
    benchmarkFallback: FALLBACK_CONTENT.benchmarkFallback
  };

  const t = (key, vars = {}) => {
    let str = contentData.ui[key] ?? FALLBACK_CONTENT.ui[key] ?? key;
    Object.entries(vars).forEach(([k, v]) => {
      str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
    });
    return str;
  };

  const FALLBACK_CDN_NODES = [
    { id: 'cloudflare', name: 'Cloudflare', location: 'Red Edge Global', url: 'https://speed.cloudflare.com/__down?bytes=25000000' },
    { id: 'render', name: 'Servidor VNET Render', location: 'Nube Render', url: 'https://vtest-backend-d4nr.onrender.com/download?bytes=5242880' }
  ];
  const FALLBACK_PING_ENDPOINTS = [
    { id: 'cloudflare', name: 'Cloudflare', location: 'Red Edge Global', url: 'https://speed.cloudflare.com/__down?bytes=100' },
    { id: 'render', name: 'Servidor VNET Render', location: 'Nube Render', url: 'https://vtest-backend-d4nr.onrender.com/ping' }
  ];
  const FALLBACK_UPLOAD_ENDPOINTS = [
    { id: 'render_upload', name: 'Servidor VNET Render (Upload)', location: 'Nube Render', url: 'https://vtest-backend-d4nr.onrender.com/upload' }
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

  const DEFAULT_PREFS = Object.assign({
    durationSec: 8,
    serverId: CDN_NODES[0].id,
    autoStart: true,
    repeatCount: 1,
    simulatedDevices: 2,
    mbpsPerDevice: 18
  }, CFG.defaults || {});

  let prefs = loadPrefs();
  let isRunning = false;
  let abortCtrl = null;
  let dlSeries = [];
  let ulSeries = [];
  let quizAnswers = {};
  let quizStep = 0;
  let activeBenchMetric = 'download';
  let serverComparison = null;
  let deferredInstallPrompt = null;
  let gpsLocationLabel = '';
  let gaugeTotalLen = 0;

  let netInfo = {
    ip: '',
    isp: '',
    countryCode: 'VE'
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

  function loadPrefs() {
    try {
      const merged = { ...DEFAULT_PREFS, ...(JSON.parse(localStorage.getItem('vtest_wa_prefs')) || {}) };
      merged.repeatCount = Math.max(1, Math.min(5, parseInt(merged.repeatCount, 10) || 1));
      merged.simulatedDevices = Math.max(0, Math.min(30, parseInt(merged.simulatedDevices, 10) || 0));
      merged.mbpsPerDevice = Math.max(1, Math.min(200, parseInt(merged.mbpsPerDevice, 10) || 18));
      return merged;
    } catch {
      return { ...DEFAULT_PREFS };
    }
  }

  function getSimulatedLoadMbps() {
    const eq = Math.max(0, parseInt(prefs.simulatedDevices, 10) || 0);
    const perEq = Math.max(1, parseInt(prefs.mbpsPerDevice, 10) || 18);
    return eq * perEq;
  }

  function detectDevice() {
    const ua = navigator.userAgent || '';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
      || (navigator.maxTouchPoints > 1 && window.innerWidth <= 900);
    const cores = navigator.hardwareConcurrency || 4;
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const slow = Boolean(conn && (conn.saveData || ['2g', 'slow-2g', '3g'].includes(String(conn.effectiveType || '').toLowerCase())));
    const extraThreads = Math.min(3, Math.floor((prefs.simulatedDevices || 0) / 3));

    return {
      isMobile,
      label: isMobile ? t('deviceMobile') : t('deviceDesktop'),
      minThreads: (isMobile || slow ? 1 : 2) + (prefs.simulatedDevices > 0 ? 1 : 0),
      maxThreads: (slow ? 2 : (isMobile ? (cores >= 6 ? 3 : 2) : (cores >= 4 ? 4 : 3))) + extraThreads,
      uploadChunkBytes: isMobile ? (1024 * 1024) : (3 * 1024 * 1024),
      uploadThreads: (isMobile ? 2 : 3) + (prefs.simulatedDevices >= 4 ? 1 : 0),
      durationSec: prefs.durationSec || 8
    };
  }

  function getDlNode() {
    return CDN_NODES.find(n => n.id === prefs.serverId) || CDN_NODES[0];
  }

  function getPingNode() {
    return PING_ENDPOINTS.find(p => p.id === prefs.serverId) || PING_ENDPOINTS[0];
  }

  function getUploadUrl() {
    if (UPLOAD_ENDPOINTS.length) {
      const match = UPLOAD_ENDPOINTS.find(u => u.id.includes(prefs.serverId));
      return (match || UPLOAD_ENDPOINTS[0]).url;
    }
    return CFG.uploadUrl || SRV_CFG.uploadUrl || `${BACKEND_URL}/upload`;
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
    setText('accActivitiesTitle', t('accActivitiesTitle'));
    setText('accDevicesTitle', t('accDevicesTitle'));
    setText('accRefTableTitle', t('accRefTableTitle'));
    setText('accTipsTitle', t('accTipsTitle'));
    setText('accFaqTitle', t('accFaqTitle'));
    setText('refColActivity', t('refColActivity'));
    setText('refColRecommended', t('refColRecommended'));
    setText('settingsPanelTitle', t('settingsTitle'));
    setText('serverSelectLabel', t('serverSelectLabel'));
    setText('serverSelectHelp', t('serverSelectHelp'));
    setText('repeatCountLabel', t('repeatCountLabel'));
    setText('simDevicesLabel', t('simDevicesLabel'));
    setText('mbpsPerDeviceLabel', t('mbpsPerDeviceLabel'));
    setText('autoStartLabel', t('autoStartLabel'));
    setText('saveCfgBtn', t('saveSettingsBtn'));
    setText('resetCfgBtn', t('resetSettingsBtn'));
    setText('benchPanelTitle', t('benchTitle'));
    setText('benchTabDl', t('benchTabDownload'));
    setText('benchTabUl', t('benchTabUpload'));
    setText('benchTabPing', t('benchTabPing'));
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

    const repSelect = document.getElementById('repeatCountSelect');
    if (repSelect) {
      repSelect.innerHTML = [1, 2, 3, 4, 5].map(n => {
        const label = n === 1 ? t('repeatOptionSingle') : t('repeatOptionMulti', { count: n });
        return `<option value="${n}">${label}</option>`;
      }).join('');
      repSelect.value = String(prefs.repeatCount || 1);
    }

    if (!isRunning) {
      setText('phaseLabel', t('phaseReady'));
      setText('gaugeState', prefs.autoStart ? t('gaugeInit') : t('phaseReady'));
      setText('actionTestBtn', lastMetrics.downloadMbps !== null ? t('btnRepeat') : t('btnStart'));
    }
  }

  function updateHeaderAndFooter() {
    const dev = detectDevice();
    const node = getDlNode();
    const locText = gpsLocationLabel || t('locationInactive');
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
  }

  async function loadContentJson() {
    try {
      const res = await fetch(CONTENT_URL, { cache: 'no-store' });
      if (!res.ok) return;
      const json = await res.json();
      if (json && typeof json === 'object') {
        contentData = {
          ui: { ...FALLBACK_CONTENT.ui, ...(json.ui || {}) },
          quizSteps: Array.isArray(json.quizSteps) && json.quizSteps.length ? json.quizSteps : FALLBACK_CONTENT.quizSteps,
          useCases: Array.isArray(json.useCases) && json.useCases.length ? json.useCases : FALLBACK_CONTENT.useCases,
          deviceTypes: Array.isArray(json.deviceTypes) && json.deviceTypes.length ? json.deviceTypes : FALLBACK_CONTENT.deviceTypes,
          activityReferenceTable: Array.isArray(json.activityReferenceTable) && json.activityReferenceTable.length ? json.activityReferenceTable : FALLBACK_CONTENT.activityReferenceTable,
          testTips: Array.isArray(json.testTips) && json.testTips.length ? json.testTips : FALLBACK_CONTENT.testTips,
          faq: Array.isArray(json.faq) && json.faq.length ? json.faq : FALLBACK_CONTENT.faq,
          benchmarkFallback: json.benchmarkFallback || FALLBACK_CONTENT.benchmarkFallback
        };
        applyStaticUiTexts();
        updateHeaderAndFooter();
        renderAccordionInsights();
        renderQuiz();
        renderHistory();
        renderBenchmark();
        updateSimSummaryLabel();
        updatePwaNote();
      }
    } catch {}
  }

  function requestGpsLocation() {
    if (!('geolocation' in navigator) || typeof navigator.geolocation.getCurrentPosition !== 'function') {
      gpsLocationLabel = '';
      updateHeaderAndFooter();
      renderBenchmark();
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
            const city = addr.city || addr.town || addr.municipality || addr.state || '';
            const state = addr.state || '';
            if (city && state && city !== state) gpsLocationLabel = `${city}, ${state}`;
            else if (city || state) gpsLocationLabel = city || state;
          }
        } catch {}
        updateHeaderAndFooter();
        renderBenchmark();
      },
      () => {
        gpsLocationLabel = '';
        updateHeaderAndFooter();
        renderBenchmark();
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
          countryCode: (d.country_code || 'VE').trim().toUpperCase()
        };
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
            countryCode: (d.country_code || 'VE').trim().toUpperCase()
          };
          ok = true;
        }
      } catch {}
    }

    if (!ok) {
      try {
        const d = await fetchWithTimeout(`${BACKEND_URL}/api/client-ip?${q}`, 3800);
        if (d && d.ok && d.isp) {
          netInfo = {
            ip: d.ip || '',
            isp: d.isp,
            countryCode: d.countryCode || 'VE'
          };
          ok = true;
        }
      } catch {}
    }

    if (!ok) netInfo.isp = t('ispUnknown');

    updateHeaderAndFooter();
    renderBenchmark();
    fetchBenchmarkServer();
  }

  async function runDownloadUnderLoad(durationMs, signal) {
    const dev = detectDevice();
    const dlNode = getDlNode();
    const pingNode = getPingNode();
    let totalBytes = 0;
    const samples = [];
    const loadedRtts = [];
    let pSent = 0;
    let pLost = 0;
    let threads = dev.minThreads;
    const tStart = performance.now();

    const pingTask = (async () => {
      while (!signal.aborted && performance.now() - tStart < durationMs) {
        pSent++;
        const t0 = performance.now();
        try {
          const r = await fetch(`${pingNode.url}${pingNode.url.includes('?') ? '&' : '?'}dp=${Date.now()}_${Math.random()}`, {
            cache: 'no-store',
            signal
          });
          const ms = performance.now() - t0;
          if (r.ok && ms > 0 && ms < 2600) loadedRtts.push(ms);
          else pLost++;
        } catch {
          if (!signal.aborted) pLost++;
        }
        await new Promise(r => setTimeout(r, 380));
      }
    })();

    async function worker() {
      while (!signal.aborted && performance.now() - tStart < durationMs) {
        try {
          const resp = await fetch(`${dlNode.url}${dlNode.url.includes('?') ? '&' : '?'}r=${Math.random()}`, {
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
          await new Promise(r => setTimeout(r, 140));
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
        if (sec > 0.25) {
          const curMbps = (totalBytes * 8) / (sec * 1_000_000);
          samples.push(curMbps);
          dlSeries.push(curMbps);
          if (dlSeries.length > 28) dlSeries.shift();

          setText('gaugeValue', fmtGauge(curMbps));
          setText('dlCardVal', fmtSpeed(curMbps));
          setGaugeProgress(curMbps);
          updateSparkline('dlSparkPath', dlSeries);

          if (curMbps > 45 && threads < dev.maxThreads) {
            workers.push(worker());
            threads++;
          }
        }
        const pBar = document.getElementById('progressBar');
        if (pBar) pBar.style.width = `${Math.min(55, 8 + (sec / (durationMs / 1000)) * 47)}%`;
      }, 240);
    });

    await Promise.allSettled([...workers, pingTask]);

    const secFinal = Math.max(0.5, (performance.now() - tStart) / 1000);
    const finalMbps = (totalBytes * 8) / (secFinal * 1_000_000);
    const loadedAvg = loadedRtts.length ? Math.round(loadedRtts.reduce((a, b) => a + b, 0) / loadedRtts.length) : null;

    const steady = samples.slice(Math.floor(samples.length * 0.2));
    let stability = 95;
    if (steady.length > 2) {
      const mean = steady.reduce((a, b) => a + b, 0) / steady.length;
      const variance = steady.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / steady.length;
      const cv = mean > 0 ? Math.sqrt(variance) / mean : 0;
      stability = Math.max(15, Math.min(99, Math.round((1 - cv) * 100)));
    }

    return { mbps: finalMbps, loadedPing: loadedAvg, rtts: loadedRtts, stability, pSent, pLost };
  }

  async function runUploadUnderLoad(durationMs, signal) {
    const dev = detectDevice();
    const pingNode = getPingNode();
    const uploadUrl = getUploadUrl();
    const payload = new Uint8Array(dev.uploadChunkBytes);
    let uploaded = 0;
    let anyOk = false;
    const loadedRtts = [];
    let pSent = 0;
    let pLost = 0;
    const tStart = performance.now();

    const pingTask = (async () => {
      while (!signal.aborted && performance.now() - tStart < durationMs) {
        pSent++;
        const t0 = performance.now();
        try {
          const r = await fetch(`${pingNode.url}${pingNode.url.includes('?') ? '&' : '?'}up=${Date.now()}_${Math.random()}`, {
            cache: 'no-store',
            signal
          });
          const ms = performance.now() - t0;
          if (r.ok && ms > 0 && ms < 2600) loadedRtts.push(ms);
          else pLost++;
        } catch {
          if (!signal.aborted) pLost++;
        }
        await new Promise(r => setTimeout(r, 380));
      }
    })();

    async function worker() {
      while (!signal.aborted && performance.now() - tStart < durationMs) {
        try {
          const res = await fetch(`${uploadUrl}${uploadUrl.includes('?') ? '&' : '?'}u=${Date.now()}_${Math.random()}`, {
            method: 'POST',
            body: payload,
            headers: { 'Content-Type': 'application/octet-stream' },
            signal
          });
          if (res.ok) {
            anyOk = true;
            uploaded += payload.byteLength;
          } else break;
        } catch {
          break;
        }
      }
    }

    const workers = Array.from({ length: dev.uploadThreads }, () => worker());

    const iv = setInterval(() => {
      const sec = (performance.now() - tStart) / 1000;
      const pBar = document.getElementById('progressBar');
      if (pBar) pBar.style.width = `${Math.min(98, 55 + (sec / (durationMs / 1000)) * 43)}%`;
      if (uploaded > 0 && sec > 0.2) {
        const curUl = (uploaded * 8) / (sec * 1_000_000);
        ulSeries.push(curUl);
        if (ulSeries.length > 28) ulSeries.shift();
        setText('ulCardVal', fmtSpeed(curUl));
        setText('gaugeValue', fmtGauge(curUl));
        setGaugeProgress(curUl);
        updateSparkline('ulSparkPath', ulSeries);
      }
    }, 280);

    await Promise.allSettled([...workers, pingTask]);
    clearInterval(iv);

    const loadedAvg = loadedRtts.length ? Math.round(loadedRtts.reduce((a, b) => a + b, 0) / loadedRtts.length) : null;
    if (!anyOk || uploaded === 0) return { mbps: null, loadedPing: loadedAvg, rtts: loadedRtts, pSent, pLost };

    const secFinal = Math.max(0.5, (performance.now() - tStart) / 1000);
    return { mbps: (uploaded * 8) / (secFinal * 1_000_000), loadedPing: loadedAvg, rtts: loadedRtts, pSent, pLost };
  }

  async function runSingleLoadCycle(cycleIdx, totalCycles, signal) {
    const dev = detectDevice();
    const simLoadMbps = getSimulatedLoadMbps();

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

    const dlRes = await runDownloadUnderLoad(dev.durationSec * 1000, signal);
    if (signal.aborted) return null;

    const dlAvailable = Math.max(0, dlRes.mbps - simLoadMbps);
    setText('dlCardVal', fmtSpeed(dlAvailable));
    setText('gaugeValue', fmtGauge(dlAvailable));
    setGaugeProgress(dlAvailable);

    setGaugePhaseColor('upload');
    setText('phaseLabel', `${t('phaseUpload')}${repSuffix}`);
    if (gState) gState.textContent = t('gaugeUpload', { rep: repSuffix });
    const ulRes = await runUploadUnderLoad(Math.max(4, dev.durationSec - 2) * 1000, signal);
    if (signal.aborted) return null;

    const ulAvailable = ulRes.mbps !== null ? Math.max(0, ulRes.mbps - simLoadMbps * 0.5) : null;
    const allLoadedRtts = [...(dlRes.rtts || []), ...(ulRes.rtts || [])];
    const basePing = allLoadedRtts.length
      ? Math.round(allLoadedRtts.reduce((a, b) => a + b, 0) / allLoadedRtts.length)
      : (dlRes.loadedPing || ulRes.loadedPing || 0);

    const loadRatio = dlRes.mbps > 0 ? Math.min(1.5, simLoadMbps / dlRes.mbps) : (simLoadMbps > 0 ? 0.5 : 0);
    const pingWithSim = basePing > 0 ? Math.round(basePing * (1 + loadRatio * 0.25)) : null;
    const baseJitter = calcJitterFromRtts(allLoadedRtts);
    const jitterWithSim = Number((baseJitter * (1 + loadRatio * 0.3)).toFixed(1));
    const totalSent = (dlRes.pSent || 0) + (ulRes.pSent || 0);
    const totalLost = (dlRes.pLost || 0) + (ulRes.pLost || 0);
    const lossLoadPct = totalSent > 0 ? Number(((totalLost / totalSent) * 100).toFixed(1)) : 0;
    const simPenalty = Math.min(35, Math.round(loadRatio * 20));
    const stabilityLoad = Math.max(10, Math.min(99, (dlRes.stability || 90) - simPenalty));

    return {
      downloadMbps: Number(dlAvailable.toFixed(1)),
      uploadMbps: ulAvailable !== null ? Number(ulAvailable.toFixed(1)) : null,
      pingMs: pingWithSim,
      jitterMs: jitterWithSim,
      packetLossPct: lossLoadPct,
      stabilityPct: stabilityLoad
    };
  }

  async function startTest() {
    if (isRunning && abortCtrl) abortCtrl.abort();

    isRunning = true;
    abortCtrl = new AbortController();
    const { signal } = abortCtrl;
    const totalCycles = Math.max(1, Math.min(5, parseInt(prefs.repeatCount, 10) || 1));

    setText('actionTestBtn', t('btnStop'));
    const dot = document.getElementById('statusDot');
    if (dot) dot.className = 'dot running';

    const ispPromise = refreshIsp(true);

    try {
      const results = [];
      for (let i = 1; i <= totalCycles; i++) {
        if (signal.aborted) return;
        const res = await runSingleLoadCycle(i, totalCycles, signal);
        if (signal.aborted || !res) return;
        results.push(res);

        saveHistory({
          date: new Date().toLocaleString(),
          isp: netInfo.isp || t('ispUnknown'),
          download: `${fmtSpeed(res.downloadMbps)} Mbps`,
          upload: res.uploadMbps !== null ? `${fmtSpeed(res.uploadMbps)} Mbps` : 'N/D',
          ping: `${res.pingMs ?? '--'} ms`,
          loss: `${res.packetLossPct}%`
        });
      }

      await ispPromise;

      const avg = (arr) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;
      const dlAvg = Number(avg(results.map(r => r.downloadMbps).filter(v => typeof v === 'number')).toFixed(1));
      const ulVals = results.map(r => r.uploadMbps).filter(v => typeof v === 'number');
      const ulAvg = ulVals.length ? Number(avg(ulVals).toFixed(1)) : null;
      const pingAvg = Math.round(avg(results.map(r => r.pingMs).filter(v => typeof v === 'number')) || 0) || null;
      const jitterAvg = Number(avg(results.map(r => r.jitterMs).filter(v => typeof v === 'number')).toFixed(1));
      const lossAvg = Number(avg(results.map(r => r.packetLossPct).filter(v => typeof v === 'number')).toFixed(1));
      const stabAvg = Math.round(avg(results.map(r => r.stabilityPct).filter(v => typeof v === 'number')) || 85);

      lastMetrics = {
        downloadMbps: dlAvg,
        uploadMbps: ulAvg,
        pingMs: pingAvg,
        jitterMs: jitterAvg,
        packetLossPct: lossAvg,
        stabilityPct: stabAvg
      };

      setGaugePhaseColor('download');
      setText('dlCardVal', fmtSpeed(dlAvg));
      setText('ulCardVal', ulAvg !== null ? fmtSpeed(ulAvg) : 'N/D');
      setText('pingCardVal', pingAvg !== null ? `${pingAvg}` : '--');
      setText('jitterCardVal', `${jitterAvg}`);
      setText('stabilityCardVal', `${stabAvg}`);
      setText('lossCardVal', `${lossAvg}`);
      const pBar = document.getElementById('progressBar');
      if (pBar) pBar.style.width = '100%';
      setText('phaseLabel', t('phaseReady'));
      if (dot) dot.className = 'dot done';
      setText('gaugeState', totalCycles > 1 ? t('gaugeMultiAvg', { count: totalCycles }) : t('gaugeCompleted'));
      setText('gaugeValue', fmtGauge(dlAvg));
      setGaugeProgress(dlAvg);

      updateHeaderAndFooter();
      renderAccordionInsights();
      renderQuiz();
      renderBenchmark();
      updateSimSummaryLabel();
      postBenchmarkServer();
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
      setText('actionTestBtn', t('btnRepeat'));
    }
  }

  function stopOrRestart() {
    if (isRunning && abortCtrl) {
      abortCtrl.abort();
      isRunning = false;
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
    const hasMeasuredDl = typeof lastMetrics.downloadMbps === 'number' && Number.isFinite(lastMetrics.downloadMbps) && lastMetrics.downloadMbps > 0;
    const baseMbps = hasMeasuredDl ? lastMetrics.downloadMbps : 50;
    const ul = lastMetrics.uploadMbps;
    const stab = typeof lastMetrics.stabilityPct === 'number' ? lastMetrics.stabilityPct : 85;
    const loss = typeof lastMetrics.packetLossPct === 'number' ? lastMetrics.packetLossPct : 0;
    const ping = typeof lastMetrics.pingMs === 'number' ? lastMetrics.pingMs : 25;
    const jitter = typeof lastMetrics.jitterMs === 'number' ? lastMetrics.jitterMs : 5;
    const simLoadMbps = getSimulatedLoadMbps();

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
            sim: simLoadMbps,
            eq: prefs.simulatedDevices,
            stab,
            ping,
            loss
          })
        : t('devicesNoteRef', { eq: prefs.simulatedDevices, sim: simLoadMbps });
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

  function saveHistory(item) {
    const list = JSON.parse(localStorage.getItem('vtest_wa_hist') || '[]');
    list.unshift(item);
    localStorage.setItem('vtest_wa_hist', JSON.stringify(list.slice(0, 20)));
    renderHistory();
  }

  function renderHistory() {
    const list = JSON.parse(localStorage.getItem('vtest_wa_hist') || '[]');
    const body = document.getElementById('historyBody');
    if (!body) return;
    body.innerHTML = list.length
      ? list.map(r => `
          <tr>
            <td data-label="${t('histColDate')}">${r.date}</td>
            <td data-label="${t('histColIsp')}">${r.isp}</td>
            <td data-label="${t('histColDl')}"><strong>${r.download}</strong></td>
            <td data-label="${t('histColUl')}">${r.upload}</td>
            <td data-label="${t('histColPing')}">${r.ping}</td>
            <td data-label="${t('histColLoss')}">${r.loss || '0%'}</td>
          </tr>
        `).join('')
      : `<tr><td colspan="6" style="color:var(--text-muted);">${t('historyEmpty')}</td></tr>`;
  }

  async function fetchBenchmarkServer() {
    try {
      const q = new URLSearchParams({
        isp: netInfo.isp || '',
        countryCode: netInfo.countryCode || 'VE',
        t: String(Date.now())
      });
      const r = await fetch(`${BACKEND_URL}/api/benchmark?${q.toString()}`, { cache: 'no-store' });
      if (!r.ok) return;
      const j = await r.json();
      if (j && j.ok && j.comparison) {
        serverComparison = j.comparison;
        renderBenchmark();
      }
    } catch {}
  }

  async function postBenchmarkServer() {
    if (!lastMetrics.downloadMbps) return;
    try {
      const r = await fetch(`${BACKEND_URL}/api/benchmark`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          isp: netInfo.isp,
          countryCode: netInfo.countryCode,
          gpsLocation: gpsLocationLabel || undefined,
          deviceType: detectDevice().label,
          downloadMbps: lastMetrics.downloadMbps,
          uploadMbps: lastMetrics.uploadMbps,
          pingMs: lastMetrics.pingMs,
          stabilityPct: lastMetrics.stabilityPct
        })
      });
      if (!r.ok) return;
      const j = await r.json();
      if (j && j.ok && j.comparison) {
        serverComparison = j.comparison;
        renderBenchmark();
      }
    } catch {}
  }

  function normalizeProviderName(name) {
    return String(name || '').toLowerCase().replace(/\(tu red\)/gi, '').trim();
  }

  function getTop3Providers(metric) {
    const key = metric === 'download' ? 'downloadAvg' : (metric === 'upload' ? 'uploadAvg' : 'pingAvg');
    const fromServer = Array.isArray(serverComparison?.topProviders) ? serverComparison.topProviders : [];
    const currentVal = lastMetrics[metric === 'download' ? 'downloadMbps' : (metric === 'upload' ? 'uploadMbps' : 'pingMs')];
    const hasCurrentIsp = Boolean(netInfo.isp && netInfo.isp !== t('ispDetecting') && netInfo.isp !== t('ispUnknown'));

    const entries = [];
    const seen = new Set();

    function addEntry(rawName, val, isCurrentUser = false) {
      if (typeof val !== 'number' || !Number.isFinite(val)) return;
      const cleanKey = normalizeProviderName(rawName);
      if (!cleanKey || seen.has(cleanKey)) return;
      seen.add(cleanKey);
      entries.push({
        name: isCurrentUser ? `${rawName}${t('benchCurrentTag')}` : rawName,
        val,
        isCurrentUser
      });
    }

    fromServer.forEach(p => {
      if (!p || !p.isp) return;
      const serverVal = typeof p[key] === 'number'
        ? p[key]
        : (metric === 'download' && typeof p.downloadAvg === 'number' ? p.downloadAvg : null);
      const matchesUserIsp = hasCurrentIsp && normalizeProviderName(p.isp) === normalizeProviderName(netInfo.isp);
      if (matchesUserIsp && typeof currentVal === 'number') addEntry(netInfo.isp, currentVal, true);
      else addEntry(p.isp, serverVal, false);
    });

    if (hasCurrentIsp && typeof currentVal === 'number') addEntry(netInfo.isp, currentVal, true);

    const fb = contentData.benchmarkFallback || FALLBACK_CONTENT.benchmarkFallback;
    const fallbackPool = metric === 'ping'
      ? (fb.ping || [])
      : (fb.throughput || []).map(item => ({ name: item.name, val: metric === 'upload' ? item.ul : item.dl }));

    for (const item of fallbackPool) {
      if (entries.length >= 3) break;
      addEntry(item.name, item.val, false);
    }

    entries.sort((a, b) => metric === 'ping' ? (a.val - b.val) : (b.val - a.val));
    return entries.slice(0, 3);
  }

  function renderBenchmark() {
    const m = activeBenchMetric;
    const unit = m === 'ping' ? 'ms' : 'Mbps';
    const top3 = getTop3Providers(m);
    const maxV = Math.max(10, ...top3.map(x => x.val || 0));

    setText('benchScopeText', gpsLocationLabel ? `${t('benchGpsPrefix')} ${gpsLocationLabel}` : 'Top 3');

    const barsEl = document.getElementById('benchBars');
    if (barsEl) {
      barsEl.innerHTML = top3.length
        ? top3.map((item, idx) => {
            const pct = maxV > 0 ? Math.max(6, Math.min(100, (item.val / maxV) * 100)) : 0;
            const cls = idx === 0 ? '' : (idx === 1 ? 'ul' : 'muted');
            const badge = item.isCurrentUser ? t('benchActualBadge') : '';
            return `
              <div class="bar-item">
                <div class="bar-head">
                  <span>#${idx + 1} ${item.name}${badge}</span>
                  <strong>${item.val} ${unit}</strong>
                </div>
                <div class="bar-track"><div class="bar-fill ${cls}" style="width:${pct}%;"></div></div>
              </div>
            `;
          }).join('')
        : `<div class="mini-info-sub">${t('benchEmpty')}</div>`;
    }

    const hasServerData = Array.isArray(serverComparison?.topProviders) && serverComparison.topProviders.length > 0;
    setText(
      'benchSummaryLine',
      hasServerData
        ? t('benchSortedServer', { criterion: m === 'ping' ? t('benchCriterionLatency') : t('benchCriterionSpeed') })
        : t('benchFallbackNote')
    );
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vtest_wa_theme', theme);
    setText('themeIcon', theme === 'dark' ? '☀️' : '🌙');
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#070a12' : '#f6f8fb');
  }

  function updateSimSummaryLabel() {
    const eq = Math.max(0, Math.min(30, parseInt(document.getElementById('simDevicesInput')?.value, 10) || 0));
    const mbps = Math.max(1, Math.min(200, parseInt(document.getElementById('mbpsPerDeviceInput')?.value, 10) || 18));
    const totalSim = eq * mbps;
    const afterText = typeof lastMetrics.downloadMbps === 'number'
      ? t('simLoadRemaining', { rem: Math.max(0, Number((lastMetrics.downloadMbps - totalSim).toFixed(1))) })
      : '';
    setText('simLoadSummary', t('simLoadSummary', { total: totalSim, eq, mbps, after: afterText }));
  }

  function syncPrefsUI() {
    const sel = document.getElementById('serverSelect');
    if (sel) {
      sel.innerHTML = CDN_NODES.map(n => `<option value="${n.id}">${n.name}</option>`).join('');
      const valid = CDN_NODES.some(n => n.id === prefs.serverId);
      sel.value = valid ? prefs.serverId : CDN_NODES[0].id;
      prefs.serverId = sel.value;
    }
    const repEl = document.getElementById('repeatCountSelect');
    if (repEl) repEl.value = String(prefs.repeatCount || 1);

    const simEqEl = document.getElementById('simDevicesInput');
    if (simEqEl) simEqEl.value = String(prefs.simulatedDevices ?? 2);

    const mbpsEqEl = document.getElementById('mbpsPerDeviceInput');
    if (mbpsEqEl) mbpsEqEl.value = String(prefs.mbpsPerDevice ?? 18);

    const autoEl = document.getElementById('cfgAutoStart');
    if (autoEl) autoEl.checked = Boolean(prefs.autoStart);

    updateSimSummaryLabel();
    updateHeaderAndFooter();
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

  function bindEvents() {
    document.getElementById('installAppBtn')?.addEventListener('click', triggerPwaInstall);
    document.getElementById('installSettingsBtn')?.addEventListener('click', triggerPwaInstall);
    document.getElementById('actionTestBtn')?.addEventListener('click', stopOrRestart);

    document.querySelectorAll('.acc-header').forEach(h => {
      h.addEventListener('click', () => {
        const body = document.getElementById(h.getAttribute('data-acc'));
        if (body) body.classList.toggle('open');
      });
    });

    document.querySelectorAll('.bench-tab').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.bench-tab').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        activeBenchMetric = b.getAttribute('data-metric') || 'download';
        renderBenchmark();
      });
    });

    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));
        document.getElementById(targetTab)?.classList.add('active');
        if (targetTab === 'tab-settings') syncPrefsUI();
        if (targetTab === 'tab-accordion') renderAccordionInsights();
        if (targetTab === 'tab-quiz') renderQuiz();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    document.getElementById('themeBtn')?.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });

    document.getElementById('simDevicesInput')?.addEventListener('input', updateSimSummaryLabel);
    document.getElementById('mbpsPerDeviceInput')?.addEventListener('input', updateSimSummaryLabel);

    document.getElementById('saveCfgBtn')?.addEventListener('click', () => {
      prefs = {
        durationSec: DEFAULT_PREFS.durationSec,
        serverId: document.getElementById('serverSelect')?.value || CDN_NODES[0].id,
        autoStart: Boolean(document.getElementById('cfgAutoStart')?.checked),
        repeatCount: Math.max(1, Math.min(5, parseInt(document.getElementById('repeatCountSelect')?.value, 10) || 1)),
        simulatedDevices: Math.max(0, Math.min(30, parseInt(document.getElementById('simDevicesInput')?.value, 10) || 0)),
        mbpsPerDevice: Math.max(1, Math.min(200, parseInt(document.getElementById('mbpsPerDeviceInput')?.value, 10) || 18))
      };
      localStorage.setItem('vtest_wa_prefs', JSON.stringify(prefs));
      syncPrefsUI();
      renderAccordionInsights();
    });

    document.getElementById('resetCfgBtn')?.addEventListener('click', () => {
      prefs = { ...DEFAULT_PREFS };
      localStorage.removeItem('vtest_wa_prefs');
      syncPrefsUI();
      renderAccordionInsights();
    });

    document.getElementById('exportCsvBtn')?.addEventListener('click', () => {
      const list = JSON.parse(localStorage.getItem('vtest_wa_hist') || '[]');
      if (!list.length) return;
      const csv = ['Fecha,ISP,Bajada,Subida,Ping,Loss']
        .concat(list.map(r => `"${r.date}","${r.isp}","${r.download}","${r.upload}","${r.ping}","${r.loss || ''}"`))
        .join('\n');
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
      a.download = 'vtest_historial.csv';
      a.click();
    });

    document.getElementById('clearHistBtn')?.addEventListener('click', () => {
      localStorage.removeItem('vtest_wa_hist');
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
    syncPrefsUI();
    renderAccordionInsights();
    renderQuiz();
    renderHistory();
    renderBenchmark();
    updatePwaNote();
    bindEvents();
    requestGpsLocation();

    await loadContentJson();

    fetch(`${BACKEND_URL}/ping?wake=${Date.now()}`, { cache: 'no-store' }).catch(() => {});
    if (prefs.autoStart) startTest();
    else refreshIsp(true);
  }

  init();
})();
