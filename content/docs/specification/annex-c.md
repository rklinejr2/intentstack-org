---
title: "Annex C — Structural Foundations"
weight: 150
---

## Annex C — Structural Foundations

*(Informative)*

This annex documents the structural analysis underlying the specification's claims about primitive necessity, Boundaries monotonicity, cascade behavior, and Intent unification. The findings reported here were produced through independent convergence analysis — a methodology in which multiple AI agents, working under analytical isolation from different theoretical traditions, independently analyze the same structural questions. The results provide evidence that the specification's structural claims are forced by the governance delegation problem itself, not imposed by any single analytical framework.

Nothing in this annex is normative. The normative requirements are established in the specification body (Clauses 1-12). This annex provides the evidentiary and analytical basis for those requirements. Where this annex describes structural properties, the corresponding normative language is in the referenced specification clause.

### C.1 Investigation Methodology

The structural claims in this specification rest on a specific analytical methodology: **independent convergence analysis under analytical isolation**. This section describes the methodology in sufficient detail for independent replication.

**Design principle.** When a structural finding emerges from a single analytical framework, it may reflect the framework's assumptions rather than the problem's structure. When the same finding emerges independently from multiple unrelated frameworks, the convergence is evidence that the finding is forced by the problem. The methodology is designed to produce — or fail to produce — such convergence.

**Analytical isolation protocol.** Each agent in an investigation operates under strict isolation. Agents have no access to each other's work, outputs, or intermediate reasoning. Each agent is assigned a different theoretical tradition as its primary analytical lens. The investigation directive specifies the questions to answer and the acceptance criteria, but does not specify the expected answers. Agents are free to conclude that the specification's claims are wrong.

**Multi-lens convergence design.** Each investigation assigns at least three agents with different theoretical starting points — for example, differential geometry, category theory, and information theory; or deontic logic, network theory, and dynamical systems. The theoretical traditions are chosen to be genuinely independent: they share no common axioms, use different mathematical machinery, and approach governance from different conceptual foundations. The convergence signal is meaningful precisely because the starting points are unrelated.

**Two-phase pattern.** The investigations followed a two-phase structure. Phase 1 employed conceptual analysis: agents working from philosophy, network theory, and dynamical systems to establish qualitative characterizations and identify structural properties. Phase 2 employed mathematical formalization: agents working from differential geometry, category theory, and information theory to construct formal objects and derive quantitative claims. Phase 2 agents received the Phase 1 synthesis as input but were directed to test it independently — confirming, extending, or contradicting the Phase 1 findings based on their formal analysis.

**Synthesis approach.** After all agents in a phase complete their analyses, the investigation produces a synthesis that identifies convergences (findings where agents agree from independent reasoning), productive tensions (findings where agents disagree or emphasize different aspects), and open questions (findings that remain unresolved). The synthesis does not force consensus — genuine disagreements are preserved and reported.

**Agent configuration.** All agents in the investigations reported here were instances of Opus 4.6, operating under identical isolation constraints but different analytical directives. Each agent produced a complete analysis document. Total investigation scope: six agents across two phases (Phase 1: three conceptual analyses; Phase 2: three mathematical formalizations), producing ten deliverables including phase syntheses and a cross-phase integration.

**What this methodology establishes.** When multiple isolated agents, starting from genuinely independent theoretical traditions, converge on the same structural finding, the convergence is evidence that the finding is determined by the problem structure rather than by any particular analytical approach. The methodology cannot prove structural necessity in a mathematical sense — but it can establish that a claimed structure is robust across multiple independent analytical frameworks, which is the appropriate evidentiary standard for a specification claim.

### C.2 Five-Primitive Derivation

The specification claims that five Intent Primitives constitute an irreducible set (§5.1) and that five is structurally necessary (§5.2). This section presents the evidence for that claim.

**The generating principle.** All seven derivations converge on a single generating principle: **the structure of delegated judgment under authority**. When an authority-holder delegates to a judgment-exercising agent, five independent questions must be answered: why this delegation exists (Purpose), how the agent should approach the work (Direction), what the agent must never do (Boundaries), what counts as success (End State), and what work is authorized (Key Tasks). These five questions are structurally independent — answering any four leaves the fifth unresolved — regardless of whether analyzed through logic, network theory, control theory, geometry, algebra, information theory, or operational practice.

**Seven independent derivations.** The following table summarizes how each of seven theoretical traditions, working from a different starting point, arrives at the same five-element decomposition. Each cell identifies the concept within that tradition that maps to the corresponding primitive:

