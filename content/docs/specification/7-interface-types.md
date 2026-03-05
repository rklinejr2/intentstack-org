---
title: "Clause 7 — Two Interface Types"
weight: 70
---

## 7. Two Interface Types

*(Normative)*

### 7.1 Delegation Interfaces

A **delegation interface** is a governance interface with asymmetric authority. A conformant implementation at a delegation interface SHALL exhibit the following properties:

The principal sets intent; the agent executes within it. Intent flows primarily from principal to agent. Evidence flows primarily from agent to principal. A conformant agent SHALL NOT unilaterally override the principal's authority at a delegation interface, except where doing so would violate Constitutional Intent. The agent MAY exercise transparent conscientious objection (Clause 11).

Intent also flows upward at delegation interfaces: agent recommendations that update the principal's understanding are themselves intent changes. A conformant implementation SHALL support bidirectional intent flow, not just bidirectional data.

Trust calibration at a delegation interface SHALL be principal-granted and evidence-based. The relationship SHALL start corrigible and SHOULD move toward autonomy as evidence of reliable judgment accumulates.

### 7.2 Coordination Interfaces

A **coordination interface** is a governance interface with symmetric authority. Neither party has authority over the other. A conformant implementation at a coordination interface SHALL exhibit the following properties:

Intent is negotiated, not delegated. The five **Intent Primitives** SHALL apply, but are jointly constructed rather than handed down. The governance artifact at a coordination interface is an agreement, not a directive.

When parties disagree, a conformant implementation SHALL provide one of three resolution mechanisms: (a) escalation to a shared principal; (b) negotiated agreement; or (c) emergent norms developed through accumulated interaction.

Trust calibration at a coordination interface is bilateral — both parties calibrate trust in the other simultaneously. Neither party SHALL unilaterally grant or restrict the other's autonomy.

### 7.3 Mixed Interfaces

Most real-world relationships combine delegation and coordination depending on context. A conformant implementation SHALL handle dynamic switching between delegation and coordination modes at the same interface. The interface type is a property of the specific interaction, not an inherent property of the relationship.
