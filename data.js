/* =========================================================================
   data.js — UNE 157001:2014
   Fuente: Norma UNE 157001:2014, AENOR, junio 2014 (15 páginas)
   "Criterios generales para la elaboración formal de los documentos que constituyen un proyecto técnico"
   ========================================================================= */

/* ---------- 4.1 Estructura documental ---------- */
const DOCUMENTOS = [
  ["Índice", "Facilita la localización de los distintos contenidos del proyecto."],
  ["Memoria", "Nexo de unión entre todos los documentos. Justifica las soluciones adoptadas y su adecuación a la normativa legal aplicable; junto con los planos y el pliego describe de forma unívoca el objeto del proyecto."],
  ["Anexos", "Desarrollan, justifican o aclaran apartados específicos de la memoria u otros documentos."],
  ["Planos", "Junto con la memoria, definen de forma unívoca el objeto del proyecto."],
  ["Pliego de condiciones", "Establece las condiciones técnicas, económicas, administrativas, facultativas y legales para materializar el objeto del proyecto en las condiciones especificadas."],
  ["Mediciones", "Define y determina las unidades de cada partida o unidad de obra que configuran la totalidad del objeto del proyecto."],
  ["Presupuesto", "Determina el coste económico, en unidades monetarias, de la ejecución material del objeto del proyecto."]
];

const REQ_GEN = [
  "En todas las páginas del proyecto debe figurar: el título, el código o referencia de identificación, el tipo de documento («Índice», «Memoria», «Anexos», etc.), el número de página, el número total de páginas y la fecha.",
  "Si el proyecto dispone de diversos volúmenes, en cada uno de ellos se debe incluir, además, su título y número de volumen.",
  "El proyecto debe ser redactado de forma clara, concisa, concreta y con suficiente amplitud y detalle para que queden determinados todos los aspectos que interesan al destinatario, sin necesidad de solicitar aclaraciones al autor.",
  "Lenguaje claro, preciso, libre de vaguedades y términos ambiguos, coherente con la terminología empleada en los distintos capítulos y apartados; mínima calidad literaria.",
  "La primera vez que se utilice un acrónimo o abreviatura en el texto se debe presentar entre paréntesis y a continuación de la palabra o texto completo al que reemplazará.",
  "El uso de la forma «debe» indica requisitos obligatorios; las sugerencias no obligatorias se expresan mediante el tiempo condicional o subjuntivo («debería»).",
  "Cada documento se estructura en capítulos y apartados numerados según UNE 50132.",
  "Cuando proceda, deben considerarse los requisitos relacionados con la propiedad intelectual del proyecto (autor o competencias de los colegios profesionales según la legislación vigente)."
];

const INFO_INI = [
  "El título y su código o referencia de identificación.",
  "El nombre del organismo u organismos a los que se dirige el proyecto.",
  "El nombre, apellidos y documento de identidad del promotor del proyecto (en nombre propio o en representación de otra persona física o jurídica, cuyos datos también deben figurar).",
  "Si el objeto contempla un emplazamiento geográfico concreto: dirección y población, y, si procede, coordenadas UTM.",
  "El nombre de la organización, razón social o persona jurídica que ha recibido el encargo de elaborar el proyecto, con CIF, dirección, teléfono, fax, correo electrónico u otro identificador profesional (salvo los cuya publicidad no sea legalmente procedente).",
  "El nombre y apellidos del proyectista, su titulación y, en su caso, colegio o entidad a la que pertenece, documento de identidad, domicilio profesional, teléfono, fax, correo electrónico u otro identificador profesional."
];

