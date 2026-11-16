/* =========================================================================
   data.js — <strong>UNE 157001</strong>:2014
   Fuente: Norma <strong>UNE 157001</strong>:2014, AENOR, junio 2014 (15 páginas)
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
  ["Presupuesto", "Determina el <strong>coste económico</strong>, en <strong>unidades monetarias</strong>, de la <strong>ejecución material</strong> del objeto del proyecto."]
];

const REQ_GEN = [
  "En todas las páginas del proyecto debe figurar: el <strong>título, el código o referencia de identificación, el tipo de documento</strong> («Índice», «Memoria», «Anexos», etc.), el <strong>número de página, el número total de páginas y la fecha</strong>.",
  "Si el proyecto dispone de <strong>diversos volúmenes</strong>, en cada uno de ellos se debe incluir, además, su título y número de volumen.",
  "El proyecto debe ser redactado de forma clara, concisa, concreta y con suficiente amplitud y detalle para que queden determinados todos los aspectos que interesan al destinatario, sin necesidad de solicitar aclaraciones al autor.",
  "Lenguaje claro, preciso, libre de vaguedades y términos ambiguos, coherente con la terminología empleada en los distintos capítulos y apartados; mínima calidad literaria.",
  "La primera vez que se utilice un <strong>acrónimo o abreviatura</strong> en el texto se debe presentar entre paréntesis y a continuación de la palabra o texto completo al que reemplazará.",
  "El uso de la forma «debe» indica requisitos obligatorios; las sugerencias no obligatorias se expresan mediante el tiempo condicional o subjuntivo («debería»).",
  "Cada documento se estructura en capítulos y apartados numerados según <strong>UNE 50132</strong>.",
  "Cuando proceda, deben considerarse los requisitos relacionados con la <strong>propiedad intelectual</strong> del proyecto (autor o competencias de los colegios profesionales según la legislación vigente)."
];

const INFO_INI = [
  "El título y su <strong>código o referencia de identificación</strong>.",
  "El nombre del <strong>organismo u organismos</strong> a los que se dirige el proyecto.",
  "El nombre, apellidos y documento de identidad del <strong>promotor</strong> del proyecto (en nombre propio o en representación de otra persona física o jurídica, cuyos datos también deben figurar).",
  "Si el objeto contempla un <strong>emplazamiento geográfico concreto</strong>: dirección y población, y, si procede, <strong>coordenadas UTM</strong>.",
  "El nombre de la <strong>organización, razón social o persona jurídica</strong> que ha recibido el encargo de elaborar el proyecto, con CIF, dirección, teléfono, fax, correo electrónico u otro identificador profesional (salvo los cuya publicidad no sea legalmente procedente).",
  "El nombre y apellidos del <strong>proyectista</strong>, su <strong>titulación</strong> y, en su caso, <strong>colegio o entidad</strong> a la que pertenece, documento de identidad, domicilio profesional, teléfono, fax, correo electrónico u otro identificador profesional."
];

/* ---------- 6 Memoria ---------- */
const MEMORIA_CAPS = [
  { id: "1.1", titulo: "Objeto", texto: "Se debe indicar el <strong>objetivo del proyecto y su justificación</strong>." },
  { id: "1.2", titulo: "Alcance", texto: "Se debe indicar el <strong>ámbito de aplicación del proyecto</strong>." },
  { id: "1.3", titulo: "Antecedentes", texto: "Se deben indicar los <strong>condicionantes de partida</strong>: <strong>permisos o legalizaciones previas</strong>, <strong>ampliación, rehabilitación o reforma</strong>, <strong>cambio de actividad o uso</strong>, etc." },
  { id: "1.4", titulo: "Normas y referencias", texto: "Se deben relacionar <strong>únicamente los documentos citados</strong> en los distintos apartados de la memoria.", sub: [
    ["1.4.1 Disposiciones legales y normas aplicadas", "Referencias de las <strong>disposiciones legales (leyes, reglamentos, ordenanzas, normas de obligado cumplimiento por su inclusión en disposiciones legales)</strong> y de las <strong>normas que se deben tener en cuenta</strong> para la realización del proyecto."],
    ["1.4.2 Programas de cálculo", "Relación de <strong>programas, modelos u otras herramientas</strong> utilizadas para desarrollar los diversos <strong>cálculos</strong> del proyecto."],
    ["1.4.3 Plan de gestión de la calidad aplicado durante la redacción", "<strong>Procesos específicos</strong> utilizados para asegurar la calidad durante la realización del proyecto."],
    ["1.4.4 Bibliografía", "<strong>Libros, revistas u otros textos</strong> que el autor considere de interés para justificar las soluciones adoptadas."],
    ["1.4.5 Otras referencias", "<strong>Referencias no relacionadas</strong> en los apartados anteriores, de interés para la comprensión y materialización del proyecto."]
  ] },
  { id: "1.5", titulo: "Definiciones y abreviaturas", texto: "Se deben relacionar todas las <strong>definiciones, abreviaturas</strong>, etc. utilizadas y su significado." },
  { id: "1.6", titulo: "Requisitos de diseño", texto: "Se deben describir las <strong>bases y datos de partida</strong> que se derivan del <strong>cliente</strong>; del <strong>emplazamiento y su entorno socio-económico y ambiental</strong>; de los <strong>estudios realizados encaminados a la definición de la solución adoptada</strong>; y de las <strong>interfaces con otros sistemas o elementos externos</strong> al proyecto u otros que condicionan las soluciones técnicas." },
  { id: "1.7", titulo: "Análisis de soluciones", texto: "Se deben indicar las distintas <strong>alternativas estudiadas</strong>, qué caminos se han seguido para llegar a ellas, <strong>ventajas e inconvenientes</strong> de cada una y cuál es la <strong>solución finalmente elegida</strong>, junto con su <strong>justificación en función de la legislación</strong> y la <strong>reglamentación y normativa aplicables</strong>." },
  { id: "1.8", titulo: "Resultados finales", texto: "Se debe describir el <strong>producto, obra, edificio, instalación y servicio</strong> según la solución elegida, indicando cuáles son sus <strong>características definitorias</strong> y haciendo referencia a los <strong>planos y otros elementos del proyecto</strong> que lo definen." },
  { id: "1.9", titulo: "Planificación", texto: "En relación al proceso de materialización del proyecto, se deben definir las diferentes <strong>etapas, metas o hitos</strong> a alcanzar, <strong>plazos de entrega</strong> y <strong>cronogramas o gráficos de programación</strong> correspondientes." },
  { id: "1.10", titulo: "<strong>Orden de prioridad</strong> entre los documentos", texto: "El autor del proyecto, frente a posibles discrepancias, debe establecer el <strong>orden de prioridad</strong> de los documentos. Si no se especifica otra cosa, el <strong>orden de prioridad</strong> debe ser: <strong>1 Planos; 2 Pliego de condiciones; 3 Presupuesto; 4 Memoria</strong>. (En función del tipo de proyecto se debe adaptar el orden y los documentos según la legislación específica aplicable.)" }
];

