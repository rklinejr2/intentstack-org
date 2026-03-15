---
title: "Clause 5 — The Five Intent Primitives"
weight: 50
---

## 5. The Five Intent Primitives

*(Normative)*

### 5.1 The Irreducible Set

At every **governance interface** — whether between human and AI, manager and employee, or two collaborating peers — five structural elements SHALL be present for governance to function. These five elements are the **Intent Primitives**. An implementation conforming to Conformance Target 2 SHALL specify all five primitives at each governed interface. Unspecified primitives SHALL NOT be treated as absent — they default to implicit assumptions, which is the primary origin of **alignment** failure.

The five Intent Primitives are:

**Purpose** — why this governance interface exists. Purpose provides the interpretive context for all other primitives. When Direction, Boundaries, End State, or Key Tasks conflict or are ambiguous, Purpose SHALL be consulted as the primary resolution criterion.

**Direction** — how the **agent** should approach the work. Strategic orientation, methodology preferences, priorities among competing concerns.

**Boundaries** — what the agent SHALL NOT do. Hard constraints, non-negotiable limits, prohibited actions. Boundaries is the only primitive where **constitutional intent** SHALL always override **discovered intent**. A **principal** SHALL NOT instruct an agent to cross constitutional Boundaries.

**End State** — what success looks like when the work is complete. End State provides the criteria against which alignment is assessed and completion is recognized. Without End State, alignment cannot be measured.

**Key Tasks** — what work the agent is authorized to perform. Key Tasks also defines what is not authorized by omission. An agent SHALL NOT perform work outside the scope established by Key Tasks without explicit principal authorization.

### 5.2 Why Five

The claim that these five primitives constitute an irreducible set is supported by convergent evidence from multiple independent lines of analysis.

The most direct test is removal. If any single primitive is removed, the governance system loses an essential capability that the remaining four cannot compensate for. Purpose without Boundaries produces unconstrained pursuit. Boundaries without Purpose produces arbitrary restriction. Direction without End State produces perpetual motion. End State without Key Tasks produces aspiration without action. Key Tasks without Direction produces activity without trajectory. Each primitive addresses a governance concern that no combination of the others can cover.

The generating principle underlying the five-primitive decomposition is the **structure of delegated judgment under authority**. When an authority-holder delegates to a judgment-exercising agent, five independent questions must be answered: why (Purpose), how to approach (Direction), what never (Boundaries), what counts as done (End State), and what work is authorized (Key Tasks). These questions are structurally independent regardless of whether analyzed through logic, network theory, control theory, geometry, algebra, information theory, or operational evidence.

This decomposition was first discovered through operational practice — the primitives emerged because governance repeatedly failed when any one was absent. Subsequent analysis from seven independent theoretical traditions, each approaching the generating principle from a different starting point, produced the same five-element decomposition with a one-to-one structural correspondence across all seven frameworks. Each tradition's derivation demonstrates that removing any one primitive leaves a governance gap that no combination of the remaining four can fill, and that no candidate sixth primitive is independent of the existing five. See [Annex C.2](../annex-c/#c2-five-primitive-derivation) for the full derivation evidence, including the seven-framework mapping table and per-tradition derivation summaries.

NOTE — All seven analyses independently considered whether Priority constitutes a sixth primitive. All seven concluded it does not. The geometric analysis finds Priority is a metric on governance state, not an independent structural coordinate. The algebraic analysis finds Priority inhabits the same algebraic type as Direction and is derivable from it. The information-theoretic analysis finds Priority is a derived quantity — a function of three existing channels. Priority is a governance-relevant concept that is properly understood as a property of Direction, not an independent primitive.

### 5.3 Boundaries as Special Case

Among the five primitives, Boundaries behaves differently from the others. Purpose, Direction, End State, and Key Tasks interact through holistic judgment — a strong purpose may justify flexible interpretation of direction, a compelling end state may reshape key tasks. This flexibility is necessary because governance must adapt to context.

Boundaries SHALL NOT participate in this flexibility. A hard constraint is absolute. Constitutional intent expressed as Boundaries SHALL NOT be overridden by any combination of the other primitives, regardless of how compelling the purpose or urgent the task.

This asymmetry is not a design choice. It is a structural property that has been independently derived from eight different analytical frameworks — differential geometry, category theory, information theory (entropy), deontic logic, network theory, dynamical systems, operational practice, and information theory (channel capacity) — each identifying a different mechanism that produces the same structural conclusion: the Boundary set can only grow. See [Annex C.3](../annex-c/#c3-boundaries-monotonicity) for the complete derivation evidence, including the named mechanism from each framework.

Boundaries is uniquely monotonic because its governance function — absolute prohibition — is inherently irreversible. Without inviolable limits, every other governance mechanism can be rationalized away under sufficient pressure. The eight independent derivations establish that this is not merely a prudent design principle but a structural invariant of any governance system that includes absolute constraints.

### 5.4 Primitives Across Intent Sources

Each primitive exists not as a single value but as a set of values — one from each intent source (Clause 6). Constitutional Purpose constrains but does not replace Discovered Purpose, which constrains but does not replace Cultivated Purpose. When primitive values from different intent sources conflict, the conflict resolution mechanism defined in §6.6 applies.

### 5.5 Cascade Behavior Across Governance Interfaces

At every principal hierarchy where governance interfaces compose, the five Intent Primitives SHALL exhibit traceability between levels. Each primitive cascades through the hierarchy with a characteristic shape — a distinct structural transformation that defines what is valid when intent crosses a governance interface boundary.

a) **Purpose** SHALL narrow while preserving derivation from the governing Purpose at each higher level. A governance interface whose Purpose cannot trace to the governing Purpose above SHALL be treated as potentially drifted.