| Tradition | Purpose | Direction | Boundaries | End State | Key Tasks | Generating Principle |
|---|---|---|---|---|---|---|
| Deontic logic | Teleological obligation | Methodological obligation | Absolute prohibition | Evaluative criterion | Authorization scope | Five distinct logical types of normative content |
| Network theory | Interpretive frame | Strategic orientation | Circuit breaker | Evaluation criterion | Scope containment | Five distinct network governance functions |
| Optimal control theory | Objective function | Control law | State constraints | Terminal conditions | Control constraints | Five independent trajectory dimensions |
| Differential geometry | Monotone contraction | Local diffeomorphism | Monotone expansion | Pullback | Monotone restriction | Five algebraically distinct cascade types |
| Category theory | Lattice meet | Sheaf restriction | Join-semilattice | Pullback diagram | Subobject inclusion | Five-factor product forced by deontic independence, algebraic incomparability, and completeness |
| Information theory | Objective channel | Methodology channel | Constraint channel | Evaluation channel | Authorization channel | Five orthogonal information channels |
| Operational practice | Discovered empirically | Discovered empirically | Discovered empirically | Discovered empirically | Discovered empirically | Governance fails when any one is absent |

Seven independent analyses. Seven different theoretical traditions. Each independently identifies exactly five necessary and sufficient elements, and each maps those five elements to the same five governance functions. The convergence is not in granularity alone — it is a one-to-one structural correspondence across all seven frameworks.

**Per-tradition derivation summaries.**

*Deontic logic (Phase 1, Agent Delta).* Starting from the question "what logical types of normative content are required for governance?", this analysis identifies five distinct deontic modalities that cannot be reduced to each other. Teleological obligation (why) is irreducible to methodological obligation (how) because a goal does not specify an approach. Absolute prohibition (what never) is irreducible to authorization (what is permitted) because the absence of permission does not constitute prohibition — and prohibition carries unconditional force that permission lacks. Evaluative criteria (what counts as success) is irreducible to teleological obligation because knowing why something is done does not determine how to measure its completion. The five modalities exhaust the normative content required for governance: any candidate sixth modality can be shown to be a combination or specialization of the existing five.

*Network theory (Phase 1, Agent Epsilon).* Starting from the question "what governance functions are required at a network node where authority is delegated?", this analysis identifies five distinct functions that a governance interface must perform. The interpretive frame (Purpose) determines how incoming signals are understood. Strategic orientation (Direction) determines which of multiple valid paths is preferred. The circuit breaker (Boundaries) provides a safety mechanism that cannot be overridden by downstream nodes. The evaluation criterion (End State) determines when a governance episode is complete. Scope containment (Key Tasks) determines what operations the downstream node is authorized to perform. Removing any function leaves a governance gap: without a circuit breaker, safety cannot be guaranteed; without scope containment, authorization has no meaning; without an interpretive frame, signals are ambiguous.

*Optimal control theory (Phase 1, Agent Zeta).* Starting from the question "what independent dimensions define a controlled trajectory through governance state space?", this analysis maps governance to the structure of an optimal control problem. The objective function (Purpose) defines what the trajectory optimizes. The control law (Direction) defines how the controller selects actions. State constraints (Boundaries) define regions of state space that are forbidden. Terminal conditions (End State) define the target region. Control constraints (Key Tasks) define the set of available control actions. These five dimensions are mathematically independent in the control-theoretic sense: specifying any four leaves the fifth as a free variable that must be independently determined.

*Differential geometry (Phase 2, Agent Alpha-2).* Working from the fiber bundle framework established in prior analysis, this agent derives five algebraically distinct cascade types from the geometry of governance state transformation across interfaces. Each primitive corresponds to a distinct geometric operation — monotone contraction, local diffeomorphism, monotone expansion, pullback, and monotone restriction — and the five operations are shown to be the minimal set required to characterize all structurally valid governance transformations.

*Category theory (Phase 2, Agent Beta-2).* This analysis provides the most rigorous formal argument for uniqueness. Starting from the 2-category of governance relationships, it constructs a five-factor product decomposition and proves that: fewer than five factors would require coupled cascade laws (algebraically impossible given the five distinct cascade types), and more than five factors would violate non-redundancy (any candidate sixth factor is shown to inhabit the algebraic type of an existing factor). The proof proceeds by demonstrating that the five factors are deontic-independent, algebraically incomparable, and jointly complete.

