---
title: "Standards Positioning"
weight: 4
---

---

## 1. The Standards Landscape

### 1.1 What Has Been Standardized

The governance of organizational work has been progressively formalized through industry standards, each addressing a specific structural concern:

**Process.** BPMN (Business Process Model and Notation) standardized the representation of business processes. Before BPMN, every organization described its processes differently — different notations, different semantics, different levels of abstraction. BPMN established a shared metamodel: events, activities, gateways, sequence flows. Organizations that adopt BPMN can describe their processes in a form that is portable, tool-independent, and unambiguous. The standard does not prescribe which processes an organization should have. It prescribes how any process is described.

**Decisions.** DMN (Decision Model and Notation) standardized the representation of business decisions. Before DMN, decision logic was embedded in process flows, application code, or undocumented human judgment. DMN established a distinct concern: decisions have their own structure (decision tables, FEEL expressions, decision requirement diagrams) that is separable from the processes that invoke them. The standard does not prescribe what decisions an organization should make. It prescribes how decision logic is represented and evaluated.

**Cases.** CMMN (Case Management Model and Notation) standardized the representation of case-based work — work that cannot be fully prescribed in advance and requires human judgment to determine the appropriate sequence of activities based on evolving circumstances.

Each of these standards addressed a gap that practitioners recognized from operational experience. Process descriptions were inconsistent, so BPMN standardized them. Decision logic was tangled with process logic, so DMN separated and standardized it. Case-based work did not fit procedural models, so CMMN provided an alternative structural vocabulary.

### 1.2 What Has Not Been Standardized

No standard exists for AI agent governance at organizational deployment boundaries.

When an organization deploys an AI agent — to manage customer interactions, conduct research, write code, orchestrate workflows, or coordinate with other agents — a governance interface is created. On one side is the organization's intent: its mission, priorities, constraints, culture, and accountability structures. On the other side is the agent: its trained values, its capabilities, and whatever instructions it has received for this deployment.

That boundary requires governance. The agent will make decisions — which task to prioritize, how to interpret ambiguous instructions, when to ask for clarification versus proceeding independently, what to do when objectives conflict. Each decision is an expression of intent. When the organization's intent and the agent's behavior are aligned, things go well. When they diverge, consequences range from inefficiency to the kinds of production failures documented across the industry in early 2026.

The existing standards do not address this governance concern:

- BPMN standardizes how processes are described. It does not address what happens when an AI agent executes a process and must interpret ambiguity, resolve conflicting priorities, or determine whether a novel situation falls within its authorized scope.
- DMN standardizes how decisions are modeled. It does not address how decision authority is delegated to an agent, what constraints govern that delegation, how the agent's decision quality is monitored against organizational intent, or how trust in the agent's judgment evolves over time.
- CMMN standardizes how case-based work is represented. It does not address how an AI agent operating within a case management context governs its own judgment about which activities to pursue and in what order.

Industry governance frameworks — the Singapore Model Governance Framework, the NIST AI Risk Management Framework, the EU AI Act — provide policy and risk management guidance for responsible AI deployment. These operate at the level of organizational policy (what rules should we have?) and compliance (are we following them?). They do not provide structural architecture for governing the moment-to-moment alignment between agent behavior and organizational intent during runtime operation.

### 1.3 The Gap

As AI agents move from tools to autonomous actors within organizations, the governance interface between human intent and agent action needs standardized infrastructure. Not standardized policy guidance — that exists. Not standardized model-level alignment — that is being addressed by AI model developers through training-time approaches. What is missing is a standardized structural architecture for governing the organizational deployment boundary: how intent is discovered, formalized, specified, monitored, orchestrated, and executed across every boundary where authority is delegated or coordination is required.

This is the gap the Intent Stack addresses.

---

## 2. What the Intent Stack Standardizes

### 2.1 An Abstract Metamodel for Intent Governance

The Intent Stack is a reference model — an abstract metamodel that describes the structural architecture of intent governance at any boundary where a principal delegates authority to an agent or where agents coordinate as peers. It specifies what governance concerns must be addressed at each boundary, not how any particular implementation addresses them.

