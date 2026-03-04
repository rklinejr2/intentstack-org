---
title: "Diagrams"
weight: 3
---

These diagrams visualize the Intent Stack's architecture and metamodel. They are rendered from machine-readable JSON specifications that formally describe the reference model's structure and relationships.

---

## 7-Layer Reference Model

The Intent Stack is a seven-layer governance architecture. Intent flows downward from discovery (L7) through formalization, specification, governance, orchestration, and integration to execution (L1). Evidence flows upward. The Knowledge Architecture provides a three-tier principle for how accumulated knowledge serves governance across layers.

{{< figure src="/images/reference-model.svg" alt="The Intent Stack 7-Layer Reference Model diagram showing layers L7 (Intent Discovery) through L1 (Execution), with Constitutional AI substrate beneath, intent flowing downward, evidence flowing upward, and the three-tier Knowledge Architecture spanning layers." caption="The Intent Stack — 7-Layer Reference Model (v5.0)" >}}

Machine-readable source: [reference-model-v5.json](/data/reference-model-v5.json)

---

## Metamodel Entity-Relationship Diagram

The metamodel formalizes the structural relationships between Intent Stack entities. GovernanceBoundary is the central entity — most relationships flow through it. The recursive self-reference represents the fractal pattern: a governance boundary can contain sub-boundaries, each with their own full complement of primitives, trust calibration, and conflict resolution.

{{< figure src="/images/metamodel.svg" alt="Intent Stack Metamodel entity-relationship diagram in UML class diagram notation showing GovernanceBoundary as the central entity connected to IntentPrimitive, IntentSource, TrustCalibration, EvidenceTrail, ConflictResolution, GovernanceArtifact, Layer, KnowledgeTier, Agent, and TransparentConscientiousObjection." caption="Intent Stack Metamodel — Entity-Relationship Diagram (v1.0)" >}}

Machine-readable source: [metamodel-v1.json](/data/metamodel-v1.json)
