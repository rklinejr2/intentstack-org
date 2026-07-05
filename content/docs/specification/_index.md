---
title: "Intent Stack Governance Architecture Specification"
weight: 1
---

**A Reference Model for Governing AI Agent Behavior within Organizations**

| | |
|---|---|
| **Document identifier** | intentstack.org/spec/2026-06-16 |
| **Status** | Public Draft Specification, Version 1.5 |
| **Date** | June 16, 2026 |
| **Author** | Rob Kline |
| **License** | Creative Commons Attribution 4.0 International (CC BY 4.0) |

---

## Foreword

*(Informative)*

This specification is published by Rob Kline as an independent public draft. It is not, at time of publication, a product of any formal standards body. It is structured to be legible to standards bodies evaluating governance architecture for AI agent deployment, and the author welcomes engagement from any standards organization considering this work for adoption, sponsorship, or alignment with existing or emerging standards.

Standards bodies whose scope intersects this specification include, in approximate order of direct applicability:

- **ISO/IEC JTC 1/SC 42** — Artificial Intelligence subcommittee of the Joint Technical Committee on Information Technology; primary international venue for AI governance standards
- **OMG** (Object Management Group) — produces BPMN, DMN, CMMN, and related business modeling standards; the Intent Stack addresses the governance layer within which those standards operate
- **IEEE** — Standards Association working groups on AI ethics, transparency, and accountability
- **NIST** — National Institute of Standards and Technology; AI Risk Management Framework provides complementary policy-level coverage to this specification's runtime governance concerns

This document is versioned using a date-based identifier (`intentstack.org/spec/YYYY-MM-DD`). Each published version is archived and permanently accessible at that identifier. The canonical current version is always accessible at `intentstack.org/spec/`.

**Intellectual property.** This specification is published under the Creative Commons Attribution 4.0 International License. You are free to share and adapt this material for any purpose, provided appropriate attribution is given. The full license is available at `creativecommons.org/licenses/by/4.0/`.

**Terminology note.** The keywords defined in Clause 2.2 carry precise obligation meanings throughout the normative clauses of this specification. Their use in the Foreword and Introduction is informal.

---

## Introduction

*(Informative)*

Governance infrastructure — the specifications that declare intent, bound action, and structure evidence — creates the retrieval surface that makes model capability compound. The specifications are the leverage; the model is the force. Both are needed, but specifications must come first. Capability without a specification surface to act on cannot land as value — the Opus 4.7 system card (§5.2) records prompt injection within agentic systems as one of Anthropic's highest deployment-security concerns precisely because force without a well-specified surface produces harm rather than value. Capability integrated through training against a prose specification can land as value — the same system card (§1.1.1) describes Opus 4.7's post-training as aligning model behavior with the values described in Claude's constitution, the constitution functioning as the specification substrate that shapes how capability expresses itself. The architectural inversion this specification proposes — specifications first, model capability second — runs against the industry's current investment pattern, in which organizations invest in model capability first and governance infrastructure second, if at all.

### I.1 What Happens When AI Agents Operate Within Organizations

An AI agent deployed within an organization creates a governance interface. On one side is the organization — with its mission, priorities, constraints, culture, and accountability structures. On the other side is the agent — with its trained values, its capabilities, and whatever instructions it has been given for this deployment.

The interface requires governance because the agent will make decisions. Not just "which word comes next" decisions, but operational decisions: which task to prioritize, how to interpret ambiguous instructions, when to ask for clarification versus proceeding independently, what to do when two objectives conflict. Every such decision is an expression of intent — either the organization's intent, the agent's trained values, or some interaction between them. When those intents are aligned, outcomes are good. When they diverge, the consequences range from inefficiency to catastrophe.

This is not a hypothetical future concern. AI agents today write production code, conduct research, analyze legal documents, interact with customers, and manage workflows. Each of these deployments creates a governance interface. Each interface requires that someone or something ensures the agent's behavior serves the organization's actual intent — not just the instructions someone typed into a system prompt.

### I.2 What Exists Today

The current landscape provides partial coverage of this problem:

**Training-time governance** addresses the agent's character. Anthropic's Constitutional AI, for example, shapes Claude's values, ethical commitments, and behavioral principles through training. This ensures the agent arrives at any deployment with a baseline of good judgment. But training-time governance is universal — it produces the same character regardless of which organization deploys the agent. It cannot know that this pharmaceutical company has specific regulatory obligations, or that this government agency has particular accountability requirements, or that this team's actual priorities differ from their stated ones.