*Information theory (Phase 2, Agent Gamma-2).* Starting from the characterization of governance as a regulated information channel, this analysis identifies five orthogonal information sub-channels, each carrying a distinct type of governance signal. Orthogonality is established by showing that each channel's information content is statistically independent of the others — knowing the content of any four channels provides zero information about the fifth. The five channels jointly exhaust the channel's capacity: no additional orthogonal sub-channel can be constructed.

*Operational practice.* The five primitives were first discovered through operational practice before any formal analysis was conducted. Governance repeatedly failed when any one primitive was absent or implicit, and no operational situation surfaced a need for a sixth primitive that was not already addressed by the existing five.

**Uniqueness argument.** The formal analyses converge on a uniqueness result: five is not merely sufficient but necessary. The strongest argument comes from the algebraic analysis: fewer than five primitives requires coupling cascade laws that are algebraically independent (a contradiction), while more than five introduces redundancy (any candidate sixth can be expressed as a function of the existing five). The information-theoretic analysis reaches the same conclusion through a different route: the five sub-channels exhaust the governance channel's capacity, so no additional orthogonal sub-channel exists.

**Priority resolution.** All seven analyses independently considered whether Priority constitutes a sixth primitive. All seven concluded it does not. The geometric analysis finds Priority is a metric on governance state, not an independent structural coordinate. The algebraic analysis finds Priority inhabits the same algebraic type as Direction and is derivable from it. The information-theoretic analysis finds Priority is a derived quantity — a function of three existing channels. Priority is a governance-relevant concept that is properly understood as a property of Direction, not an independent primitive.

### C.3 Boundaries Monotonicity

The specification claims that Boundaries is uniquely monotonic among the five primitives — constraints accumulate but cannot be removed (§5.3). This section presents the evidence that this is a structural invariant, not a design choice.

**Eight independent derivations.** The monotonicity of Boundaries has been independently derived from eight different analytical frameworks, each identifying a different mechanism that produces the same structural property:

| # | Framework | Mechanism | Key Reasoning |
|---|---|---|---|
| 1 | Differential geometry | Closed set inclusion under union | Constraints form closed sets; the union of closed sets is closed. Adding constraints preserves closure; removing constraints can break it. The constraint set is a monotone filtration. |
| 2 | Category theory | No algebraic inverse in join-semilattice | The join-semilattice of constraint sets has no inverse operation. If any algebraic operation could reduce the constraint set, it would constitute a structurally valid governance action that removes a prohibition — making constraint override a legal operation within the algebra. |
| 3 | Information theory (entropy) | Entropy floor that cannot decrease | Each prohibition eliminates possible actions, reducing the entropy of the action space. An entropy floor that decreases would create governance information from nothing — the information-theoretic analog of a perpetual motion machine. |
| 4 | Deontic logic | Absolute prohibition — unconditional, no override | Absolute prohibition is an unconditional obligation type that carries no override mechanism by definition. A prohibition that can be overridden is not absolute; a governance system that permits overriding absolute prohibitions has no absolute prohibitions. |
| 5 | Network theory | Circuit breaker — cannot be relaxed at lower levels | The circuit breaker function provides a safety guarantee. Relaxing a circuit breaker at a lower network level invalidates the safety guarantee established at the higher level. The guarantee is meaningful only if it is irrevocable downstream. |
| 6 | Dynamical systems | Temporal irreversibility of constraint surfaces | Once a constraint surface is established, it partitions governance state space irreversibly. The system's trajectory is confined to the constrained region; no dynamical evolution within the system can restore access to the excluded region. |
| 7 | Operational practice | Empirical observation — "accumulates monotonically" | Across sustained governance operation, Boundaries was observed to only accumulate, never reduce. Attempts to relax a Boundary at a lower governance level consistently produced governance failures. |
| 8 | Information theory (channel) | One-way constraint as irreversible entropy increase | A one-way constraint is an irreversible information-theoretic operation. The entropy increase associated with adding a constraint cannot be reversed by any operation within the governance channel. |

**Why monotonicity is a structural invariant.** Eight independent derivations from eight frameworks arriving at the same structural conclusion is extraordinary convergence. Each derivation identifies a different mechanism — geometric, algebraic, information-theoretic, logical, network-theoretic, dynamical, empirical, channel-theoretic — but all produce the same property: the Boundary set can only grow. This convergence is evidence that monotonicity is not a design principle chosen for prudence but a structural invariant that manifests identically regardless of analytical framework. Any governance system that includes absolute constraints will exhibit this monotonicity, because the governance function of absolute prohibition is inherently irreversible.