/* ---------- 6 Memoria ---------- */
const MEMORIA_CAPS = [
  { id: "1.1", titulo: "Objeto", texto: "Se debe indicar el objetivo del proyecto y su justificación." },
  { id: "1.2", titulo: "Alcance", texto: "Se debe indicar el ámbito de aplicación del proyecto." },
  { id: "1.3", titulo: "Antecedentes", texto: "Se deben indicar los condicionantes de partida: permisos o legalizaciones previas, ampliación, rehabilitación o reforma, cambio de actividad o uso, etc." },
  { id: "1.4", titulo: "Normas y referencias", texto: "Se deben relacionar únicamente los documentos citados en los distintos apartados de la memoria.", sub: [
    ["1.4.1 Disposiciones legales y normas aplicadas", "Referencias de las disposiciones legales (leyes, reglamentos, ordenanzas, normas de obligado cumplimiento por su inclusión en disposiciones legales) y de las normas que se deben tener en cuenta para la realización del proyecto."],
    ["1.4.2 Programas de cálculo", "Relación de programas, modelos u otras herramientas utilizadas para desarrollar los diversos cálculos del proyecto."],
    ["1.4.3 Plan de gestión de la calidad aplicado durante la redacción", "Procesos específicos utilizados para asegurar la calidad durante la realización del proyecto."],
    ["1.4.4 Bibliografía", "Libros, revistas u otros textos que el autor considere de interés para justificar las soluciones adoptadas."],
    ["1.4.5 Otras referencias", "Referencias no relacionadas en los apartados anteriores, de interés para la comprensión y materialización del proyecto."]
  ] },
  { id: "1.5", titulo: "Definiciones y abreviaturas", texto: "Se deben relacionar todas las definiciones, abreviaturas, etc. utilizadas y su significado." },
  { id: "1.6", titulo: "Requisitos de diseño", texto: "Se deben describir las bases y datos de partida que se derivan del cliente; del emplazamiento y su entorno socio-económico y ambiental; de los estudios realizados encaminados a la definición de la solución adoptada; y de las interfaces con otros sistemas o elementos externos al proyecto u otros que condicionan las soluciones técnicas." },
  { id: "1.7", titulo: "Análisis de soluciones", texto: "Se deben indicar las distintas alternativas estudiadas, qué caminos se han seguido para llegar a ellas, ventajas e inconvenientes de cada una y cuál es la solución finalmente elegida, junto con su justificación en función de la legislación y la reglamentación y normativa aplicables." },
  { id: "1.8", titulo: "Resultados finales", texto: "Se debe describir el producto, obra, edificio, instalación y servicio según la solución elegida, indicando cuáles son sus características definitorias y haciendo referencia a los planos y otros elementos del proyecto que lo definen." },
  { id: "1.9", titulo: "Planificación", texto: "En relación al proceso de materialización del proyecto, se deben definir las diferentes etapas, metas o hitos a alcanzar, plazos de entrega y cronogramas o gráficos de programación correspondientes." },
  { id: "1.10", titulo: "Orden de prioridad entre los documentos", texto: "El autor del proyecto, frente a posibles discrepancias, debe establecer el orden de prioridad de los documentos. Si no se especifica otra cosa, el orden de prioridad debe ser: 1 Planos; 2 Pliego de condiciones; 3 Presupuesto; 4 Memoria. (En función del tipo de proyecto se debe adaptar el orden y los documentos según la legislación específica aplicable.)" }
];

/* ---------- 7 Anexos ---------- */
const ANEXOS_ITEMS = [
  ["Documentación de partida", "Documentos que se han tenido en cuenta para establecer los requisitos de diseño."],
  ["Cálculos", "Justifican las fórmulas aplicadas, las soluciones adoptadas y, conjuntamente con los planos y el pliego, describen de forma unívoca el objeto del proyecto. Hipótesis de partida, criterios y procedimientos de cálculo, resultados finales base del dimensionado o comprobación."],
  ["Anexos por ámbito del proyecto", "Seguridad (prevención de incendios, sanidad, radiaciones, pública concurrencia); Medio ambiente (acústica, residuos, emisiones); Eficiencia energética; Emplazamiento, geotécnicos, hidráulicos, hidrológicos, pluviométricos; Gestión de residuos; Otros."],
  ["Estudios con entidad propia", "Todos aquellos estudios que deban incluirse por exigencias legales: Estudio Básico de Seguridad y Salud o Estudio de Seguridad y Salud, según corresponda; Estudio de Impacto Ambiental (según la tipología prevista en la legislación vigente)."],
  ["Otros documentos justificativos", "Catálogos de los elementos constitutivos del objeto del proyecto; listados; información en soportes lógicos, magnéticos, ópticos o cualquier otro; maquetas o modelos; otros documentos que se juzguen necesarios."],
  ["Justificación normativa", "Cada anexo debe contener la justificación del cumplimiento de la normativa legal vigente aplicable y, si procede, de las fórmulas aplicadas para el cálculo."]
];

