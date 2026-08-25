/* ════════════════════════════════════════════════════════════
   DATA — Base de datos de contenido de los paneles laterales
   div → subtítulo del panel · t → título · s[] → ventajas Aercom
   EDITAR AQUÍ para modificar los textos de cada ficha técnica.
════════════════════════════════════════════════════════════ */
const panelData = {
  'ge-alternador': { div:'Grupo Electrógeno', t:'Alternador', s:[
    'Alternadores Leroy Somer / Weichai de alta fiabilidad industrial',
    'Trifásico 3×380 V — 50 Hz con neutro para cargas monofásicas 220 V',
    'Sin escobillas: excitación por diodos rotantes, mínimo mantenimiento',
    'Regulación de tensión por placa AVR integrada',
    'Preparados para paralelismo según modelo' ] },
  'ge-motor': { div:'Grupo Electrógeno', t:'Motor', s:[
    'Motores Baudouin / Weichai: Diésel, Gas Natural o GLP según necesidad',
    'Línea industrial diseñada para uso estacionario y generación continua',
    'Control electrónico de velocidad de alta precisión',
    'Stock permanente de repuestos garantizado en Argentina' ] },
  'ge-cabina': { div:'Grupo Electrógeno', t:'Cabina', s:[
    'Cabina insonorizada apta para intemperie con batea antiderrame integrada',
    'Tanque de combustible extraíble para limpieza sencilla',
    'Puertas amplias con imanes antiviento y revestimiento fonoabsorbente interior',
    'Carga externa con reloj analógico de control de nivel',
    'Cáncamos de izaje y guías para autoelevador según modelo' ] },
  'mc-motor': { div:'Motocompresor Diésel', t:'Motor Kubota', s:[
    'Motor Kubota de fiabilidad industrial reconocida mundialmente',
    'Gran tanque de combustible para jornadas extendidas sin reposición',
    'Ideal para minería, oil & gas, construcción y emergencias' ] },
  'mc-unidad': { div:'Motocompresor Diésel', t:'Unidad Compresora', s:[
    'Unidad compresora de fabricación europea: alta eficiencia y durabilidad',
    'Modelos de diferentes caudales y presiones para cada requerimiento',
    'Eje simple y lanza de altura regulable para fácil maniobra en campo' ] },
  'mc-panel': { div:'Motocompresor Diésel', t:'Panel de Control', s:[
    'Panel completo: presión, temperatura y horario de uso integrados',
    'Protecciones automáticas ante sobrecalentamiento y baja presión de aceite',
    'Cabina diseñada para intemperie con acceso seguro al panel de control' ] },
  'ec-motor': { div:'Electrocompresor', t:'Motor Eléctrico', s:[
    'Acople directo o a correas según el modelo y la aplicación',
    'Velocidad fija o variable VSD para máxima eficiencia energética',
    'Tecnología de origen alemán homologada en la Unión Europea' ] },
  'ec-tornillo': { div:'Electrocompresor', t:'Cabezal de Tornillo', s:[
    'Lubricados (Oil injected) o libres de aceite (Oil free) según proceso',
    'Apto para industria general, alimentaria, farmacéutica y de alta precisión',
    'Cabinas de bajo nivel sonoro para optimizar instalación en cualquier espacio',
    'Modelos específicos para mesas de corte láser y procesos especiales' ] },
  'ec-vsd': { div:'Electrocompresor', t:'Sistema y Tecnología', s:[
    'Amplia gama de caudal y presión para cubrir todos los requerimientos',
    'Modelos Compact con tanque y secador integrados en una sola unidad',
    'Mayor eficiencia energética con diseño certificado y auditado',
    'Stock permanente de repuestos garantizado en Argentina' ] },
  'secadora': { div:'Tratamiento de Aire', t:'Secadores de Aire', s:[
    'Frigoríficos (+3 °C) o por adsorción (−40 °C) según el proceso productivo',
    'Calidad de aire certificable según norma ISO 8573-1',
    'Adaptables a todos los procesos industriales o requerimientos especiales',
    'Gama completa compatible con todos los modelos de compresores Aercom',
    'Muy bajo mantenimiento, con filtros de línea integrados de serie' ] },
  'shelter': { div:'Infraestructura de Campo', t:'Shelter Industrial', s:[
    'Aplicaciones en minería, campos petroleros y gasíferos de todo tipo',
    'Diseño completamente personalizado para cada cliente y cada proyecto',
    'Contenedores normalizados con equipamiento adicional según el sitio',
    'Equipado con máquinas y sistemas listos para el proceso de destino',
    'Amplios accesos para operación cómoda y mantenimiento eficiente' ] },
  'torre': { div:'Equipamiento Especial', t:'Torres de Iluminación', s:[
    'Distintos modelos para diferentes necesidades operativas y de faena',
    'Luminarias LED de largo alcance y gran poder lumínico certificado',
    'Motor diésel con gran autonomía y consumo reducido',
    'Alternador 220 V / 50 Hz con tomacorrientes para herramientas eléctricas',
    'Mástil de gran altura, giro 360°, izaje manual o hidráulico',
    'Lanza de remolque para fácil traslado y patas desplegables estabilizadoras' ] },
  'vru': { div:'Equipamiento Especial', t:'Unidades VRU', s:[
    'Recuperación eficiente de hidrocarburos livianos del proceso',
    'Reducción de emisiones dentro de normativa ambiental vigente',
    'Sistemas diseñados a medida para cada instalación y proceso' ] }
};