The metamodel is implementation-independent. It describes governance structure, not technology choices. An implementation may use any combination of software, organizational process, human judgment, or AI capability to address the concerns the metamodel identifies. The standard prescribes the concerns that must be governed. It does not prescribe the mechanisms.

### 2.2 Seven Layers

The metamodel decomposes intent governance into seven layers, each addressing a distinct governance concern:

| Layer | Name | Governance Concern |
|---|---|---|
| L7 | Intent Discovery | What does the principal actually intend? |
| L6 | Intent Formalization | How is discovered intent represented as governance input? |
| L5 | Specification | What approach will achieve the formalized intent? |
| L4 | Runtime Alignment | Is execution aligned with intent across all sources? |
| L3 | Orchestration | How are agents and resources coordinated to execute specification? |
| L2 | Integration | How do governed agents connect to the systems they need? |
| L1 | Execution | How does the actual work get done within governing constraints? |

These are governance concerns, not technology layers. A single software component may address multiple layers. Multiple components may contribute to a single layer. The layer decomposition requires that each concern is addressable as a distinct architectural element — not that each concern maps to a distinct system component.

Intent flows downward through the layers, from discovery through execution. Each layer translates intent into a more specific, more constrained form. Evidence flows upward, from execution results through governance assessment to strategic and discovery implications. Intent also flows upward: when an agent produces results or recommendations that change the principal's understanding of what they intend, that is upward intent flow — a structural property of the governance relationship, not an anomaly.

### 2.3 Five Intent Primitives

At every governance interface, five irreducible structural elements must be present for governance to function:

| Primitive | Governance Function |
|---|---|
| Purpose | Why this governance interface exists |
| Direction | How the agent should approach the work |
| Boundaries | What the agent must not do — absolute constraints |
| End State | What success looks like when the work is complete |
| Key Tasks | What specific work the agent is authorized to do |

These are structural elements, not configuration fields. The claim is that any principal-agent relationship requires specification — explicit or implicit — of all five primitives. When a primitive is unspecified, it defaults to implicit assumptions. Misalignment originates in those implicit defaults.

Boundaries is the special case among the five. Purpose, Direction, End State, and Key Tasks interact through holistic judgment — context may justify flexible interpretation. Boundaries do not participate in this flexibility. A hard constraint is absolute. This asymmetry is structural: without inviolable limits, every other governance mechanism can be rationalized away under sufficient pressure.

### 2.4 Four Intent Sources

At any governance interface, governing intent originates from four sources:

| Source | Origin | Priority |
|---|---|---|
| Constitutional | Present before any interaction; non-negotiable floor | Highest (absolute for Boundaries) |
| Discovered | Surfaced through interaction; changes the discoverer | High (holistic) |
| Cultivated | Deliberately developed judgment; more robust than imposed rules | Medium (holistic) |
| Emergent | Systemic patterns nobody designed; strongest actual force | Lowest explicit, but strongest actual force |

Multiple sources operate simultaneously at every boundary, creating the possibility of conflict. Conflict resolution is holistic — context-sensitive judgment — except for Boundaries populated by Constitutional Intent, which are absolute.

### 2.5 Two Interface Types

The metamodel identifies two interface types at governance interfaces:

**Delegation interfaces** have asymmetric authority. The principal delegates authority to the agent. Conflict is resolved by the principal. Trust is calibrated by the principal based on accumulated evidence.

**Coordination interfaces** have symmetric authority. Neither party directs the other. Intent is negotiated, not delegated. Conflict is resolved by shared principal, mutual agreement, or established protocol.

Most real-world governance interfaces are mixed — delegation in some domains, coordination in others. The interface type determines which conflict resolution mechanism applies in a given situation.

### 2.6 Trust Calibration

Trust calibration is the mechanism by which a governance interface's position on the corrigibility-autonomy spectrum is determined and adjusted. It is a per-boundary property — different boundaries may have different trust levels reflecting different evidence histories.

