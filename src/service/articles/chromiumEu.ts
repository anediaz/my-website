export const chromiumEu = `# Nire lehen ekarpena Chromiumen

*2026ko otsailaren 10a. Chrome 145 kaleratua. Nire kodea 1.000 milioi erabiltzaileri banatua.*

## Zer da Chromium?

Chromium mundu osoko **nabigatzaileen %80 mugiarazten** duen kode irekiko motorra da — Chrome, Edge, Brave, Opera, Samsung Internet...

Zure nabigatzailearen azpiko makina ikusezina da. Webguneak nola ikusten diren, nola kargatzen diren eta zure interakzioak nola neurtzen diren erabakitzen du. Bertako ekarpena egitea web modernoaren oinarriei ekarpena egitea da.

---

## Bug-a

Web orrialde bateko elementu batek bat-batean salto egiten duen bakoitzean — klikatzerako unean mugitzen den botoi bat, edukia beherantz bultzatzen duen iragarki bat — Chrome-k detektatzen du. Honi **Layout Shift** deritzo, [Layout Instability API](https://wicg.github.io/layout-instability/)-k neurtua.

API honek garatzaileei esaten die: *"Zerbaitek mugitu du. Hemen zegoen, hara joan da."*

Arazoa? Koordenatu horiek **unitate okerrean** jakinarazten ziren.

---

## CSS pixels vs device pixels

Nabigatzaileek bi pixel sistema dituzte:

**CSS pixels** — web plataforma osoan erabiltzen den unitate estandarra. \`getBoundingClientRect()\`-k itzultzen duena. \`IntersectionObserver\` eta \`ResizeObserver\`-ek erabiltzen dutena. Web API guztiek hitz egiten duten hizkuntza komuna.

**Device pixels** — zure pantailako puntu fisikoak. MacBook Retina edo iPhone batean, CSS pixel bakoitzeko 2, 3, batzuetan 4 device pixel daude.

Layout Instability API-k **device pixels** erabiltzen zituen. Gainerako API guztiek **CSS pixels** erabiltzen zituzten. Bereizmen handiko pantailetan, koordenatuak 2×, 3× edo 4× okertuta zeuden — arazketa tresnek laukiak toki okerrean erakusten zituzten, tamaina okerrarekin.

Garatzaileek datu nahasgarriak eta ez-koherenteak jasotzen zituzten. Konponketa nabaria zen. Inork ez zuen egin oraindik.

![bug-visual](#)

---

## 11 hilabete

**2025eko otsailaren 25a** — [Chromium #399058544 arazoa](https://issues.chromium.org/issues/399058544) ireki nuen. Bug txosten sinple bat. Ez nuen ideiarik zer jarraituko zen.

**2025eko ekaina** — Lehen adabakia. C++-ko 2,3 milioi lerro. Nire izena AUTHORS fitxategian gehitzea ilargia gainean bandera bat landatzea bezala sentitu zen.

**2025eko uztailaren 7a** — [WebPerf Working Group](https://www.youtube.com/watch?v=dv52b8LJyAs)-ean aurkeztu nuen. Nabigatzaile saltzaileek entzun zuten. Ideiak meritua zuen.

**2025eko urriaren 9a** — [CL #6624567](https://chromium-review.googlesource.com/c/chromium/src/+/6624567) batua. Chromium-eko lehen kodea — hilabeteetako review zikloen ondoren, try job hutsegiteak eta Web Platform Test bat zer den ikasi ondoren.

**2025eko azaroa–abendua** — Zehaztapen lana. [W3C PR #125](https://github.com/WICG/layout-instability/pull/125), [W3C PR #126](https://github.com/WICG/layout-instability/pull/126), [MDN PR #42145](https://github.com/mdn/content/pull/42145). Bost berrikuste ate: Segurtasuna, Pribatutasuna, Enpresa, Probak, Arazketa. Hiru API owner onespen.

**2026ko urtarrilaren 5a** — [CL #7261417](https://chromium-review.googlesource.com/c/chromium/src/+/7261417) batua. Ezaugarria Chrome 145-en egonkor mailara igoa.

**2026ko otsailaren 10a** — Chrome 145 kaleratua. Egina.

---

## Eragina

Konponketak CLS (Cumulative Layout Shift) datuak erabiltzen dituzten tresna guztiei eragiten die:

- **Chrome DevTools** — Performance paneleko layout shift bistaratzea
- **Lighthouse** — errendimendu auditorietako CLS puntuazioa
- **PageSpeed Insights** — benetako datuekin CLS txostena
- **Chrome UX Report (CrUX)** — milioi bat guneetako landa datuak
- **WebPageTest, SpeedCurve, GTmetrix** — hirugarrenen errendimendu tresnak

Estimazio kontserbadorea: **ehunka milioi eta ~1.000 milioi erabiltzaile** artean, haien web esperientzia tresna hauen bidez analizatua eta optimizatua.

---

## Ikasi nuena

Kode irekiko ekarpenak egitea ez da gelan pertsona esperientziatuena izatea. Hauek dira:

- **Pazientzia.** 11 hilabete arazoaren irekieratik kaleratzera.
- **Komunitatea.** Inoiz ikusi ez duzun prozesu batean gidatzen zaituzten berrikusleak.
- **Iraunkortasuna.** Try job hutsegiteak, feedback nahasgarria, inpostorearen sindromea — eta hala ere aurrera egitea.
- **Dokumentazioa.** W3C zehaztapena eta MDN dokumentuak idaztea kodea bezain garrantzitsua da.

Weba aurkeztu eta nola egin jakiten joan ziren pertsonek eraiki dute.

---

![chromium-sketchnote](/assets/issues-with-physical-pixels.jpg)

*[Intent to Ship haria](https://groups.google.com/a/chromium.org/g/blink-dev/c/fMBXw2w6J7I) eta [ChromeStatus orria](https://chromestatus.com/feature/5155103518228480) publikoak dira.*
`;
