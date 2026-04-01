---
title: The Intent Stack
---

<style>
.landing-hero {
  max-width: 720px;
  margin: 0 auto 3rem;
}
.landing-hero h1 {
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}
.landing-subtitle {
  font-size: 1.15rem;
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.5;
}
.landing-gap {
  margin: 2.5rem 0;
  padding: 1.5rem 0;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}
.landing-gap p {
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0;
}
.landing-gap strong {
  font-weight: 600;
}
.landing-diagram {
  margin: 3rem auto;
  max-width: 900px;
}
.landing-diagram img {
  width: 100%;
  height: auto;
}
.landing-diagram figcaption {
  text-align: center;
  font-size: 0.85rem;
  color: #94a3b8;
  margin-top: 0.75rem;
}
.landing-audience {
  margin: 3rem 0 2rem;
}
.landing-audience h2 {
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #94a3b8;
  margin-bottom: 1rem;
}
.landing-audience ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.landing-audience li {
  font-size: 1rem;
  line-height: 1.6;
  padding: 0.35rem 0;
  color: #334155;
}
.landing-audience li span {
  font-weight: 600;
  color: #1e293b;
}
.landing-cta {
  display: flex;
  gap: 1rem;
  margin: 2.5rem 0;
  flex-wrap: wrap;
}
.landing-cta a {
  display: inline-block;
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.15s;
}
.landing-cta a:hover {
  opacity: 0.85;
}
.landing-cta-primary {
  background: #1e293b;
  color: #fff !important;
}
.landing-cta-secondary {
  border: 1.5px solid #cbd5e1;
  color: #334155 !important;
}
.landing-status {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

/* Dark mode */
:root.dark .landing-subtitle { color: #94a3b8; }
:root.dark .landing-gap { border-color: #334155; }
:root.dark .landing-audience h2 { color: #64748b; }
:root.dark .landing-audience li { color: #cbd5e1; }
:root.dark .landing-audience li span { color: #f1f5f9; }
:root.dark .landing-cta-primary { background: #f1f5f9; color: #0f172a !important; }
:root.dark .landing-cta-secondary { border-color: #475569; color: #cbd5e1 !important; }
:root.dark .landing-status { color: #64748b; border-color: #334155; }
[data-theme="dark"] .landing-subtitle { color: #94a3b8; }
[data-theme="dark"] .landing-gap { border-color: #334155; }
[data-theme="dark"] .landing-audience h2 { color: #64748b; }
[data-theme="dark"] .landing-audience li { color: #cbd5e1; }
[data-theme="dark"] .landing-audience li span { color: #f1f5f9; }
[data-theme="dark"] .landing-cta-primary { background: #f1f5f9; color: #0f172a !important; }
[data-theme="dark"] .landing-cta-secondary { border-color: #475569; color: #cbd5e1 !important; }
[data-theme="dark"] .landing-status { color: #64748b; border-color: #334155; }

/* Hide theme-generated page title — content has its own h1 */
#content > h1.hx\:text-center { display: none; }
</style>

<div class="landing-hero">

<h1>A reference model for governing AI agent behavior within organizations</h1>

<p class="landing-subtitle">Four layers of governance context. From intent discovery to runtime alignment. At every interface where authority is delegated or coordination is required.</p>

<div class="landing-gap">
<p>
BPMN standardizes process. DMN standardizes decisions. CMMN standardizes case management. No standard exists for governing the alignment between agent behavior and organizational intent at runtime. The gap is not in policy guidance — frameworks like NIST AI RMF address that. The gap is not in model-level alignment — Constitutional AI addresses that at training time. The gap is in <strong>runtime organizational governance</strong>: the infrastructure that discovers what an organization actually intends, formalizes that intent in a form agents can operate against, monitors alignment in real time, and adjusts governance as the relationship matures.
</p>
<p style="margin-top: 1rem;">
The Intent Stack covers <strong>governance context</strong> — from intent discovery through runtime alignment. The companion <a href="https://bpmstack.org">BPM/Agent Stack</a> specification covers <strong>execution governance</strong> — orchestration, integration, and execution of authorized work. Together, the two specifications address seven governance concerns across the full governance lifecycle.
</p>
</div>

</div>

<figure class="landing-diagram">
<img src="/images/reference-model.svg" alt="The Intent Stack — 4-Layer Reference Model showing layers from Intent Discovery (L4) through Runtime Alignment (L1), with Constitutional AI substrate beneath, intent flowing downward, evidence flowing upward, and the three-tier Knowledge Architecture spanning layers.">
<figcaption>The Intent Stack — 4-Layer Reference Model</figcaption>
</figure>

<div class="landing-hero">

<div class="landing-audience">
<h2>Who this is for</h2>
<ul>
<li><span>Standards bodies</span> — OMG, ISO, IEEE members evaluating governance architecture for AI agent deployment</li>
<li><span>BPM &amp; governance practitioners</span> — professionals extending process, decision, and case management governance to AI agent contexts</li>
<li><span>AI governance researchers</span> — studying runtime governance infrastructure for organizational AI deployment</li>
<li><span>Enterprise architects</span> — organizations deploying AI agents at scale who need standardized governance architecture</li>
</ul>
</div>

<div class="landing-cta">
<a href="/docs/specification/" class="landing-cta-primary">Read the Specification</a>
<a href="/engage/" class="landing-cta-secondary">Engage with the Work</a>
</div>

<p class="landing-status">Public Draft Specification, Version 1.2 — April 1, 2026. Subject to revision through operational evidence. Licensed under CC BY 4.0.</p>

</div>