b) **Direction** SHALL contextualize the governing Direction for the specific boundary context while maintaining consistency with it. Contextualization that contradicts governing Direction SHALL be treated as a conflict requiring resolution.

c) **Boundaries** SHALL accumulate monotonically across governance interface boundaries. Each interface SHALL preserve all Boundary constraints from governing interfaces above and MAY add Boundary constraints appropriate to its scope. No governance interface SHALL remove or relax a Boundary established at a higher level. This extends the single-interface treatment of §5.3 to hierarchy behavior.

d) **End State** SHALL be derivable from the governing End State at higher levels. Achievement of a lower-level End State SHOULD contribute to achievement of the governing End State. End States that cannot demonstrate derivation SHALL be treated as potentially misaligned.

e) **Key Tasks** SHALL fall within the authorized scope established by Key Tasks at each governing interface above. Work that cannot trace to authorized scope at any higher level SHALL be treated as potentially unauthorized and SHALL require explicit principal authorization before proceeding.

A conformant implementation SHALL provide mechanisms for tracing each primitive across governance interface boundaries. The cascade shapes defined above are structural properties — they describe what transformations are valid when intent crosses a boundary, independent of implementation.

Each cascade shape corresponds to a distinct algebraic structure with known mathematical properties. See [Annex C.4](../annex-c/#c4-cascade-shape-algebraic-characterization) for the full algebraic characterization and its structural grounding.

The cascade shapes have a direct governance consequence: **violation severity tracks the self-correctability of each cascade type**. Violations of cascade shapes that cannot be corrected within the affected governance boundary are inherently more severe — they require intervention from a governing principal above the violation point. This produces a severity ordering that is structurally necessary rather than judgment-dependent:

1. Boundary relaxation — highest severity (a relaxed boundary cannot be re-established within the governance boundary where it was relaxed; structural governance failure)
2. Scope violation — high severity (unauthorized scope cannot be retracted after the fact without principal intervention; unauthorized work)
3. Alignment failure — medium severity (some End State misalignments can be corrected through bidirectional intent flow; others cannot)
4. Purpose drift — medium severity (Purpose drift cannot be self-corrected, but may indicate legitimate evolution requiring re-examination of the governing Purpose)
5. Direction conflict — lower severity (Direction conflicts are locally correctable by re-examining the governing Direction; they do not require escalation beyond the affected boundary)

NOTE — The cascade shapes defined above describe delegation interfaces (asymmetric authority). The cascade behavior at coordination interfaces (symmetric authority, Clause 7.2) — where primitives are jointly constructed rather than cascaded — is architecturally specified but not yet operationally tested. See §12.10.

NOTE — The different cascade behaviors reflect the different governance functions of each primitive. Purpose provides interpretive context (narrowing preserves this). Direction provides approach orientation (contextualization adapts this). Boundaries provides absolute constraints (accumulation preserves this). End State provides success criteria (derivation composes this). Key Tasks provides authorized scope (scoping constrains this). The asymmetry — particularly Boundaries' strictly monotonic behavior — is a structural necessity arising from the governance function each primitive serves.

### 5.6 Governability

The five-primitive decomposition is not merely a useful way to organize governance content. It constitutes the structural requirements for governance to be possible. Intent is not naturally governable — it becomes governable when it satisfies the structural properties that the five primitives impose.

These properties, independently identified across multiple analytical traditions, include:

- **Decomposability** — intent can be separated into independently assessable components (the five primitives)
- **Observability** — intent can be observed through evidence at governance interfaces
- **Source attribution** — intent can be attributed to distinct sources with a priority ordering (Clause 6)
- **Bounded transformation** — intent transforms in structurally constrained ways across interfaces (the cascade shapes of §5.5)
- **Stability** — intent exhibits sufficient persistence to serve as a governance reference
- **Controllability** — intent responds to governance inputs

When these properties are present, intent can be discovered, formalized, assessed for alignment, and governed. When any is absent, governance degrades. The specification does not describe a naturally governable object — it creates the conditions under which governance becomes possible.

This has a practical implication: the five primitives are not just an analytical framework. They are governance infrastructure. An organization that specifies all five primitives at a governance interface has created the structural conditions for that interface to be governable. An organization that leaves primitives implicit has not merely made governance harder — it has left the structural conditions for governability incomplete.
