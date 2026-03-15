---
title: "Clause 2 — Conformance"
weight: 20
---

## 2. Conformance

*(Normative)*

### 2.1 Conformance Targets

This specification defines three conformance targets. An implementation MAY conform to one or more targets independently.

**Conformance Target 1 — Governance Architecture.** A layered architecture that addresses all seven governance concerns specified in Clause 8, in the specified order of concern from Intent Discovery (L7) through Execution (L1), with the Constitutional AI substrate positioned below L1.

**Conformance Target 2 — Governance Implementation.** A deployed system that instantiates all five Intent Primitives (Clause 5), recognizes all four intent sources (Clause 6), maintains per-boundary trust calibration (Clause 10), and provides transparent conscientious objection as a conflict resolution mechanism (Clause 11) at each governed interface.

**Conformance Target 3 — Governance Assessment.** A methodology that evaluates an organization's governance against the Intent Stack structure, assesses coverage of all seven layers, identifies gaps in primitive specification, and measures trust calibration position at each principal-agent boundary.

### 2.2 Obligation Keywords

The following keywords, when used in normative clauses of this specification, carry the meanings defined here in accordance with RFC 2119:

- **SHALL** — absolute requirement. An implementation that does not satisfy a SHALL requirement does not conform.
- **SHALL NOT** — absolute prohibition. An implementation that violates a SHALL NOT requirement does not conform.
- **SHOULD** — recommended. Departure from a SHOULD requirement is permitted but requires justification.
- **SHOULD NOT** — not recommended. Departure is permitted but requires justification.
- **MAY** — optional. Implementations are free to include or omit MAY features.

### 2.3 Conformance Claims

An implementation claiming conformance SHALL:

a) Identify which conformance target(s) it claims;

b) Reference this specification by its document identifier (`intentstack.org/spec/2026-03-15`) and version;

c) Document any deviations from SHOULD requirements and the justification for each deviation.
