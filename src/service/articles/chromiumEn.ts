export const chromiumEn = `# My first contribution to Chromium

*February 10, 2026. Chrome 145 went live. My code shipped to roughly 1 billion users.*

## What is Chromium?

Chromium is the open-source engine powering **80% of the world's browsers** — Chrome, Edge, Brave, Opera, Samsung Internet...

Think of it as the invisible machinery under your browser's hood. It decides how websites look, how fast they load, and how your interactions are measured. Contributing to it means contributing to the foundation of the modern web.

---

## The bug

Every time a webpage element jumps unexpectedly — a button that moves right before you click it, an ad that pushes an article down — Chrome detects it. This is called a **Layout Shift**, measured by the [Layout Instability API](https://wicg.github.io/layout-instability/).

This API tells developers: *"Something moved. Here's where it was, here's where it went."*

The problem? Those coordinates were reported in the **wrong unit**.

---

## CSS pixels vs device pixels

Browsers have two pixel systems:

**CSS pixels** — the standard unit used across the entire web platform. What \`getBoundingClientRect()\` returns. What \`IntersectionObserver\` and \`ResizeObserver\` use. The common language every web API speaks.

**Device pixels** — the physical dots on your screen. On a MacBook Retina or iPhone, there are 2, 3, sometimes 4 device pixels per CSS pixel.

The Layout Instability API was using **device pixels**. Every other API used **CSS pixels**. On high-resolution screens, coordinates were off by 2×, 3×, or even 4× — debugging tools showed shift rectangles in the wrong position, the wrong size.

Developers were getting confusing, inconsistent data. The fix was obvious. It just hadn't been done yet.

![bug-visual](#)

---

## 11 months

**February 25, 2025** — I opened [Chromium issue #399058544](https://issues.chromium.org/issues/399058544). A simple bug report. I had no idea what would follow.

**June 2025** — First patch. 2.3 million lines of C++. Adding my name to the AUTHORS file felt like planting a flag on the moon.

**July 7, 2025** — Presented at the [WebPerf Working Group](https://www.youtube.com/watch?v=dv52b8LJyAs). Browser vendors listened. The idea had merit.

**October 9, 2025** — [CL #6624567](https://chromium-review.googlesource.com/c/chromium/src/+/6624567) merged. First code in Chromium — after months of review cycles, failing try jobs, and learning what a Web Platform Test even looks like.

**November–December 2025** — The spec work. [W3C PR #125](https://github.com/WICG/layout-instability/pull/125), [W3C PR #126](https://github.com/WICG/layout-instability/pull/126), [MDN PR #42145](https://github.com/mdn/content/pull/42145). Five review gates: Security, Privacy, Enterprise, Testing, Debuggability. Three API owner approvals.

**January 5, 2026** — [CL #7261417](https://chromium-review.googlesource.com/c/chromium/src/+/7261417) merged. Feature promoted to stable in Chrome 145.

**February 10, 2026** — Chrome 145 released. Done.

---

## The impact

The fix affects every tool that uses CLS (Cumulative Layout Shift) data:

- **Chrome DevTools** — layout shift visualization in the Performance panel
- **Lighthouse** — CLS scoring in performance audits
- **PageSpeed Insights** — real-world CLS reporting
- **Chrome UX Report (CrUX)** — field data from millions of sites
- **WebPageTest, SpeedCurve, GTmetrix** — third-party performance tooling

Conservative estimate: **hundreds of millions to ~1 billion users** whose web experience is analyzed and optimized through these tools.

---

## What I learned

Open source contribution isn't about being the most experienced person in the room. It's about:

- **Patience.** 11 months from issue to ship.
- **Community.** Reviewers who guide you through a process you've never seen before.
- **Persistence.** Failing try jobs, unclear feedback, impostor syndrome — and showing up anyway.
- **Documentation.** Writing the W3C spec and MDN docs matters as much as the code itself.

The web is built by people who showed up and figured it out.

---

![chromium-sketchnote](/assets/issues-with-physical-pixels.jpg)

*The full [Intent to Ship thread](https://groups.google.com/a/chromium.org/g/blink-dev/c/fMBXw2w6J7I) and [ChromeStatus feature page](https://chromestatus.com/feature/5155103518228480) are public.*
`;