/* ---------- 7 Anexos ---------- */
const ANEXOS_ITEMS = [
  ["<strong>Documentación de partida</strong>", "Documentos que se han tenido en cuenta para establecer los requisitos de diseño."],
  ["<strong>Cálculos</strong>", "Justifican las fórmulas aplicadas, las soluciones adoptadas y, conjuntamente con los planos y el pliego, describen de forma unívoca el objeto del proyecto. <strong>Hipótesis de partida, criterios y procedimientos de cálculo, resultados finales</strong> base del dimensionado o comprobación."],
  ["<strong>Anexos por ámbito del proyecto</strong>", "<strong>Seguridad (prevención de incendios, sanidad, radiaciones, pública concurrencia)</strong>; <strong>Medio ambiente (acústica, residuos, emisiones)</strong>; <strong>Eficiencia energética</strong>; <strong>Emplazamiento, geotécnicos, hidráulicos, hidrológicos, pluviométricos</strong>; <strong>Gestión de residuos</strong>; Otros."],
  ["<strong>Estudios con entidad propia</strong>", "Todos aquellos estudios que deban incluirse por exigencias legales: <strong>Estudio Básico de Seguridad y Salud</strong> o <strong>Estudio de Seguridad y Salud</strong>, según corresponda; <strong>Estudio de Impacto Ambiental</strong> (según la tipología prevista en la legislación vigente)."],
  ["Otros documentos justificativos", "<strong>Catálogos de los elementos constitutivos</strong> del objeto del proyecto; listados; información en soportes lógicos, magnéticos, ópticos o cualquier otro; maquetas o modelos; otros documentos que se juzguen necesarios."],
  ["Justificación normativa", "Cada anexo debe contener la <strong>justificación del cumplimiento de la normativa legal vigente</strong> aplicable y, si procede, de las fórmulas aplicadas para el cálculo."]
];

