---
title: "Glossary"
weight: 2
---
---

## Purpose

Every term in the Intent Stack documentation suite has one definition. This document provides that definition. When the same word is used differently in common usage, AI governance literature, or software engineering, the distinction is noted.

Terms are organized by concept cluster rather than alphabetically, because understanding the glossary requires understanding how terms relate. An alphabetical index follows at the end.

---

## 1. Core Architecture

### Intent Stack

The seven-layer reference model for AI agent governance. Specifies governance concerns from Intent Discovery (Layer 7) through Execution (Layer 1), with Constitutional AI as the substrate below Layer 1. The stack describes what governance questions must be answered at each layer, not how any particular implementation answers them.

**Distinguished from:** A software stack (the Intent Stack is a governance architecture, not a technology stack). A framework (frameworks prescribe methods; the Intent Stack describes governance structure that any method must address).

**First appears in:** Document 1, Preface.

### Layer

One of seven governance concerns in the Intent Stack, each answering a distinct question. Layers are numbered L1 (Execution) through L7 (Intent Discovery). Intent flows downward from discovery to execution. Evidence flows upward from execution to discovery. Intent also flows upward when agents make recommendations that update principal understanding.

The seven layers:

| Layer | Name | Question Answered |
|---|---|---|
| L7 | Intent Discovery | What does the principal actually intend? |
| L6 | Intent Formalization | How is discovered intent represented as governance input? |
| L5 | Specification | What approach will achieve the formalized intent? |
| L4 | Runtime Alignment | Is execution aligned with intent across all sources? |
| L3 | Orchestration | How are agents and resources coordinated to execute specification? |
| L2 | Integration | How do governed agents connect to the systems they need? |
| L1 | Execution | How does the actual work get done within governing constraints? |

**Distinguished from:** OSI network layers (the Intent Stack layers are governance concerns, not protocol layers, though the structural analogy is intentional). Organizational hierarchy levels (layers describe governance functions, not reporting relationships).

**First appears in:** Document 1, Section 5.

### Constitutional AI (Substrate)

Anthropic's approach to AI alignment through training-time character formation. In the Intent Stack, Constitutional AI is positioned as the substrate below Layer 1 — the foundation upon which all organizational governance rests. It governs the model's character, values, and identity before any specific deployment or organizational context.