/* ---------- 8 Planos ---------- */
const PLANOS_ITEMS = [
  "El documento Planos debe iniciarse con un índice que haga referencia a cada uno de los planos, indicando su ubicación en el documento.",
  "Cada plano debe contener la información gráfica, alfanumérica, de códigos y de escala necesaria para su comprensión y correcta ejecución de lo representado.",
  "Principios generales de representación, cajetines, indicaciones, escritura, rotulación, acotación, símbolos gráficos, plegado, listas de elementos, escalas, métodos de proyección, formatos y presentación de los elementos gráficos y gestión de la información técnica asistida por ordenador: salvo indicación en contra del autor, según UNE 1027, UNE 1032, UNE 1035, UNE 1039, UNE 1089-1, UNE 1089-2, UNE 1135, UNE 1166-1, UNE-EN ISO 3098-0/2/3/4/5/6, UNE-EN ISO 5455, UNE-EN ISO 5456-1/2/3, UNE-EN ISO 5457, UNE-EN ISO 6433, UNE-EN ISO 10209-2, UNE-EN ISO 11442-1/2/3/4, UNE-EN ISO 81714-1."
];

/* ---------- 9 Pliego de condiciones ---------- */
const PLIEGO_ITEMS = [
  ["a) Descripción de las obras, productos, instalaciones o servicios", "Descripción del objeto del proyecto."],
  ["b) Especificaciones de los materiales y elementos constitutivos", "Listado completo; calidades mínimas a exigir (indicando la norma que contemple el material); pruebas y ensayos a que deben someterse (norma, condiciones de realización, resultados mínimos a obtener)."],
  ["c) Ejecución de las obras, productos, instalaciones o servicios", "Condiciones de ejecución."],
  ["d) Reglamentación y normativa aplicables", "Incluyendo las recomendaciones o normas de no obligado cumplimiento que se consideran de necesaria aplicación a criterio del autor."],
  ["e) Aspectos del contrato referidos directamente al proyecto", "Documentos base para la contratación (planos, mediciones, memoria, especificaciones); limitaciones en los suministros (dónde empieza y termina la responsabilidad de suministro y montaje); criterios de medición, valoración y abono; criterios para las modificaciones al proyecto original (procedimiento, aceptación, reflejo en la documentación final); pruebas y ensayos (cuáles y en qué condiciones); garantía de los suministros (alcance, duración, limitaciones); garantía de funcionamiento (alcance, duración, limitaciones)."]
];

/* ---------- 10 Mediciones ---------- */
const MEDICIONES_ITEMS = [
  "El documento Mediciones define y determina las unidades de cada partida o unidad de obra que configuran la totalidad del objeto del proyecto, basándose en la información contenida en el documento «Planos».",
  "Debe incluir el número de unidades y definir las características, modelos, tipos y dimensiones de cada partida de obra o elemento del objeto del proyecto.",
  "Preferentemente se debe utilizar el sistema internacional de unidades conforme a UNE 82100 (partes 0 a 13).",
  "Se debe utilizar el concepto de partida alzada en aquellas unidades de obra en que no sea posible desglosar, de forma razonable, el detalle de las mismas.",
  "Si forma parte de un volumen distinto al principal, se debe iniciar con un índice.",
  "Debe contener un listado completo de las partidas de obra que configuran la totalidad del proyecto, subdividido en apartados o subapartados correspondientes a las partes más significativas del objeto del proyecto.",
  "Debe servir de base para la realización del Presupuesto."
];

