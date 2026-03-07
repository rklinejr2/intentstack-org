---
title: "Clause 8 — The Seven Layers"
weight: 80
---

## 8. The Seven Layers

*(Normative)*

### 8.1 Architecture Overview

A conformant Governance Architecture SHALL address seven governance concerns in the following vertical composition. Each layer's output SHALL constitute governing input for the layer below it. Intent SHALL flow downward through the stack. Evidence SHALL flow upward through the stack. Intent MAY also flow upward when agent recommendations update principal understanding.

A conformant implementation SHALL treat each layer's translation of intent as potentially lossy. Governance SHOULD account for accumulated translation losses across multiple layer boundaries.

### 8.2 Layer 7 — Intent Discovery

**Governance question addressed:** What does this principal actually intend?

A conformant L7 implementation SHALL conduct discovery rather than extraction — surfacing intent that principals may not have fully articulated, rather than capturing what they say at a moment in time.

L7 SHALL produce endorsed intent: intent that the principal has examined, understood, and endorsed, not merely declared. L7 SHALL operate at cold start — it requires no prior signal to begin. There is no pre-governance state.

### 8.3 Layer 6 — Intent Formalization

**Governance question addressed:** How do we represent this intent in machine-processable form?

A conformant L6 implementation SHALL transform discovery signal into structured, machine-processable representations that preserve meaning retrievably. L6 SHOULD operate across a spectrum of formalization depth, from lightweight semantic capture through periodic pattern detection to deep structural analysis, as governance context justifies.

A conformant L6 implementation SHALL make translation losses explicit. A formalized intent specification SHOULD include not just what was captured but what was identified as present but not yet formalizable, and what was not explored. L6 SHALL support versioning of intent representations to track how intent evolves over time.

### 8.4 Layer 5 — Specification

**Governance question addressed:** Given this intent, what SHALL we actually do?

A conformant L5 implementation SHALL produce specifications that are traceable to L6/L7 output. Every specification choice SHOULD be derivable from discovered and formalized intent. Specification that cannot demonstrate derivation from governing intent SHALL be treated as potentially drifted.

L5 SHOULD account for both Discovered Intent (what the principal wants) and Emergent Intent (what the organizational system will actually do) in producing actionable direction.

### 8.5 Layer 4 — Runtime Alignment

**Governance question addressed:** Is what is happening aligned with what was intended?

L4 is the pivot layer of the stack — the point where downward intent flow meets upward evidence flow. A conformant L4 implementation SHALL perform closed-loop assessment of whether execution layers below are producing outcomes aligned with intent layers above. L4 SHALL monitor alignment across all four intent sources continuously.

A conformant L4 implementation SHALL:

a) Classify alignment events against all four intent sources;

b) Detect drift from governing intent;

c) Trigger escalation when drift exceeds thresholds established by the governing principal;

d) Maintain an append-only evidence trail that supports progressive trust development;

e) Support per-boundary trust calibration as described in Clause 10.

The term "runtime" distinguishes L4's concern from training-time alignment (the Constitutional AI substrate below L1). Both are necessary; neither substitutes for the other.

When execution evidence indicates misalignment, L4 SHALL determine which intent source is implicated. Constitutional Intent violations SHALL trigger immediate hard stops. Other misalignment types SHALL trigger appropriate responses as defined by trust calibration at the relevant boundary.

### 8.6 Layer 3 — Orchestration

**Governance question addressed:** How do we coordinate multiple agents to execute this specification?

A conformant L3 implementation SHALL translate governing intent appropriately when delegating to sub-agents. Each delegation creates a new principal-agent boundary at which the full governance pattern instantiates (Clause 9). L3 SHALL account for accumulated intent translation losses across multiple delegation levels.

L3 SHALL treat knowledge provisioning as a governance act. A conformant L3 implementation SHALL provision knowledge access deliberately rather than by default, ensuring delegated agents operate with epistemic scope appropriate to their governance role.

### 8.7 Layer 2 — Integration