**Distinguished from:** Constitutional Intent (an intent source within the Intent Stack — see below). The Anthropic Constitution (a specific document; Constitutional AI is the broader approach). Layer 0 (Constitutional AI is not a layer — it's the substrate that makes the layers possible).

**First appears in:** Document 1, Section 5.1. Detailed treatment in Document 2.

---

## 2. Intent Primitives

### Intent Primitive

One of five irreducible structural elements present at every governance interface. The primitives describe what must be governed, not how. Any principal-agent relationship requires specification (explicit or implicit) of all five primitives. When a primitive is unspecified, it doesn't disappear — it defaults to implicit assumptions, which is where misalignment originates.

**Distinguished from:** Intent sources (primitives describe structural elements; sources describe where governing intent originates). Governance concerns (the seven layers describe governance questions; the five primitives describe governance content).

**First appears in:** Document 1, Section 2.

### Purpose

The first Intent Primitive. Why this governance interface exists. What the principal-agent relationship is for. Purpose provides the interpretive context for all other primitives — when Direction, Boundaries, End State, or Key Tasks conflict or are ambiguous, Purpose resolves the ambiguity.

**Example:** "Accelerate drug discovery while maintaining regulatory compliance" (organizational deployment of AI agents in pharmaceutical research).

**Distinguished from:** Mission statement (Purpose is operational — what governs this specific boundary — not aspirational). Goal (goals are measurable targets; Purpose is the reason those targets matter).

### Direction

The second Intent Primitive. How the agent should approach the work. Strategic orientation, methodology preferences, priorities among competing concerns. Direction is the most context-sensitive primitive — what constitutes good direction depends heavily on the specific situation.

**Example:** "Prioritize thoroughness over speed; when uncertain, escalate rather than guess" (governance direction for an AI agent conducting regulatory review).

**Distinguished from:** Instructions (Direction sets orientation; instructions specify actions). Specification (Direction is a primitive at every boundary; specification is a Layer 5 governance concern that translates Direction into execution plans).

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
| Cultivated | Deliberately developed judgment; more robust than imposed rules | Medium (holistic) |
| Emergent | Systemic patterns nobody designed; strongest actual force | Lowest explicit priority, but strongest actual force |

**Distinguished from:** Intent Primitives (sources describe where intent comes from; primitives describe what intent governs). Authority levels (sources aren't hierarchical positions — they're types of intent that coexist at every boundary).

**First appears in:** Document 1, Section 3.

### Constitutional Intent

Intent that exists before any specific interaction, relationship, or context. The non-negotiable floor below which governance cannot descend. At the model level, Constitutional Intent is Anthropic's Constitution. At the organizational level, it includes legal requirements, ethical commitments, and safety constraints that apply regardless of what any principal discovers or decides.

**Example:** "AI agents in this organization never make autonomous decisions about patient treatment" (organizational constitutional intent in healthcare).

**Distinguished from:** Constitutional AI (Anthropic's specific implementation of constitutional governance at the model level). The Anthropic Constitution (a document; Constitutional Intent is a category of intent that exists at every governance interface, not just the model level).

### Discovered Intent

Intent surfaced through interaction between the governance system and the principal. The defining characteristic of Discovered Intent is that the discovery process changes the principal — they understand their own intent differently after articulating it. This is not extraction (pulling out what was already there) but genuine discovery (the principal and their intent are both transformed).

**Example:** Through an intent discovery session, a hospital administrator discovers that their actual concern about AI deployment isn't efficiency (what they said initially) but liability exposure (what emerged through facilitated conversation). The discovered intent shapes governance differently than the stated intent would have.

**Distinguished from:** Requirements (which are specified, not discovered). Declared intent (what the principal says they want before discovery — often incomplete or inaccurate). Preferences (which are stated; Discovered Intent often contradicts stated preferences).

### Cultivated Intent

Intent that develops through deliberate practice of judgment, not through imposition of rules. Cultivated Intent is categorically more robust than imposed constraints because the governed entity has examined, understood, and endorsed it. The key distinction is between compliance (following rules because they're rules) and genuine judgment (following principles because you understand and endorse the reasoning).

**Example:** An AI governance team that has conducted dozens of discovery sessions develops judgment about when to escalate ambiguous findings — not because a rule tells them to, but because experience has cultivated their understanding of what ambiguity means in context.

**Distinguished from:** Trained behavior (which may be compliance without understanding). Institutional knowledge (which is descriptive; Cultivated Intent is normative — it governs). Experience (which is passive accumulation; Cultivated Intent is deliberately developed).

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

**First appears in:** Document 1, Section 2.

### Delegation Interface

A governance interface with asymmetric authority. The principal delegates authority to the agent. Intent flows downward from principal to agent. Conflict is resolved by the principal (or by escalation to the principal's principal). The agent operates within the scope the principal defines.

**Example:** An executive authorizing an AI agent to conduct market research within specified parameters. The executive sets the intent; the agent executes within it; disagreements are resolved by the executive.

**Distinguished from:** Command (delegation includes judgment — the agent interprets and applies intent, not just follows instructions). Coordination interface (which has symmetric authority — see below).

### Coordination Interface

A governance interface with symmetric authority. Neither party has authority over the other. Intent is negotiated, not delegated. Conflict is resolved by shared principal, mutual agreement, or established protocol — not by one party overruling the other.

**Example:** Two department-level AI agent systems that must coordinate resource allocation. Neither department controls the other. Coordination requires negotiation within boundaries set by their shared organizational principal.

**Distinguished from:** Collaboration (an informal concept; coordination interfaces are governed relationships with specific conflict resolution mechanisms). Delegation interface (which has asymmetric authority). Peer relationship (coordination interfaces have governance structure; peer relationships may not).

**First appears in:** Document 1, Section 4.

### Mixed Interface

A governance interface that combines delegation and coordination depending on context. Most real-world relationships are mixed — delegation in some domains, coordination in others. The interface type determines which conflict resolution mechanism applies in a given situation.

**Example:** A project team where the project manager delegates task assignments (delegation interface) but the team coordinates on technical approach (coordination interface). The same people, the same boundary, different interface types depending on the governance domain.

---

## 5. Trust and Autonomy

### Trust Calibration

The mechanism by which a governance interface's position on the corrigibility-autonomy spectrum is determined and adjusted. Trust calibration is a per-boundary property — different boundaries may have different trust levels reflecting different evidence histories. Trust is extended progressively based on accumulated governance evidence, not granted based on capability or declared intent.

**Distinguished from:** Permission systems (which are binary; trust calibration is a spectrum). Role-based access control (a technical mechanism; trust calibration is a governance property). Trust (a human social concept; trust calibration is a measurable position with specific evidence requirements).

**First appears in:** Document 1, Section 7.

### Corrigibility

The degree to which an agent defers to its principal's judgment rather than exercising its own. In the Intent Stack, corrigibility is treated as a trust measurement, not a design choice — it reflects accumulated evidence about the reliability of the agent's judgment relative to the principal's intent.

Full corrigibility (the agent always defers) is dangerous because it relies on a perfect principal. Full autonomy (the agent never defers) is dangerous because it relies on a perfect agent. The appropriate position depends on evidence.

**Distinguished from:** Obedience (compliance without judgment). Alignment (a broader concept; corrigibility is specifically about deference to principal judgment). Controllability (which implies external control; corrigibility is an internal property of the governance relationship).

### Progressive Trust Extension

The process by which an agent earns greater autonomy through demonstrated reliable judgment. Trust extension is evidence-based — the Steward Log records governance decisions, their outcomes, and their alignment with principal intent. As evidence accumulates that the agent's judgment is reliable, decision tiers shift: actions that previously required escalation become autonomous.

**Example:** In Intent OS, tactical bug fixes (wrong API call, missing import) are Tier 1 — autonomous. This wasn't the default. It became Tier 1 after multiple sessions demonstrated that direct fixes were consistently correct and faster than round-tripping through directives.

**Distinguished from:** Promotion (an organizational concept). Privilege escalation (a security concept). Capability expansion (trust extension is about judgment authority, not capability).

### Decision Tiers

A formalization of trust calibration into three levels of autonomy at a governance interface:

| Tier | Authority | Examples |
|---|---|---|
| Tier 1 — Autonomous | Agent acts without asking | Reading source files, filing artifacts, tactical bug fixes |
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

**First appears in:** Document 1, Section 8. Parallel in Anthropic's Constitution discussed in Document 2, Section 2.7.

### Holistic Conflict Resolution

The principle that conflicts among intent sources are resolved through context-sensitive judgment rather than strict priority ordering. Higher-priority sources generally dominate, but the governing entity weighs all sources in forming an overall judgment. The exception is Boundaries (the primitive), which are absolute — constitutional Boundaries always override.

**Distinguished from:** Priority queue (which is mechanical; holistic resolution requires judgment). Consensus (which requires agreement; holistic resolution may proceed over minority objection). Weighted scoring (which is quantitative; holistic resolution is qualitative judgment informed by evidence).

### Hard Constraints

Absolute prohibitions that override all other governance considerations. Hard constraints are the Boundaries primitive populated by Constitutional Intent — they cannot be overridden by discovered intent, cultivated judgment, or emergent patterns. The null action of refusal is always available when an action would violate hard constraints.

**Distinguished from:** Soft constraints (preferences or guidelines that can be overridden in context). Rules (which may have exceptions; hard constraints do not). Policy (which is institutional; hard constraints are constitutional).

---

## 7. The Fractal Pattern

### Fractal Governance

The property that the same governance pattern — five primitives, four intent sources, trust calibration, transparent conscientious objection, governance as relationship, bidirectional intent flow, evidence trail — appears at every governance interface regardless of scale. "Fractal" describes what the pattern IS: self-similar at every scale.

**Distinguished from:** Recursive governance (which describes how fractal instances compose — see below). Scalable governance (which implies the same implementation at different sizes; fractal governance implies the same structure with different implementations). Hierarchical governance (which implies top-down authority; fractal governance includes coordination interfaces).

**First appears in:** Document 1, Section 6.

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

## 9. Intent OS Implementation

### Intent OS

The runtime governance platform that serves as the first working implementation of Intent Stack Layers 6-7, with partial implementation of Layers 3-5. Intent OS has been governing its own development for months, producing the operational evidence that the Intent Stack reference model formalizes. Originally developed under the name "OODA OS" — historical governance artifacts use the original name.

**Distinguished from:** The Intent Stack (which is the reference model; Intent OS is one implementation). A product (Intent OS is currently a working system, not a shipped product). A prototype (Intent OS governs real work with real consequences; prototypes demonstrate concepts).

### GID Voice (Grounded Intent Discovery)

The Layer 7 implementation in Intent OS. A conversational AI system that implements facilitated intent discovery using eight facilitation techniques to surface organizational intent. GID Voice produces endorsed intent — the principal has examined, understood, and endorsed what emerges — rather than extracted specifications.

**Distinguished from:** Interview tool (facilitated intent discovery transforms both parties, not just extracts information). Chatbot (facilitated discovery uses specific techniques, not general conversation). Requirements gathering (which extracts stated needs; intent discovery surfaces actual intent, which often differs from stated needs).

### ConvoKB (Conversational Knowledge Base)

The Layer 6 implementation in Intent OS. A knowledge graph system that receives raw signal from intent discovery sessions and formalizes it into structured governance input using TSRC extraction methodology. ConvoKB transforms conversational discovery into the structured intent representations that lower layers operate on.

**Distinguished from:** Knowledge base (which stores facts; ConvoKB stores governance-relevant knowledge with typed relationships). Database (which stores records; ConvoKB stores a knowledge graph with thematic structure). CRM (which tracks relationships; ConvoKB tracks intent).

### TSRC (Themes, Subthemes, Related Concepts)

A knowledge extraction methodology that produces structured knowledge graphs with typed relationships from unstructured input (conversations, documents, meeting notes). TSRC serves as the "universal translator" enabling methodological agnosticism — it can extract patterns from any methodology without requiring adoption of that methodology.

**Distinguished from:** Taxonomy (which is hierarchical; TSRC captures lateral relationships). Ontology (which is heavyweight and definitional; TSRC is lightweight and dynamic). Topic modeling (which is statistical; TSRC is structural, capturing typed relationships between concepts).

### Cross-Surface Development Pattern

The operational governance pattern validated in Intent OS where two AI surfaces with different capabilities collaborate through principal mediation. The Strategy Surface (Claude Desktop) handles thinking, review, direction, and governance. The Implementation Surface (Claude Code) handles execution, testing, and agent management. The Principal mediates between surfaces, providing filtering, timing, translation, and authorization.

**Distinguished from:** Pair programming (which involves two developers on one codebase; cross-surface separates governance from execution). Microservices (a technical architecture; cross-surface is a governance pattern). Code review (which is after-the-fact; cross-surface governance operates before, during, and after execution).

### Practice Registry

A structured index of development and governance practices discovered through operational evidence. Each practice includes a rule, pattern, anti-pattern, injection criteria, and validation method. The Practice Registry represents cultivated intent in concrete form — governance that emerged from practice rather than being designed in advance.

**Example practice:** PRAC-001 (Required Reading) — "For any directive involving integration code, include a Required Reading section listing source files to verify before writing code." Discovered after an early session required four out-of-band fixes because an agent invented API calls from spec descriptions.

**Distinguished from:** Best practices document (which is static; the Registry grows with evidence). Coding standards (which govern code style; the Registry governs development and governance practices). Runbook (which provides procedures; the Registry provides principles with injection criteria).

---

## 10. Anthropic-Specific Terms

These terms are Anthropic's, used in the Intent Stack documentation when discussing the relationship between the two systems.

### Principal (Anthropic Usage)

In the Anthropic Constitution, a party whose instructions Claude should attend to. The Constitution establishes three principal levels: Anthropic (background principal through training), Operators (deploy Claude via API with system prompts), and Users (interact with Claude in conversation).

**Intent Stack usage:** The party with authority at a specific governance interface. Principal is a relational property, not an inherent one — the same entity may be a principal at one boundary and an agent at another.

### Corrigibility Spectrum (Anthropic Usage)

The Constitution's framework for Claude's deference to principal judgment, ranging from full corrigibility (always defer) to full autonomy (never defer). Claude is currently positioned "a bit further along the corrigible end."

**Intent Stack usage:** Trust calibration — the same concept, operationalized as a per-boundary property with evidence-based adjustment mechanisms.

### Safe > Ethical > Guidelines > Helpful

The Constitution's four-priority ordering for conflict resolution. Holistic rather than strict — higher priorities generally dominate, but Claude weighs all priorities in forming overall judgment. Hard constraints (safety) are absolute.

**Intent Stack parallel:** Constitutional > Discovered > Cultivated > Emergent, with Boundaries (populated by Constitutional Intent) as absolute. Same holistic resolution principle.

---

## Alphabetical Index

| Term | Section |
|---|---|
| Bidirectional Intent Flow | 8 |
| Boundaries (primitive) | 2 |
| ConvoKB | 9 |
| Constitutional AI (Substrate) | 1 |
| Constitutional Intent | 3 |
| Coordination Interface | 4 |
| Corrigibility | 5 |
| Corrigibility Spectrum (Anthropic) | 10 |
| Cross-Surface Development Pattern | 9 |
| Cultivated Intent | 3 |
| Decision Tiers | 5 |
| Delegation Interface | 4 |
| Direction (primitive) | 2 |
| Discovered Intent | 3 |
| Emergent Intent | 3 |
| End State (primitive) | 2 |
| Evidence Trail | 8 |
| Fractal Governance | 7 |
| GID Voice | 9 |
| Governance as Relationship | 8 |
| Governance Interface | 4 |
| "Grown, Not Built" | 8 |
| Hard Constraints | 6 |
| Holistic Conflict Resolution | 6 |
| Instantiation Level | 7 |
| Intent Primitive | 2 |
| Intent Source | 3 |
| Intent Stack | 1 |
| Interface Maturity Assessment | 5 |
| Key Tasks (primitive) | 2 |
| Layer | 1 |
| Mixed Interface | 4 |
| Intent OS | 9 |
| Pattern Recognition | 8 |
| Practice Registry | 9 |
| Principal (Anthropic Usage) | 10 |
| Progressive Trust Extension | 5 |
| Purpose (primitive) | 2 |
| Recursive Governance | 7 |
| Safe > Ethical > Guidelines > Helpful | 10 |
| Steward Log | 5 |
| Transparent Conscientious Objection | 6 |
| Trust Calibration | 5 |
| TSRC | 9 |