/* ---------- 11 Presupuesto ---------- */
const PRESUPUESTO_ITEMS = [
  "El Presupuesto determina el coste económico, en unidades monetarias, de la ejecución material del objeto del proyecto, especificando las partidas ejecutadas por contrata y/o por administración.",
  "Se debe basar en el documento de Mediciones y seguir su misma ordenación.",
  "En los proyectos administrativos es suficiente un resumen de las partidas más importantes (obras, cada una de las instalaciones, mobiliario y maquinaria, medidas correctoras, prevención de incendios, etc.).",
  "El Presupuesto se debe iniciar con un índice que haga referencia a cada uno de los documentos, capítulos y apartados que lo componen.",
  "Debe contener: un cuadro de precios unitarios de materiales, mano de obra y elementos auxiliares que componen las partidas o unidades de obra; un cuadro de precios unitarios de las unidades de obra, de acuerdo con el documento de mediciones y con la descomposición correspondiente de materiales, mano de obra, elementos auxiliares y costes indirectos; el presupuesto propiamente dicho con la valoración económica global, desglosada y ordenada según el documento de mediciones.",
  "Debe establecer el alcance de los precios, indicando claramente si incluyen o no: gastos generales y beneficio industrial; impuestos, tasas y otras contribuciones; seguros; costes de certificación y visado; permisos y licencias; cualquier otro concepto que influya en el coste final de materialización del objeto del proyecto."
];

/* ---------- 2 Normas para consulta ---------- */
const NORMAS_CONSULTA = [
  "UNE 1027, Dibujos técnicos. Plegado de planos.",
  "UNE 1032, Dibujos técnicos. Principios generales de representación.",
  "UNE 1035, Dibujos técnicos. Cuadro de rotulación.",
  "UNE 1039, Dibujos técnicos. Acotación. Principios generales, definiciones, métodos de ejecución e indicaciones especiales.",
  "UNE 1089-1, Principios generales para la creación de símbolos gráficos. Parte 1: Símbolos gráficos colocados sobre equipos.",
  "UNE 1089-2, Principios generales para la creación de símbolos gráficos. Parte 2: Símbolos gráficos para utilizar en la documentación técnica de productos.",
  "UNE 1135, Dibujos técnicos. Lista de elementos.",
  "UNE 1166-1, Documentación técnica de productos. Vocabulario. Parte 1: Términos relativos a los dibujos técnicos: generalidades y tipos de dibujo.",
  "UNE 50132, Documentación. Numeración de las divisiones y subdivisiones en los documentos escritos.",
  "UNE 82100-0 a UNE 82100-13, Magnitudes y unidades (espacio y tiempo, fenómenos periódicos, mecánica, calor, electricidad y magnetismo, luz y radiaciones electromagnéticas, química, física molecular, física atómica y nuclear, reacciones nucleares y radiaciones ionizantes, signos y símbolos matemáticos, números característicos, física del estado sólido).",
  "UNE-EN ISO 3098-0/2/3/4/5/6, Documentación técnica de productos. Escritura.",
  "UNE-EN ISO 5455, Dibujos técnicos. Escalas.",
  "UNE-EN ISO 5456-1/2/3, Dibujos técnicos. Métodos de proyección.",
  "UNE-EN ISO 5457, Documentación técnica de producto. Formatos y presentación de los elementos gráficos de las hojas de dibujo.",
  "UNE-EN ISO 6433, Dibujos técnicos. Referencia de los elementos.",
  "UNE-EN ISO 9000, Sistemas de gestión de la calidad. Fundamentos y vocabulario.",
  "UNE-EN ISO 10209-2, Documentación técnica de producto. Vocabulario. Parte 2: Términos relacionados con los métodos de proyección.",
  "UNE-EN ISO 11442-1/2/3, Documentación técnica de productos. Gestión de la información técnica asistida por ordenador."
];