/* ---------- 8 Planos ---------- */
const PLANOS_ITEMS = [
  "El documento Planos debe iniciarse con un <strong>índice que haga referencia a cada uno de los planos</strong>, indicando su ubicación en el documento.",
  "Cada plano debe contener la <strong>información gráfica, alfanumérica, de códigos y de escala</strong> necesaria para su comprensión y correcta <strong>ejecución</strong> de lo representado.",
  "Principios generales de representación, cajetines, indicaciones, escritura, rotulación, acotación, símbolos gráficos, plegado, listas de elementos, escalas, métodos de proyección, formatos y presentación de los elementos gráficos y gestión de la información técnica asistida por ordenador: salvo indicación en contra del autor, según <strong>UNE 1027</strong>, <strong>UNE 1032</strong>, <strong>UNE 1035</strong>, <strong>UNE 1039</strong>, <strong>UNE 1089-1</strong>, <strong>UNE 1089-2</strong>, <strong>UNE 1135</strong>, <strong>UNE 1166-1</strong>, <strong>UNE-EN ISO 3098-0</strong>/2/3/4/5/6, <strong>UNE-EN ISO 5455</strong>, <strong>UNE-EN ISO 5456-1</strong>/2/3, <strong>UNE-EN ISO 5457</strong>, <strong>UNE-EN ISO 6433</strong>, <strong>UNE-EN ISO 10209-2</strong>, <strong>UNE-EN ISO 11442-1</strong>/2/3/4, <strong>UNE-EN ISO 81714-1</strong>."
];

/* ---------- 9 Pliego de condiciones ---------- */
const PLIEGO_ITEMS = [
  ["a) <strong>Descripción de las obras, productos, instalaciones o servicios</strong>", "Descripción del objeto del proyecto."],
  ["b) <strong>Especificaciones de los materiales y elementos constitutivos</strong>", "<strong>Listado completo</strong>; <strong>calidades mínimas</strong> a exigir (indicando la <strong>norma que contemple el material</strong>); <strong>pruebas y ensayos</strong> a que deben someterse (norma, <strong>condiciones de realización</strong>, <strong>resultados mínimos a obtener</strong>)."],
  ["c) <strong>Ejecución</strong> de las obras, productos, instalaciones o servicios", "Condiciones de <strong>ejecución</strong>."],
  ["d) <strong>Reglamentación y normativa aplicables</strong>", "Incluyendo las <strong>recomendaciones o normas de no obligado cumplimiento</strong> que se consideran de necesaria aplicación a criterio del autor."],
  ["e) <strong>Aspectos del contrato</strong> referidos directamente al proyecto", "<strong>Documentos base para la contratación</strong> (planos, mediciones, memoria, especificaciones); <strong>limitaciones en los suministros</strong> (dónde empieza y termina la responsabilidad de suministro y montaje); <strong>criterios de medición, valoración y abono</strong>; <strong>criterios para las modificaciones al proyecto original</strong> (procedimiento, aceptación, reflejo en la documentación final); <strong>pruebas y ensayos</strong> (cuáles y en qué condiciones); <strong>garantía de los suministros</strong> (alcance, duración, limitaciones); <strong>garantía de funcionamiento</strong> (alcance, duración, limitaciones)."]
];

