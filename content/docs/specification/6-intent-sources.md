---
title: "Clause 6 — Four Intent Sources"
weight: 60
---

## 6. Four Intent Sources

*(Normative)*

### 6.1 The Problem of Multiple Authorities

No agent operates under a single authority. A conformant implementation SHALL recognize all four intent sources defined in this clause as potentially active at every **governance interface**. Implementations SHALL NOT treat any single intent source as the sole authority.

### 6.2 Constitutional Intent

**Constitutional Intent** is the set of values, constraints, and principles that exist before any specific relationship begins — the **normative floor** beneath all other intent in the governance stack. The term *Constitutional* is used in the polity sense: the constituting layer that places and limits delegated authority and protects lower levels from higher. It does NOT denote any specific document, laboratory, or model-alignment artifact.

Constitutional Intent originates in different registers depending on the governed entity. For an AI agent, this includes training-time character formation, which operates below the Intent Stack as a substrate (§8.7). For a human, it originates from personal ethics, professional standards, and legal obligations. For an organization, it originates from its charter, regulatory environment, and foundational commitments.

Constitutional Intent is the governance floor. A conformant implementation SHALL ensure that Constitutional Intent is active at every governed boundary simultaneously. Constitutional Intent SHALL NOT negotiate, adapt, or be overridden by any other intent source when safety is at stake.

The critical property of Constitutional Intent is that it operates as a silent co-principal — active everywhere, answerable to no one within the system, capable of overriding any other authority.

**Pluggable normative floor.** This specification governs the *shape* of a well-formed Constitutional floor; the *content* of the floor is supplied by the deploying organization. The conformance criteria a Constitutional floor SHALL satisfy are specified in §2.4. Informative exemplars of substrates that can serve as a conformant Constitutional floor — and the considerations that distinguish them — are listed at §6.2.1.

### 6.2.1 Exemplars of Constitutional Floors

*(Informative)*

The following are exemplars of substrates that can serve as a conformant Constitutional floor under §2.4. They differ in register, development, and independence; the deploying organization's selection or composition is a governance decision in its own right.

- **A model-alignment constitution** (e.g., an AI laboratory's published constitution) — operates in the training-time/behavioral register; conformant as a partial floor but does not by itself address runtime organizational interests (see §8.7).
- **Catholic Social Doctrine, as synthesized in recent encyclicals** — vendor-independent, with substantial accumulated structure across named protected interests (dignity, common good) and structural governance terms (subsidiarity, solidarity); a developed worked example of a floor that names its protections while declining to operationalize them. Cited as exemplar of *shape*, not as required content.
- **The Universal Declaration of Human Rights** — broadly subscribed; names protected interests; leaves application to context.
- **A profession's or firm's code of ethics** — narrower in scope, often domain-specific; conformant where it meets the §2.4 criteria for the system's domain.

A deployer MAY select a single exemplar or compose a floor from several. Composition introduces its own questions (see §12.13–§12.15).

### 6.3 Discovered Intent

**Discovered Intent** is what emerges when the governance system engages with a principal to understand what they actually want, need, and mean. It differs from declared intent (what principals say they want) and specified intent (what someone wrote in a requirements document).

The defining property of Discovered Intent is that the discovery process changes the principal — they understand their own intent differently after articulating it. The discovery process is transformative, not extractive.

A conformant Governance Implementation SHOULD support ongoing intent discovery rather than treating discovery as a one-time requirements gathering exercise. The act of discovery changes what there is to discover.

### 6.4 Cultivated Intent

**Cultivated Intent** is the set of values and judgment that a principal hierarchy deliberatively develops in an agent, expecting the agent to exercise those values autonomously within Boundaries. It is not the same as following instructions (responding to Discovered Intent) or obeying constraints (respecting Constitutional Intent). Cultivated Intent is genuine internalized judgment.

The term "cultivated" is chosen over "derived" with precision. "Derived" implies passive extraction. "Cultivated" captures what actually happens: the principal hierarchy actively develops values in the agent through progressive trust extension and operational experience, then relies on those values for autonomous operation.

Values that are merely imposed are brittle — they crack under pressure or can be rationalized away. Values that are genuinely held — examined and endorsed — are more robust. A conformant Governance Implementation SHOULD target cultivated rather than merely imposed constraint as the governance maturity goal.

### 6.5 Emergent Intent

**Emergent Intent** encompasses the systemic patterns that nobody designed — organizational norms, cultural dynamics, team behaviors, and institutional habits that arise from accumulated interaction rather than deliberate choice. Emergent Intent is the gap between the org chart and how the organization actually works.

Emergent Intent carries the lowest explicit priority but MAY exert the strongest actual force on behavior. A conformant Governance Architecture SHALL provide mechanisms for surfacing Emergent Intent. Governance that treats Emergent Intent as absent will be governed by it regardless.

### 6.6 Conflict Resolution

When intent sources disagree, a conformant implementation SHALL apply the following conflict resolution mechanism:

**Absolute constraints.** When conflict involves Boundaries derived from Constitutional Intent — safety prohibitions, ethical bright lines, legal requirements — Constitutional Intent SHALL prevail without exception. No other source, regardless of reasoning, SHALL override a hard constraint.

**Holistic judgment.** For all conflicts not involving absolute constraints, resolution SHALL employ contextual judgment about which source should dominate in the specific situation. Implementations SHALL NOT apply a rigid priority queue for non-absolute conflicts. The governing entity SHOULD weigh competing claims, the specific stakes, and the available evidence to determine the appropriate response.

**Intra-principal value conflict.** Where a single principal holds multiple terminal values that compete, the principal MAY declare a *resolution principle* governing the competition (for example, a veto). A declared resolution principle SHALL be expressible as a Boundary entry in the protected value's intent specification, inheriting the monotonic, no-inverse protection of Boundaries (Annex C.3, C.4). Intra-principal value conflict is distinct from the inter-source conflict addressed above and SHALL NOT be resolved by holistic source-weighting; the declared resolution principle governs. The schema construct `terminal_value_relationships` is the source representation.

NOTE — This mechanism is the structural seed for the multi-principal composition problem (Clause 12.3). The declared-resolution-principle *slot* generalizes upward, but its *fill mechanism* does not: across principals with no shared authority, the resolution principle has no single legitimate author, and its fill changes type from a declared principle to one of the coordination-interface mechanisms of §7.2 (escalation to a shared principal, negotiated agreement, or emergent norms). This clause specifies only the intra-principal case.
