# Asistente UNE 157001:2014

Herramienta web estática (HTML/CSS/JS, sin dependencias ni build) para la elaboración formal de los documentos que constituyen un proyecto técnico, conforme a la Norma UNE 157001:2014 (AENOR, junio 2014), que anula y sustituye a la UNE 157001:2002.

## Uso

- Abre `index.html` con doble clic en el navegador. No requiere instalación ni servidor.
- O activa GitHub Pages (Settings → Pages → Deploy from branch → `main` / root).

## Qué incluye

- **Estructura documental** (§ 4.1): los 7 documentos que constituyen el proyecto (Índice, Memoria, Anexos, Planos, Pliego de condiciones, Mediciones, Presupuesto), requisitos generales de presentación (§ 4.2) e información inicial que debe figurar en el proyecto.
- **Memoria** (§ 6): capítulos 1.1 a 1.10 con el contenido exigido, incluyendo 1.4 (normas y referencias) y 1.10 (orden de prioridad entre los documentos).
- **Anexos** (§ 7): documentación de partida, cálculos, anexos por ámbito, estudios con entidad propia (Seguridad y Salud, Impacto Ambiental), otros documentos justificativos y justificación normativa.
- **Planos** (§ 8): índice, información gráfica/alfanumérica/de códigos/de escala, y normas de representación aplicables (UNE 1027, 1032, 1035, 1039, 1089-1/2, 1135, 1166-1, UNE-EN ISO 3098, 5455, 5456-1/2/3, 5457, 6433, 10209-2, 11442-1/2/3/4, 81714-1).
- **Pliego de condiciones** (§ 9): apartados (a) a (e) y, en proyectos administrativos, suficiencia de las condiciones técnicas.
- **Mediciones y presupuesto** (§ 10 y § 11): unidades, sistema internacional, partida alzada, cuadros de precios unitarios y alcance de los precios.
- **Normas de consulta** (§ 2): listado de normas UNE y UNE-EN ISO referenciadas.
- **Definiciones** (§ 3): glosario de términos clave.
- **Verificador de completitud**: porcentaje por bloque y total, con elementos pendientes.
- **Documentación**: lista de control imprimible.

## Estructura

| Archivo | Contenido |
| --- | --- |
| `index.html` | Estructura y pestañas |
| `styles.css` | Estilos responsive e impresión |
| `data.js` | Contenido de la norma (documentos, memoria, anexos, planos, pliego, mediciones, presupuesto, normas, definiciones, verificador) |
| `engine.js` | Verificador de completitud |
| `app.js` | Interfaz, render y eventos |

## Aviso

Herramienta de apoyo técnico y didáctico. No sustituye a la norma UNE 157001:2014 ni a la interpretación del colegio profesional ni de la Administración competente. Verifica siempre la edición vigente de la norma y la legislación específica aplicable al proyecto.