/* ---------- 10 Mediciones ---------- */
const MEDICIONES_ITEMS = [
  "El documento Mediciones define y determina las unidades de cada partida o unidad de obra que configuran la totalidad del objeto del proyecto, basándose en la información contenida en el documento «Planos».",
  "Debe incluir el número de unidades y definir las características, modelos, tipos y dimensiones de cada partida de obra o elemento del objeto del proyecto.",
  "Preferentemente se debe utilizar el <strong>sistema internacional de unidades</strong> conforme a <strong>UNE 82100</strong> (partes 0 a 13).",
  "Se debe utilizar el concepto de <strong>partida alzada</strong> en aquellas unidades de obra en que no sea posible desglosar, de forma razonable, el detalle de las mismas.",
  "Si forma parte de un volumen distinto al principal, se debe iniciar con un índice.",
  "Debe contener un <strong>listado completo de las partidas de obra</strong> que configuran la totalidad del proyecto, subdividido en apartados o subapartados correspondientes a las partes más significativas del objeto del proyecto.",
  "Debe servir de <strong>base para la realización del Presupuesto</strong>."
];

/* ---------- 11 Presupuesto ---------- */
const PRESUPUESTO_ITEMS = [
  "El Presupuesto determina el <strong>coste económico</strong>, en <strong>unidades monetarias</strong>, de la <strong>ejecución material</strong> del objeto del proyecto, especificando las partidas ejecutadas por <strong>contrata y/o por administración</strong>.",
  "Se debe basar en el documento de Mediciones y seguir su misma ordenación.",
  "En los proyectos administrativos es suficiente un resumen de las partidas más importantes (obras, cada una de las instalaciones, mobiliario y maquinaria, medidas correctoras, prevención de incendios, etc.).",
  "El Presupuesto se debe iniciar con un índice que haga referencia a cada uno de los documentos, capítulos y apartados que lo componen.",
  "Debe contener: un <strong>cuadro de precios unitarios</strong> de materiales, mano de obra y elementos auxiliares que componen las partidas o unidades de obra; un <strong>cuadro de precios unitarios</strong> de las unidades de obra, de acuerdo con el documento de mediciones y con la descomposición correspondiente de materiales, mano de obra, elementos auxiliares y costes indirectos; el presupuesto propiamente dicho con la valoración económica global, desglosada y ordenada según el documento de mediciones.",
  "Debe establecer el alcance de los precios, indicando claramente si incluyen o no: <strong>gastos generales y beneficio industrial</strong>; <strong>impuestos, tasas y otras contribuciones</strong>; <strong>seguros</strong>; <strong>costes de certificación y visado</strong>; <strong>permisos y licencias</strong>; cualquier otro concepto que influya en el coste final de materialización del objeto del proyecto."
];