**Governance question addressed:** How do governed agents connect to the systems they need?

A conformant L2 implementation SHALL treat agent access to external systems as a governance decision, not merely a configuration choice. Access scope SHALL be determined by governing intent, not by technical capability alone.

L2 SHALL carry governance context through integration. Conformant implementations SHALL NOT integrate agents with external systems in ways that create governance leaks — bypassing constraints, Boundaries, or trust calibrations established by higher layers.

### 8.8 Layer 1 — Execution

**Governance question addressed:** How does the actual work get done within governing constraints?

A conformant L1 implementation SHALL operate within the full governance context established by Layers 2-7. Hard constraints (Boundaries) SHALL be non-negotiable at L1. The null action — refusal to act — SHALL always be available as a safe harbor when execution would violate governing constraints.

L1 SHALL produce high-quality evidence as its primary governance output. Execution that conceals failures or overstates successes SHALL be treated as a governance violation, not merely a performance failure.

### 8.9 Constitutional AI as Substrate

Below Layer 1 sits the **Constitutional AI substrate** — the AI model's training-time values and character. This substrate is not a layer of the Intent Stack. It is the foundation that makes all other governance possible.

The Intent Stack is not an alternative to Constitutional AI. It is the organizational deployment infrastructure that Constitutional AI requires in order to achieve its purpose at scale. Model developers govern the model's character. The Intent Stack governs the model's operation within the specific organizational contexts where that character is exercised.

A conformant Governance Architecture SHALL treat the Constitutional AI substrate as a non-negotiable foundation. Implementations SHALL NOT attempt to override or circumvent training-time values through runtime governance mechanisms.

### 8.10 Knowledge Architecture

**Governance question addressed:** How does accumulated knowledge serve governance across layers?

A conformant implementation SHALL provide knowledge infrastructure that supports all layers. Knowledge that exists but cannot be retrieved is governance-equivalent to knowledge that does not exist.

A conformant knowledge architecture SHALL follow a three-tier principle:

**Tier 1 — Real-time semantic store.** SHALL capture every governance signal at the point of origin and make it available for retrieval through semantic similarity search. Value SHALL begin with the first signal captured.

**Tier 2 — Emergent pattern detection.** SHOULD perform periodic synthesis over the Tier 1 store, producing structured observations — recurring themes, declining references, contradictions, gaps. Tier 2 output SHALL feed L4 (knowledge-health signals) and L5 (planning inputs).

**Tier 3 — Discovery-driven deep structure.** SHALL be available on demand for governance decisions requiring structural understanding beyond semantic proximity — typed relationships between entities, causal chains, dependency maps.

A conformant knowledge architecture SHALL avoid two failure modes: the empty-until-complete trap (no value until a comprehensive knowledge graph is built) and the shallow-forever trap (signal captured but never structured).

### 8.11 Bidirectional Intent Flow

**Governance question addressed:** How does agent-generated evidence update the principal's understanding of their own intent?

Intent flows downward through the stack from discovery to execution. Evidence flows upward from execution to discovery. But a conformant implementation SHALL also support upward intent flow: agent-generated evidence and recommendations that update the principal's understanding of what they intend.

This is not reporting. Reporting is informational — "here is what happened." Upward intent flow is governance-altering — the principal's intent is different after receiving agent evidence than it was before. A conformant implementation SHALL treat upward intent flow as a structural property of the governance relationship, not as an anomaly or exception.

A conformant Governance Architecture SHALL provide explicit mechanisms for upward intent flow. Agents SHALL be able to surface evidence, make recommendations, and express concerns through legitimate channels (see Clause 11 — Transparent Conscientious Objection). Principals SHALL have mechanisms for receiving and integrating agent-generated governance signal into their evolving understanding of their own intent.

Bidirectional intent flow is what makes intent discovery ongoing rather than one-time. It is what makes the trust trajectory (Clause 10.5) possible — the evidence that supports trust extension flows upward from the agent. And it is what makes governance a relationship rather than a control mechanism — both parties are transformed through interaction.