/* ---------- 3 Definiciones ---------- */
const DEFINICIONES = [
  ["Anteproyecto o proyecto básico", "Conjunto de documentos que define las características generales de un producto, obra, edificio, instalación y servicio, sin entrar en el detalle de las características de cada uno de los elementos de que se compone."],
  ["Apartado", "Dentro de cada uno de los documentos de un proyecto, parte del texto precedida por un número de segundo o mayor nivel."],
  ["Autor del proyecto (autor / proyectista)", "Persona legalmente responsable del contenido total o parcial del proyecto."],
  ["Capítulo", "Dentro de cada uno de los documentos de un proyecto, parte del texto precedida por un número de primer nivel."],
  ["Dato de partida", "Cualquier cantidad, magnitud, característica, relación, parámetro, criterio, hipótesis o requisito empleado en los documentos técnicos del proyecto, externo a él y cuyo conocimiento y aplicación es necesario y obligatorio para su desarrollo."],
  ["Documento", "Información registrada que puede considerarse como una unidad en un proceso de documentación."],
  ["Estudios previos", "Investigaciones y análisis preliminares necesarios para establecer las diferentes alternativas de proyecto que permitan un ulterior desarrollo."],
  ["Número o código de identificación del documento", "Conjunto de caracteres alfanuméricos que identifican un documento; correspondencia unívoca entre el código y el documento."],
  ["Número o código de identificación del proyecto", "Conjunto de caracteres alfanuméricos que identifican un proyecto; correspondencia unívoca entre el código y el proyecto."],
  ["Proyecto administrativo", "Documento que forma parte o se constituye a partir de los contenidos de un proyecto y cuyo objeto es justificar los aspectos legales necesarios para obtener la autorización o registro por parte de la Administración."],
  ["Proyecto ejecutivo o constructivo (proyecto técnico)", "Conjunto de documentos, modelos o maquetas que tiene como objeto la definición y la valoración de las características de un producto, obra, edificio, instalación y servicio, y que se requieren en función de su fin o destino."]
];

/* ---------- Verificador de completitud ---------- */
const VERIF_BLOQUES = [
  { bloque: "Estructura documental", items: [
    "Título que identifique el proyecto de forma clara e inequívoca",
    "Índice (título y número de página de todos los documentos; índice por volumen si hay varios)",
    "Memoria",
    "Anexos",
    "Planos",
    "Pliego de condiciones",
    "Mediciones",
    "Presupuesto",
    "Encabezado inicial: organismo destinatario, promotor, emplazamiento/UTM, organización encargada (CIF, dirección, contacto), proyectista (titulación, colegio, ID, domicilio profesional)"
  ] },
  { bloque: "Requisitos generales de presentación", items: [
    "Título, código o referencia de identificación, tipo de documento, número de página, total de páginas y fecha en todas las páginas",
    "Título y número de volumen en cada volumen (si hay varios)",
    "Capítulos y apartados numerados según UNE 50132",
    "Lenguaje claro, preciso, coherente; acrónimos presentados la primera vez"
  ] },
  { bloque: "Memoria", items: [
    "1.1 Objeto", "1.2 Alcance", "1.3 Antecedentes",
    "1.4.1 Disposiciones legales y normas aplicadas", "1.4.2 Programas de cálculo", "1.4.3 Plan de gestión de la calidad", "1.4.4 Bibliografía", "1.4.5 Otras referencias",
    "1.5 Definiciones y abreviaturas", "1.6 Requisitos de diseño", "1.7 Análisis de soluciones", "1.8 Resultados finales", "1.9 Planificación", "1.10 Orden de prioridad entre los documentos"
  ] },
  { bloque: "Anexos", items: [
    "Índice de anexos (si volumen distinto)",
    "Documentación de partida",
    "Cálculos (hipótesis, criterios, procedimientos, resultados)",
    "Anexos por ámbito (seguridad, medio ambiente, eficiencia energética, emplazamiento/geotécnica/hidráulica, gestión de residuos, otros)",
    "Estudios con entidad propia (Estudio Básico/Estudio de Seguridad y Salud; Estudio de Impacto Ambiental)",
    "Otros documentos justificativos (catálogos, listados, soportes, maquetas)",
    "Justificación del cumplimiento de la normativa legal vigente aplicable y de las fórmulas"
  ] },
  { bloque: "Planos", items: [
    "Índice de planos con su ubicación",
    "Información gráfica, alfanumérica, de códigos y de escala en cada plano",
    "Representación según normas UNE/ISO citadas en 8.2"
  ] },
  { bloque: "Pliego de condiciones", items: [
    "Índice del pliego",
    "a) Descripción de las obras, productos, instalaciones o servicios",
    "b) Especificaciones de materiales y elementos (listado, calidades mínimas, pruebas y ensayos)",
    "c) Ejecución",
    "d) Reglamentación y normativa aplicables",
    "e) Aspectos del contrato (documentos base, limitaciones de suministro, criterios de medición/valoración/abono, modificaciones, pruebas, garantías)"
  ] },
  { bloque: "Mediciones y presupuesto", items: [
    "Mediciones: listado completo de partidas; unidades, características, modelos, tipos y dimensiones; sistema internacional de unidades; partida alzada donde proceda; base del presupuesto",
    "Presupuesto: índice; cuadro de precios unitarios; cuadro de precios unitarios de unidades de obra con descomposición; valoración global desglosada y ordenada según mediciones; alcance de los precios (gastos generales, beneficio industrial, impuestos, seguros, certificación/visado, permisos/licencias, otros)"
  ] }
];