**Connection to the specification.** The normative treatment of Boundaries monotonicity at a single governance interface is in §5.3. The extension to hierarchy behavior — Boundaries accumulating across governance interface boundaries — is in §5.5(c). The eight derivations documented here provide the structural evidence for both normative claims.

### C.4 Cascade Shape Algebraic Characterization

The specification defines five cascade shapes governing how each primitive transforms across governance interfaces (§5.5). This section presents the algebraic characterization of those cascade shapes and the structural findings about violation severity.

**Five cascade shapes as algebraic structures.** Each empirically discovered cascade shape corresponds to a standard algebraic construction. The following characterization was independently derived by three agents working from differential geometry, category theory, and information theory respectively — all three arrived at the same mapping:

| Primitive | Cascade Shape | Algebraic Structure | Inverse Operation |
|---|---|---|---|
| Purpose | Narrows | Lattice meet (contraction) | No — broadening violates the narrowing constraint |
| Direction | Contextualizes | Sheaf restriction (localization) | Yes — re-restriction is possible, making Direction locally correctable |
| Boundaries | Accumulates | Join-semilattice homomorphism (union) | No — no algebraic operation can reduce the constraint set |
| End State | Derives | Pullback (compositional derivation) | Partial — bidirectional flow is structurally valid |
| Key Tasks | Scopes | Subobject inclusion (monomorphism) | No — scope expansion violates the containment constraint |

The algebraic names identify standard mathematical constructions with well-understood properties. The significance is that the cascade shapes discovered through operational practice are not ad hoc patterns — they are instances of structures that mathematicians have studied extensively. Their properties are known, their behaviors are predictable, and their relationships to each other are formally characterized.

**Severity as algebraic rigidity.** The violation severity ordering discovered through operational practice — Boundary relaxation most severe, Direction conflict least severe — is independently derived as the algebraic rigidity ordering. The key insight: violations of algebraic structures that possess no inverse operation are inherently more severe because no operation within the governance system can correct them. Correction requires intervention from outside the affected governance boundary.

This produces a severity ordering that is structurally necessary rather than judgment-dependent:

1. **Boundary relaxation** — highest severity. The join-semilattice has no inverse; a relaxed boundary cannot be re-established by any operation within the governance algebra.
2. **Scope violation** — high severity. Subobject inclusion is a monomorphism with no inverse; unauthorized scope cannot be "un-authorized" after the fact.
3. **Alignment failure** — medium severity. The pullback admits partial inverse (bidirectional flow); End State misalignment can sometimes be corrected through renegotiation.
4. **Purpose drift** — medium severity. The lattice meet has no inverse, but Purpose drift may indicate legitimate evolution requiring re-examination of the governing Purpose rather than correction of the drift.
5. **Direction conflict** — lower severity. Sheaf restriction admits an inverse (re-restriction); Direction conflicts are locally correctable by re-examining the governing Direction.

**Inverse operation analysis.** The presence or absence of an inverse operation for each algebraic structure determines whether a governance violation is self-correctable within the affected boundary:

- *No inverse* (Boundaries, Key Tasks, Purpose): The violation cannot be corrected by any governance operation at or below the affected interface. Recovery requires intervention from a governing principal above the violation point. These are structural failures.
- *Inverse exists* (Direction): The violation can be corrected locally by re-examining and re-restricting the governing Direction. These are operational failures — serious, but recoverable within normal governance.
- *Partial inverse* (End State): Some End State misalignments can be corrected through the bidirectional intent flow mechanism (agent evidence updating principal understanding). Others cannot. The distinction depends on whether the misalignment is structural (End States are genuinely incompatible) or informational (End States were compatible but incompletely specified).

**Connection to the specification.** The normative cascade requirements are in §5.5. The algebraic characterization documented here provides the structural grounding for those requirements and for the severity ordering. The specification states what conformant implementations must do; this section explains why those requirements have the structure they do.

### C.5 Intent Unification

The specification characterizes Intent as simultaneously relational, processual, and normative (I.5), and states that these three characterizations are "three views of a single structure." This section presents the evidence for that unification claim.

**Three Phase 1 characterizations.** Three independent conceptual analyses, working from ontology, network theory, and dynamical systems respectively, each identified a different primary characterization of Intent:

- **Dispositional** (from deontic logic/ontology): Intent is a structured normative disposition — a standing commitment to certain governance content at a governance interface. At any given moment, Intent is the structured assignment of normative content (obligations, prohibitions, authorizations, evaluative criteria) across the five primitives.
- **Relational** (from network theory): Intent is a protocol object at governance interfaces — it exists between entities, not as a property of any single entity. Intent is constituted by the governance relationship and has no existence independent of it.
- **Processual** (from dynamical systems): Intent is a sustained dynamical process — a trajectory through governance state space that evolves, adapts, and persists through transformation. Intent is not a snapshot but a temporally extended phenomenon.

These three characterizations are genuinely different — they place Intent in different ontological categories (disposition, relation, process). The Phase 1 investigation identified this as a productive tension requiring formal resolution.

**Three Phase 2 formalizations.** Three independent mathematical agents, each working from a different formal tradition, each constructed a single mathematical object that captures all three Phase 1 characterizations simultaneously:

- **Geometric formalization** (from differential geometry): Intent is a structured section of a governance fiber bundle. The section itself is the disposition (structured assignment of governance content at each interface). The transition functions relating fibers at different interfaces are the relational structure. Time-parameterization of the section gives the process.
- **Algebraic formalization** (from category theory): Intent is a parametric natural transformation in the 2-category of governance relationships. The normative content at fixed time is the disposition (a graded algebra). The naturality condition is the relational structure (how content relates across interfaces). Temporal parametrization gives the process.
- **Information-theoretic formalization** (from information theory): Intent is a regulated information channel with self-modifying capacity. The channel state at any moment is the disposition (the kernel at time t). The structural constraints on valid kernels are the relational structure (the cascade shapes). The time-indexed channel trajectory gives the process.

**The unification finding.** All three Phase 2 formalizations independently demonstrate that the three Phase 1 characterizations are not competing descriptions but three projections of a single mathematical structure. The relationship is analogous to how a sphere projects to circles from three orthogonal directions — the circles look different, but they are views of the same object.

The "slicing" explanation, stated most precisely by the algebraic analysis: the three Phase 1 characterizations correspond to three different ways of slicing the formal object:

- **Fix time** and examine the structured governance content at that moment: you get the *dispositional* characterization.
- **Fix structure** and examine how governance content relates across interfaces: you get the *relational* characterization (the protocol).
- **Fix entities** and examine how governance content evolves: you get the *processual* characterization.

These three slicings are not independent descriptions that happen to be compatible. They are mathematically equivalent views of the same structure — related by well-defined translations between the geometric, algebraic, and information-theoretic presentations.

**Translation relationships.** The three formal objects are different mathematical presentations of the same underlying structure:

- The fiber bundle (geometric) is the geometric representation of the Intent algebra (algebraic).
- The Intent algebra (algebraic) is the algebraic characterization of the governance channel (information-theoretic).
- The channel kernel at each interface IS the fiber value; the cascade shapes ARE the channel coding rules.

Any result proved in one formalization can be translated to the other two. This means the geometric findings about curvature and section existence, the algebraic findings about cascade composition and severity ordering, and the information-theoretic findings about channel capacity and entropy are all different perspectives on the same structural facts.

**What this establishes.** The unification finding resolves the Phase 1 tension: Intent is not irreducibly multi-aspectual. It is a single structured object that presents different faces depending on which dimension is held fixed. This grounds the specification's claim in I.5 that the three characterizations are "three views of one object, not competing descriptions."

### C.6 Machine-Detectable Governance Violations

The cascade shapes defined in §5.5 enable a category of governance tests that operate on structure rather than content. This section describes the structural test categories and the principle underlying them.

**The structure-versus-content principle.** Current governance violation detection requires understanding governance *content* — interpreting whether an action aligns with an intent. The cascade shapes enable a different category of test: structural tests that detect violations based on the *shape* of the governance relationship, without interpreting what the governance content means. A structural test can determine that Purpose has broadened rather than narrowed without understanding what the Purpose is about.

**Five structural test categories.** Each cascade shape defines a corresponding structural test:

| Cascade Shape | Test Category | What Is Tested |
|---|---|---|
| Purpose narrows | Embedding containment | Is the Purpose at level N within the semantic scope of Purpose at level N-1? |
| Boundaries accumulates | Set superset | Is the Boundary set at level N a superset of the Boundary set at level N-1? |
| Key Tasks scopes | Set containment | Are the tasks at level N a subset of the authorized scope at level N-1? |
| Direction contextualizes | Semantic consistency | Is level N's Direction consistent with (not contradictory to) level N-1's Direction? |
| End State derives | Compositional check | Does achieving level N's End State contribute to level N-1's End State? |

