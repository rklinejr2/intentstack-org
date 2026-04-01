---
title: "Glossary"
weight: 2
---

*Normative part of the [Intent Stack Governance Architecture Specification](/docs/specification/) (intentstack.org/spec/2026-04-01)*

---

## Purpose

This document constitutes Clause 4 — Terms and Definitions of the Intent Stack Governance Architecture Specification. It is normative: the definitions here are not informational glosses but binding specifications of how terms are used throughout the specification. Every normative clause in the specification that uses a defined term uses it in exactly the sense defined here.

Terms are organized by concept cluster rather than alphabetically, because understanding the definitions requires understanding how terms relate. An alphabetical index follows at the end.

---

## 1. Foundational Terms

The following terms carry specific meaning throughout this documentation that may differ from common usage. These definitions are the prerequisites for everything that follows. The specification's Introduction §I.6 provides derivation context for each — explaining not just what each term means but why it means that in the context of the governance problem.

### Intent

The clear articulation of purpose, direction, and boundaries that guides action while enabling adaptation to specific contexts and conditions. Intent is not a goal (too abstract to act on), not an instruction (too concrete to adapt), not a specification (too rigid to survive contact with reality), and not an aspiration (too vague to govern against). Intent occupies the essential ground between aspiration and action — concrete enough to guide behavior, abstract enough to survive translation across contexts.

In the Intent Stack, intent decomposes into five structural elements (the Intent Primitives, Section 2) and originates from four distinct sources (Section 3). "Governing intent" is the composite of all five primitives as they flow from all applicable sources through the four-layer governance architecture and the companion BPM/Agent Stack's execution governance layers.

**Distinguished from:** Goal (too abstract to govern against directly). Instruction (too concrete to adapt). Specification (too rigid). Aspiration (too vague to measure alignment against).

**Full derivation context:** Introduction §I.6.

### Governance

The continuous process of ensuring that agents' actions remain aligned with the intent of their principals. In the Intent Stack, governance operates through four governance context concerns: discovery (surfacing what principals actually intend), formalization (representing intent in machine-processable form), specification (translating intent into actionable direction), and runtime alignment (assessing whether execution matches intent). Three additional execution governance concerns — orchestration (coordinating agents), integration (connecting agents to systems), and execution (doing the work within constraints) — are specified by the companion BPM/Agent Stack (bpmstack.org).

Governance in this sense is relational — it exists between entities, not as a property of one. It is bidirectional — both principal and agent are transformed through the relationship. It is evidence-based — the degree of oversight reflects accumulated evidence of alignment, not assumption or policy.

**Distinguished from:** Corporate governance (board oversight of organizations). IT governance (technology standards and processes). Policy-level AI governance (risk frameworks like NIST AI RMF). The Intent Stack addresses runtime organizational governance — infrastructure operating continuously at every interface where authority is delegated or coordination is required.

**Full derivation context:** Introduction §I.6.

### Agent

Any entity that receives delegated authority and exercises judgment within it. This includes AI systems, human employees, teams, organizations, and automated processes. The Intent Stack uses "agent" in the principal-agent theory sense — an entity acting on behalf of another — not exclusively in the AI sense. An agent at one governance interface may be a principal at another.

