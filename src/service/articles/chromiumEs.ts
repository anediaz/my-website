export const chromiumEs = `# Mi primera contribución a Chromium

*10 de febrero de 2026. Chrome 145 llegó al público. Mi código se distribuyó a aproximadamente 1.000 millones de usuarios.*

## ¿Qué es Chromium?

Chromium es el motor de código abierto que impulsa el **80% de los navegadores del mundo** — Chrome, Edge, Brave, Opera, Samsung Internet...

Es la maquinaria invisible bajo el capó de tu navegador. Decide cómo se ven los sitios web, cómo cargan y cómo se miden tus interacciones. Contribuir a él significa contribuir a los cimientos de la web moderna.

---

## El bug

Cada vez que un elemento de una página web salta inesperadamente — un botón que se mueve justo antes de que lo pulses, un anuncio que empuja el artículo hacia abajo — Chrome lo detecta. Esto se llama **Layout Shift**, medido por la [Layout Instability API](https://wicg.github.io/layout-instability/).

Esta API le dice a los desarrolladores: *"Algo se movió. Aquí estaba, aquí fue."*

¿El problema? Esas coordenadas se reportaban en la **unidad incorrecta**.

---

## CSS pixels vs device pixels

Los navegadores tienen dos sistemas de píxeles:

**CSS pixels** — la unidad estándar utilizada en toda la plataforma web. Lo que devuelve \`getBoundingClientRect()\`. Lo que usan \`IntersectionObserver\` y \`ResizeObserver\`. El lenguaje común que habla toda API web.

**Device pixels** — los puntos físicos de tu pantalla. En un MacBook Retina o un iPhone, hay 2, 3 o hasta 4 device pixels por cada CSS pixel.

La Layout Instability API usaba **device pixels**. Todas las demás APIs usaban **CSS pixels**. En pantallas de alta resolución, las coordenadas estaban desfasadas por 2×, 3× o incluso 4× — las herramientas de depuración mostraban los rectángulos en la posición incorrecta, con el tamaño incorrecto.

Los desarrolladores recibían datos confusos e inconsistentes. La solución era obvia. Simplemente nadie la había implementado aún.

![bug-visual](#)

---

## 11 meses

**25 de febrero de 2025** — Abrí el [issue de Chromium #399058544](https://issues.chromium.org/issues/399058544). Un simple reporte de bug. No tenía ni idea de lo que vendría después.

**Junio de 2025** — Primer parche. 2,3 millones de líneas de C++. Añadir mi nombre al archivo AUTHORS se sintió como plantar una bandera en la luna.

**7 de julio de 2025** — Presenté en el [WebPerf Working Group](https://www.youtube.com/watch?v=dv52b8LJyAs). Los vendors de navegadores escucharon. La idea tenía mérito.

**9 de octubre de 2025** — [CL #6624567](https://chromium-review.googlesource.com/c/chromium/src/+/6624567) fusionado. Primer código en Chromium — tras meses de ciclos de revisión, try jobs fallando y aprender qué es un Web Platform Test.

**Noviembre–diciembre de 2025** — El trabajo de especificación. [W3C PR #125](https://github.com/WICG/layout-instability/pull/125), [W3C PR #126](https://github.com/WICG/layout-instability/pull/126), [MDN PR #42145](https://github.com/mdn/content/pull/42145). Cinco puertas de revisión: Seguridad, Privacidad, Empresa, Pruebas, Depurabilidad. Tres aprobaciones de API owners.

**5 de enero de 2026** — [CL #7261417](https://chromium-review.googlesource.com/c/chromium/src/+/7261417) fusionado. Funcionalidad promovida a estable en Chrome 145.

**10 de febrero de 2026** — Chrome 145 publicado. Hecho.

---

## El impacto

La corrección afecta a todas las herramientas que usan datos de CLS (Cumulative Layout Shift):

- **Chrome DevTools** — visualización de layout shifts en el panel de Rendimiento
- **Lighthouse** — puntuación CLS en auditorías de rendimiento
- **PageSpeed Insights** — reporte de CLS en datos reales
- **Chrome UX Report (CrUX)** — datos de campo de millones de sitios
- **WebPageTest, SpeedCurve, GTmetrix** — herramientas de rendimiento de terceros

Estimación conservadora: **cientos de millones hasta ~1.000 millones de usuarios** cuya experiencia web es analizada y optimizada a través de estas herramientas.

---

## Lo que aprendí

Contribuir al código abierto no es cuestión de ser la persona más experta de la sala. Es cuestión de:

- **Paciencia.** 11 meses desde el issue hasta el lanzamiento.
- **Comunidad.** Revisores que te guían a través de un proceso que nunca has visto.
- **Persistencia.** Try jobs fallando, feedback confuso, síndrome del impostor — y seguir adelante de todas formas.
- **Documentación.** Escribir la especificación W3C y los docs de MDN importa tanto como el código en sí.

La web la construyen personas que se presentaron y lo fueron descubriendo.

---

![chromium-sketchnote](/assets/issues-with-physical-pixels.jpg)

*El [hilo de Intent to Ship](https://groups.google.com/a/chromium.org/g/blink-dev/c/fMBXw2w6J7I) y la [página de ChromeStatus](https://chromestatus.com/feature/5155103518228480) son públicos.*
`;
