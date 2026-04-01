---
title: "Clause 8 — The Four Governance Layers"
weight: 80
---

## 8. The Four Governance Layers

*(Normative)*

### 8.1 Architecture Overview

A conformant Governance Architecture SHALL address four governance concerns in the following vertical composition. These four concerns constitute the governance context — the intent infrastructure that must be in place before authorized work can be coordinated, integrated, and executed. Each layer's output SHALL constitute governing input for the layer below it. Intent SHALL flow downward through the stack. Evidence SHALL flow upward through the stack. Intent MAY also flow upward when agent recommendations update principal understanding.

A conformant implementation SHALL treat each layer's translation of intent as potentially lossy. Governance SHOULD account for accumulated translation losses across multiple layer boundaries.

NOTE — The Intent Stack addresses four governance context concerns. Three additional execution governance concerns — orchestration, integration, and execution — are specified by the companion BPM/Agent Stack specification (bpmstack.org). Together, the two companion specifications address seven governance concerns across the full governance lifecycle.

### 8.2 Layer 4 — Intent Discovery

**Governance question addressed:** What does this principal actually intend?

A conformant L4 implementation SHALL conduct discovery rather than extraction — surfacing intent that principals may not have fully articulated, rather than capturing what they say at a moment in time.

L4 SHALL produce endorsed intent: intent that the principal has examined, understood, and endorsed, not merely declared. L4 SHALL operate at cold start — it requires no prior signal to begin. There is no pre-governance state.

### 8.3 Layer 3 — Intent Formalization

**Governance question addressed:** How do we represent this intent in machine-processable form?

A conformant L3 implementation SHALL transform discovery signal into structured, machine-processable representations that preserve meaning retrievably. L3 SHOULD operate across a spectrum of formalization depth, from lightweight semantic capture through periodic pattern detection to deep structural analysis, as governance context justifies.

A conformant L3 implementation SHALL make translation losses explicit. A formalized intent specification SHOULD include not just what was captured but what was identified as present but not yet formalizable, and what was not explored. L3 SHALL support versioning of intent representations to track how intent evolves over time.

### 8.4 Layer 2 — Specification

**Governance question addressed:** Given this intent, what SHALL we actually do?

A conformant L2 implementation SHALL produce specifications that are traceable to L3/L4 output. Every specification choice SHOULD be derivable from discovered and formalized intent. Specification that cannot demonstrate derivation from governing intent SHALL be treated as potentially drifted.

L2 SHOULD account for both Discovered Intent (what the principal wants) and Emergent Intent (what the organizational system will actually do) in producing actionable direction.

### 8.5 Layer 1 — Runtime Alignment

**Governance question addressed:** Is what is happening aligned with what was intended?

L1 is the pivot layer of the stack — the boundary between governance context (this specification) and execution governance (the companion BPM/Agent Stack). A conformant L1 implementation SHALL perform closed-loop assessment of whether execution is producing outcomes aligned with the intent established by the layers above. L1 SHALL monitor alignment across all four intent sources continuously.

A conformant L1 implementation SHALL:

a) Classify alignment events against all four intent sources;

b) Detect drift from governing intent;

c) Trigger escalation when drift exceeds thresholds established by the governing principal;

d) Maintain an append-only evidence trail that supports progressive trust development;

e) Support per-boundary trust calibration as described in Clause 10.

The term "runtime" distinguishes L1's concern from training-time alignment (the Constitutional AI substrate below L1). Training-time alignment shapes the agent's character before deployment. Runtime alignment assesses whether that character, operating within organizational context, is producing outcomes consistent with governing intent. Both are necessary; neither substitutes for the other.

When execution evidence indicates misalignment, L1 SHALL determine which intent source is implicated. Constitutional Intent violations SHALL trigger immediate hard stops. Other misalignment types SHALL trigger appropriate responses as defined by trust calibration at the relevant boundary.

### 8.6 Execution Governance

Execution governance — how authorized work is coordinated, integrated with systems, and executed within governing constraints — is specified by the companion BPM/Agent Stack specification (bpmstack.org). The BPM/Agent Stack addresses three execution governance concerns:

- **Orchestration** — how multiple agents are coordinated to execute specifications, how intent translates across delegation levels, and how knowledge is provisioned as a governance act.
- **Integration** — how governed agents connect to external systems, how access scope is determined by governing intent, and how governance context is carried through integrations.
- **Execution** — how actual work is performed within the full governance context, how hard constraints remain non-negotiable, and how execution produces high-quality evidence as its primary governance output.

The Intent Stack's L1 (Runtime Alignment) provides the governing context within which the BPM/Agent Stack operates. Evidence from execution flows upward through L1 for alignment assessment. Intent from the governance context flows downward through L1 to constrain execution.

### 8.7 Constitutional AI as Substrate

Below the governance layers sits the **Constitutional AI substrate** — the AI model's training-time values and character. This substrate is not a layer of the Intent Stack. It is the foundation that makes all other governance possible.

The Intent Stack is not an alternative to Constitutional AI. It is the organizational deployment infrastructure that Constitutional AI requires in order to achieve its purpose at scale. Model developers govern the model's character. The Intent Stack governs the model's operation within the specific organizational contexts where that character is exercised.

A conformant Governance Architecture SHALL treat the Constitutional AI substrate as a non-negotiable foundation. Implementations SHALL NOT attempt to override or circumvent training-time values through runtime governance mechanisms.

### 8.8 Knowledge Architecture

**Governance question addressed:** How does accumulated knowledge serve governance across layers?

The governance layers both produce and consume knowledge. A conformant implementation SHALL provide knowledge infrastructure that supports all layers. Knowledge that exists but cannot be retrieved is governance-equivalent to knowledge that does not exist.

A conformant knowledge architecture SHALL follow a three-tier principle:

**Tier 1 — Real-time semantic store.** SHALL capture every governance signal at the point of origin and make it available for retrieval through semantic similarity search. Tier 1 SHALL operate with low latency and low cost. Value SHALL begin with the first signal captured — there is no minimum dataset or required preprocessing before Tier 1 provides governance utility.

**Tier 2 — Emergent pattern detection.** SHOULD perform periodic synthesis over the Tier 1 store, producing structured observations about the knowledge landscape — recurring themes, declining references, contradictions, gaps. Tier 2 output SHALL feed L1 (knowledge-health signals) and L2 (planning inputs).

**Tier 3 — Discovery-driven deep structure.** SHALL be available on demand for governance decisions requiring structural understanding beyond semantic proximity — typed relationships between entities, causal chains, dependency maps. Tier 3 MAY be invoked when governance context justifies the cost.

A conformant knowledge architecture SHALL avoid two failure modes: the empty-until-complete trap (no value until a comprehensive knowledge graph is built) and the shallow-forever trap (signal captured but never structured). Tier 1 SHALL prevent the first; Tier 2 and Tier 3 SHALL prevent the second.