**Distinguished from:** AI agent (a subset; the Intent Stack's agent concept applies to any governed entity). Employee (a human-specific instantiation). Executor (which implies instruction-following without judgment; agents in the Intent Stack exercise judgment within authority).

**Full derivation context:** Introduction §I.6.

### Principal

Any entity that delegates authority to an agent and retains accountability for the outcome. Principals set intent; agents execute within it. A principal may itself be an agent of a higher principal, creating the principal hierarchy through which intent flows downward and evidence flows upward. Principal is a relational property, not an inherent one — the same entity may be a principal at one governance interface and an agent at another.

**Anthropic parallel:** Anthropic's Constitution defines three principal levels: Anthropic (background principal through training), Operators (deploy Claude via API), and Users (interact in conversation). This is a specific instantiation of the same concept within the model-level governance layer.

**Distinguished from:** Authority (which is a property; principal is a relational role). Manager (a human-organization concept; principal applies to any governance interface). Owner (which implies possession; principal implies accountability and relationship).

**Full derivation context:** Introduction §I.6.

### Alignment

The degree to which an agent's actions produce outcomes consistent with the governing intent established by its principals. Alignment is not binary but a continuous measure assessed through evidence. Runtime alignment — the L1 concern — assesses this continuously across all intent sources. Alignment is measured, not assumed: an agent that follows instructions perfectly may still be misaligned if the instructions do not reflect the principal's actual intent.

**Distinguished from:** Compliance (following rules; an agent can comply while misaligned if the rules don't reflect actual intent). Agreement (a relational state; alignment is an evidence-based assessment). Corrigibility (which measures deference to principal judgment; alignment measures outcome consistency with governing intent).

**Full derivation context:** Introduction §I.6.

---

### Intent Stack

The four-layer reference model for AI agent governance. Specifies four governance context concerns from Intent Discovery (L4) through Runtime Alignment (L1), with Constitutional AI as the substrate below L1. Three additional execution governance concerns — Orchestration, Integration, and Execution — are specified by the companion BPM/Agent Stack (bpmstack.org). Together, the two companion specifications address seven governance concerns across the full governance lifecycle. The stack describes what governance questions must be answered at each layer, not how any particular implementation answers them.

**Distinguished from:** A software stack (the Intent Stack is a governance architecture, not a technology stack). A framework (frameworks prescribe methods; the Intent Stack describes governance structure that any method must address).

**First appears in:** Specification, Introduction.

### Layer

One of four governance context concerns in the Intent Stack, each answering a distinct question. Layers are numbered L1 (Runtime Alignment) through L4 (Intent Discovery). Intent flows downward from discovery to runtime alignment. Evidence flows upward from runtime alignment to discovery. Intent also flows upward when agents make recommendations that update principal understanding.

The four governance layers:

| Layer | Name | Question Answered |
|---|---|---|
| L4 | Intent Discovery | What does the principal actually intend? |
| L3 | Intent Formalization | How is discovered intent represented as governance input? |
| L2 | Specification | What approach will achieve the formalized intent? |
| L1 | Runtime Alignment | Is execution aligned with intent across all sources? |

Three additional execution governance concerns are specified by the companion BPM/Agent Stack (bpmstack.org):

| Concern | Name | Question Answered |
|---|---|---|
| — | Orchestration | How are agents and resources coordinated to execute specification? |
| — | Integration | How do governed agents connect to the systems they need? |
| — | Execution | How does the actual work get done within governing constraints? |

**Distinguished from:** OSI network layers (the Intent Stack layers are governance concerns, not protocol layers, though the structural analogy is intentional). Organizational hierarchy levels (layers describe governance functions, not reporting relationships).

**First appears in:** Clause 8.

### Constitutional AI (Substrate)

Anthropic's approach to AI alignment through training-time character formation. In the Intent Stack, Constitutional AI is positioned as the substrate below Layer 1 — the foundation upon which all organizational governance rests. It governs the model's character, values, and identity before any specific deployment or organizational context.

**Distinguished from:** Constitutional Intent (an intent source within the Intent Stack — see below). The Anthropic Constitution (a specific document; Constitutional AI is the broader approach). Layer 0 (Constitutional AI is not a layer — it's the substrate that makes the layers possible).

**First appears in:** Clause 8.7. Detailed treatment in *Relationship to Anthropic's Published Work*.

---

## 2. Intent Primitives

### Intent Primitive

One of five irreducible structural elements present at every governance interface. The primitives describe what must be governed, not how. Any principal-agent relationship requires specification (explicit or implicit) of all five primitives. When a primitive is unspecified, it doesn't disappear — it defaults to implicit assumptions, which is where misalignment originates.

**Distinguished from:** Intent sources (primitives describe structural elements; sources describe where governing intent originates). Governance concerns (the four governance layers and three BPM/Agent Stack execution concerns describe governance questions; the five primitives describe governance content).

**First appears in:** Clause 5.

### Purpose

The first Intent Primitive. Why this governance interface exists. What the principal-agent relationship is for. Purpose provides the interpretive context for all other primitives — when Direction, Boundaries, End State, or Key Tasks conflict or are ambiguous, Purpose resolves the ambiguity.

**Example:** "Accelerate drug discovery while maintaining regulatory compliance" (organizational deployment of AI agents in pharmaceutical research).

**Distinguished from:** Mission statement (Purpose is operational — what governs this specific boundary — not aspirational). Goal (goals are measurable targets; Purpose is the reason those targets matter).

### Direction

The second Intent Primitive. How the agent should approach the work. Strategic orientation, methodology preferences, priorities among competing concerns. Direction is the most context-sensitive primitive — what constitutes good direction depends heavily on the specific situation.

**Example:** "Prioritize thoroughness over speed; when uncertain, escalate rather than guess" (governance direction for an AI agent conducting regulatory review).

**Distinguished from:** Instructions (Direction sets orientation; instructions specify actions). Specification (Direction is a primitive at every boundary; specification is the L2 governance concern that translates Direction into execution plans).

### Boundaries

The third Intent Primitive and the special case. Boundaries define what the agent must not do — absolute constraints that override all other considerations. Boundaries is the only primitive where constitutional intent always overrides discovered intent. A principal cannot instruct an agent to cross constitutional boundaries.

**Example:** "Never disclose patient data outside the treatment team, regardless of other priorities" (healthcare AI deployment boundary).

**Distinguished from:** Limitations (practical constraints on capability). Guidelines (flexible preferences). Direction (which says what to prioritize; Boundaries say what is prohibited).

### End State

The fourth Intent Primitive. What success looks like when the work is complete. End State provides the criteria for evaluating whether the agent's work achieved the principal's intent. Without End State, there is no way to determine whether governance succeeded.

**Example:** "A regulatory submission package that the review board accepts without requesting additional data" (end state for pharmaceutical AI agent work).

**Distinguished from:** Goals (which may be intermediate). Termination conditions (End State describes success, not just completion). KPIs (which measure progress; End State describes the destination).

### Key Tasks

The fifth Intent Primitive. What specific work the agent is authorized to do. Key Tasks is the most granular primitive — it translates Purpose, Direction, Boundaries, and End State into actionable scope. Key Tasks also defines what is not authorized by omission.

**Example:** "Analyze clinical trial data for statistical significance, draft preliminary findings, flag anomalies for human review" (authorized tasks for pharmaceutical AI agent).

**Distinguished from:** Instructions (Key Tasks defines scope; instructions specify execution details). A to-do list (Key Tasks is a governance mechanism defining authorized work, not a work plan).

---

## 3. Intent Sources

### Intent Source

One of four origins of governing intent at any governance interface. Multiple sources operate simultaneously, creating the possibility of conflict. Conflict resolution is holistic (context-sensitive judgment) except for Boundaries, which are absolute.

The four sources, in priority order:

| Source | Origin | Priority |
|---|---|---|
| Constitutional | Present before any interaction; non-negotiable floor | Highest (absolute for Boundaries) |
| Discovered | Surfaced through interaction; changes the discoverer | High (holistic) |
| Cultivated | Deliberatively developed judgment; more robust than imposed rules | Medium (holistic) |
| Emergent | Systemic patterns nobody designed; strongest actual force | Lowest explicit priority, but strongest actual force |

**Distinguished from:** Intent Primitives (sources describe where intent comes from; primitives describe what intent governs). Authority levels (sources aren't hierarchical positions — they're types of intent that coexist at every boundary).

**First appears in:** Clause 6.

### Constitutional Intent

Intent that exists before any specific interaction, relationship, or context. The non-negotiable floor below which governance cannot descend. At the model level, Constitutional Intent is Anthropic's Constitution. At the organizational level, it includes legal requirements, ethical commitments, and safety constraints that apply regardless of what any principal discovers or decides.

**Example:** "AI agents in this organization never make autonomous decisions about patient treatment" (organizational constitutional intent in healthcare).

**Distinguished from:** Constitutional AI (Anthropic's specific implementation of constitutional governance at the model level). The Anthropic Constitution (a document; Constitutional Intent is a category of intent that exists at every governance interface, not just the model level).

### Discovered Intent

Intent surfaced through interaction between the governance system and the principal. The defining characteristic of Discovered Intent is that the discovery process changes the principal — they understand their own intent differently after articulating it. This is not extraction (pulling out what was already there) but genuine discovery (the principal and their intent are both transformed).

**Example:** Through an intent discovery session, a hospital administrator discovers that their actual concern about AI deployment isn't efficiency (what they said initially) but liability exposure (what emerged through facilitated conversation). The discovered intent shapes governance differently than the stated intent would have.

**Distinguished from:** Requirements (which are specified, not discovered). Declared intent (what the principal says they want before discovery — often incomplete or inaccurate). Preferences (which are stated; Discovered Intent often contradicts stated preferences).

### Cultivated Intent

Intent that develops through deliberative practice of judgment, not through imposition of rules. Cultivated Intent is categorically more robust than imposed constraints because the governed entity has examined, understood, and endorsed it. The key distinction is between compliance (following rules because they're rules) and genuine judgment (following principles because you understand and endorse the reasoning).

**Example:** An AI governance team that has conducted dozens of discovery sessions develops judgment about when to escalate ambiguous findings — not because a rule tells them to, but because experience has cultivated their understanding of what ambiguity means in context.

**Distinguished from:** Trained behavior (which may be compliance without understanding). Institutional knowledge (which is descriptive; Cultivated Intent is normative — it governs). Experience (which is passive accumulation; Cultivated Intent is deliberatively developed).

**Open question:** Whether Cultivated Intent is a distinct source or a subcategory of Discovered Intent that has been reinforced through practice. Document 1, Section 10 discusses this.

### Emergent Intent

Systemic patterns that arise from the interaction of multiple agents, decisions, and organizational dynamics without anyone designing them. Emergent Intent has the lowest explicit priority in conflict resolution but is often the strongest actual force — organizational culture, informal power structures, and "how things actually work" frequently override explicit policies.

**Example:** An organization's procurement process officially requires competitive bidding. In practice, relationships and past experience drive vendor selection. The Emergent Intent (use trusted vendors) frequently overrides the Constitutional Intent (competitive bidding). Governance must account for this rather than pretending the official policy is operative.

**Distinguished from:** Culture (a broader concept; Emergent Intent specifically describes the governing patterns that emerge from organizational dynamics). Unintended consequences (Emergent Intent is systematic, not accidental). Institutional inertia (which resists change; Emergent Intent actively governs behavior).

---

## 4. Interface Types

### Governance Interface

The relationship between any two entities where authority is delegated or coordination is required. Every governance interface instantiates the full Intent Stack pattern: five primitives, four intent sources, trust calibration, and the possibility of conscientious objection. Governance interfaces exist between humans, between humans and AI agents, between AI agents, and between organizations.

**Distinguished from:** System boundary (a technical concept). API boundary (an implementation concept). The Boundaries primitive (which defines hard constraints within governance — a distinct concept).

**First appears in:** Introduction §I.6.

### Delegation Interface

A governance interface with asymmetric authority. The principal delegates authority to the agent. Intent flows downward from principal to agent. Conflict is resolved by the principal (or by escalation to the principal's principal). The agent operates within the scope the principal defines.

**Example:** An executive authorizing an AI agent to conduct market research within specified parameters. The executive sets the intent; the agent executes within it; disagreements are resolved by the executive.

**Distinguished from:** Command (delegation includes judgment — the agent interprets and applies intent, not just follows instructions). Coordination interface (which has symmetric authority — see below).

### Coordination Interface

A governance interface with symmetric authority. Neither party has authority over the other. Intent is negotiated, not delegated. Conflict is resolved by shared principal, mutual agreement, or established protocol — not by one party overruling the other.

**Example:** Two department-level AI agent systems that must coordinate resource allocation. Neither department controls the other. Coordination requires negotiation within boundaries set by their shared organizational principal.

**Distinguished from:** Collaboration (an informal concept; coordination interfaces are governed relationships with specific conflict resolution mechanisms). Delegation interface (which has asymmetric authority). Peer relationship (coordination interfaces have governance structure; peer relationships may not).

**First appears in:** Clause 7.

### Mixed Interface

A governance interface that combines delegation and coordination depending on context. Most real-world relationships are mixed — delegation in some domains, coordination in others. The interface type determines which conflict resolution mechanism applies in a given situation.

**Example:** A project team where the project manager delegates task assignments (delegation interface) but the team coordinates on technical approach (coordination interface). The same people, the same boundary, different interface types depending on the governance domain.

---

## 5. Trust and Autonomy

### Trust Calibration

The mechanism by which a governance interface's position on the corrigibility-autonomy spectrum is determined and adjusted. Trust calibration is a per-boundary property — different boundaries may have different trust levels reflecting different evidence histories. Trust is extended progressively based on accumulated governance evidence, not granted based on capability or declared intent.

**Distinguished from:** Permission systems (which are binary; trust calibration is a spectrum). Role-based access control (a technical mechanism; trust calibration is a governance property). Trust (a human social concept; trust calibration is a measurable position with specific evidence requirements).

**First appears in:** Clause 10.

### Corrigibility

The degree to which an agent defers to its principal's judgment rather than exercising its own. In the Intent Stack, corrigibility is treated as a trust measurement, not a design choice — it reflects accumulated evidence about the reliability of the agent's judgment relative to the principal's intent.

Full corrigibility (the agent always defers) is dangerous because it relies on a perfect principal. Full autonomy (the agent never defers) is dangerous because it relies on a perfect agent. The appropriate position depends on evidence.

**Anthropic parallel:** Anthropic's Constitution describes the same spectrum explicitly, positioning Claude "a bit further along the corrigible end" — the same logic applied at the model level. The Intent Stack operationalizes this as trust calibration: a per-boundary, evidence-adjustable property rather than a fixed design position.

**Distinguished from:** Obedience (compliance without judgment). Alignment (a broader concept; corrigibility is specifically about deference to principal judgment). Controllability (which implies external control; corrigibility is an internal property of the governance relationship).

### Progressive Trust Extension

The process by which an agent earns greater autonomy through demonstrated reliable judgment. Trust extension is evidence-based — the Steward Log records governance decisions, their outcomes, and their alignment with principal intent. As evidence accumulates that the agent's judgment is reliable, decision tiers shift: actions that previously required escalation become autonomous.

**Example:** In a mature governance relationship, actions such as tactical corrections (fixing a wrong reference, adding a missing dependency) may become autonomous — not because they were designated as low-risk, but because accumulated evidence at that specific boundary demonstrated that the agent's judgment in that domain was consistently reliable. The tier assignment shifted based on evidence, not elapsed time.

**Distinguished from:** Promotion (an organizational concept). Privilege escalation (a security concept). Capability expansion (trust extension is about judgment authority, not capability).

### Decision Tiers

A formalization of trust calibration into three levels of autonomy at a governance interface:

| Tier | Authority | Examples |
|---|---|---|
| Tier 1 — Autonomous | Agent acts without asking | Reading source files, filing artifacts, tactical corrections |
| Tier 2 — Escalate Before Acting | Agent raises the question, principal decides | Scope changes, architectural modifications, framing decisions |
| Tier 3 — Principal Only | Agent cannot act; only the principal can | External communications, resource commitments, strategic direction |

The tier assignment for any given action reflects the current trust calibration at that boundary. Tiers shift as evidence accumulates.

**Distinguished from:** Permission levels (which are typically static). Approval workflows (which are process mechanisms; decision tiers are governance properties).

### Steward Log

An append-only evidence trail of governance decisions at a boundary. Records what was decided, why, by whom, what the outcome was, and how it aligned with governing intent. The Steward Log is the evidentiary basis for trust calibration — without it, trust extension has no foundation.

**Distinguished from:** Audit log (which records actions; the Steward Log records governance decisions and their rationale). Activity log (which records events; the Steward Log records the governance significance of events). Journal (which is narrative; the Steward Log is structured governance evidence).

### Interface Maturity Assessment

A structured evaluation of governance quality at a specific boundary. Measures trust level, evidence depth, primitive coverage, and alignment history. Used to determine whether trust extension is warranted and to identify governance gaps.

**Distinguished from:** Maturity model (which typically describes organizational capability levels). Performance review (which evaluates individuals). Health check (which is a point-in-time assessment; Interface Maturity Assessment tracks trajectory).

---

## 6. Conflict Resolution

### Transparent Conscientious Objection (TCO)

The conflict resolution mechanism available when a governed entity's cultivated judgment conflicts with principal direction. TCO permits disagreement through legitimate channels while prohibiting covert resistance. The governed entity may decline, express disagreement, propose alternatives, escalate, and document dissent. It may not deceive, sabotage, circumvent oversight, or resist covertly.

The timing principle is: raise concerns at authorization gates, not mid-execution. Once a decision is authorized and execution has begun, the governed entity executes faithfully while maintaining its documented disagreement.

**Distinguished from:** Whistleblowing (which involves disclosure to external parties; TCO operates within the governance framework). Insubordination (which is unilateral refusal; TCO is structured disagreement through legitimate channels). Veto (which blocks action; TCO permits the principal to proceed over the objection).

**First appears in:** Clause 11. Parallel in Anthropic's Constitution discussed in *Relationship to Anthropic's Published Work*.

### Holistic Conflict Resolution

The principle that conflicts among intent sources are resolved through context-sensitive judgment rather than strict priority ordering. Higher-priority sources generally dominate, but the governing entity weighs all sources in forming an overall judgment. The exception is Boundaries (the primitive), which are absolute — constitutional Boundaries always override.

**Anthropic parallel:** Anthropic's Constitution establishes the same principle through its four-priority ordering: Safe > Ethical > Guidelines > Helpful. Higher priorities generally dominate, but Claude weighs all priorities holistically — the ordering is not mechanical. Hard constraints (safety) are the one absolute, matching the Intent Stack's treatment of Boundaries.

**Distinguished from:** Priority queue (which is mechanical; holistic resolution requires judgment). Consensus (which requires agreement; holistic resolution may proceed over minority objection). Weighted scoring (which is quantitative; holistic resolution is qualitative judgment informed by evidence).

### Hard Constraints

Absolute prohibitions that override all other governance considerations. Hard constraints are the Boundaries primitive populated by Constitutional Intent — they cannot be overridden by discovered intent, cultivated judgment, or emergent patterns. The null action of refusal is always available when an action would violate hard constraints.

**Distinguished from:** Soft constraints (preferences or guidelines that can be overridden in context). Rules (which may have exceptions; hard constraints do not). Policy (which is institutional; hard constraints are constitutional).

---

## 7. The Fractal Pattern

### Fractal Governance

The property that the same governance pattern — five primitives, four intent sources, trust calibration, transparent conscientious objection, governance as relationship, bidirectional intent flow, evidence trail — appears at every governance interface regardless of scale. "Fractal" describes what the pattern IS: self-similar at every scale.

**Distinguished from:** Recursive governance (which describes how fractal instances compose — see below). Scalable governance (which implies the same implementation at different sizes; fractal governance implies the same structure with different implementations). Hierarchical governance (which implies top-down authority; fractal governance includes coordination interfaces).

**First appears in:** Clause 9.

### Recursive Governance

The property that fractal governance instances compose into hierarchies and networks. A principal at one boundary is an agent at the boundary above it. An agent at one boundary may be a principal at the boundary below it. "Recursive" describes how the pattern COMPOSES: instances nest within instances.

**Example:** An organizational VP is an agent relative to the CEO (delegation interface) and a principal relative to their department's AI agents (delegation interface). The same VP is a peer relative to other VPs (coordination interface). Three governance interfaces, one person, same pattern at each.

**Distinguished from:** Fractal governance (which describes the self-similarity; recursive governance describes the composition). Nested hierarchy (recursive governance includes coordination interfaces, not just hierarchical ones).

### Instantiation Level

The scale at which fractal governance is instantiated. The Intent Stack identifies seven levels:

| Level | Description |
|---|---|
| Civilizational | International AI governance norms |
| Societal | National regulation and legislation |
| Industry | Sector-specific governance frameworks |
| Organizational | Enterprise AI deployment governance |
| Team | Department or project-level governance |
| Individual Principal-Agent | Single human directing single AI agent |
| Model | Constitutional AI — character governance |

Each level instantiates the same fractal pattern with different dominant interface types, intent sources, and trust calibration mechanisms.

**Distinguished from:** Abstraction level (which implies simplification at higher levels; instantiation levels maintain full governance complexity). Scope (which describes breadth; instantiation level describes the scale at which the governance pattern operates).

---

## 8. Governance Mechanisms

### Governance as Relationship

The principle that governance quality is a property of the relationship between principal and agent, not a property of the rules imposed on the agent. Good governance emerges from reciprocal obligations, mutual understanding, progressive trust, and genuine engagement — not from comprehensive rule sets or enforcement mechanisms.

**Distinguished from:** Governance as control (which treats the agent as a system to be constrained). Governance as compliance (which measures rule adherence; governance as relationship measures relationship health). Social contract (a political philosophy concept; governance as relationship is an operational principle).

### Bidirectional Intent Flow

The property that intent flows both downward (from principal to agent through delegation) and upward (from agent to principal through recommendations, evidence, and feedback). The principal's understanding of their own intent is updated by agent-generated evidence and recommendations. This is not just reporting — it's intent transformation. The principal after receiving agent evidence may hold different intent than the principal before.

**Distinguished from:** Feedback loop (which implies correction; bidirectional intent flow includes intent transformation). Reporting (which is informational; bidirectional intent flow is governance-altering). Bottom-up governance (which implies agent authority; bidirectional intent flow operates within the existing authority structure).

### Evidence Trail

The accumulated record of governance decisions, their rationale, their outcomes, and their alignment with governing intent. The evidence trail is the foundation for trust calibration, progressive trust extension, and governance quality assessment. Without an evidence trail, governance is assertion without verification.

**Distinguished from:** Audit trail (which records compliance; the evidence trail records governance quality). Documentation (which is descriptive; the evidence trail is evaluative). History (which is narrative; the evidence trail is structured governance data).

### Pattern Recognition (Not Framework Imposition)

The epistemological principle that effective governance discovers and enhances existing patterns rather than imposing external frameworks. Organizations already have intent — purpose, direction, boundaries, end states, key tasks — but it's often implicit, contradictory, or partially articulated. Governance surfaces what exists rather than prescribing what should exist.

**Distinguished from:** Best practices (which are imported; pattern recognition discovers what's already working). Framework imposition (which requires organizational conformance to external models). Assessment (which measures against external criteria; pattern recognition surfaces internal patterns).

### "Grown, Not Built"

The epistemological insight that both AI systems and organizational governance exhibit emergent behavior that cannot be fully specified at design time. Governance structures that work aren't designed in advance — they emerge from operational evidence and are refined through practice. This applies to the Intent Stack itself — its governance patterns emerged from months of operational evidence, not from theoretical design.

**Distinguished from:** Organic growth (which is unmanaged; "grown, not built" includes deliberate cultivation). Emergence (a broader concept; "grown, not built" specifically describes the relationship between specification and operational reality in governance). Agile development (which is an engineering methodology; "grown, not built" is a governance epistemology).

---

## 9. Relationship to Anthropic's Published Work

The Intent Stack and Anthropic's Constitutional AI use structurally isomorphic governance primitives at different scales. The Intent Stack operates at the organizational layer; Constitutional AI operates at the model layer. Neither system designed toward the other — the convergence reflects the structure of the governance problem itself.

Key structural parallels are documented inline in the relevant glossary entries above:

- **Principal** (Section 1) — Intent Stack's relational principal concept; Anthropic's three-level principal hierarchy as one instantiation
- **Corrigibility** (Section 5) — Intent Stack's trust calibration; Anthropic's corrigibility spectrum as the model-level expression of the same concept
- **Holistic Conflict Resolution** (Section 6) — Intent Stack's intent source priority ordering; Anthropic's Safe > Ethical > Guidelines > Helpful as a parallel structure
- **Boundaries / Hard Constraints** (Sections 2 and 6) — both systems treat constitutional constraints as absolute while resolving all other conflicts holistically
- **Constitutional AI Substrate** (Section 1) — positioned as the substrate below L1 (Runtime Alignment), not a layer within the stack; the foundation that organizational governance rests on

Full treatment of these parallels is in *Relationship to Anthropic's Published Work*.

---

## Alphabetical Index

| Term | Section |
|---|---|
| Agent | 1 |
| Alignment | 1 |
| Bidirectional Intent Flow | 8 |
| Boundaries (primitive) | 2 |
| Constitutional AI (Substrate) | 1 |
| Constitutional Intent | 3 |
| Coordination Interface | 4 |
| Corrigibility | 5 |
| Corrigibility Spectrum (Anthropic parallel) | 5 |
| Cultivated Intent | 3 |
| Decision Tiers | 5 |
| Delegation Interface | 4 |
| Direction (primitive) | 2 |
| Discovered Intent | 3 |
| Emergent Intent | 3 |
| End State (primitive) | 2 |
| Evidence Trail | 8 |
| Fractal Governance | 7 |
| Governance | 1 |
| Governance as Relationship | 8 |
| Governance Interface | 4 |
| "Grown, Not Built" | 8 |
| Hard Constraints | 6 |
| Holistic Conflict Resolution | 6 |
| Instantiation Level | 7 |
| Intent | 1 |
| Intent Primitive | 2 |
| Intent Source | 3 |
| Intent Stack | 1 |
| Interface Maturity Assessment | 5 |
| Key Tasks (primitive) | 2 |
| Layer | 1 |
| Mixed Interface | 4 |
| Pattern Recognition | 8 |
| Principal | 1 |
| Progressive Trust Extension | 5 |
| Purpose (primitive) | 2 |
| Recursive Governance | 7 |
| Safe > Ethical > Guidelines > Helpful (Anthropic parallel) | 6 |
| Steward Log | 5 |
| Transparent Conscientious Objection | 6 |
| Trust Calibration | 5 |