/* ---------- Documentación mínima (checklist) ---------- */
const DOC_GRUPOS = [
  {
    grupo: "A. Estructura documental (4.1)",
    items: [
      "Título e identificación del proyecto",
      "Índice",
      "Memoria",
      "Anexos",
      "Planos",
      "Pliego de condiciones",
      "Mediciones",
      "Presupuesto",
      "Encabezado inicial (organismo, promotor, emplazamiento/UTM, organización encargada, proyectista)"
    ]
  },
  {
    grupo: "B. Memoria (6.2)",
    items: [
      "1.1 Objeto", "1.2 Alcance", "1.3 Antecedentes",
      "1.4 Normas y referencias (1.4.1 a 1.4.5)",
      "1.5 Definiciones y abreviaturas",
      "1.6 Requisitos de diseño",
      "1.7 Análisis de soluciones",
      "1.8 Resultados finales",
      "1.9 Planificación",
      "1.10 Orden de prioridad entre los documentos"
    ]
  },
  {
    grupo: "C. Anexos (7.2)",
    items: [
      "Índice de anexos (si volumen distinto)",
      "Documentación de partida",
      "Cálculos (hipótesis, criterios, procedimientos, resultados)",
      "Anexos por ámbito (seguridad, medio ambiente, eficiencia energética, emplazamiento, gestión de residuos, otros)",
      "Estudios con entidad propia (Seguridad y Salud; Impacto Ambiental)",
      "Otros documentos justificativos (catálogos, listados, soportes, maquetas)",
      "Justificación del cumplimiento de la normativa legal vigente"
    ]
  },
  {
    grupo: "D. Planos, pliego, mediciones y presupuesto (8 a 11)",
    items: [
      "Índice de planos y planos con información gráfica, alfanumérica, de códigos y escala",
      "Índice del pliego y contenido (a) a (e)",
      "Mediciones: listado completo de partidas, unidades, características y base del presupuesto",
      "Presupuesto: índice, cuadro de precios unitarios, cuadro de unidades de obra, valoración global, alcance de los precios"
    ]
  },
  {
    grupo: "E. Requisitos generales de presentación (4.2)",
    items: [
      "Título, código, tipo de documento, número de página, total de páginas y fecha en todas las páginas",
      "Título y número de volumen (si hay varios volúmenes)",
      "Capítulos y apartados numerados según UNE 50132",
      "Lenguaje claro, preciso y coherente; acrónimos presentados la primera vez"
    ]
  }
];

/* ---------- Normas ---------- */
const NORMAS = [
  { t: "UNE 157001:2014 — Criterios generales para la elaboración formal de los documentos que constituyen un proyecto técnico", u: "https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0052985" },
  { t: "UNE 157001:2002 — edición anterior (anulada y sustituida)", u: "https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0031147" },
  { t: "UNE 50132 — Documentación. Numeración de las divisiones y subdivisiones en los documentos escritos", u: "https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0033294" },
  { t: "UNE 82100 — Magnitudes y unidades (partes 0 a 13)", u: "https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0030308" },
  { t: "UNE-EN ISO 9000 — Sistemas de gestión de la calidad. Fundamentos y vocabulario", u: "https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0034858" }
];