/* ---------- 2 Normas para consulta ---------- */
const NORMAS_CONSULTA = [
  { t: "<strong>UNE 1027</strong> — Dibujos técnicos. Plegado de planos", u: "https://www.google.com/search?q=UNE+1027+dibujos+t%C3%A9cnicos+plegado+planos" },
  { t: "<strong>UNE 1032</strong> — Dibujos técnicos. Principios generales de representación", u: "https://www.google.com/search?q=UNE+1032+dibujos+t%C3%A9cnicos+principios+generales+representaci%C3%B3n" },
  { t: "<strong>UNE 1035</strong> — Dibujos técnicos. Cuadro de rotulación", u: "https://www.google.com/search?q=UNE+1035+dibujos+t%C3%A9cnicos+cuadro+rotulaci%C3%B3n" },
  { t: "<strong>UNE 1039</strong> — Dibujos técnicos. Acotación. Principios generales, definiciones, métodos de <strong>ejecución</strong> e indicaciones especiales", u: "https://www.google.com/search?q=UNE+1039+dibujos+t%C3%A9cnicos+acotaci%C3%B3n" },
  { t: "<strong>UNE 1089-1</strong> — Principios generales para la creación de símbolos gráficos. Parte 1: Símbolos gráficos colocados sobre equipos", u: "https://www.google.com/search?q=UNE+1089-1+s%C3%ADmbolos+gr%C3%A1ficos" },
  { t: "<strong>UNE 1089-2</strong> — Principios generales para la creación de símbolos gráficos. Parte 2: Símbolos gráficos para utilizar en la documentación técnica de productos", u: "https://www.google.com/search?q=UNE+1089-2+s%C3%ADmbolos+gr%C3%A1ficos+documentaci%C3%B3n+t%C3%A9cnica" },
  { t: "<strong>UNE 1135</strong> — Dibujos técnicos. Lista de elementos", u: "https://www.google.com/search?q=UNE+1135+dibujos+t%C3%A9cnicos+lista+elementos" },
  { t: "<strong>UNE 1166-1</strong> — Documentación técnica de productos. Vocabulario. Parte 1: Términos relativos a los dibujos técnicos: generalidades y tipos de dibujo", u: "https://www.google.com/search?q=UNE+1166-1+documentaci%C3%B3n+t%C3%A9cnica+productos+vocabulario" },
  { t: "<strong>UNE 50132</strong> — Documentación. Numeración de las divisiones y subdivisiones en los documentos escritos", u: "https://www.google.com/search?q=UNE+50132+numeraci%C3%B3n+divisiones+subdivisiones+documentos" },
  { t: "<strong>UNE 82100</strong> (partes 0 a 13) — Magnitudes y unidades", u: "https://www.google.com/search?q=UNE+82100+magnitudes+unidades" },
  { t: "<strong>UNE-EN ISO 3098</strong> (partes 0, 2, 3, 4, 5, 6) — Documentación técnica de productos. Escritura", u: "https://www.google.com/search?q=UNE-EN+ISO+3098+documentaci%C3%B3n+t%C3%A9cnica+escritura" },
  { t: "<strong>UNE-EN ISO 5455</strong> — Dibujos técnicos. Escalas", u: "https://www.google.com/search?q=UNE-EN+ISO+5455+dibujos+t%C3%A9cnicos+escalas" },
  { t: "<strong>UNE-EN ISO 5456</strong> (partes 1, 2, 3) — Dibujos técnicos. Métodos de proyección", u: "https://www.google.com/search?q=UNE-EN+ISO+5456+dibujos+t%C3%A9cnicos+m%C3%A9todos+proyecci%C3%B3n" },
  { t: "<strong>UNE-EN ISO 5457</strong> — Documentación técnica de producto. Formatos y presentación de los elementos gráficos de las hojas de dibujo", u: "https://www.google.com/search?q=UNE-EN+ISO+5457+formatos+hojas+dibujo" },
  { t: "<strong>UNE-EN ISO 6433</strong> — Dibujos técnicos. Referencia de los elementos", u: "https://www.google.com/search?q=UNE-EN+ISO+6433+dibujos+t%C3%A9cnicos+referencia+elementos" },
  { t: "<strong>UNE-EN ISO 9000</strong> — Sistemas de gestión de la calidad. Fundamentos y vocabulario", u: "https://www.google.com/search?q=UNE-EN+ISO+9000+sistemas+gesti%C3%B3n+calidad+fundamentos+vocabulario" },
  { t: "<strong>UNE-EN ISO 10209-2</strong> — Documentación técnica de producto. Vocabulario. Parte 2: Términos relacionados con los métodos de proyección", u: "https://www.google.com/search?q=UNE-EN+ISO+10209-2+documentaci%C3%B3n+t%C3%A9cnica+vocabulario" },
  { t: "<strong>UNE-EN ISO 11442</strong> (partes 1, 2, 3) — Documentación técnica de productos. Gestión de la información técnica asistida por ordenador", u: "https://www.google.com/search?q=UNE-EN+ISO+11442+documentaci%C3%B3n+t%C3%A9cnica+informaci%C3%B3n+asistida+ordenador" }
];

