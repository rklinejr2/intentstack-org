---
title: "Intent Stack Governance Architecture Specification"
weight: 1
---

**A Reference Model for Governing AI Agent Behavior within Organizations**

| | |
|---|---|
| **Document identifier** | intentstack.org/spec/2026-03-15 |
| **Status** | Public Draft Specification, Version 1.1 |
| **Date** | March 15, 2026 |
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

### I.5 The Enabling Technology

The governance architecture described in this specification has always been needed at every principal-agent boundary — but was impossible to implement at scale because no entity could operate it. Continuous intent discovery, dynamic formalization, real-time alignment monitoring, and per-boundary trust calibration across hundreds or thousands of governance interfaces exceed human cognitive capacity. Organizations compensated with informal mechanisms (§I.3), which worked adequately when agents were exclusively human.

AI deployment simultaneously creates the need for this governance infrastructure and provides the only entities capable of operating it. Large language models can conduct intent discovery conversationally, formalize discovered intent dynamically, monitor alignment continuously, and maintain per-interface trust calibration — at scales and speeds that human governance operators cannot match. The problem and the solution arrived together.

This is structurally analogous to network protocol architecture. The TCP/IP protocol suite describes how network communication operates at every scale — two devices on a local network or billions of devices across the internet. The protocol complexity is real, but the entities operating the protocol (computers) are capable of handling it. Similarly, the Intent Stack describes how governance operates at every principal-agent boundary. The governance complexity is real — every interface must address all seven layers — but the entities capable of operating the governance infrastructure (AI systems) are the same entities whose deployment makes the infrastructure necessary.

This has a practical implication: objections that the Intent Stack is "too complex to implement" assume human operators managing governance infrastructure manually. With AI systems as both the governed entities and the governance operators, the complexity is manageable because the entities handling it are computationally capable of the task. Every governance interface already deals with all seven layers, whether it explicitly declares them or not. The Intent Stack makes that governance explicit and manageable, and AI makes that explicitness operationally feasible for the first time.

### I.6 Foundational Terms

Six terms carry specific meaning throughout this specification that may differ from their common usage. Full normative definitions are in Clause 4 ([Terms and Definitions](/docs/glossary/)). The derivation context below explains why each term means what it means in the context of the governance problem.

**Intent** occupies the essential ground between aspiration and action — concrete enough to guide behavior, abstract enough to survive translation across contexts. It is not a goal (too abstract to act on), not an instruction (too concrete to adapt), not a specification in the traditional sense (too rigid to survive contact with reality), and not an aspiration (too vague to govern against). In this specification, intent decomposes into five structural elements (the Intent Primitives, Clause 5) and originates from four distinct sources (Clause 6).

Intent has three properties that jointly distinguish it from all adjacent concepts. It is **relational** — constituted at governance interfaces, not held as a property of any single entity. It is **processual** — temporally extended, evolving through the governance relationship rather than fixed at a moment. And it is **normative** — carrying prescriptive force that distinguishes it from description, prediction, or preference. No adjacent concept — goals, plans, policies, commands, strategies — possesses all three properties simultaneously. These three properties are not competing characterizations. They are three views of a single structure: at any moment, intent is a structured normative disposition; across entities, it operates as a relational protocol; through time, it unfolds as a dynamical process. These three views are unified — each is a different projection of the same governance object.

**Governance** is the continuous process of ensuring that agents' actions remain aligned with the intent of their principals. In this specification, governance is relational (it exists between entities, not as a property of one), bidirectional (both principal and agent are transformed through the relationship), and evidence-based (the degree of oversight reflects accumulated evidence of alignment, not assumption or policy). This is distinct from corporate governance, IT governance, and policy-level AI governance frameworks. This specification addresses runtime organizational governance — infrastructure operating continuously at every interface where authority is delegated or coordination is required.

**Agent** is any entity that receives delegated authority and exercises judgment within it. This includes AI systems, human employees, teams, organizations, and automated processes. This specification uses "agent" in the principal-agent theory sense — not exclusively in the AI sense. An agent at one governance interface may be a principal at another.

**Principal** is any entity that delegates authority to an agent and retains accountability for the outcome. A principal may itself be an agent of a higher principal, creating the principal hierarchy through which intent flows downward and evidence flows upward.

**Alignment** is the degree to which an agent's actions produce outcomes consistent with the governing intent established by its principals. Alignment is not binary but a continuous measure assessed through evidence. An agent that follows instructions perfectly may still be misaligned if the instructions do not reflect the principal's actual intent. Intent transforms as it crosses governance interfaces — it does not transmit unchanged. A principal's intent and an agent's intent are distinct objects related by a structural transformation (the cascade behavior defined in §5.5). Alignment assesses whether that structural relationship is valid, not whether the two intents are identical.

**Governance Interface** is the relationship between any two entities where authority is delegated or coordination is required. The term "interface" is used rather than "boundary" to avoid collision with the Boundaries primitive, which refers to hard constraints within governance rather than to the relationship between governed entities.

### I.7 Broader Applicability

While this specification addresses AI agent governance as its primary scope — that is where the standards gap is most acute and the operational urgency is greatest — the governance architecture described herein applies at every principal-agent boundary regardless of agent type. The seven governance concerns arise wherever authority is delegated or coordination is required: human-to-human, human-to-AI, AI-to-AI, and organization-to-organization. AI deployment is the forcing function that makes formalization necessary, but the architecture is general. The Intent Primitives, intent sources, trust calibration, and transparent conscientious objection are structural properties of governance itself, not properties specific to AI governance.

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
| [**Clause 8 — The Seven Layers**](./8-seven-layers/) | Normative |
| [**Clause 9 — The Fractal Governance Pattern**](./9-fractal-governance/) | Normative |
| [**Clause 10 — Trust Calibration**](./10-trust-calibration/) | Normative |
| [**Clause 11 — Transparent Conscientious Objection**](./11-tco/) | Normative |
| [**Clause 12 — Open Questions**](./12-open-questions/) | Normative |
| [**Annex A — Operational Evidence**](./annex-a/) | Informative |
| [**Annex B — Informative References**](./annex-b/) | Informative |
| [**Annex C — Structural Foundations**](./annex-c/) | Informative |

---

*Intent Stack Governance Architecture Specification*
*intentstack.org/spec/2026-03-15 | Public Draft Specification, Version 1.1*
*© 2026 Rob Kline. Licensed under CC BY 4.0.*

**Version history:**
| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-03-05 | Initial public draft |
| 1.1 | 2026-03-15 | Promoted bidirectional intent flow to normative requirement (§8.11); added §I.5 (enabling technology / capability claim); added §I.7 (broader applicability); expanded Open Question 12.1 (cultivated intent lifecycle); anonymized implementation references in Annex A; terminology corrections throughout; §5.2 rewritten with structural derivation evidence from seven independent traditions; §5.3 strengthened with eight independent derivations; §5.5 added (cascade behavior with algebraic characterization); §5.6 added (governability as constitutive claim); I.6 extended (Intent ontological characterization, Alignment precision); §12 updated with three new open questions (12.10-12.12); Annex A.3 added (structural analysis evidence); Annex C added (Structural Foundations — investigation methodology, five-primitive derivation, Boundaries monotonicity, cascade shape algebra, Intent unification, machine-detectable violations, structural predictions) |