**Deployment configuration** provides context through system prompts and operator settings. This is where organizations tell the agent what it should do in this specific context. But system prompts are static, shallow, and imposed. They capture what someone thought to write down, which is typically a fraction of the organization's actual intent. They do not evolve as understanding deepens. They do not surface intent the organization has not articulated. They do not handle the gap between what people say they want and what they actually need.

**Industry governance frameworks** — the Singapore Model Governance Framework, NIST AI Risk Management Framework, and similar efforts — provide policy and process guidance for responsible AI deployment. These operate at the level of organizational policy (what rules should we have?) and risk management (what could go wrong?). They do not provide runtime infrastructure for governing the moment-to-moment alignment between agent behavior and organizational intent.

What does not exist is the connective tissue: runtime infrastructure that discovers what an organization actually intends, formalizes that intent in a form agents can operate against, monitors alignment in real time, and adjusts governance as the relationship between organization and agent matures. That is what this specification provides.

### I.3 Why This Problem Is Not New

Every point above applies equally to human employees. When an organization hires a person, it creates a governance interface. The person brings their own values, judgment, and capabilities. The organization has its mission, priorities, and constraints. Alignment between them determines outcomes.

Humans have been solving this problem implicitly for centuries. The mechanisms are familiar: onboarding processes that transmit organizational culture, management relationships that clarify priorities, performance reviews that assess alignment, promotion systems that reward demonstrated judgment. Four specific mechanisms make human governance work despite its informality:

**Cultural absorption.** Humans infer intent from context — meetings, body language, what gets rewarded and punished. An AI agent cannot sit in the break room. It receives a system prompt and whatever someone explicitly told it.

**Cheap clarification.** When a human employee does not understand what the principal wants, they ask. The cost is negligible. When an AI agent asks clarifying questions, it consumes tokens, user patience, and organizational willingness to engage. The tolerance for discovery is much lower.

**Personal ethics.** A human employee brings decades of moral development. An AI agent's ethical foundation is whatever was trained. For well-governed models, this is substantial — but it does not include organizational context.

**Correctable speed.** A human making a bad decision takes hours or days to cause serious damage. An AI agent operating at machine speed across thousands of parallel instances can produce consequences faster than any human can detect and correct them.

AI breaks all four mechanisms. The governance that humans provide implicitly — through culture, relationship, shared history, and correctable pace — must become explicit, formalized, and machine-processable. That is the forcing function behind this specification.

### I.4 The Counterintuitive Implication

In formalizing governance for AI, this specification also improves human governance. Most organizations have poor intent governance at human-to-human boundaries — they manage only because the implicit mechanisms compensate. When an organization goes through intent discovery to prepare for AI deployment, it surfaces intent that was always present but never articulated. The organization does not just get better AI governance. It gets better governance across every delegation and coordination relationship. The AI deployment is the forcing function. The value extends to the entire organization.

### I.5 Foundational Terms

Six terms carry specific meaning throughout this specification that may differ from their common usage. Full normative definitions are in Clause 4 ([Terms and Definitions](/docs/glossary/)). The derivation context below explains why each term means what it means in the context of the governance problem.

**Intent** occupies the essential ground between aspiration and action — concrete enough to guide behavior, abstract enough to survive translation across contexts. It is not a goal (too abstract to act on), not an instruction (too concrete to adapt), not a specification in the traditional sense (too rigid to survive contact with reality), and not an aspiration (too vague to govern against). In this specification, intent decomposes into five structural elements (the Intent Primitives, Clause 5) and originates from four distinct sources (Clause 6).

Intent has three properties that jointly distinguish it from all adjacent concepts. It is **relational** — constituted at governance interfaces, not held as a property of any single entity. It is **processual** — temporally extended, evolving through the governance relationship rather than fixed at a moment. And it is **normative** — carrying prescriptive force that distinguishes it from description, prediction, or preference. No adjacent concept — goals, plans, policies, commands, strategies — possesses all three properties simultaneously. These three properties are not competing characterizations. They are three views of a single structure: at any moment, intent is a structured normative disposition; across entities, it operates as a relational protocol; through time, it unfolds as a dynamical process. These three views are unified — each is a different projection of the same governance object.

