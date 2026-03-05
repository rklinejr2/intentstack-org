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

The claim that these five primitives constitute an irreducible set rests on a single test: removal. If any single primitive is removed, the governance system loses an essential capability that the remaining four cannot compensate for.

Purpose without Boundaries produces unconstrained pursuit. Boundaries without Purpose produces arbitrary restriction. Direction without End State produces perpetual motion. End State without Key Tasks produces aspiration without action. Key Tasks without Direction produces activity without trajectory. Each primitive addresses a governance concern that no combination of the others can cover.

This decomposition was not designed from first principles. It was discovered through operational practice — the primitives emerged because governance repeatedly failed when any one was absent. The fact that other governance systems, developed independently from completely different starting points, arrive at similar decomposition granularity when addressing the same problem suggests that the problem itself forces decomposition into roughly this number of irreducible concerns. The convergence is in granularity, not in one-to-one correspondence between specific elements.

### 5.3 Boundaries as Special Case

Among the five primitives, Boundaries behaves differently from the others. Purpose, Direction, End State, and Key Tasks interact through holistic judgment — a strong purpose may justify flexible interpretation of direction, a compelling end state may reshape key tasks. This flexibility is necessary because governance must adapt to context.

Boundaries SHALL NOT participate in this flexibility. A hard constraint is absolute. Constitutional intent expressed as Boundaries SHALL NOT be overridden by any combination of the other primitives, regardless of how compelling the purpose or urgent the task. This asymmetry reflects the observation that without inviolable limits, every other governance mechanism can be rationalized away under sufficient pressure.

### 5.4 Primitives Across Intent Sources

Each primitive exists not as a single value but as a set of values — one from each intent source (Clause 6). Constitutional Purpose constrains but does not replace Discovered Purpose, which constrains but does not replace Cultivated Purpose. When primitive values from different intent sources conflict, the conflict resolution mechanism defined in §6.6 applies.