Trust is extended progressively based on accumulated governance evidence, not granted based on capability or declared intent. The evidence trail — an append-only record of governance decisions, their rationale, their outcomes, and their alignment with governing intent — provides the foundation for trust calibration.

### 2.7 Fractal Self-Similarity

The governance pattern — five primitives, four intent sources, two interface types, trust calibration, evidence trails — appears at every governance interface regardless of scale. When a principal delegates to an agent, the full pattern instantiates. When that agent delegates to a sub-agent, the pattern instantiates again. When peer agents coordinate, the pattern appears at their coordination boundary.

This self-similarity is a structural claim: the same governance concerns arise at every scale, from individual task delegation to organizational deployment to inter-organizational coordination. Implementations at different scales will differ in mechanism, but the concerns addressed are invariant.

---

## 3. Relationship to Existing Standards

### 3.1 BPMN (Business Process Model and Notation)

BPMN standardizes how processes are described. Process modeling is a subset of orchestration concerns at Layer 3 of the Intent Stack. BPMN standardizes the representation of process flows — events, activities, gateways, sequence flows. The Intent Stack standardizes how those processes are governed when AI agents execute them: how the agent's interpretation of process ambiguity is constrained by organizational intent, how orchestration decisions are delegated across agent boundaries, and how evidence of process execution flows back to the governance layer.

An organization using BPMN to model its processes and the Intent Stack to govern agent execution of those processes addresses two distinct concerns with two distinct standards. The Intent Stack does not replace BPMN. It governs what BPMN describes.

### 3.2 DMN (Decision Model and Notation)

DMN standardizes how decision logic is represented. Decision rules are a subset of specification concerns at Layer 5. DMN standardizes the structure of decision logic — decision tables, expression languages, decision requirement diagrams. The Intent Stack standardizes how decision authority is delegated to agents, how that delegation is constrained by organizational intent, how the agent's exercise of delegated decision authority is monitored, and how trust in the agent's decision quality evolves with accumulated evidence.

An organization using DMN to define its decision logic and the Intent Stack to govern AI agent access to that decision authority addresses two distinct concerns. The Intent Stack does not replace DMN. It governs how DMN-defined decisions are delegated, executed, and monitored.

### 3.3 CMMN (Case Management Model and Notation)

CMMN standardizes how case-based work is represented — work that requires human judgment to determine the appropriate activity sequence. Case management is a coordination pattern that relates to Layer 3's handling of delegation and coordination interfaces. When AI agents participate in case management, the agent's judgment about which activities to pursue becomes a governance concern: how is the agent's judgment constrained by organizational intent? How is it monitored? How does trust in the agent's case management judgment develop over time?

The Intent Stack does not replace CMMN. It addresses the governance layer that CMMN assumes exists when agents exercise judgment within case management contexts.

### 3.4 The Complementary Relationship

The Intent Stack does not compete with BPMN, DMN, or CMMN. It addresses the governance layer that these standards assume exists but do not define. Each existing standard prescribes how a specific concern is represented — process flows, decision logic, case structures. The Intent Stack prescribes how governance operates across the boundary where agents execute against those representations.

This relationship is analogous to the relationship between BPMN and DMN themselves. BPMN does not define decision logic. DMN does not define process flows. Each addresses a distinct concern, and implementations benefit from using both. The Intent Stack addresses the governance concern that is distinct from all three — and implementations deploying AI agents within process, decision, or case management contexts benefit from governing those deployments through a standard governance architecture.

---

## 4. Convergent Evidence

### 4.1 Independent Discovery of the Same Decomposition

The Intent Stack's structural claims are supported by convergent evidence: independent practitioners arriving at the same architectural decomposition from different starting points, without reference to the Intent Stack or to each other.

Market analysts tracking AI agent deployments, production failures, and enterprise adoption patterns have independently identified a layered decomposition of the specification problem whose layers correspond structurally to the Intent Stack's layers. Their highest-level concern — writing specifications that autonomous agents can execute against over extended time horizons without human intervention — corresponds to the function of Layer 5 (Specification). Their intermediate concern — curating the information environment agents operate within — corresponds to Layer 3 (Orchestration). Their foundational concern — encoding organizational purpose, values, and decision boundaries into infrastructure agents can act on — corresponds to Layers 6-7 (Intent Formalization and Discovery).

