---
title: "Clause 2 — Conformance"
weight: 20
---

## 2. Conformance

*(Normative)*

### 2.1 Conformance Targets

This specification defines three conformance targets. An implementation MAY conform to one or more targets independently.

**Conformance Target 1 — Governance Architecture.** A layered architecture that addresses all four governance concerns specified in Clause 8, in the specified order of concern from Intent Discovery (L4) through Runtime Alignment (L1), with the Constitutional AI substrate positioned below L1.

**Conformance Target 2 — Governance Implementation.** A deployed system that instantiates all five Intent Primitives (Clause 5), recognizes all four intent sources (Clause 6), maintains per-boundary trust calibration (Clause 10), and provides transparent conscientious objection as a conflict resolution mechanism (Clause 11) at each governed interface.

**Conformance Target 3 — Governance Assessment.** A methodology that evaluates an organization's governance against the Intent Stack structure, assesses coverage of all four layers, identifies gaps in primitive specification, and measures trust calibration position at each principal-agent boundary.

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

b) Reference this specification by its document identifier (`intentstack.org/spec/2026-06-16`) and version;

c) Document any deviations from SHOULD requirements and the justification for each deviation.

### 2.4 Constitutional Floor Conformance Criteria

A conformant Constitutional floor (§6.2) SHALL satisfy all of the following criteria. This subclause governs the *shape* of a well-formed floor; the *content* of the floor is supplied by the deploying organization. Informative exemplars are at §6.2.1.

**2.4.1 Named protections.** A conformant Constitutional floor SHALL explicitly identify the irreducible interests it exists to defend. At minimum, the floor SHALL name (a) the dignity of the persons the governed system serves and acts upon, and (b) a common good that extends beyond the deploying organization's own interest. A floor that protects only the deployer's interest is not a floor; it is an objective.

**2.4.2 Distinct order from operational rules.** A conformant Constitutional floor SHALL sit in a different order from the operational rulesets it governs. The floor SHALL be referenced and interpreted by the layers beneath it; it SHALL NOT itself be reduced to an operational ruleset to be executed. A floor that has been fully translated into operational rules has ceased to function as a floor.

**2.4.3 Declines full operationalization.** A conformant Constitutional floor SHALL name principles and leave their application to contextual discernment at the level closest to the affected parties. The refusal to fully operationalize is deliberate and load-bearing, not a gap awaiting completion.

**2.4.4 Binds the deployer.** A conformant Constitutional floor SHALL constrain the deploying organization's own intent, including intent expressed through the Discovered and Cultivated sources (§6.3, §6.4). A floor that the deployer can freely rewrite to suit a given objective provides no constraint.

NOTE — The selection or composition of a Constitutional floor is a governance decision of the deploying organization. Open questions on testing conformance, resolving conflicts within a composed floor, and the conditions of legitimate floor revision are at §12.13–§12.15.