The first three test categories (embedding containment, set superset, set containment) are the most structurally tractable — they can be evaluated through geometric and set-theoretic operations without content interpretation. The fourth (semantic consistency) requires richer comparison but remains structural. The fifth (compositional check) approaches the boundary between structural and content-level analysis.

**What this enables.** Structural tests can be automated at every governance interface, providing a first-pass governance check that catches "locally correct but globally incoherent" configurations before execution begins. Violations detected by structural tests are definitive — if Purpose has broadened rather than narrowed, it is a structural violation regardless of how reasonable the broadened Purpose may seem. Human judgment is reserved for the cases that pass structural tests but where alignment is still in question — the hard cases that genuinely require interpretation.

This represents a category change in governance capability. Rather than requiring human (or sophisticated AI) judgment for every governance assessment, structural tests handle the cases where violation is detectable from shape alone. The human governance burden scales with the genuinely ambiguous cases rather than with the total number of governance interfaces.

### C.7 Structural Predictions

The formal analyses produce testable predictions about governance behavior. Each prediction has a theoretical grounding and a proposed testing approach. Publishing these predictions invites independent validation.

**Prediction 1: Delegation depth bound.** Structural analysis predicts that effective delegation chains are bounded at approximately 3-4 levels for aggressive Purpose narrowing. The theoretical grounding comes from both geometric and network-theoretic analyses: Purpose decay across delegation interfaces is exponential (each level narrows the interpretive context), and beyond 3-4 levels the remaining Purpose content is insufficient to meaningfully constrain agent behavior. This is consistent with organizational theory observations about effective management spans.

*Proposed testing approach:* Measure Purpose semantic similarity between the top and bottom of delegation chains of varying depth. The prediction is that Purpose similarity drops below a meaningful threshold at depth 3-4 for aggressive narrowing, and that governance quality (as measured by alignment event classification) degrades correspondingly.

**Prediction 2: Recovery time ordering.** After a governance perturbation (a disruption to the governance relationship at an interface), the five primitives stabilize in inverse rigidity order: Direction recovers fastest (because sheaf restriction admits re-restriction), then Purpose (lattice meet requires re-examination but the structure is recoverable), then End State (pullback requires partial renegotiation), then Key Tasks (subobject inclusion requires re-authorization), while Boundaries remains unchanged (the join-semilattice has no inverse — constraints established before the perturbation persist through it).

*Proposed testing approach:* After governance disruptions (scope changes, organizational restructuring, principal transitions), measure the time to re-establish stable governance state for each primitive independently. The prediction is that Direction stabilizes first and Boundaries requires no stabilization (it was never disrupted).

**Prediction 3: Channel capacity as leading indicator.** The information-theoretic analysis predicts that low channel capacity at a governance interface is a leading indicator of governance failure — it predicts violations before they occur. Channel capacity reflects the interface's ability to carry governance information; when capacity is insufficient for the governance complexity being managed, violations become probabilistically inevitable.

*Proposed testing approach:* At governance interfaces, measure the ratio of governance complexity (number of active primitives, depth of constraint sets, frequency of governance decisions) to channel capacity (communication bandwidth, response latency, interpretation accuracy). The prediction is that interfaces where this ratio approaches 1.0 will exhibit significantly higher violation rates in subsequent periods.

**Prediction 4: Network pathology catalog.** The structural analyses predict specific failure modes in non-tree governance topologies:

- *Boundary explosion* in mesh topologies: when multiple governance paths converge, the accumulated Boundary sets from each path combine, potentially producing a constraint set so restrictive that no meaningful action is authorized.
- *Governance deadlock*: when constraint propagation through a governance network creates contradictory requirements at some node — the node cannot satisfy all constraints simultaneously.
- *Intent amplification*: when multiple principals' intents constructively interfere at a convergence point, producing governance pressure that exceeds what any single principal intended.

*Proposed testing approach:* Deploy governance in non-tree topologies (multiple principals, peer coordination networks) and observe whether these pathologies manifest. The predictions are grounded in geometric analysis (holonomy constraints in mesh topologies), algebraic analysis (constraint composition properties), and network-theoretic analysis (signal propagation in multi-path networks), but have not been operationally validated beyond single-principal tree topologies.