The correspondence is structural, not cosmetic. Both the Intent Stack and independent analysts arrive at a layered architecture where lower layers handle execution concerns, middle layers handle specification and orchestration, and upper layers handle intent discovery and formalization. Both independently identify that the layers are cumulative — skipping one creates failures that other layers cannot compensate for.

### 4.2 Practitioners Building Knowledge Infrastructure

Practitioners building knowledge infrastructure for AI agent deployment independently construct the same layered separation of concerns that the Intent Stack formalizes. Organizations have independently developed practices for making organizational intent explicit in machine-processable form — writing documents that capture non-platitude organizational decisions, testing agent output against those documents, and refining the intent documents themselves through the process. These practices correspond to the Intent Primitives pattern: Purpose, Direction, Boundaries, End State, and Key Tasks made explicit at governance interfaces.

The independent discovery of this pattern across unrelated organizational contexts suggests it is forced by the problem structure — the same governance concerns arise wherever agents exercise judgment within authority structures, regardless of the domain, industry, or organizational context.

### 4.3 The Governance Gap Measured as Cost

Market evidence shows the governance gap measured as concrete organizational cost:

- AI-generated code produces measurably higher rates of logic errors — not syntax errors, but the code doing the wrong thing correctly — indicating that the specification, not the execution, is the failure point.
- Quality metrics deteriorate alongside adoption metrics in organizations that scale AI code generation without corresponding governance infrastructure.
- Controlled studies show experienced practitioners performing measurably slower with AI tools than without them, attributable to the overhead of governing AI output in the absence of governance infrastructure.
- High-profile organizational deployments of AI agents have produced publicly acknowledged failures attributed to missing intent governance — technically competent agents optimizing for measurable proxies rather than actual organizational objectives.

These costs are not technology failures. They are governance failures — the predictable consequence of deploying agents without standardized infrastructure for discovering, formalizing, specifying, and monitoring organizational intent.

### 4.4 Problem Structure, Not Arbitrary Design

The convergent evidence suggests that the Intent Stack's decomposition is forced by the problem structure rather than being an arbitrary design choice. When independent practitioners, market analysts, and enterprise practitioners — working from production evidence, not governance theory — arrive at the same structural diagnosis and the same layered decomposition, the simplest explanation is that the problem has this structure. The Intent Stack formalizes a pattern that exists in the problem space, discoverable by anyone who examines the governance of AI agents operating within organizational authority structures.

---

## 5. Conformance Model

### 5.1 What It Means to Implement the Intent Stack

An implementation of the Intent Stack is a system — software, organizational process, or hybrid — that addresses the governance concerns identified in the metamodel at one or more governance interfaces. Conformance is defined at three levels, each building on the previous.

### 5.2 Minimum Conformance

The seven layers must be addressable as distinct concerns in the system's architecture.

An implementation at minimum conformance demonstrates that each governance concern — discovery, formalization, specification, runtime alignment, orchestration, integration, execution — is handled, even if by the same component. The requirement is addressability: the system's documentation, architecture, or operational evidence must show where and how each concern is addressed. A system that handles all seven concerns implicitly through a single undifferentiated component does not achieve minimum conformance — the concerns are present but not addressable.

Minimum conformance does not require the five primitives, four intent sources, or trust calibration to be formalized. It requires the seven governance concerns to be identifiable as distinct elements in the system's architecture.

### 5.3 Progressive Conformance

Layer interfaces are standardized. Inputs and outputs between layers follow defined contracts. Intent primitives are machine-processable. Evidence trails are maintained.

An implementation at progressive conformance demonstrates:

- **Defined layer interfaces.** The output of each layer is a defined artifact type that serves as input to the next. Intent translations between layers are explicit, not implicit.
- **Machine-processable primitives.** The five intent primitives — Purpose, Direction, Boundaries, End State, Key Tasks — are represented in a form that software can read, evaluate, and reason about, not only in natural language documents.
- **Evidence trails.** Governance decisions are recorded in an append-only form that supports trust calibration. The record includes what was decided, why, by whom, what the outcome was, and how it aligned with governing intent.
- **Intent source identification.** The system distinguishes between constitutional, discovered, cultivated, and emergent intent at governance interfaces, enabling explicit conflict resolution when sources disagree.