/* ---------- 3 Definiciones ---------- */
const DEFINICIONES = [
  ["Anteproyecto o proyecto básico", "Conjunto de documentos que define las características generales de un <strong>producto, obra, edificio, instalación y servicio</strong>, sin entrar en el detalle de las características de cada uno de los elementos de que se compone."],
  ["Apartado", "Dentro de cada uno de los documentos de un proyecto, parte del texto precedida por un número de segundo o mayor nivel."],
  ["Autor del proyecto (autor / <strong>proyectista</strong>)", "Persona legalmente responsable del contenido total o parcial del proyecto."],
  ["Capítulo", "Dentro de cada uno de los documentos de un proyecto, parte del texto precedida por un número de primer nivel."],
  ["Dato de partida", "Cualquier cantidad, magnitud, característica, relación, parámetro, criterio, hipótesis o requisito empleado en los documentos técnicos del proyecto, externo a él y cuyo conocimiento y aplicación es necesario y obligatorio para su desarrollo."],
  ["Documento", "Información registrada que puede considerarse como una unidad en un proceso de documentación."],
  ["Estudios previos", "Investigaciones y análisis preliminares necesarios para establecer las diferentes alternativas de proyecto que permitan un ulterior desarrollo."],
  ["Número o código de identificación del documento", "Conjunto de caracteres alfanuméricos que identifican un documento; correspondencia unívoca entre el código y el documento."],
  ["Número o código de identificación del proyecto", "Conjunto de caracteres alfanuméricos que identifican un proyecto; correspondencia unívoca entre el código y el proyecto."],
  ["Proyecto administrativo", "Documento que forma parte o se constituye a partir de los contenidos de un proyecto y cuyo objeto es justificar los aspectos legales necesarios para obtener la autorización o registro por parte de la Administración."],
  ["Proyecto ejecutivo o constructivo (proyecto técnico)", "Conjunto de documentos, modelos o maquetas que tiene como objeto la definición y la valoración de las características de un <strong>producto, obra, edificio, instalación y servicio</strong>, y que se requieren en función de su fin o destino."]
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
    "Encabezado inicial: organismo destinatario, <strong>promotor</strong>, emplazamiento/UTM, organización encargada (CIF, dirección, contacto), <strong>proyectista</strong> (<strong>titulación</strong>, colegio, ID, domicilio profesional)"
  ] },
  { bloque: "Requisitos generales de presentación", items: [
    "Título, <strong>código o referencia de identificación</strong>, tipo de documento, número de página, total de páginas y fecha en todas las páginas",
    "Título y número de volumen en cada volumen (si hay varios)",
    "Capítulos y apartados numerados según <strong>UNE 50132</strong>",
    "Lenguaje claro, preciso, coherente; acrónimos presentados la primera vez"
  ] },
  { bloque: "Memoria", items: [
    "1.1 Objeto", "1.2 Alcance", "1.3 Antecedentes",
    "1.4.1 Disposiciones legales y normas aplicadas", "1.4.2 Programas de cálculo", "1.4.3 Plan de gestión de la calidad", "1.4.4 Bibliografía", "1.4.5 Otras referencias",
    "1.5 Definiciones y abreviaturas", "1.6 Requisitos de diseño", "1.7 Análisis de soluciones", "1.8 Resultados finales", "1.9 Planificación", "1.10 <strong>Orden de prioridad</strong> entre los documentos"
  ] },
  { bloque: "Anexos", items: [
    "Índice de anexos (si volumen distinto)",
    "<strong>Documentación de partida</strong>",
    "<strong>Cálculos</strong> (hipótesis, criterios, procedimientos, resultados)",
    "Anexos por ámbito (seguridad, medio ambiente, <strong>eficiencia energética</strong>, emplazamiento/geotécnica/hidráulica, <strong>gestión de residuos</strong>, otros)",
    "<strong>Estudios con entidad propia</strong> (Estudio Básico/<strong>Estudio de Seguridad y Salud</strong>; <strong>Estudio de Impacto Ambiental</strong>)",
    "Otros documentos justificativos (catálogos, listados, soportes, maquetas)",
    "<strong>Justificación del cumplimiento de la normativa legal vigente</strong> aplicable y de las fórmulas"
  ] },
  { bloque: "Planos", items: [
    "Índice de planos con su ubicación",
    "<strong>Información gráfica, alfanumérica, de códigos y de escala</strong> en cada plano",
    "Representación según normas UNE/ISO citadas en 8.2"
  ] },
  { bloque: "Pliego de condiciones", items: [
    "Índice del pliego",
    "a) <strong>Descripción de las obras, productos, instalaciones o servicios</strong>",
    "b) Especificaciones de materiales y elementos (listado, <strong>calidades mínimas</strong>, <strong>pruebas y ensayos</strong>)",
    "c) <strong>Ejecución</strong>",
    "d) <strong>Reglamentación y normativa aplicables</strong>",
    "e) <strong>Aspectos del contrato</strong> (documentos base, limitaciones de suministro, criterios de medición/valoración/abono, modificaciones, pruebas, garantías)"
  ] },
  { bloque: "Mediciones y presupuesto", items: [
    "Mediciones: <strong>listado completo</strong> de partidas; unidades, características, modelos, tipos y dimensiones; <strong>sistema internacional de unidades</strong>; <strong>partida alzada</strong> donde proceda; base del presupuesto",
    "Presupuesto: índice; <strong>cuadro de precios unitarios</strong>; <strong>cuadro de precios unitarios</strong> de unidades de obra con descomposición; valoración global desglosada y ordenada según mediciones; alcance de los precios (gastos generales, beneficio industrial, impuestos, <strong>seguros</strong>, certificación/visado, permisos/licencias, otros)"
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
      "Encabezado inicial (organismo, <strong>promotor</strong>, emplazamiento/UTM, organización encargada, <strong>proyectista</strong>)"
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
      "1.10 <strong>Orden de prioridad</strong> entre los documentos"
    ]
  },
  {
    grupo: "C. Anexos (7.2)",
    items: [
      "Índice de anexos (si volumen distinto)",
      "<strong>Documentación de partida</strong>",
      "<strong>Cálculos</strong> (hipótesis, criterios, procedimientos, resultados)",
      "Anexos por ámbito (seguridad, medio ambiente, <strong>eficiencia energética</strong>, emplazamiento, <strong>gestión de residuos</strong>, otros)",
      "<strong>Estudios con entidad propia</strong> (Seguridad y Salud; Impacto Ambiental)",
      "Otros documentos justificativos (catálogos, listados, soportes, maquetas)",
      "<strong>Justificación del cumplimiento de la normativa legal vigente</strong>"
    ]
  },
  {
    grupo: "D. Planos, pliego, mediciones y presupuesto (8 a 11)",
    items: [
      "Índice de planos y planos con información gráfica, alfanumérica, de códigos y escala",
      "Índice del pliego y contenido (a) a (e)",
      "Mediciones: <strong>listado completo</strong> de partidas, unidades, características y base del presupuesto",
      "Presupuesto: índice, <strong>cuadro de precios unitarios</strong>, cuadro de unidades de obra, valoración global, alcance de los precios"
    ]
  },
  {
    grupo: "E. Requisitos generales de presentación (4.2)",
    items: [
      "Título, código, tipo de documento, número de página, total de páginas y fecha en todas las páginas",
      "Título y número de volumen (si hay varios volúmenes)",
      "Capítulos y apartados numerados según <strong>UNE 50132</strong>",
      "Lenguaje claro, preciso y coherente; acrónimos presentados la primera vez"
    ]
  }
];

/* ---------- Normas ---------- */
const NORMAS = [
  { t: "<strong>UNE 157001</strong>:2014 — Criterios generales para la elaboración formal de los documentos que constituyen un proyecto técnico", u: "https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0052985" },
  { t: "<strong>UNE 157001</strong>:2002 — edición anterior (anulada y sustituida)", u: "https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0031147" },
  { t: "<strong>UNE 50132</strong> — Documentación. Numeración de las divisiones y subdivisiones en los documentos escritos", u: "https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0033294" },
  { t: "<strong>UNE 82100</strong> — Magnitudes y unidades (partes 0 a 13)", u: "https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0030308" },
  { t: "<strong>UNE-EN ISO 9000</strong> — Sistemas de gestión de la calidad. Fundamentos y vocabulario", u: "https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0034858" }
];