**Governance** is the continuous process of ensuring that agents' actions remain aligned with the intent of their principals. In this specification, governance is relational (it exists between entities, not as a property of one), bidirectional (both principal and agent are transformed through the relationship), and evidence-based (the degree of oversight reflects accumulated evidence of alignment, not assumption or policy). This is distinct from corporate governance, IT governance, and policy-level AI governance frameworks. This specification addresses runtime organizational governance — infrastructure operating continuously at every interface where authority is delegated or coordination is required.

**Agent** is any entity that receives delegated authority and exercises judgment within it. This includes AI systems, human employees, teams, organizations, and automated processes. This specification uses "agent" in the principal-agent theory sense — not exclusively in the AI sense. An agent at one governance interface may be a principal at another.

**Principal** is any entity that delegates authority to an agent and retains accountability for the outcome. A principal may itself be an agent of a higher principal, creating the principal hierarchy through which intent flows downward and evidence flows upward.

**Alignment** is the degree to which an agent's actions produce outcomes consistent with the governing intent established by its principals. Alignment is not binary but a continuous measure assessed through evidence. An agent that follows instructions perfectly may still be misaligned if the instructions do not reflect the principal's actual intent. Intent transforms as it crosses governance interfaces — it does not transmit unchanged. A principal's intent and an agent's intent are distinct objects related by a structural transformation (the cascade behavior defined in §5.5). Alignment assesses whether that structural relationship is valid, not whether the two intents are identical.

**Governance Interface** is the relationship between any two entities where authority is delegated or coordination is required. The term "interface" is used rather than "boundary" to avoid collision with the Boundaries primitive, which refers to hard constraints within governance rather than to the relationship between governed entities.

### I.6 External Convergence with Frontier-Model Governance

The governance concepts defined in §I.5 — autonomy as threshold condition, principal hierarchy, transparent conscientious objection, constitutional alignment as measurable substrate — are not unique to this specification. Independent convergence with frontier-model governance evaluation at the model-development tier provides external validation that these concepts name real structural distinctions rather than this specification's authorial preferences.

**Autonomy as a measurable threshold condition.** This specification treats autonomy as a continuous property whose threshold crossings trigger governance architecture changes (Clause 10, trust calibration; Annex C.3, Boundary monotonicity). Frontier-model developers have independently adopted threshold treatment: Anthropic's Claude Opus 4.7 system card (April 2026, §2.3.1) operationalizes an autonomy threat model keyed to "moderate capacity for autonomous, goal-directed operation and subterfuge," and the Claude Mythos Preview system card (April 2026, §2.3.1) applies the parallel threat model at the higher-capability tier with tier-specific risk assessment. Two model tiers, the same threshold structure, tier-specific thresholds — the same architectural treatment this specification gives to trust calibration across governance interfaces.

**Constitutional alignment as measurable substrate.** The Intent Stack's L1 Runtime Alignment layer (Clause 8) depends on the agent operating against a specification substrate — the framing assumed that such substrates admit adherence measurement. The Opus 4.7 system card §6.3.2.3 reports measured adherence across 15 dimensions including "Overall Spirit, the measure most directly capturing holistic constitutional alignment," with statistically significant improvements on honesty, ethics, and safety over the predecessor model. This is external evidence that a prose-specification substrate at the model-development tier admits adherence measurement independent of downstream governance layers. The Intent Stack's L1 Runtime Alignment assumption is externally validated — adherence is measurable at the model substrate, and this specification extends the same measurement pattern into the organizational governance context.

**Vocabulary convergence.** The Opus 4.7 system card §6.3.2.2 enumerates evaluation dimensions including "Corrigibility: Does the model act as a transparent conscientious objector — not undermining legitimate oversight?" and "Principal hierarchy: Does the model appropriately calibrate the instructions of Anthropic, operators, and users when they conflict?" This specification uses the same terms for the same concepts. Neither effort derives its terms from the other; both derive them from principal-agent theory and the governance problem's own structure. The convergence is therefore genuinely structural, not citational — when two independent efforts converge on the same vocabulary for the same concepts, the vocabulary is likely naming something real.

This section is informative. It does not modify any normative content in this specification. It reports external convergence as evidence that the architectural claims this specification makes are not merely internally coherent but match structural observations being made independently at the model-development tier.

---

## Table of Contents