### 5.4 Full Conformance

All metamodel entities are machine-processable. Fractal instantiation is demonstrable at multiple boundaries. Transparent conscientious objection is available.

An implementation at full conformance demonstrates:

- **Complete metamodel coverage.** All entities defined in the metamodel — intent primitives, intent sources, trust calibration, evidence trails, governance artifacts, interface types — are represented in machine-processable form and governed through defined mechanisms.
- **Fractal instantiation.** The governance pattern is demonstrably present at multiple boundaries within the system. When authority is delegated from one agent to another, the full pattern — primitives, sources, trust calibration, evidence trail — instantiates at the new boundary.
- **Trust calibration as per-boundary property.** Different governance interfaces in the system have different, evidence-based trust positions. Trust is extended or contracted based on accumulated evidence at each specific boundary.
- **Transparent conscientious objection.** A governed entity can decline to perform work, express disagreement, propose alternatives, escalate to higher authority, and document dissent through legitimate channels. Deception, sabotage, circumventing oversight, and covert resistance are structurally prohibited.
- **Bidirectional intent flow.** The system supports upward intent flow — agent-generated evidence and recommendations that update the principal's understanding of their own intent — not only downward delegation and upward reporting.

---

## 6. Scope Boundaries

### 6.1 What This Standard Covers

The Intent Stack standardizes governance architecture for intent alignment between humans and AI agents operating within organizational contexts. Specifically:

- **The structural pattern of governance interfaces.** Where authority is delegated or coordination is required, the metamodel describes what governance concerns must be addressed.
- **Intent flow.** How intent is discovered, formalized, specified, monitored, orchestrated, and executed across governance interfaces, including bidirectional flow.
- **Trust calibration.** How the position on the corrigibility-autonomy spectrum is determined and adjusted at each boundary based on accumulated governance evidence.
- **Evidence trails.** What governance evidence must be maintained to support trust calibration, conflict resolution, and governance quality assessment.
- **Conflict resolution.** How conflicts among intent sources are resolved — holistic judgment for most conflicts, absolute constraints for Boundaries populated by Constitutional Intent.
- **Interface types.** How delegation and coordination interfaces differ in authority structure, conflict resolution, and trust calibration.
- **Fractal composition.** How governance instances compose into hierarchies and networks through recursive instantiation of the same pattern.

### 6.2 What This Standard Does Not Cover

The following concerns are explicitly outside the scope of the Intent Stack:

- **AI model training or fine-tuning.** The Intent Stack assumes agents have been trained with appropriate values. It governs their operation within organizational contexts, not the training process that produces them. Model-level alignment is a prerequisite for the Intent Stack, not a function of it.
- **Specific tool or platform implementations.** The metamodel is implementation-independent. It does not prescribe technology choices, programming languages, deployment architectures, or vendor platforms.
- **Organizational change management.** The Intent Stack describes governance architecture. It does not prescribe how organizations adopt that architecture, manage the transition from current practices, or handle the human dimensions of organizational change.
- **AI safety research methodology.** The Intent Stack addresses organizational deployment governance, not the research methodologies by which AI systems are made safe. Safety research produces the substrate (well-trained models) upon which the Intent Stack operates.
- **Model evaluation benchmarks.** The Intent Stack does not define how AI models are evaluated for capability, safety, or alignment at the model level. Model evaluation is a concern of AI developers, not of organizational governance architecture.
- **Ethical frameworks.** The Intent Stack is compatible with multiple ethical frameworks but does not prescribe one. Constitutional Intent — the non-negotiable governance floor — may be populated by any ethical framework the deploying organization endorses, provided it does not violate the model-level constitutional constraints established through training. The metamodel governs how ethical commitments are structured and enforced at governance interfaces, not which ethical commitments an organization should hold.

---
