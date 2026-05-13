export const chromiumFr = `# Ma première contribution à Chromium

*10 février 2026. Chrome 145 est sorti en version stable. Mon code a été déployé pour environ 1 milliard d'utilisateurs.*

## Qu'est-ce que Chromium ?

Chromium est le moteur open source qui propulse **80 % des navigateurs dans le monde** — Chrome, Edge, Brave, Opera, Samsung Internet...

C'est la mécanique invisible sous le capot de votre navigateur. Il détermine comment les sites s'affichent, comment ils chargent, et comment vos interactions sont mesurées. Y contribuer, c'est contribuer aux fondations du web moderne.

---

## Le bug

Chaque fois qu'un élément d'une page web bouge de façon inattendue — un bouton qui se déplace juste avant que vous cliquiez dessus, une publicité qui pousse le contenu vers le bas — Chrome le détecte. C'est ce qu'on appelle un **Layout Shift**, mesuré par la [Layout Instability API](https://wicg.github.io/layout-instability/).

Cette API dit aux développeurs : *"Quelque chose a bougé. Voilà où c'était, voilà où c'est allé."*

Le problème ? Ces coordonnées étaient reportées dans la **mauvaise unité**.

---

## CSS pixels vs device pixels

Les navigateurs disposent de deux systèmes de pixels :

**CSS pixels** — l'unité standard utilisée sur toute la plateforme web. Ce que retourne \`getBoundingClientRect()\`. Ce qu'utilisent \`IntersectionObserver\` et \`ResizeObserver\`. Le langage commun de toutes les APIs web.

**Device pixels** — les points physiques de votre écran. Sur un MacBook Retina ou un iPhone, il y a 2, 3, parfois 4 device pixels par CSS pixel.

La Layout Instability API utilisait les **device pixels**. Toutes les autres APIs utilisaient les **CSS pixels**. Sur les écrans haute résolution, les coordonnées étaient décalées de 2×, 3×, voire 4× — les outils de débogage affichaient les rectangles au mauvais endroit, avec la mauvaise taille.

Les développeurs obtenaient des données confuses et incohérentes. La correction était évidente. Elle n'avait simplement pas encore été faite.

![bug-visual](#)

---

## 11 mois

**25 février 2025** — J'ai ouvert l'[issue Chromium #399058544](https://issues.chromium.org/issues/399058544). Un simple rapport de bug. Je n'avais aucune idée de ce qui allait suivre.

**Juin 2025** — Premier patch. 2,3 millions de lignes de C++. Ajouter mon nom au fichier AUTHORS a eu l'effet de planter un drapeau sur la lune.

**7 juillet 2025** — Présentation au [WebPerf Working Group](https://www.youtube.com/watch?v=dv52b8LJyAs). Les éditeurs de navigateurs ont écouté. L'idée avait du mérite.

**9 octobre 2025** — [CL #6624567](https://chromium-review.googlesource.com/c/chromium/src/+/6624567) mergé. Premier code dans Chromium — après des mois de cycles de review, de try jobs en échec, et d'apprentissage de ce qu'est un Web Platform Test.

**Novembre–décembre 2025** — Le travail sur la spécification. [W3C PR #125](https://github.com/WICG/layout-instability/pull/125), [W3C PR #126](https://github.com/WICG/layout-instability/pull/126), [MDN PR #42145](https://github.com/mdn/content/pull/42145). Cinq portes de validation : Sécurité, Vie privée, Entreprise, Tests, Débogage. Trois approbations d'API owners.

**5 janvier 2026** — [CL #7261417](https://chromium-review.googlesource.com/c/chromium/src/+/7261417) mergé. Fonctionnalité promue en stable dans Chrome 145.

**10 février 2026** — Chrome 145 sorti en stable. Terminé.

---

## L'impact

La correction affecte tous les outils qui utilisent les données CLS (Cumulative Layout Shift) :

- **Chrome DevTools** — visualisation des layout shifts dans le panneau Performance
- **Lighthouse** — scoring CLS dans les audits de performance
- **PageSpeed Insights** — reporting CLS en données réelles
- **Chrome UX Report (CrUX)** — données de terrain provenant de millions de sites
- **WebPageTest, SpeedCurve, GTmetrix** — outils de performance tiers

Estimation conservatrice : **des centaines de millions à ~1 milliard d'utilisateurs** dont l'expérience web est analysée et optimisée via ces outils.

---

## Ce que j'ai appris

Contribuer à l'open source, ce n'est pas être la personne la plus expérimentée dans la pièce. C'est :

- **La patience.** 11 mois de l'issue jusqu'au déploiement.
- **La communauté.** Des reviewers qui vous guident à travers un processus que vous n'avez jamais vu.
- **La persévérance.** Des try jobs en échec, des retours flous, le syndrome de l'imposteur — et continuer malgré tout.
- **La documentation.** Écrire la spécification W3C et les docs MDN compte autant que le code lui-même.

Le web est construit par des personnes qui se sont présentées et ont trouvé comment faire.

---

![chromium-sketchnote](/assets/issues-with-physical-pixels.jpg)

*Le [fil Intent to Ship](https://groups.google.com/a/chromium.org/g/blink-dev/c/fMBXw2w6J7I) et la [page ChromeStatus](https://chromestatus.com/feature/5155103518228480) sont publics.*
`;