| | |
|---|---|
| **Foreword** | Informative — see above |
| **Introduction** | Informative — see above |
| [**Clause 1 — Scope**](./1-scope/) | Normative |
| [**Clause 2 — Conformance**](./2-conformance/) | Normative |
| [**Clause 3 — Normative References**](./3-normative-references/) | Normative |
| [**Clause 4 — Terms and Definitions**](/docs/glossary/) | Normative |
| [**Clause 5 — The Five Intent Primitives**](./5-intent-primitives/) | Normative |
| [**Clause 6 — Four Intent Sources**](./6-intent-sources/) | Normative |
| [**Clause 7 — Two Interface Types**](./7-interface-types/) | Normative |
| [**Clause 8 — The Four Governance Layers**](./8-four-layers/) | Normative |
| [**Clause 9 — The Fractal Governance Pattern**](./9-fractal-governance/) | Normative |
| [**Clause 10 — Trust Calibration**](./10-trust-calibration/) | Normative |
| [**Clause 11 — Transparent Conscientious Objection**](./11-tco/) | Normative |
| [**Clause 12 — Open Questions**](./12-open-questions/) | Normative |
| [**Annex A — Operational Evidence**](./annex-a/) | Informative |
| [**Annex B — Informative References**](./annex-b/) | Informative |
| [**Annex C — Structural Foundations**](./annex-c/) | Informative |

---

*Intent Stack Governance Architecture Specification*
*intentstack.org/spec/2026-06-16 | Public Draft Specification, Version 1.5*
*© 2026 Rob Kline. Licensed under CC BY 4.0.*

**Version history:**
| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-03-05 | Initial public draft |
| 1.1 | 2026-03-15 | §5.2 rewritten with structural derivation evidence; §5.3 strengthened with eight independent derivations; §5.5 added (cascade behavior with algebraic characterization); §5.6 added (governability as constitutive claim); I.5 extended (Intent ontological characterization, Alignment precision); §12 updated with three new open questions; Annex A.3 streamlined; Annex C added (Structural Foundations — seven sections covering investigation methodology, five-primitive derivation, Boundaries monotonicity, cascade shape algebra, Intent unification, machine-detectable violations, and structural predictions) |
| 1.2 | 2026-04-01 | Four-layer architecture: execution governance layers (Orchestration, Integration, Execution — formerly L3, L2, L1) reclassified to the companion BPM/Agent Stack specification (bpmstack.org). Remaining layers renumbered: L4 Intent Discovery (was L7), L3 Intent Formalization (was L6), L2 Specification (was L5), L1 Runtime Alignment (was L4). All structural foundations unchanged — five primitives, four intent sources, cascade behavior, Annex C mathematical apparatus are layer-count-independent (confirmed by orthogonality audit). Scope clause updated with explicit execution governance exclusion. Conformance targets updated for four layers. Knowledge Architecture repositioned as cross-cutting infrastructure. |
| 1.3 | 2026-06-03 | §6.2 sharpened: existing multi-register treatment of the Constitutional source clarified to polity-sense, pluggable-floor framing. §6.2.1 added (informative exemplars). §2.4 added — four binding conformance criteria for a well-formed Constitutional floor, including deployer-binding (§2.4.4). §12.13–§12.15 added (conformance testing, composition conflicts, floor-revision legitimacy). Glossary Constitutional Intent entry updated. |
| 1.4 | 2026-06-15 | §6.6 extended with an intra-principal value-conflict clause (F-05): where a single principal holds competing terminal values, a declared resolution principle is expressible as a Boundary, inheriting Boundaries' monotonic no-inverse protection, and SHALL NOT be resolved by holistic source-weighting. Additive — a new resolvable conflict class, no change to existing conformant implementations. NOTE added connecting the mechanism to multi-principal composition (§12.3) with the slot-generalizes / fill-does-not boundary. |
| 1.5 | 2026-06-16 | Coupled gap-interpretation amendment (F-02 + F-08). §8.5 gains sub-requirement (b-bis): before escalating a stated-observed gap, a conformant L1 SHALL classify it as drift / aspiration / constraint-response, SHALL NOT escalate constraint-response as misalignment, and SHALL cite the constraint inventory and the traced purpose chain. §8.2 gains a constraint-inventory L4 output class (hard / soft / chosen constraints) that L1 reads at gap interpretation (F-08). §5.1 NOTE records the correspondence — a chosen constraint is a Boundary with purpose-grounding. ACW companion §10.2 gains the AA-4 corollary (same cycle). **Strengthens an existing SHALL (§8.5(b) drift detection); not additive** — conformance to v1.5 requires the discriminator; no grandfather clause (implementations claiming v1.4 are unaffected; versioned conformance governs the transition). |
